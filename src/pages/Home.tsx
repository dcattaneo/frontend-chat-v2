import { Sidebar } from "../components/sidebar/index";
import { MessageContainer } from "../components/messages/index";


export function Home() {

  return (

    <div className="flex w-[600px] h-[600px] sm:w-[600px] sm:h-[600px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px]  rounded-md overflow-hidden  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  );
}
