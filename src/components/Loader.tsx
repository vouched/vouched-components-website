import React from "react";
import Footer from "./footer";
import Header from "./header";
import Components from "./sideNavigation";
import "../assets/css/style.css";
import {  DocumentSection, Documents, VcodeBox, ComponentsTitle } from "./componentsCollection";

import { VLoader } from "@vouched.id/vouched-brand-components";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

interface VProgressBarProps {}
interface VProgressBarState {
  value: number;
}
export class VProgressBar extends React.Component<VProgressBarProps, VProgressBarState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ value: this.state.value === 100 ? this.state.value : this.state.value + 5 });
  }
  codeString: any = `
  import React from "react";
  import { VLoader } from "@vouched.id/vouched-brand-components";


  export class VProgressBar extends React.Component<any, any> {
  render() {
    return (
          <>
            <VLoader />
            <VLoader color="#aaa" />
          </>
        );
    }
  };
  export default VProgressBar;

  `;
  render() {
    return (
      <>
        <Header />
        <div className="mainBlock_outer">
          <Components />
          <div className="mainBlock_component">
            <ComponentsTitle title="Loader" para="A loader displays a prominent message and related optional actions." />
            <div className="section_box">
              <div className="componentview" style={{ backgroundColor: "#f5f5f5" }}>
                <div className="componentsView_section2">
                  <div className="Componetnts_sdiv">
                    <VLoader />
                  </div>
                  <div className="Componetnts_sdiv">
                    <VLoader color="#aaa" />
                  </div>
                </div>
              </div>

              {/* Code view on webpage*/}
              <VcodeBox>
                <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                  {this.codeString}
                </SyntaxHighlighter>
              </VcodeBox>

              {/* Document Section */}
              <DocumentSection title="Loader document" titleDetails="To modify the loader, Please take the reference of our documents.">
                <Documents tag="color" discription="you can change the color of the loader using the 'color' attribute. Example [color='#074EE8']" />
              </DocumentSection>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default VProgressBar;
