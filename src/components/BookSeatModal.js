import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Corrected import
import Pad from "../assets/icons/pad.svg";
import Time from "../assets/icons/time.svg";
import { HiMiniArrowRight } from "react-icons/hi2";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const BookSeatModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate(); // Corrected hook

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [callbackTime, setCallbackTime] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (fullName && email && callbackTime && whatsappNumber && otp) {
      // Redirect to thank you page
      navigate("/thank-you");
    } else {
      // Handle case where form is incomplete (e.g., show an error message)
      alert("Please fill in all fields.");
    }
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white md:p-[24px] p-[16px] rounded-[12px] shadow-lg md:max-w-[600px] max-w-[342px] w-full">
        <div className="flex items-center justify-between md:mb-[24px] mb-[16px] gap-1">
          <h2 className="md:text-[24px] text-[20px] font-[600]">
            Book Your Seat Now
          </h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center min-h-[32px] min-w-[32px] rounded-[6px] shadow"
          >
            <IoMdClose color="#475467" size={17} />
          </button>
        </div>
        <form
          className="flex flex-col md:gap-[24px] gap-[16px]"
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <div className="mb-[12px]">
              <label className="block text-[16px] font-[600] md:leading-[21.86px] leading-[19.2px] mb-[6px]">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Bhavin Patel"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={callbackTime}
                  onChange={(e) => setCallbackTime(e.target.value)}
                  className="w-full rounded-[8px] border border-[#1943AF3D] ps-[44px] pe-4 py-[10px] focus:outline-none focus:ring-1 focus:ring-[#15508B]"
                  required
                />
                <span className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-[0.8]">
                  <img
                    className="w-[20px] h-[20px]"
                    src={Time}
                    alt="Time icon"
                  />
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
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
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
                <span className="absolute top-1/2 right-4 transform font-[600] text-[16px] leading-[20px] -translate-y-1/2 text-[#1A8F25]">
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
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full rounded border border-gray-300 ps-[44px] pe-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <span className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-[0.8]">
                  <img className="w-[20px] h-[20px]" src={Pad} alt="Pad icon" />
                </span>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#1A8F25] flex items-center justify-center gap-[8px] text-white md:text-[21px] text-[18px] font-[700] md:leading-[24px] leading-[20px] py-[8px] px-4 w-full rounded-[6px]"
          >
            Submit
            <span className="md:w-[24px] md:h-[24px] w-[18px] h-[18px]">
              <HiMiniArrowRight strokeWidth={0.5} className="w-full h-full" />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookSeatModal;
