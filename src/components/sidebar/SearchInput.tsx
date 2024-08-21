import { CiSearch } from "react-icons/ci";
import { useState, useCallback } from 'react'
import { useGetConversations } from "../../hooks/useGetConversations";
import { useConversation } from "../../store/useConversation";
import toast from "react-hot-toast";
import debounce from 'just-debounce-it'

export function SearchInput() {
  const { conversations } = useGetConversations()
  const { setSelectedConversation } = useConversation()
  const [search, setSearch] = useState<string>('')


  const delayedSearch = useCallback(
    debounce((search: string) => {
      if (!search) return;

      if (search.length < 3) {
        return toast.error('Search must have at least 3 characters');
      }

      const filteredConversation = conversations.find((conversation) =>
        conversation.username?.toLowerCase().includes(search.toLowerCase())
      );

      if (!filteredConversation) {
        return toast.error('No chat, contact, or message found');
      } else {
        setSelectedConversation(filteredConversation);
      }
    }, 300), 
    [conversations, setSelectedConversation]
  );


  function getConversationFound(search: string) {

    if (!search) return
    if (search.length < 3) {
      return toast.error('Search must have at least 3 characters')
    }
    const filteredConversation = conversations.find((conversation) => conversation.username?.toLowerCase().includes(search.toLowerCase()))
    if (!filteredConversation) {
      return toast.error('No chat, contact or message found')
    } else {
      setSelectedConversation(filteredConversation)
    }
  }

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault()
    delayedSearch.cancel();
    getConversationFound(search)
    setSearch('')
  }



  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newSearch: string = e.target.value
    setSearch(newSearch)
    delayedSearch(newSearch);
  }



  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center  bg-slate-200 opacity-80 rounded-md h-8  sm:h-10   ml-1 mr-1 ">

      <input
        value={search}
        onChange={handleChange}
        type="text"
        placeholder="Search..."
        className=" rounded-md text-xs outline-none sm:pl-2 bg-transparent sm:text-sm w-full text-center  "
      />
      <button type="submit">
        <CiSearch className=" sm:flex w-4 h-4 sm:w-5 sm:h-5  outline-none text-slate-500  " />
      </button>
    </form>
  );
}
