import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { apiUrl } from "../api/apiConfig";

export function useLogout() {
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();

  const logout = async () => {
    setLoading(true);

    try {
      const res = await fetch(`${apiUrl}/api/auth/logout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: 'include'
      });
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("chat-user");
      setUser!(null);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
}
