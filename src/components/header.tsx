import React from "react";
import logo from "../assets/media/logo.png";
import { NavLink, HeaderLink } from "./componentsCollection";

interface HeaderProps {}
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className="topHeader">
      <div className="innter-topHeader">
        <div className="topaHeader-icon">
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <NavLink PageUrl="/" PageName="Get Started" />
                <NavLink PageUrl="/button" PageName="Button" />
                <NavLink PageUrl="/icon-button" PageName="Icon Button" />
                <NavLink PageUrl="/input-field" PageName="Input Field" />
                <NavLink PageUrl="/textarea" PageName="Textarea" />
                <NavLink PageUrl="/dropdown" PageName="Dropdown" />
                <NavLink PageUrl="/paragraph" PageName="Paragraph" />
                <NavLink PageUrl="/label" PageName="label" />
                {/* <NavLink PageUrl="/progress-bar" PageName="Progress Bar" /> */}
                <NavLink PageUrl="/loader" PageName="Loader" />
                <NavLink PageUrl="/tooltip" PageName="Tooltip" />
                <NavLink PageUrl="/notification" PageName="Notification" />
                <NavLink PageUrl="/alert" PageName="Alert" />
                <NavLink PageUrl="/documents" PageName="Documents" />
              </ul>
            </div>
          </nav>

          <img src={logo} alt="Vouched" className="topaHeader-logo" />
        </div>
        <div className="topaHeader-links">
          <ul className="topHeader-ul">
            <HeaderLink PageUrl="/" PageName="Home" />
            <HeaderLink PageUrl="/button" PageName="Components" />
            <HeaderLink PageUrl="/documents" PageName="Documents" />
            <li>
              <div className="search-container">
                <form action="/action_page.php">
                  <input className="search_input" type="text" placeholder="Search.." name="search" />
                  {/* <button type="submit">
                    <i className="fa fa-search"></i>
                  </button> */}
                </form>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

// type React.FC<Props extends {}> = (props: Props, context?: any) => React.FC<any> | null | JSX.Element;
