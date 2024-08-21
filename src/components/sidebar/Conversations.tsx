import { Conversation } from "./index";
import { useGetConversations } from "../../hooks/useGetConversations";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


export function Conversations() {
  const { loading, conversations } = useGetConversations();
  // console.log("conversations:", conversations);

  return (
    <div className=" flex flex-col w-full  ">
      {conversations?.map((conversation, index) => {
        return (

          <Conversation
            conversation={conversation}
            key={conversation?._id}
            lastIndex={index === conversations.length - 1}
          />

        );
      })}


      {loading ? <span className="mx-auto"> <AiOutlineLoading3Quarters className="animate-spin" /></span> : null}
    </div>
  );
}
