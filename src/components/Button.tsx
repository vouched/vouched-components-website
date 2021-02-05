import React from "react";
import Footer from "./footer";
import Header from "./header";
import Components from "./sideNavigation";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import { Documents, DocumentSection, VcodeBox, ComponentsTitle } from "./componentsCollection";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import { VButton } from "brand-components";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

interface ButtonProps {}
export const Button: React.FC<ButtonProps> = (props) => {
  const codeString: any = `
  import React from "react";
  import { VButton } from "@vouched.id/vouched-brand-components";
  import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

  interface ButtonProps {}
  export const Button: React.React.FC<ButtonProps> = (props) => {
  return (
          <>
            <VButton>Submit</VButton>

            <VButton type="default-btn" startIcon={<FaChevronLeft />}>
              Submit
            </VButton>

            <VButton type="outline-btn" endIcon={<FaChevronRight />}>
              Submit
            </VButton>

            <VButton type="text-btn" endIcon={<FaChevronRight />}>
              Submit
            </VButton>

            <VButton type="text-btn">
              Submit
            </VButton>
          </>
        );
  };
  export default Button;

  `;

  return (
    <>
      <Header />
      <div className="mainBlock_outer">
        <Components />
        <div className="mainBlock_component">
          <ComponentsTitle title="Button" para="A button displays a prominent message and related optional actions." />
          <div className="section_box">
            {/* design section */}
            <div className="componentview">
              <div className="componentsView_subdiv">
                <div className="component_saprate">
                  <VButton>Submit</VButton>
                </div>

                <div className="component_saprate">
                  <VButton type="default-btn" startIcon={<FaChevronLeft />}>
                    Submit
                  </VButton>
                </div>

                <div className="component_saprate">
                  <VButton type="outline-btn" endIcon={<FaChevronRight />}>
                    Submit
                  </VButton>
                </div>

                <div className="component_saprate">
                  <VButton type="text-btn" endIcon={<FaChevronRight />}>
                    Submit
                  </VButton>
                </div>

                <div className="component_saprate">
                  <VButton type="text-btn">Submit</VButton>
                </div>
              </div>
            </div>

            {/* Code view on webpage*/}
            <VcodeBox>
              <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {codeString}
              </SyntaxHighlighter>
            </VcodeBox>

            {/* Document Section */}
            <DocumentSection title="Button document" titleDetails="To modify the button, Please take the reference of our documents.">
              <Documents tag="customStyle" discription="‘style?:{}’ prop so that we can just pass in everything in one object." />
              <Documents
                tag="Type"
                discription="You can change btn design using type attribute. which are following: 
                [type='default-btn'],[type='outline-btn'],[type='text-btn']. 
                default, outline and text is defined btn design."
              />
              <Documents
                tag="endIcon"
                discription="You can add icon after the text in btn endIcon attribute. Example:[ endIcon={<FaPlus />} ].  For icon visit https://react-icons.github.io/react-icons and select Font Awesome"
              />
              <Documents
                tag="startIcon"
                discription="You can add icon before the text in btn endIcon attribute. Example:[ startIcon ={<FaPlus />} ].  For icon visit https://react-icons.github.io/react-icons and select Font Awesome"
              />
              <Documents discription="You can make action like onclick, onchange. Example: [onClickEvent={() => this.handleClick()} ]" />
              <Documents discription="For icon visit https://react-icons.github.io/react-icons and select Font Awesome" />
            </DocumentSection>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Button;
