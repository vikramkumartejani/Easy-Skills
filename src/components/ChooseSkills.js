import React, { useState } from "react";

import EmploymentGuarantee from "../assets/icons/1.svg";
import RealWorldTraining from "../assets/icons/2.svg";
import IndustryExperts from "../assets/icons/3.svg";
import ExtensivePartnerships from "../assets/icons/4.svg";
import ComprehensiveDevelopment from "../assets/icons/5.svg";
import IndustryExposure from "../assets/icons/6.svg";
import CustomisedLearning from "../assets/icons/7.svg";
import LifetimeSupport from "../assets/icons/8.svg";

// Companies Logos
import Zoho from "../assets/zoho.svg";
import Amazon from "../assets/amazon.svg";
import Ola from "../assets/ola.svg";
import Filpkart from "../assets/filpkart.svg";
import paytm from "../assets/paytm.svg";
import swiggy from "../assets/swiggy.svg";
import freshwork from "../assets/freshwork.svg";
import zomato from "../assets/zomato.svg";
import inmobi from "../assets/inmobi.svg";
import dream11 from "../assets/dream11.svg";
import chargebee from "../assets/chargebee.svg";
import oyo from "../assets/oyo.svg";
import cred from "../assets/cred.svg";
import udaan from "../assets/udaan.svg";
import sharechat from "../assets/sharechat.svg";

import { HiMiniArrowRight } from "react-icons/hi2";
import BookSeatModal from "./BookSeatModal";

// Skills Data
const skillsData = [
  {
    image: EmploymentGuarantee,
    name: "Employment Guarantee",
    disc: "100% job placement with government-approved certification.",
  },
  {
    image: RealWorldTraining,
    name: "Real-World Training",
    disc: "Practical project experience for freelancing and career readiness.",
  },
  {
    image: IndustryExperts,
    name: "Industry Experts",
    disc: "Learn from expert IT professionals with real-world skills.",
  },
  {
    image: ExtensivePartnerships,
    name: "Extensive Partnerships",
    disc: "Over 1000+ company connections for top job opportunities.",
  },
  {
    image: ComprehensiveDevelopment,
    name: "Comprehensive Development",
    disc: "Personality Development, Motivational Seminars, IT Quizzes and Competitions.",
  },
  {
    image: IndustryExposure,
    name: "Industry Exposure",
    disc: "Practical insights through IT company visits.",
  },
  {
    image: CustomisedLearning,
    name: "Customised Learning",
    disc: "Courses tailored to your skills for a successful IT career.",
  },
  {
    image: LifetimeSupport,
    name: "Lifetime Support",
    disc: "Ongoing job assistance, skill upgrades and freelancing support.",
  },
];

const ChooseSkills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section className="px-4 xxl:px-20 py-8 xxl:py-20">
      <div>
        <h2 className="text-[30px] md:text-[40px] leading-[22px] md:leading-[44px] text-center font-bold mb-[14px] md:mb-10">
          Why Choose EasySkill
        </h2>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 skills">
          {skillsData.map((skills, index) => (
            <li
              key={index}
              className="border border-[#DDDDDD] p-[10px] md:p-4 flex flex-col gap-[10px] md:gap-4 rounded-lg"
            >
              <img
                src={skills.image}
                alt={skills.name}
                className="w-8 md:w-12 h-8 md:h-12"
              />

              <div className="flex flex-col gap-1">
                <h3 className="text-sm md:text-2xl leading-[16px] md:leading-[26.4px] font-bold">
                  {skills.name}
                </h3>
                <p className="text-sm md:text-lg font-medium leading-[15px] md:leading-[24px] opacity-60">
                  {skills.disc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="py-4 xxl:py-20 flex flex-col gap-3 md:gap-10 mt-6 md:mt-10">
        <div>
          <h2 className="text-xl md:text-[40px] leading-[22px] md:leading-[44px] text-center font-bold mb-1 md:mb-3">
            1000+ Companies are hiring EasySkill Learners
          </h2>
          <p className="max-w-[1120px] w-full mx-auto text-xs md:text-lg font-medium leading-[16.39px] md:leading-[24.59px] opacity-70 text-center">
            First Time in Surat Creative Multimedia Institute is one of the best
            Institutes with 800+ top IT companies Collaboration Growing our
            contacts, growing our industry knowledge, and growing relationships
            with the IT leaders in our field is accelerate our success.
          </p>
        </div>

        <ul className="flex items-center justify-center gap-3 flex-wrap">
          <li className="w-[93.5px] md:w-[129.86px] h-8 md:h-[44.44px] rounded-md md:rounded-[8.33px] border md:border-[1.39px] border-[#0000001F] flex items-center justify-center">
            <img src={Zoho} alt="Zoho" className="h-5 md:h-[27.78px]" />
          </li>

          <li className="w-[93.5px] md:w-[129.86px] h-8 md:h-[44.44px] rounded-md md:rounded-[8.33px] border md:border-[1.39px] border-[#0000001F] flex items-center justify-center">
            <img src={Amazon} alt="Amazon" className="h-5 md:h-[27.78px]" />
          </li>

          <li className="w-[93.5px] md:w-[129.86px] h-8 md:h-[44.44px] rounded-md md:rounded-[8.33px] border md:border-[1.39px] border-[#0000001F] flex items-center justify-center">
            <img src={Ola} alt="Ola" className="h-[16.8px] md:h-[23.33px]" />
          </li>

          <li className="w-[93.5px] md:w-[129.86px] h-8 md:h-[44.44px] rounded-md md:rounded-[8.33px] border md:border-[1.39px] border-[#0000001F] flex items-center justify-center">
            <img
              src={Filpkart}
              alt="Filpkart"
              className="h-[16.53px] md:h-[22.95px]"
            />
          </li>

          <li className="w-[93.5px] md:w-[129.86px] h-8 md:h-[44.44px] rounded-md md:rounded-[8.33px] border md:border-[1.39px] border-[#0000001F] flex items-center justify-center">
            <img src={paytm} alt="paytm" className="h-4 md:h-[22.22px]" />
          </li>

          <li className="w-[93.5px] md:w-[129.86px] h-8 md:h-[44.44px] rounded-md md:rounded-[8.33px] border md:border-[1.39px] border-[#0000001F] flex items-center justify-center">
            <img src={swiggy} alt="swiggy" className="h-5 md:h-[27.78px]" />
          </li>

          <li className="w-[93.5px] md:w-[129.86px] h-8 md:h-[44.44px] rounded-md md:rounded-[8.33px] border md:border-[1.39px] border-[#0000001F] flex items-center justify-center">
            <img
              src={freshwork}
              alt="freshwork"
              className="h-[12.39px] md:h-[17.22px]"
            />
          </li>

          <li className="w-[93.5px] md:w-[129.86px] h-8 md:h-[44.44px] rounded-md md:rounded-[8.33px] border md:border-[1.39px] border-[#0000001F] flex items-center justify-center">
            <img
              src={zomato}
              alt="zomato"
              className="h-[15px] md:h-[20.83px]"
            />
          </li>

          <li className="w-[93.5px] md:w-[129.86px] h-8 md:h-[44.44px] rounded-md md:rounded-[8.33px] border md:border-[1.39px] border-[#0000001F] flex items-center justify-center">
            <img
              src={inmobi}
              alt="inmobi"
              className="h-[10px] md:h-[13.89px]"
            />
          </li>

          <li className="w-[93.5px] md:w-[129.86px] h-8 md:h-[44.44px] rounded-md md:rounded-[8.33px] border md:border-[1.39px] border-[#0000001F] flex items-center justify-center">
            <img src={dream11} alt="dream11" className="h-[18px] md:h-[25px]" />
          </li>

          <li className="w-[93.5px] md:w-[129.86px] h-8 md:h-[44.44px] rounded-md md:rounded-[8.33px] border md:border-[1.39px] border-[#0000001F] flex items-center justify-center">
            <img
              src={chargebee}
              alt="chargebee"
              className="h-[11px] md:h-[15.28px]"
            />
          </li>

          <li className="w-[93.5px] md:w-[129.86px] h-8 md:h-[44.44px] rounded-md md:rounded-[8.33px] border md:border-[1.39px] border-[#0000001F] flex items-center justify-center">
            <img src={oyo} alt="oyo" className="h-4 md:h-[22.22px]" />
          </li>

          <li className="w-[93.5px] md:w-[129.86px] h-8 md:h-[44.44px] rounded-md md:rounded-[8.33px] border md:border-[1.39px] border-[#0000001F] flex items-center justify-center">
            <img src={cred} alt="cred" className="h-5 md:h-[27.78px]" />
          </li>

          <li className="w-[93.5px] md:w-[129.86px] h-8 md:h-[44.44px] rounded-md md:rounded-[8.33px] border md:border-[1.39px] border-[#0000001F] flex items-center justify-center">
            <img src={udaan} alt="udaan" className="h-[19.4px] md:h-[26.95px" />
          </li>

          <li className="w-[93.5px] md:w-[129.86px] h-8 md:h-[44.44px] rounded-md md:rounded-[8.33px] border md:border-[1.39px] border-[#0000001F] flex items-center justify-center">
            <img
              src={sharechat}
              alt="sharechat"
              className="h-[19px] md:h-[26.39px]"
            />
          </li>
        </ul>
      </div>

      <button
        onClick={openModal}
        className="max-w-[682px] w-full mx-auto bg-[#1A8F25] rounded md:rounded-lg py-[12px] px-4 md:px-6 flex flex-col md:gap-2 gap-[4px] cursor-pointer items-center justify-center"
      >
        <p className="text-white tracking-[1.2%] font-[600] text-center md:text-[16px] leading-[12px] text-[12px] uppercase">
          get free career counseling from experts
        </p>

        <div className="flex items-center gap-1">
          <p className="text-white uppercase text-[18px] md:text-[24px] font-[700] leading-[20px] tracking-[1.2%]">
            Book YOUR SEAT Now
          </p>
          <HiMiniArrowRight
            className="md:text-[24px] text-[20px]"
            color="white"
            strokeWidth={0.6}
          />
        </div>
      </button>
      {/* Modal component - conditionally rendered */}
      <BookSeatModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default ChooseSkills;
