import React from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

import { VButton } from "brand-components";

interface HomeProps {}
const Home: React.FC<HomeProps> = (props) => {
  return (
    <div>
      <Header />

      <div className="home_div">
        <h3>Vouched UI Components</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem atque accusamus animi similique expedita ex obcaecati. Adipisci harum
          voluptatem, incidunt nostrum voluptas officiis, deserunt a eveniet qui quos, quo cupiditate.
        </p>
        <div className="getstartedDiv">
          <Link className="btnLink" to="/button">
            <VButton fontColor="#074EE8" type="outline-btn" endIcon={<FaChevronRight />}>
              Components
            </VButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
