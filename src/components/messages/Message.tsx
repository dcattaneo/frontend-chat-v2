import { Messages } from "../../types";
import { useAuth } from "../../context/AuthContext";
import { useConversation } from "../../store/useConversation";
import { extractTime } from "../../utils/extractTime";

export function Message({ message }: { message: Messages }) {
  const { user } = useAuth();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === user?.id;
  const profilePic = fromMe
    ? user?.profilePic
    : selectedConversation?.profilePic;

  const formattedTime = extractTime(message?.createdAt)


  return (
    <div className={`chat whitespace-pre-wrap break-words   ${fromMe ? "chat-start text-slate-950 non-italic " : "chat-end text-slate-700 italic "} mb-1 rounded-md`}>
      <div className="chat-image avatar">
        <div className="w-7 rounded-full">
          <img src={profilePic} alt="ProfilePic" />
        </div>
      </div>

      <div
        className={` chat-bubble ${fromMe ? "bg-red-400" : "bg-red-500 "
          }`}
      >
        <div className="text-dark-500 opacity-100 text-xs sm:text-sm  ">
          {message.message} <span className="opacity-50 text-[0.6rem] ">{formattedTime}</span>
        </div>

      </div>
    </div>
  );
}




