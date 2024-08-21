import { useState } from "react";
import { useConversation } from "../store/useConversation";
import axios from "axios";
import toast from "react-hot-toast";
import { apiUrl } from "../api/apiConfig";

export function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, messages, setMessages } = useConversation();


  async function sendMessage(message: string) {
    setLoading(true);

    try {
      const res = await axios.post(
        `${apiUrl}/api/messages/send/${selectedConversation?._id}`,
        { message },
        {
          withCredentials: true
        }
      );

      if (!res) {
        throw new Error();
      }

      setMessages([...messages, res.data]);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { loading, sendMessage };
}
