import { Posts } from "./Posts/Posts";
import { Sidebar } from "./Sidebar/Sidebar";

import './MainBlock.css';


export const MainBlock = ({setIsLoggedIn}) => {

  return (
    <>
      <Sidebar setIsLoggedIn={setIsLoggedIn} />
      <main className="mainBlock">
        <Posts />
      </main>
      
    </>
  )
}