import "./post.scss";
import { Dots } from "assets/Dots";
import { Person } from "assets/Person";
import { Content } from "assets/Content";
import { ArrowRight } from "assets/ArrowRight";
import { ArrowLeft } from "assets/ArrowLeft";
import { Heart } from "assets/Heart";
import { Comment } from "assets/Comment";
import { Share } from "assets/Share";
import { Save } from "assets/Save";
import { people, person, en } from "components/constant/constants";

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
      <div className="icons">
        <div className="icons-left">
          <Heart />
          <Comment />
          <Share />
        </div>
        <div className="icons-right">
          <Save />
        </div>
      </div>
      <div className="author">
      <div className="author-logo">
          <Person />
        </div>
        <div className="text">
        <span>{ en.main.likedBy }</span>
        <span className="bold">{person.name}</span>
          <span>{en.main.and}</span>

          <span className="bold">{people.length}</span>
          <span  className="bold">{ en.main.others}</span>
          </div>
      </div>
      <div className="comment">
        <span className="bold">{people[2].name}</span>
        <span>{ people[2].comment }</span>
      </div>
      <div className="statistic">{ en.main.view }</div>
      <div className="date">{ en.main.date }</div>
    </div>
    <div className="text-input"></div>
  </div>
);
