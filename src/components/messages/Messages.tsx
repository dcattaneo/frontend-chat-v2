import { useEffect, useRef } from 'react'
import { Message } from "./index";
import { useGetMessages } from "../../hooks/useGetMessages";
import love from '/love.png'
// import { useListenMessages } from '../../hooks/useListenMessages';

export function Messages() {
  const { loading, messages } = useGetMessages();
  // useListenMessages()
  const lastMessageRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef!.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100);
  }, [messages]);


  return (
    <div className="px-4  overflow-auto">

      {loading &&

        <>
          <div className="flex flex-col  justify-center items-center">
            <div className="flex  flex-col w-52 gap-4 pb-10 opacity-20">
              <div className="skeleton h-32 w-full "></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>

            <div className="flex  flex-col w-52 gap-4 opacity-20 justify-end items-end">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </div>

        </>
      }

      {!loading && messages.length === 0 && (
        <div className="flex flex-col justify-center items-center text-sm sm:text-base w-full h-full">
          <p className="pb-4 text-center">Send a message to start a conversation!</p>
          <img src={love} alt="Finn and Jake" className="w-32 h-32 sm:w-64 sm:h-64 text-center" />
        </div>
      )}

      {!loading &&
        messages.length > 0 &&
        messages?.map((message) => {
          return <div key={message?._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>

        })}
    </div>
  );
}
