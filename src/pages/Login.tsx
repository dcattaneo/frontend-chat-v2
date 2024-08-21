import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginInputs } from "../types";
import { useLogin } from "../hooks/useLogin";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const INITIAL_INPUTS = {
  email: "",
  password: "",
};

export function Login() {
  const [inputs, setInputs] = useState<LoginInputs>(INITIAL_INPUTS);

  const { loading, login } = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full   rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className=" py-10 text-3xl font-semibold text-center text-gray-500 font-title">
          login - <span className=" text-red-300 font-title">pochatime</span>
        </h1>

        <form onSubmit={handleSubmit} className="px-2">
          <div className="py-2">
            <input
              type="email"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              placeholder="E-mail"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-red-300 focus:border-red-500 block w-full p-2.5  "
              required
            />
          </div>

          <div className="py-2">
            <input
              type="password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              placeholder="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-red-300 focus:border-red-500 block w-full p-2.5 "
              required
            />
          </div>
          <Link
            to="/register"
            className="text-sm  hover:underline hover:text-red-900 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button
              className=" border-2 rounded-xl hover:bg-red-400 hover:text-dark-900   hover:ring-red-300 border-red-400
                                    px-6 py-3 my-8 mx-auto flex items-center justify-center w-20 h-12"
              disabled={loading}
            >
              {loading ?  <AiOutlineLoading3Quarters className="animate-spin" /> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
