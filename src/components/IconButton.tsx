import React from "react";
import Footer from "./footer";
import Header from "./header";
import Components from "./sideNavigation";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

import { DocumentSection, Documents, VcodeBox, ComponentsTitle } from "./componentsCollection";
import { FaPlus } from "react-icons/fa";

import { IButton } from "brand-components";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

interface VIconButtonProps {}
export const VIconButton: React.FC<VIconButtonProps> = (props) => {
  const codeString: any = `
  import React from "react";
  import { IButton } from "@vouched.id/vouched-brand-components";
  import { FaPlus } from "react-icons/fa";

  interface VIconButtonProps {}
  export const VIconButton: React.FC<VIconButtonProps> = (props) => {
  return (
          <>
            <IButton>
              <FaPlus />
            </IButton>
            <IButton color="#074EE8" IconColor="#fff" type="default-icon">
              <FaPlus />
            </IButton>
            <IButton color="#074EE8" type="outline-icon">
              <FaPlus />
            </IButton>
            <IButton color="#074EE8" type="text-icon">
              <FaPlus />
            </IButton>
          </>
        );
  };
  export default VIconButton;
  `;
  return (
    <>
      <Header />
      <div className="mainBlock_outer">
        <Components />
        <div className="mainBlock_component">
          <ComponentsTitle title="Icon Button" para="A icon button displays a prominent message and related optional actions." />
          <div className="section_box">
            <div className="componentview">
              <div className="componentsView_subdiv">
                <IButton>
                  <FaPlus />
                </IButton>

                <IButton color="#074EE8" IconColor="#fff" type="default-icon">
                  <FaPlus />
                </IButton>

                <IButton color="#074EE8" type="outline-icon">
                  <FaPlus />
                </IButton>

                <IButton color="#074EE8" type="text-icon">
                  <FaPlus />
                </IButton>
              </div>
            </div>

            {/* Code view on webpage*/}
            <VcodeBox>
              <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {codeString}
              </SyntaxHighlighter>
            </VcodeBox>

            {/* Document Section */}
            <DocumentSection title="Icon Button document" titleDetails="To modify the icon button, Please take the reference of our documents.">
              <Documents
                tag="color"
                discription="you can change the background color of the icon button using the 'color' attribute. like [color='#074EE8']"
              />
              <Documents
                tag="IconColor"
                discription="you can change the icon color of the icon button using the 'color' attribute. like [IconColor='#074EE8']"
              />
              <Documents
                tag="fontSize"
                discription="you can change the icon size of the button using the 'fontSize' attribute. Example [fontSize='1.2vw']"
              />
              <Documents
                tag="type"
                discription="You can change btn design using type attribute. which are following: 
                [type='default-icon'],[type='outline-icon'],[type='text-icon']. 
                default, outline and text is defined btn design."
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

export default VIconButton;
