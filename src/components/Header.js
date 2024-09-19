import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import WhiteLogo from "../assets/white-logo.svg";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
// import { MdKeyboardArrowDown } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { HiMiniArrowRight } from "react-icons/hi2";
import { PiPhoneCall } from "react-icons/pi";
// import { NavLink } from "react-router-dom";

import { BsPerson } from "react-icons/bs";

import G from "../assets/icons/G.svg";
import Pad from "../assets/icons/pad.svg";
import Time from "../assets/icons/time.svg";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { CiMail } from "react-icons/ci";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const dropdownRef = useRef(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // const closeDrawer = () => {
  //   setIsDrawerOpen(false);
  // };

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  // const closeDropdown = () => {
  //   setIsDropdownOpen(false);
  // };

  // Close dropdown when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       closeDropdown();
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [dropdownRef]);

  const [showPopup, setShowPopup] = useState(false);

  // Function to toggle popup visibility
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <header className="sticky top-0 xxl:bg-white py-6 flex items-center px-4 sxl:px-20 bg-[#15508B] relative z-[50] shadow">
      <div className="flex items-center justify-between gap-2 w-full">
        <nav className="flex-1 hidden xxl:flex">
          {/*<ul className="flex items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-lg font-medium px-[16px] py-[8px] ${
                    isActive ? "text-[#15508B] underline" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li className="relative" ref={dropdownRef}>
              <div
                onClick={toggleDropdown}
                className="flex items-center gap-1 text-lg font-medium px-[16px] py-[8px] cursor-pointer"
              >
                Courses
                <MdKeyboardArrowDown />
              </div>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-white shadow rounded p-2">
                  <li className="px-4 py-2">
                    <NavLink
                      to="/course-1"
                      onClick={closeDropdown}
                      className=""
                    >
                      Course 1
                    </NavLink>
                  </li>
                  <li className="px-4 py-2">
                    <NavLink
                      to="/course-2"
                      onClick={closeDropdown}
                      className=""
                    >
                      Course 2
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink
                to="/branches"
                className={({ isActive }) =>
                  `text-lg font-medium px-[16px] py-[8px] ${
                    isActive ? "text-[#15508B] underline" : ""
                  }`
                }
              >
                Branches
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/placements"
                className={({ isActive }) =>
                  `text-lg font-medium px-[16px] py-[8px] ${
                    isActive ? "text-[#15508B] underline" : ""
                  }`
                }
              >
                Placements
              </NavLink>
            </li>
          </ul>*/}
        </nav>

        {/* Mobile Menu Button */}
        <button className="flex xxl:hidden" onClick={toggleDrawer}>
          <FaBarsStaggered className="text-white text-2xl" />
        </button>

        <div>
          <img src={Logo} alt="Logo" className="hidden xxl:flex" />
          <img src={WhiteLogo} alt="WhiteLogo" className="flex xxl:hidden" />
        </div>

        <div className="flex-1 hidden xxl:flex items-center justify-end gap-4">
          <button className="border border-[#15508B] flex items-center gap-2 rounded-lg py-2 px-4 text-lg font-medium text-[#15508B] leading-[24.59px]">
            <BiPhone size={24} />
            +91 908 154 5252
          </button>

          <button onClick={togglePopup} className="bg-[#15508B] border border-primary-100 text-white flex items-center gap-2 rounded-lg py-2 px-4 text-lg font-bold leading-[24.59px]">

            Enroll Now
            <HiMiniArrowRight size={24} />
          </button>
        </div>

        <span className="min-w-[26px] min-h-[26px] text-white">
          <PiPhoneCall size={26} />
        </span>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-[250px] h-full bg-[#15508B] text-white z-50 transition-transform duration-300 ease-in-out ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-4">
          <img src={WhiteLogo} alt="WhiteLogo" />
          <button onClick={toggleDrawer}>
            <FaTimes className="text-white text-2xl" />
          </button>
        </div>
        {/*<ul className="flex flex-col items-start gap-4 p-4">
          <li>
            <NavLink
              to="/"
              onClick={closeDrawer}
              className={({ isActive }) =>
                `text-lg font-medium ${isActive ? "underline" : ""}`
              }
            >
              Home
            </NavLink>
          </li>

          <li className="relative">
            <div
              onClick={toggleDropdown}
              className="flex items-center gap-1 text-lg font-medium cursor-pointer"
            >
              Courses
              <MdKeyboardArrowDown />
            </div>
            {isDropdownOpen && (
              <ul className="ml-4">
                <li className="py-2">
                  <NavLink to="/course-1" onClick={closeDrawer}>
                    Course 1
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink to="/course-2" onClick={closeDrawer}>
                    Course 2
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink
              to="/branches"
              onClick={closeDrawer}
              className={({ isActive }) =>
                `text-lg font-medium ${isActive ? "underline" : ""}`
              }
            >
              Branches
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/placements"
              onClick={closeDrawer}
              className={({ isActive }) =>
                `text-lg font-medium ${isActive ? "underline" : ""}`
              }
            >
              Placements
            </NavLink>
          </li>
        </ul>*/}
        <div className="h-[1px] border-t border-dashed w-[87%] mx-auto opacity-[0.8]"></div>
        <div className="flex flex-col items-start gap-4 p-4">
          <button className="border border-white flex items-center md:gap-2 gap-1 rounded-lg py-2 px-4 text-lg font-medium text-white">
            <BiPhone size={24} />
            +91 908 154 5252
          </button>
          {/* <div className="relative"> */}
          {/* Button to open popup */}
          <button
            className="bg-white text-[#15508B] border border-[#15508B] flex items-center md:gap-2 gap-1 rounded-lg py-2 px-4 text-lg font-bold"
            onClick={togglePopup}
          >
            Enroll Now
            <HiMiniArrowRight size={24} />
          </button>


          {/* </div> */}
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Popup Form */}
      {showPopup && (
        <div className="p-1 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-3 md:p-6 rounded-lg shadow-lg w-full max-w-[600px]">
            <form className="w-full">
              <div className="flex items-center justify-between gap-3">
                <h2 className="lg:text-[30px] md:text-[26px] text-[20px] font-[700] lg:leading-[54.64px] leading-[20px] text-black md:mb-[8px] mb-[4px]">
                  Book Your Seat Now
                </h2>
                <button
                  className="flex items-center pb-1 justify-center text-black text-4xl border border-[#A4ACB93D] rounded-md min-w-[45px] min-h-[40px]"
                  onClick={togglePopup}
                >
                  x
                </button>
              </div>

              <div className="mb-[12px]">
                <label className="block text-[16px] font-[600] md:leading-[21.86px] leading-[19.2px] mb-[6px]">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Bhavin Patel"
                    className="w-full rounded-[8px] border border-[#1943AF3D] ps-[44px] pe-4 py-[10px] focus:outline-none focus:ring-1 focus:ring-[#15508B]"
                    required
                  />
                  <span className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-[0.8]">
                    <BsPerson size={20} />
                  </span>
                </div>
              </div>

              <div className="mb-[12px]">
                <label className="block text-[16px] font-[600] md:leading-[21.86px] leading-[19.2px] mb-[6px]">
                  Email ID
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="easyskill@gmail.com"
                    className="w-full rounded-[8px] border border-[#1943AF3D] ps-[44px] pe-4 py-[10px] focus:outline-none focus:ring-1 focus:ring-[#15508B]"
                    required
                  />
                  <span className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-[0.8]">
                    <CiMail size={20} />
                  </span>
                </div>
              </div>

              <div className="mb-[12px]">
                <label className="block text-[16px] font-[600] md:leading-[21.86px] leading-[19.2px] mb-[6px]">
                  Best time for a callback?
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Afternoon 4 PM - 6 PM"
                    className="w-full rounded-[8px] border border-[#1943AF3D] ps-[44px] pe-4 py-[10px] focus:outline-none focus:ring-1 focus:ring-[#15508B]"
                    required
                  />
                  <span className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-[0.8]">
                    <img className="w-[20px] h-[20px]" src={Time} alt="" />
                  </span>
                </div>
              </div>

              <div className="mb-[12px]">
                <label className="flex justify-between items-center text-[16px] font-[600] md:leading-[21.86px] leading-[19.2px] mb-[6px]">
                  WhatsApp Number
                  <span className="opacity-[0.5] md:text-[16px] text-[12px] leading-[14.4px] font-[500]">
                    Change Number
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="+91 9895545647"
                    className="w-full rounded-[8px] border border-[#1943AF3D] ps-[44px] pe-4 py-[10px] focus:outline-none focus:ring-1 focus:ring-[#15508B]"
                    required
                  />
                  <span className="absolute top-1/2 left-4 transform -translate-y-1/2">
                    <PiWhatsappLogoLight
                      color="#1A8F25"
                      strokeWidth={2}
                      size={20}
                    />
                  </span>
                  <span className="absolute top-1/2 right-4 transform font-[600] text-[16px] leading-[20px] -translate-y-1/2 text-[#15508B]">
                    Verify
                  </span>
                </div>
              </div>

              <div className="mb-[12px]">
                <label className="flex justify-between items-center text-[16px] font-[600] md:leading-[21.86px] leading-[19.2px] mb-[6px]">
                  Enter OTP
                  <span className="font-[500] md:text-[16px] text-[12px] leading-[14.4px] underline">
                    Resend OTP
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="1 2"
                    className="w-full rounded border border-gray-300 ps-[44px] pe-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <span className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-[0.8]">
                    <img className="w-[20px] h-[20px]" src={Pad} alt="" />
                  </span>
                </div>
              </div>

              <div className=" mt-[40px] w-full">
                <button
                  type="submit"
                  className="flex items-center justify-center lg:order-2 order-1 md:gap-2 gap-1 w-max min-w-[230px] md:text-[24px] text-[16px] font-[700] md:leading-[26.4px] leading-[17.6px] text-white bg-[#1A8F25] px-[24px] py-[14px] rounded-[8px] text-lg font-semibold hover:bg-[#155099]"
                  style={{ width: "-webkit-fill-available" }}
                >
                  Send Enquiry{" "}
                  <span className="md:w-[24px] md:h-[24px] w-[18px] h-[18px]">
                    <HiMiniArrowRight
                      strokeWidth={0.5}
                      className="w-full h-full"
                    />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
