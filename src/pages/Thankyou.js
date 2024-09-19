import React from "react";
import Confetti1 from "../assets/thankyou-bg.png";
import Confetti2 from "../assets/thankyou-bg-2.svg";
import Line from "../assets/thankyou-line.svg";

const Thankyou = () => {
  return (
    <section className="relative xl:min-h-[80vh] sm:min-h-[90vh] min-h-[85vw]">
      <img
        className="xl:flex hidden absolute z-[1] top-[0] w-full object-cover xl:h-[600px] h-[700px]"
        src={Confetti1}
        alt=""
      />
      <img
        className="xl:hidden flex  absolute z-[1] top-[0] w-full object-cover mt-[-14vw]"
        src={Confetti2}
        alt=""
      />
      <div className="flex flex-col items-center justify-center xl:pt-[204px] pt-[36vw]">
        <div className="relative ">
          <h1 className="md:text-[64px] text-[32px] font-[800] md:leading-[70.4px] leading-[32px] relative z-[2]">
            Thank You
          </h1>
          <img
            className="md:flex hidden w-[319px] mt-[3px] relative z-[2]"
            src={Line}
            alt=""
          />
        </div>
        <p className="text-[#15508B] md:text-[32px] text-[20px] leading-[20px] font-[700] relative z-[2] md:mt-[11px] mt-[2px]">
          for Submitting...
        </p>
        <img
          className="md:hidden flex w-[145px] mt-[5px] relative z-[2]"
          src={Line}
          alt=""
        />
        <p className="md:text-[28px] text-[14px] text-center font-[400] md:leading-[38.25px] leading-[19.12px] relative z-[2] md:mt-[24px] mt-[11px] opacity-[0.6]">
          Your Submission has been sent and <br />
          We will get back to you soon.
        </p>
      </div>
    </section>
  );
};

export default Thankyou;
