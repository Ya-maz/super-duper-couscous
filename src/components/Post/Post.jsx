import "./post.scss";
import { Dots } from "assets/Dots";
import { Person } from "assets/Person";
import { Content } from "assets/Content";
import { ArrowRight } from "assets/ArrowRight";
import { ArrowLeft } from "assets/ArrowLeft";

export const Post = () => (
  <div className="post">
    <div className="header">
      <div className="logo-space">
        <div className="logo">
          <Person />
        </div>
        <span className="text">start.frontend</span>
      </div>
      <div className="menu">
        <Dots />
      </div>
    </div>

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

    <div className="description">
      <div className="dots"></div>
      <div className="icons"></div>
      <div className="autor"></div>
      <div className="comment"></div>
      <div className="date"></div>
    </div>
    <div className="text-input"></div>
  </div>
);
