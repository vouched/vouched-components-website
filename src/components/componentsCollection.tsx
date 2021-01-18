import React from "react";
import "../assets/css/style.css";
import "../assets/css/componentsCollection.css";
// import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

// Subheading ang subtitle
interface componentsTitleProps {
  title?: String;
  para?: String;
}
export const ComponentsTitle: React.FC<componentsTitleProps> = (props) => {
  return (
    <div>
      <h2 className="componentsHeading">{props.title}</h2>
      <p className="componentsPara">{props.para}</p>
    </div>
  );
};

// Heading and subtitle
interface SectionTitleProps {
  title?: string;
  para?: string;
}
export const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  return (
    <div>
      <h2 className="sectionTitle_Heading">{props.title}</h2>
      <p className="sectionTitle_Para">{props.para}</p>
    </div>
  );
};

// Show code box
interface VcodeBoxProps {
  children: JSX.Element | JSX.Element[];
}
export const VcodeBox: React.FC<VcodeBoxProps> = (props) => {
  return (
    <div>
      <div className="codeBox">{props.children}</div>
    </div>
  );
};

// For Document
interface DocTagParaProps {
  text: String;
}
export const DocTagPara: React.FC<DocTagParaProps> = (props) => {
  return <span className="code_inLine">{props.text}</span>;
};

// Division
interface VouchedDivProps {
  modelType: string;
  children: JSX.Element | JSX.Element[];
}
export const VouchedDiv: React.FC<VouchedDivProps> = (props) => {
  return <div className={props.modelType}>{props.children}</div>;
};

// Sub Title
interface SubTitleProps {
  color?: string;
  size?: string;
  text: string;
}
export const SubTitle: React.FC<SubTitleProps> = (props) => {
  return (
    <p className="title_para" style={{ color: props.color ? props.color : "var(--textSecondryColor);", fontSize: props.size ? props.size : "" }}>
      {props.text}
    </p>
  );
};

//Document section
interface DocumentsProps {
  tag?: string;
  discription?: string;
}
export class Documents extends React.Component<DocumentsProps> {
  render() {
    return (
      <div className="doc_view_div">
        <p className="define_doc">
          <span className="define_tag">{this.props.tag ? this.props.tag + ": " : ""}</span>
          {" " + this.props.discription}
        </p>
      </div>
    );
  }
}

//Document section
interface DocumentSectionProps {
  titleDetails: string;
  title?: string;
  para?: JSX.Element | JSX.Element[];
  children: JSX.Element | JSX.Element[];
}
export class DocumentSection extends React.Component<DocumentSectionProps> {
  render() {
    return (
      <div className="doc_div">
        <SectionTitle title={this.props.title} para={this.props.titleDetails} />
        <div className="doc_view">
          <div className="doc_view_div">
            <div className="header_tag_section">
              <p className="define_tag">
                <b>Tag: </b>
              </p>
            </div>
            <div className="header_disc_section">
              <p className="define_doc">
                <b> Discription</b>
              </p>
            </div>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

//SideNavbar for own theme
interface NavLinkProps {
  PageUrl: string;
  PageName: string;
}

export const NavLink: React.FC<NavLinkProps> = (props) => {
  return (
    <Link to={props.PageUrl} className={props.PageUrl === window.location.pathname ? "sidebtn NavLinkActive" : "sidebtn"}>
      <li>{props.PageName}</li>
    </Link>
  );
};

//Header link for own theme
interface HeaderLinkProps {
  PageUrl: string;
  PageName: string;
}

export const HeaderLink: React.FC<HeaderLinkProps> = (props) => {
  return (
    <Link to={props.PageUrl} className="headerbtn">
      <li>{props.PageName}</li>
    </Link>
  );
};

//Documents page
interface ComponentsDocBoxProps {
  children: JSX.Element | JSX.Element[];
}

export const ComponentsDocBox: React.FC<ComponentsDocBoxProps> = (props) => {
  return <div className="components__document__div">{props.children}</div>;
};
