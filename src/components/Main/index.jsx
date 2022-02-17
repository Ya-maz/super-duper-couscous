import "style/post.scss";
import { Content } from "assets/Content";
import { ArrowRight } from "assets/ArrowRight";
import { ArrowLeft } from "assets/ArrowLeft";

export const Main = () => (
  <div className="content">
    <Content />
    <div className="nav">
      <div className="around">
        <button className="left">
          <ArrowLeft />
        </button>
      </div>
      <div className="around">
        <button className="right">
          <ArrowRight />
        </button>
      </div>
    </div>
  </div>
);
