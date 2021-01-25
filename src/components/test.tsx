import React from "react";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

import { FaQuestion, FaChevronRight, FaChevronLeft } from "react-icons/fa";

import { AlertMessage, VButton } from "brand-components";

interface VAlertProps {}
export const VAlert: React.FC<VAlertProps> = (props) => {
  return (
    <>
      <AlertMessage message="This is alert message" fontColor="#22125D" size="14px">
        <FaQuestion />
      </AlertMessage>

      <VButton>Primary</VButton>

      <VButton color="#074EE8" fontColor="#fff" type="default-btn-m" startIcon={<FaChevronLeft />}>
        Primary
      </VButton>

      <VButton fontColor="#074EE8" type="outline-btn-m" endIcon={<FaChevronRight />}>
        Primary
      </VButton>

      <VButton color="#074EE8" type="text-btn-m" endIcon={<FaChevronRight />}>
        Primary
      </VButton>

      <VButton color="#074EE8" type="text-btn-l">
        Primary
      </VButton>
    </>
  );
};

export default VAlert;
