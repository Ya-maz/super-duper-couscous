import "style/post.scss";
import { Person } from "assets/Person";
import { Heart } from "assets/Heart";
import { Comment } from "assets/Comment";
import { Share } from "assets/Share";
import { Save } from "assets/Save";
import { people, person, en } from "components/constant/constants";

export const Description = () => (
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
        <span>{en.main.likedBy}&nbsp;</span>
        <span className="bold">{person.name} &nbsp;</span>
        <span>{en.main.and}&nbsp;</span>
        <span className="bold">{people.length}&nbsp;</span>
        <span className="bold">{en.main.others}</span>
      </div>
    </div>
    <div className="comment">
      <span className="bold">{people[2].name} &nbsp;</span>
      <span>{people[2].comment}</span>
    </div>
    <div className="statistic">{en.main.view}</div>
    <div className="date">{en.main.date}</div>
  </div>
);
