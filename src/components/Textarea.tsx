import React from "react";
import Footer from "./footer";
import Header from "./header";
import Components from "./sideNavigation";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

import { DocumentSection, Documents, VcodeBox, ComponentsTitle } from "./componentsCollection";

import { TextArea } from "brand-components";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

interface VTextAreaProps {}
export const VTextArea: React.FC<VTextAreaProps> = (props) => {
  const codeString: any = `
  import React from "react";
  import { TextArea } from "@vouched.id/vouched-brand-components";

  interface VTextAreaProps {}
  export const VTextarea: React.FC<VTextAreaProps> = (props) => {
  return (
          <>
            <TextArea />
            <TextArea type="textarea-small" />
            <TextArea type="textarea-medium" />
            <TextArea type="textarea-large" />
            <TextArea type="textarea-Verylarge" />
          </>
        );
  };
  export default VTextarea;

  `;
  return (
    <>
      <Header />
      <div className="mainBlock_outer">
        <Components />
        <div className="mainBlock_component">
          <ComponentsTitle title="Textarea" para="A Textarea displays a prominent message and related optional actions." />
          <div className="section_box">
            <div className="componentview">
              <div className="componentsView_section">
                <TextArea />
                <TextArea type="default-textarea" />
              </div>
            </div>

            {/* Code view on webpage*/}
            <VcodeBox>
              <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {codeString}
              </SyntaxHighlighter>
            </VcodeBox>

            {/* Document Section */}
            <DocumentSection title="Textarea document" titleDetails="To modify the Textarea, Please take the reference of our documents.">
              <Documents tag="customStyle" discription="‘style?:{}’ prop so that we can just pass in everything in one object." />
              <Documents
                tag="type"
                discription="You can change or modify size of input field using type attribute. Example: 
                [type='default-textarea-xs'], [type='default-textarea-s'], [type='default-textarea-m'], [type='default-textarea-l'], [type='default-textarea-xl'].  xs, s, m, l, xl defined btn size."
              />
              <Documents discription="You can make action like onclick, onchange. Example: [onClickEvent={() => this.handleClick()} ]" />
            </DocumentSection>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VTextArea;
