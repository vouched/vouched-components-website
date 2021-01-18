import React from "react";
import Footer from "./footer";
import Header from "./header";
import Components from "./sideNavigation";
import "../assets/css/style.css";
import { DocumentSection, Documents, VcodeBox, ComponentsTitle } from "./componentsCollection";

import { VLabel } from "@vouched.id/vouched-brand-components";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

interface VouchedLabelProps {}
export const VouchedLabel: React.FC<VouchedLabelProps> = (props) => {
  const codeString: any = `
  import React from "react";
  import { VLabel } from "@vouched.id/vouched-brand-components";

  interface VouchedLabelProps {}
  export const VouchedLabel: React.FC<VouchedLabelProps> = (props) => {
  return (
          <>
            <VLabel text="Password" />
            <VLabel fontColor="#337ab7" text="Password" />
            <VLabel size="16px" text="Password" />
            <VLabel size="16px" text="Password" />
          </>
        );
  };
  export default VouchedLabel;

  `;
  return (
    <>
      <Header />
      <div className="mainBlock_outer">
        <Components />
        <div className="mainBlock_component">
          <ComponentsTitle title="Label" para="A Label displays a prominent message and related optional actions." />
          <div className="section_box">
            <div className="componentview">
              <div className="componentsView_section">
                <VLabel text="Password" />
                <VLabel fontColor="#337ab7" text="Password" />
                <VLabel size="16px" text="Password" />
                <VLabel size="16px" text="Password" />
              </div>
            </div>

            {/* Code view on webpage*/}
            <VcodeBox>
              <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {codeString}
              </SyntaxHighlighter>
            </VcodeBox>

            {/* Document Section */}
            <DocumentSection title="Label document" titleDetails="To modify the Label, Please take the reference of our documents.">
              <Documents
                tag="fontColor"
                discription="you can change the font color of the Label using the 'color' attribute. like [fontColor='#074EE8']"
              />
              <Documents tag="size" discription="Here you can change or modify the size of paragrph using size tag. Example: [ size='24px' ]" />
              <Documents tag="text" discription="Here you can change or modify the text of paragrph using size tag. Example: [ text='Password' ]" />
              <Documents discription="You can make action like onclick, onchange. Example: [onClickEvent={() => this.handleClick()} ]" />
            </DocumentSection>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VouchedLabel;
