import React from "react";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

import { NavLink } from "./componentsCollection";

interface SideComponentsProps {}
export class SideComponents extends React.Component<SideComponentsProps> {
  constructor(props: SideComponentsProps | Readonly<SideComponentsProps>) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="mainBlock_outer">
          <div className="mainBlock_sidenav">
            <ul className="sidenav_ul">
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
        </div>
      </>
    );
  }
}

export default SideComponents;
