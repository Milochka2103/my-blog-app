import { Posts } from "./Posts/Posts";
import { Sidebar } from "./Sidebar/Sidebar";
import "./MainBlock.css";
import { Route } from "react-router-dom";
import { Favourite } from "../../pages/Favourite/Favourite";
import { POSTS_URL } from "../../Utils/constants";
import { useFetchPosts } from "../../Utils/hooks";

export const MainBlock = ({ setIsLoggedIn }) => {
  const postsData = useFetchPosts(POSTS_URL);

  return (
    <>
      <Sidebar setIsLoggedIn={setIsLoggedIn} />
      <main className="mainBlock">
        <Route exact path="/blog">
          <Posts title="Posts" {...postsData} />
        </Route>

        <Route exact path="/favourite" component={Favourite}>
          <Posts title="Favourite posts" {...postsData} isLikedPosts />
        </Route>

      </main>
    </>
  );
};
