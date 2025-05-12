import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Currency from "../../assets/Currency.png";
import { AlignLeft, X } from "lucide-react";

const Navbar = ({ count }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <nav className="flex justify-between m-7 container mx-auto">
      <div>
        <img src={logo} alt="" />
      </div>
      {/* RIght */}
      <div className=" hidden lg:flex items-center justify-center">
        <div className="gap-5 flex">
          <p className="text-[#131313B3] hover:bg-gray-200 p-2 rounded-xl cursor-pointer">
            Home
          </p>
          <p className="text-[#131313B3] hover:bg-gray-200 p-2 rounded-xl cursor-pointer">
            Fixture
          </p>
          <p className="text-[#131313B3] hover:bg-gray-200 p-2 rounded-xl cursor-pointer">
            Teams
          </p>
          <p className="text-[#131313B3] hover:bg-gray-200 p-2 rounded-xl cursor-pointer">
            Schedules
          </p>
        </div>
        <div className="flex gap-2 ml-2">
          <button className="btn ">
            {count} Coin <img src={Currency} alt="" />
          </button>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div
        className="flex flex-col lg:hidden items-center"
        onClick={handleOpen}
      >
        <div className="flex lg:hidden items-center">
          {open ? <X /> : <AlignLeft />}
        </div>

        {open && (
          <div className="flex lg:hidden  flex-col  items-center justify-center mr-5">
            <div className="gap-5 flex flex-col">
              <p className="text-[#131313B3] hover:bg-gray-200 p-2 rounded-xl cursor-pointer">
                Home
              </p>
              <p className="text-[#131313B3] hover:bg-gray-200 p-2 rounded-xl cursor-pointer">
                Fixture
              </p>
              <p className="text-[#131313B3] hover:bg-gray-200 p-2 rounded-xl cursor-pointer">
                Teams
              </p>
              <p className="text-[#131313B3] hover:bg-gray-200 p-2 rounded-xl cursor-pointer">
                Schedules
              </p>
            </div>
            <div className="flex gap-2 ml-2">
              <button className="btn">
                {count} Coin <img src={Currency} alt="" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile sight */}
    </nav>
  );
};

export default Navbar;
