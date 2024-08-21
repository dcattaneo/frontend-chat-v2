import { Messages } from "./index";
import { MessageInput } from "./index";
import { useConversation } from "../../store/useConversation";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import BMO from '/bmo22.png'

export function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();


  useEffect(() => {
    // clean up function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return !selectedConversation ? (
    <NoChatSelected />
  ) : (
    <div className="flex flex-col w-full">
      <>
        {/* Header */}
        <div className="bg-red-400 w-full  px-4 mb-2 py-2 h-8 sm:h-10 flex items-center">
          <span className="opacity-70 text-sm sm:text-base pr-1">To:</span>{" "}

          <span className="text-gray-800 font-semibold text-sm sm:text-base">
            {selectedConversation.username}
          </span>
        </div>
        {/* Main */}


        <Messages />


        <MessageInput />



      </>
    </div>
  );
}

function NoChatSelected() {
  const { user } = useAuth();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg  text-slate-300 font-semibold flex flex-col items-center gap-2">
        <p className=" font-title text-red-400">Welcome <strong className="text-slate-300">{user?.username}</strong>  </p>


        <img src={BMO} alt="bmo" className=" sm:w-52 sm:h-52 w-32 h-32" />
        <p className="font-title"> <strong className="text-red-400">Select a chat </strong>  to start messaging</p>
      </div>
    </div>
  );
}
