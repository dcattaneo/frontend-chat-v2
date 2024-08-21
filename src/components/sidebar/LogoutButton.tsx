import { CiLogout } from "react-icons/ci";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useLogout } from "./../../hooks/useLogout";

export function LogoutButton() {
  const { loading, logout } = useLogout();

  return (
    <div>
      <button
        disabled={loading}
        onClick={logout}
        className="flex h-8 sm:h-10 rounded-lg justify-center items-center w-full border border-gray-300 hover:bg-red-500 transition duration-200 focus:bg-red-200 font-semibold cursor-pointer"
      >
        <span className="hidden sm:flex sm:p-2">Disconnect</span> {loading ? <AiOutlineLoading3Quarters className="animate-spin"/> : <CiLogout /> }
      </button>
    </div>
  );
}
