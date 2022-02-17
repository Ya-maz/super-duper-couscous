import "style/post.scss";
import { Header } from "components/Header"
import { Main } from "components/Main";
import { Description } from "components/Description";
import { Footer } from "components/Footer";

export const Post = () => (
  <div className="post">
    <Header/>
    <Main />
    <Description />
    <Footer/>
  </div>
);
