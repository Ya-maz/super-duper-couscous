import "style/post.scss";
import { Emoji } from "assets/Emoji";
import { en } from "components/constant/constants";


export const Footer = () => (
  <div className="input">
    <button className="input-button">
      <Emoji />
    </button>
    <input className="input-text" placeholder={en.main.placeHolder} />
    <button className="input-enter">Post</button>
  </div>
);
