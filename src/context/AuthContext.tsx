import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { ProviderProps } from "../types";
import { RegisterInputs } from "../types";
import { UserData } from "../types";
import { AuthProviderHookProps } from "../types";
import { apiUrl } from "../api/apiConfig";

export const AuthContext = createContext({});


export function useAuth(): AuthProviderHookProps {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export const AuthProvider = ({ children }: ProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const chatUserJson = localStorage.getItem("chat-user");
  const parsedUserJson = chatUserJson !== null && JSON.parse(chatUserJson);
  const [user, setUser] = useState<UserData>(parsedUserJson || null);


  const signUp = async ({ username, email, password }: RegisterInputs) => {
    const success = handleInputErrors({ username, email, password });

    if (!success) return;

    setLoading(true);

    try {
      const res = await axios.post(`${apiUrl}/api/auth/register`, {
        username,
        email,
        password,
      }, {
        withCredentials: true
      });

      if (!res) {
        throw new Error();
      }

      localStorage.setItem("chat-user", JSON.stringify(res.data));
      setUser(res.data);
      // console.log(user);
    } catch (error: any) {
      toast.error(error.response.data);
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ signUp, user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Handling  and showing the input errors with Toast

function handleInputErrors({ username, email, password }: RegisterInputs) {
  if (!username || !email || !password) {
    toast.error("Please, fill in all  fields");
    return false;
  }

  return true;
}
