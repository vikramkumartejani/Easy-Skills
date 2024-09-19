import React from "react";
import OfficeWorker from "../assets/icons/office-worker.svg";
import ClassLesson from "../assets/icons/class-lesson.svg";
import MapPin from "../assets/icons/map-pin.svg";

const Total = () => {
  return (
    <section className="md:h-[106px] h-[112px] bg-[#15508B] flex items-center justify-between px-5 xxl:px-20">
      <div className="flex md:flex-row flex-col md:text-left text-center items-center md:gap-[24px] gap-[8px]">
        <span className="md:min-h-[48px] min-h-[32px] md:min-w-[48px] min-w-[32px]">
          <img
            className="md:w-[48px] w-[32px] md:h-[48px] h-[32px]"
            src={OfficeWorker}
            alt="icon"
          />
        </span>
        <div className="flex flex-col gap-[2px] text-white">
          <h3 className="md:text-[28px] text-[16px] font-[800] md:leading-[30.8px] leading-[17.6px]">
            25,500+
          </h3>
          <p className="md:text-[18px] text-[12px] font-[500] md:leading-[24.59px] leading-[14px] opacity-[0.8]">
            Happy Students
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center md:text-left text-center md:gap-[24px] gap-[8px] md:border-x md:w-[40vw] justify-center">
        <span className="md:min-h-[48px] min-h-[32px] md:min-w-[48px] min-w-[32px]">
          <img
            className="md:w-[48px] w-[32px] md:h-[48px] h-[32px]"
            src={ClassLesson}
            alt="icon"
          />
        </span>
        <div className="flex flex-col gap-[2px] text-white">
          <h3 className="md:text-[28px] text-[16px] font-[800] md:leading-[30.8px] leading-[17.6px]">
            50+
          </h3>
          <p className="md:text-[18px] text-[12px] font-[500] md:leading-[24.59px] leading-[14px] opacity-[0.8]">
            Industry Courses
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:text-left text-center items-center md:gap-[24px] gap-[8px]">
        <span className="md:min-h-[48px] min-h-[32px] md:min-w-[48px] min-w-[32px]">
          <img
            className="md:w-[48px] w-[32px] md:h-[48px] h-[32px]"
            src={MapPin}
            alt="icon"
          />
        </span>
        <div className="flex flex-col gap-[2px] text-white">
          <h3 className="md:text-[28px] text-[16px] font-[800] md:leading-[30.8px] leading-[17.6px]">
            2+
          </h3>
          <p className="md:text-[18px] text-[12px] font-[500] md:leading-[24.59px] leading-[14px] opacity-[0.8]">
            Branches
          </p>
        </div>
      </div>
    </section>
  );
};

export default Total;
