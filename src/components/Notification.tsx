import React from "react";
import Footer from "./footer";
import Header from "./header";
import Components from "./sideNavigation";
import "../assets/css/style.css";
import { Documents, DocumentSection, VcodeBox, ComponentsTitle } from "./componentsCollection";
import { FaChevronRight } from "react-icons/fa";

import { Notification, VButton } from "@vouched.id/vouched-brand-components";


import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

interface VNotificationProps {}
export const VNotification: React.FC<VNotificationProps> = (props) => {
  const codeString: any = `
  import React from "react";
  import { FaChevronRight } from "react-icons/fa";
  import { Notification, VButton } from "@vouched.id/vouched-brand-components";

  interface VNotificationProps {}
  export const VNotification: React.React.FC<VNotificationProps> = (props) => {
  return (
          <>
            <Notification message="We need to see your whole ID. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum tempus diam."
              fontColor="#22125D" size="14px">
              <VButton>Click me</VButton>
            </Notification>

            <Notification message="We need to see your whole ID. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum tempus diam."
               fontColor="#fff" color="#22125D" size="14px">
              <VButton color="#22125D" fontColor="#fff" type="text-btn-m" endIcon={<FaChevronRight />}>
                Dismiss
              </VButton>
            </Notification>
          </>
        );
  };
  export default VNotification;

  `;

  return (
    <>
      <Header />
      <div className="mainBlock_outer">
        <Components />
        <div className="mainBlock_component">
          <ComponentsTitle title="Notification" para="A notification displays a prominent message and related optional actions." />
          <div className="section_box">
            {/* design section */}
            <div className="componentview">
              <div className="componentsView_section" style={{ display: "grid", width: "200px" }}>
                <Notification
                  message="We need to see your whole ID. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum tempus diam."
                  fontColor="#22125D"
                  size="14px"
                >
                  <VButton type="text-btn-m">Click me</VButton>
                </Notification>

                <br />
                <Notification
                  message="We need to see your whole ID. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum tempus diam."
                  fontColor="#fff"
                  color="#22125D"
                  size="14px"
                >
                  <VButton color="#22125D" fontColor="#fff" type="text-btn-m" endIcon={<FaChevronRight />}>
                    Dismiss
                  </VButton>
                </Notification>
              </div>
            </div>

            {/* Code view on webpage*/}
            <VcodeBox>
              <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {codeString}
              </SyntaxHighlighter>
            </VcodeBox>

            {/* Document Section */}
            <DocumentSection title="Notification document" titleDetails="To modify the notification, Please take the reference of our documents.">
              <Documents
                tag="message"
                discription="you need to add notification message using the 'message' attribute. Example [message='This is notification message']. This field is mandatory"
              />
              <Documents
                tag="fontColor"
                discription="you can change the font and icon color of the notification using the 'fontColor' attribute. Example [fontColor='#074EE8']"
              />
              <Documents
                tag="color"
                discription="you can change the background color of the notification using the 'color' attribute. Example [color='#074EE8']"
              />
              <Documents
                tag="size"
                discription="you can change the font size of the notification using the 'size' attribute. Example [size='14px']"
              />
            </DocumentSection>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VNotification;
