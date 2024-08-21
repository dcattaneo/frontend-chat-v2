import { useState, useEffect } from "react";
import { useConversation } from "../store/useConversation";
import axios from "axios";
import toast from "react-hot-toast";
import { apiUrl } from "../api/apiConfig";

export function useGetMessages() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    async function getMessages() {
      setLoading(true);

      try {
        const res = await axios.get(
          `${apiUrl}/api/messages/${selectedConversation?._id}`, {
          withCredentials: true
        }
        );

        if (!res) throw new Error();

        setMessages(res.data);
      } catch (error: any) {
        toast.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { loading, messages };
}
