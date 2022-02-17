import "style/post.scss";
import { Dots } from "assets/Dots";
import { Person } from "assets/Person";

export const Header = () => (
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
);
