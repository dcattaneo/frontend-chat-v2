import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { LoginInputs } from "../types";
import { AuthProviderHookProps } from "../types";
import { apiUrl } from "../api/apiConfig";


export function useLogin() {
  const [loading, setLoading] = useState(false);
  const { setUser }: AuthProviderHookProps = useAuth();


  const login = async ({ email, password }: LoginInputs) => {
    const success = handleInputErrors({ email, password });
    if (!success) return;
    setLoading(true);
    try {
      const res = await axios.post(`${apiUrl}/api/auth/login`, {
        email,
        password,
      }, {
        withCredentials: true
      });

      if (!res) {
        throw new Error();
      }

      localStorage.setItem("chat-user", JSON.stringify(res.data));
      setUser!(res.data);
      // console.log(user);
    } catch (error: any) {
      // console.log(error);
      toast.error(error.response.data);
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
}

function handleInputErrors({ email, password }: LoginInputs) {
  if (!email || !password) {
    toast.error("Please, fill in all  fields");
    return false;
  }

  return true;
}
