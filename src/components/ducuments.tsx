import React from "react";
import Footer from "./footer";
import Header from "./header";
import Components from "./sideNavigation";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

import { Documents, ComponentsTitle, ComponentsDocBox } from "./componentsCollection";

import { VLabel, Paragraph } from "brand-components";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

interface VouchedDocumentProps {}
export class VouchedDocument extends React.Component<VouchedDocumentProps> {
  BlockContainer_string: any = `
      <VouchedFrame display="block" position="absolute" padding="10px 5px" margin="5px"background="#000" >
      </VouchedFrame>

      <BlockContainer backgroundImage={Image} >
      </BlockContainer>
  `;

  NavLink_string: any = `
      <NavLink bottom="15px" >
      </NavLink>
  `;

  B_string: any = `
      <BlockContainer display="block" position="absolute" padding="10px 5px" margin="5px" bottom="15px" >
      </BlockContainer>
  `;

  HeaderLink_string: any = `
      <HeaderLink display="block" position="absolute" padding="10px 5px" margin="5px" bottom="15px" >
      </HeaderLink>
  `;

  render() {
    return (
      <>
        <Header />
        <div className="mainBlock_outer">
          <Components />
          <div className="mainBlock_component">
            <ComponentsTitle title="Documents" para="Check all the components documents here" />
            <div className="section_box">
              <div className="Document__Maindiv">
                <ComponentsDocBox>
                  <VLabel text="BlockContainer" fontColor="#000" size="16px" />
                  <Paragraph
                    text="BlockContainer is a block or shape where you can write the code inside. It is almost similar to tag '<div>' in HTML."
                    fontColor="#000"
                    size="14px"
                  />
                  <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                    {this.BlockContainer_string}
                  </SyntaxHighlighter>

                  <Documents tag="display" discription="Change the display type" />
                  <Documents tag="padding" discription="Change the padding" />
                  <Documents tag="margin" discription="Change the margin" />
                  <Documents tag="float" discription="Change the float" />
                  <Documents tag="backgroundImage" discription="Change the background image" />
                  <Documents tag="backgroundColor" discription="Change the background color" />
                  <Documents tag="position" discription="Change the position type" />
                  <Documents tag="height" discription="Change the block height" />
                  <Documents tag="width" discription="Change the block width]" />
                  <Documents tag="radious" discription="Change the radious]" />
                  <Documents tag="bottom" discription="Change the bottom]" />
                  <Documents tag="top" discription="Change the top]" />
                  <Documents tag="left" discription="Change the left]" />
                  <Documents tag="right" discription="Change the right]" />
                  <Documents tag="filter" discription="Change the filter type]" />
                </ComponentsDocBox>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default VouchedDocument;
