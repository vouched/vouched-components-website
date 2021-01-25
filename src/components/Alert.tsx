import React from "react";
import Footer from "./footer";
import Header from "./header";
import Components from "./sideNavigation";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import { Documents, DocumentSection, ComponentsTitle } from "./componentsCollection";
import { FaQuestion, FaInfo } from "react-icons/fa";

import { AlertMessage } from "brand-components";

interface VAlertProps {}
export const VAlert: React.FC<VAlertProps> = (props) => {
  return (
    <>
      <Header />
      <div className="mainBlock_outer">
        <Components />
        <div className="mainBlock_component">
          <ComponentsTitle title="Alert" para="A alert displays a prominent message and related optional actions." />
          <div className="section_box">
            {/* design section */}
            <div className="componentview">
              <div className="componentsView_section">
                <AlertMessage message="This is alert message" fontColor="#22125D" size="14px">
                  <FaQuestion />
                </AlertMessage>

                <br />
                <br />

                <AlertMessage message="This is alert message" fontColor="#aaa" size="14px">
                  <FaInfo />
                </AlertMessage>
              </div>
            </div>

            {/* Document Section */}
            <DocumentSection title="Alert document" titleDetails="To modify the alert, Please take the reference of our documents.">
              <Documents
                tag="message"
                discription="you need to add alert message using the 'message' attribute. Example [message='This is alert message']. This field is mandatory"
              />
              <Documents
                tag="fontColor"
                discription="you can change the font and icon color of the alert using the 'fontColor' attribute. Example [fontColor='#074EE8']"
              />
              <Documents
                tag="color"
                discription="you can change the background color of the alert using the 'color' attribute. Example [color='#074EE8']"
              />
              <Documents tag="size" discription="you can change the font size of the alert using the 'size' attribute. Example [size='14px']" />

              <Documents discription="You can make action like onclick, onchange. Example: [onClickEvent={() => this.handleClick()} ]" />
            </DocumentSection>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VAlert;
