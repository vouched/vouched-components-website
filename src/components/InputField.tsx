import React from "react";
import Footer from "./footer";
import Header from "./header";
import Components from "./sideNavigation";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

import { DocumentSection, Documents, VcodeBox, ComponentsTitle } from "./componentsCollection";

import { InputField } from "brand-components";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

interface VInputFieldProps {}
export const VInputField: React.FC<VInputFieldProps> = (props) => {
  const codeString: any = `
  import React from "react";
  import { InputField } from "@vouched.id/vouched-brand-components";

  interface VInputFieldProps {}
  export const VInputField: React.FC<VInputFieldProps> = (props) => {
  return (
          <>
            <InputField Placeholder="Name" borderColor="#aaa" fontColor="#000" type="default-input-m" HideInput={true} />
           
            <InputField Placeholder="Name" color="#aaa" borderColor="#aaa" fontColor="#aaa" type="default-input-m" HideInput={false} />
            
            <InputField Placeholder="Name" borderColor="#074EE8" fontColor="#074EE8" type="default-input-m" HideInput={false} />
            
            <InputField Placeholder="Name" type="default-input-m" show={false} />
          </>
        );
  };
  export default VInputField;

  `;
  return (
    <>
      <Header />
      <div className="mainBlock_outer">
        <Components />
        <div className="mainBlock_component">
          <ComponentsTitle title="Input field" para="A input field displays a prominent message and related optional actions." />
          <div className="section_box">
            <div className="componentview">
              <div className="componentsView_section">
                <InputField Placeholder="Password" borderColor="#aaa" fontColor="var(--textPrimaryColor);" type="default-input-m" HideInput={true} />
                <br />
                <InputField Placeholder="Name" color="#aaa" borderColor="#aaa" fontColor="#aaa" type="default-input-m" HideInput={false} />
                <br />
                <InputField Placeholder="Name" borderColor="#074EE8" fontColor="#074EE8" type="default-input-m" HideInput={false} />
                <br />
                <InputField Placeholder="Name" type="default-input-m" HideInput={false} />
              </div>
            </div>

            {/* Code view on webpage*/}
            <VcodeBox>
              <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {codeString}
              </SyntaxHighlighter>
            </VcodeBox>

            {/* Document Section */}
            <DocumentSection title="Input field document" titleDetails="To modify the icon button, Please take the reference of our documents.">
              <Documents
                tag="color"
                discription="you can change the background color of the input field using the 'color' attribute. like [color='#074EE8']"
              />
              <Documents
                tag="fontColor"
                discription="you can change the font color of the input field using the 'color' attribute. like [fontColor='#074EE8']"
              />
              <Documents
                tag="borderColor"
                discription="you can change the border color of the input field using the 'color' attribute. like [borderColor='#074EE8']"
              />
              <Documents tag="HideInput" discription="Here you use show/hide input text using 'HideInput' tag. Example: [ HideInput={true}]" />
              <Documents
                tag="type"
                discription="You can change or modify size of input field using type attribute. Example: 
                [type='default-input-xs'], [type='default-input-s'], [type='default-input-m'], [type='default-input-l'], [type='default-input-xl'].  xs, s, m, l, xl defined btn size."
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

export default VInputField;
