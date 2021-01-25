import React from "react";
import Footer from "./footer";
import Header from "./header";
import Components from "./sideNavigation";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

import { Documents, DocumentSection, VcodeBox, ComponentsTitle } from "./componentsCollection";

import { Paragraph } from "brand-components";


import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

interface VParagraphProps {}
export const VParagraph: React.FC<VParagraphProps> = (props) => {
  const codeString: any = `
  import React from "react";
  import { Paragraph } from "@vouched.id/vouched-brand-components";

  interface VParagraphProps {}
  export const CustomParagraph: React.FC<VParagraphProps> = (props) => {
  return (
          <>
            <Paragraph align="center" fontColor="#337ab7" text="In publishing and graphic design, Lorem ipsum is a placeholder text commonly." />
            <Paragraph text="In publishing and graphic design, Lorem ipsum is a placeholder text commonly." />
            <Paragraph size="18px" text="In publishing and graphic design, Lorem ipsum is a placeholder text commonly." />
            <Paragraph
              fontColor="#FF0000"
              size="24px"
              text="In publishing and graphic design, Lorem ipsum is a placeholder text commonly."
            />
          </>
        );
  };
  export default CustomParagraph;

  `;

  return (
    <>
      <Header />
      <div className="mainBlock_outer">
        <Components />
        <div className="mainBlock_component">
          <ComponentsTitle title="Paragraph" para="A paragraph displays a prominent message and related optional actions." />
          <div className="section_box">
            {/* design section */}
            <div className="componentview">
              <div className="componentsView_section2">
                <Paragraph align="center" fontColor="#337ab7" text="In publishing and graphic design, Lorem ipsum is a placeholder text commonly." />
                <Paragraph text="In publishing and graphic design, Lorem ipsum is a placeholder text commonly." />
                <Paragraph size="18px" text="In publishing and graphic design, Lorem ipsum is a placeholder text commonly." />
                <Paragraph fontColor="#FF0000" size="24px" text="In publishing and graphic design, Lorem ipsum is a placeholder text commonly." />
              </div>
            </div>

            {/* Code view on webpage*/}
            <VcodeBox>
              <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {codeString}
              </SyntaxHighlighter>
            </VcodeBox>

            {/* Document Section */}
            <DocumentSection title="Paragraph document" titleDetails="To modify the paragraph, Please take the reference of our documents.">
              <Documents
                tag="fontColor"
                discription="you can change the font color of the paragraph using the 'color' attribute. like [fontColor='#074EE8']"
              />
              <Documents tag="size" discription="Here you can change or modify the size of paragrph using size tag. Example: [ size='24px' ]" />
              <Documents
                tag="align"
                discription="Here you can change or modify text alignment like left, right or center. Example: [ align='center' ]"
              />
            </DocumentSection>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VParagraph;
