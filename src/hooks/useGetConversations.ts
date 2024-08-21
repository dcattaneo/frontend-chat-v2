import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { UserData } from "../types";
import { apiUrl } from "../api/apiConfig";

export function useGetConversations() {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState<UserData[]>([]);


  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${apiUrl}/api/users`, {
          withCredentials: true
        });
        const data = res.data;

        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
}
