import React, { useState } from "react";
import G from "../assets/icons/G.svg";
import Pad from "../assets/icons/pad.svg";
import Time from "../assets/icons/time.svg";
import Avatar from "../assets/avatar.png";
import { FaStar } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { HiMiniArrowRight } from "react-icons/hi2";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";

const SendEnquiry = () => {
  const reviews = [
    {
      name: "Ishita Chopra",
      role: "Flutter Developer",
      company: "@ Samp Technology",
      date: "20 Oct, 23",
      avatar: Avatar,
      stars: 5,
    },
    {
      name: "Rahul Verma",
      role: "Web Developer",
      company: "@ Web Innovations",
      date: "10 Nov, 23",
      avatar: Avatar,
      stars: 4,
    },
    {
      name: "Priya Shah",
      role: "Software Engineer",
      company: "@ Tech Solutions",
      date: "5 Dec, 23",
      avatar: Avatar,
      stars: 4.5,
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);

  const handleNextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const handlePrevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };
  return (
    <section className="px-4 xxl:px-20 py-8 xxl:py-20 bg-[#15508B]">
      <div className="bg-white md:p-[40px] p-[16px] md:rounded-[24px] rounded-[12px] w-full mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <form className="w-full md:w-1/2">
            <h2 className="lg:text-[40px] md:text-[26px] text-[20px] font-[700] lg:leading-[54.64px] leading-[20px] text-black md:mb-[8px] mb-[4px]">
              Free Career Counselling
            </h2>
            <p className="text-black lg:text-[18px] md:text-[16px] text-[14px] leading-[24.59px] md:mb-[40px] mb-[16px] opacity-[0.8]">
              We are happy to help you 24/7
            </p>
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

            <div className="flex lg:flex-row flex-col gap-[20px] mt-[40px] lg:items-center">
              <p className="md:text-[16px] lg:order-1 order-2 text-[13px] font-[500] md:leading-[17.6px] leading-[17.76px] flex-shrink text-[#00000099] text-left">
                By sending this form I confirm that I have read and accept the{" "}
                <a href="#" className="text-black underline">
                  Privacy Policy
                </a>
                .
              </p>
              <button
                type="submit"
                className="flex items-center justify-center lg:order-2 order-1 md:gap-2 gap-1 w-max min-w-[230px] md:text-[24px] text-[16px] font-[700] md:leading-[26.4px] leading-[17.6px] text-white bg-[#15508B] px-[24px] py-[14px] rounded-[8px] text-lg font-semibold hover:bg-[#155099]"
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

          <div className="w-full flex flex-col min-h-full justify-between md:w-1/2">
            <div>
              <h2 className="lg:text-[40px] md:text-[26px] md:text-left text-center text-[20px] font-[700] lg:leading-[54.64px] leading-[20px]">
                What our Students Says
              </h2>

              <div className="flex items-center md:justify-start justify-center md:mt-[24px] mt-[20px] md:gap-[16px] gap-[12px]">
                <div className="flex items-center gap-[8px]">
                  <img
                    src={G}
                    className="md:w-[48px] w-[32px] md:h-[48px] h-[32px]"
                    alt="JustDial"
                  />
                  <div className="flex flex-col gap-[4px]">
                    <span className="text-[#0F172A] md:text-[20px] text-[18px] font-[700] md:leading-[22px] leading-[20px]">
                      4.9 (189)
                    </span>
                    <div className="flex items-center">
                      <span className="min-w-[16px] min-h-[16px] flex gap-[4px]">
                        <FaStar color="#F2BE0B" size={16} />
                        <FaStar color="#F2BE0B" size={16} />
                        <FaStar color="#F2BE0B" size={16} />
                        <FaStar color="#F2BE0B" size={16} />
                        <FaStar color="#F2BE0B" size={16} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-[8px]">
                  <span className="md:w-[48px] w-[32px] md:h-[48px] h-[32px]">
                    <FaFacebook color="#1877F2" className="w-full h-full" />
                  </span>
                  <div className="flex flex-col gap-[4px]">
                    <span className="text-[#0F172A] md:text-[20px] text-[18px] font-[700] md:leading-[22px] leading-[20px]">
                      4.9 (189)
                    </span>
                    <div className="flex items-center">
                      <span className="md:min-w-[16px] min-w-[14px] md:min-h-[16px] min-h-[14px] flex gap-[4px]">
                        <FaStar color="#F2BE0B" size={16} />
                        <FaStar color="#F2BE0B" size={16} />
                        <FaStar color="#F2BE0B" size={16} />
                        <FaStar color="#F2BE0B" size={16} />
                        <FaStar color="#F2BE0B" size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-black opacity-[0.8] md:text-[18px] text-[14px] md:leading-[23.4px] leading-[18.2px] font-[500] md:mt-[24px] mt-[12px]">
                Easyskill Career Academy is very good institute for IT training;
                I have completed web design course from here and got placed on
                Company as Web designer. This institute gives me very good
                career, thank you Easyskill.
              </p>
            </div>
            <div className="flex flex-col md:gap-[24px] gap-[12px] mt-[20px]">
              <p className="flex gap-[10px] text-yellow-500 text-sm">
                <span className="md:min-w-[16px] min-w-[14px] md:min-h-[16px] min-h-[14px] flex md:gap-[4px] gap-[2px]">
                  {[...Array(Math.floor(reviews[currentReview].stars))].map(
                    (_, i) => (
                      <FaStar key={i} color="#F2BE0B" />
                    )
                  )}
                </span>{" "}
                <span className="text-black md:text-[16px] text-[14px] md:leading-[17.6px] leading-[15.4px] font-[700]">
                  {reviews[currentReview].date}
                </span>
              </p>
              <div className="flex justify-between items-center">
                <div className="flex min-w-[20px]">
                  <div className="flex items-center gap-[12px]">
                    <img
                      src={reviews[currentReview].avatar}
                      alt={reviews[currentReview].name}
                      className="md:w-[44px] w-[36px] md:h-[44px] h-[36px] rounded-full"
                    />
                    <div className="flex flex-col gap-[4px] ">
                      <h4 className="md:text-[20px] text-[16px] md:leading-[22px] leading-[16px] font-[700]">
                        {reviews[currentReview].name}
                      </h4>
                      <p className="md:text-[16px] text-[14px] font-[600] md:leading-[17.6px] leading-[16px] text-[#15508B]">
                        {reviews[currentReview].role}
                        <span className="text-black opacity-[0.5] inline-flex">
                          {" "}
                          {reviews[currentReview].company}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-[12px]">
                  <button
                    className="md:min-w-[44px] min-w-[32px] md:min-h-[44px] min-h-[32px] flex items-center justify-center bg-white border-[1.5px] border-[#DDDDDD] rounded-full"
                    onClick={handlePrevReview}
                  >
                    <span className="md:min-w-[20px] min-w-[16px] md:min-wh-[20px] min-h-[16px]">
                      <IoIosArrowBack />
                    </span>
                  </button>
                  <button
                    className="md:min-w-[44px] min-w-[32px] md:min-h-[44px] min-h-[32px] flex items-center justify-center bg-white border-[1.5px] border-[#DDDDDD] rounded-full"
                    onClick={handleNextReview}
                  >
                    <span className="md:min-w-[20px] min-w-[16px] md:min-wh-[20px] min-h-[16px]">
                      <IoIosArrowForward />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendEnquiry;
