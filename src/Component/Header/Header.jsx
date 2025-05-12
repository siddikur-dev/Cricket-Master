import React from "react";
import bgShadow from "../../assets/bg-shadow.png";
import bannerMain from "../../assets/banner-main.png";
const Header = ({ handleCount5k }) => {
  return (
    <div className="container mx-auto">
      <div className=" relative">
        {/* bannerMain crikcet image */}
        <div className="absolute  left-1/2 top-1/4 md:top-1/3 transform -translate-x-1/2 -translate-y-1/2">
          <img
            className="mx-auto  w-2/5 md:w-2/4 lg:w-8/12   "
            src={bannerMain}
            alt=""
          />
        </div>
        {/* bgShadow */}
        <div className="  ">
          <img
            className="  bg-[rgba(0,0,0,0.9)]  rounded-2xl mx-auto w-full "
            src={bgShadow}
            alt=""
          />
        </div>
        {/* Heading Text */}
        <div className=" absolute top-6/12  md:top-1/2  left-1/2 md:left-1/2 transform -translate-x-1/2 text-center text-[#ddd] pb-2">
          <h2 className="  sm:text-xl lg:text-3xl sm:font-bold  ">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h2>
          <p className="hidden lg:grid lg:mt-2 text-center">
            Beyond Boundaries Beyond Limits
          </p>

          {/* claim btn */}

          <div className=" mt-2">
            <button
              onClick={handleCount5k}
              className="btn bg-[#E7FE29] gap-2  lg:text-xl rounded-2xl"
            >
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
