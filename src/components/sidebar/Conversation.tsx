import { UserData } from "./../../types";
import { getRandomCharacters } from "../../utils/emojis";
import { useConversation } from "./../../store/useConversation";
import { useEffect, useState } from "react";
// import { useSocketContext } from "../../context/SocketContext";

type ConversationProps = {
  conversation: UserData,
  lastIndex: boolean
}

export function Conversation(
  { conversation, lastIndex }: ConversationProps,

) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const [getPic, setGetPic] = useState("");
  // const { onlineUsers } = useSocketContext();
  // const isOnline = onlineUsers?.includes(conversation._id)  //VER SI NO CAMBIE EL ID

  useEffect(() => {
    function getRandomPic() {
      const data = getRandomCharacters();
      setGetPic(data);
    }
    getRandomPic();
  }, []);

  return (
    <>
      <div
        className={`flex w-full h-full gap-2    hover:bg-yellow-600  rounded p-3 py-1 cursor-pointer ${isSelected ? "bg-yellow-600" : ""
          }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        {/* <div className={`avatar ${isOnline? "online" : ""}  flex justify-center`}> */}
        <div className={`avatar online   flex justify-center`}>
          <div className=" w-6 h-6 sm:w-7 sm:h-7 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="w-full">
          <div className="flex  gap-2 w-full justify-between items-center  ">
            <p className=" text-gray-500 sm:flex hidden justify-normal sm:text-xs md:text-sm">
              {conversation.username}
            </p>
            <img
              src={getPic}
              alt="adventure avatar"
              className="w-6 h-6 sm:w-7 sm:h-7"
            />
          </div>
        </div>
      </div >
      {/* divider */}
      {!lastIndex && <div className="border-b-2  border-slate-300  opacity-40 "></div>}
    </>
  );
}
