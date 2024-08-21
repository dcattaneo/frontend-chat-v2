import { SearchInput } from "./index";
import { Conversations } from "./index";
import { LogoutButton } from "./index";

export function Sidebar() {

  return (
    <div className="border-r border-slate-300 flex flex-col h-full  ">
      <div className="w-full h-full overflow-y-scroll ">

        <SearchInput />

        <div className="divider px-3 sm:flex  "></div>

        <Conversations />


      </div>
      {/* ver mt-auto */}
      <div className="px-4 my-3">
        <LogoutButton />
      </div>
    </div>
  );
}
