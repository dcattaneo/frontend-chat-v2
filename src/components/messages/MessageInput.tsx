import { BsSend } from "react-icons/bs";
import { useSendMessage } from "../../hooks/useSendMessage";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function MessageInput() {
  const [message, setMessage] = useState<string>("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-4 my-3 mt-auto  " onSubmit={handleSubmit}>
      <div className=" w-full relative pr-2">
        <input
          type="text"
          className="border bg-slate-200 opacity-70 border-gray-300 text-sm rounded-lg w-[85%] sm:w-[90%] p-2.5 h-8 sm:h-10   outline-none  resize-none overflow-x-hidden "
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute  flex inset-y-0 end-0 items-center  text-slate-300 bg-red-500 hover:text-slate-100   w-8 h-8 sm:mt-1 sm:w-8 sm:h-8   rounded-full  justify-center"
          disabled={loading}
        >
          {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : <BsSend />}
        </button>
      </div>
    </form>
  );
}
