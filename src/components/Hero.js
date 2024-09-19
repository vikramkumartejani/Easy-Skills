import React, { useRef, useState } from "react";
import { HiMiniArrowRight } from "react-icons/hi2";
import Line from "../assets/thankyou-line.svg";
import G from "../assets/icons/G.svg";
import Jd from "../assets/icons/jd.svg";
import { FaStar } from "react-icons/fa6";
import BookSeatModal from "./BookSeatModal";
import Video from "../assets/janvi3.mov";
import PlayBtn from "../assets/icons/play-btn.png";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // Track if video is playing

  // Toggle video play and pause
  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Pause video
        setIsPlaying(false); // Update state to show overlay
      } else {
        videoRef.current.play(); // Play video
        setIsPlaying(true); // Update state to hide overlay and show controls
      }
    }
  };

  return (
    <section className="flex flex-col md:flex-row md:gap-[24px] items-center justify-between px-4 xxl:px-12 md:py-[56px] py-[16px] bg-white">
      {/* Text and CTA Section */}
      <div className="w-full md:w-1/2 text-left md:order-1 order-2">
        <h3 className="text-[#15508B] md:text-[24px] text-[20px] font-[700] leading-[20px] mb-[12px] md:mt-0 mt-[16px] text-center">
          Join Us Today to Start Your
        </h3>
        <div className="relative flex flex-col items-center justify-center">
          <h1 className="md:text-[64px] w-max text-[32px] font-[800] md:leading-[70.4px] leading-[32px]">
            IT Learning
          </h1>
          <img className="md:w-[319px] w-[141px] mt-[3px]" src={Line} alt="" />
          <p className="text-[#15508B] md:text-[24px] text-[20px] leading-[20px] font-[700] md:mt-[11px] mt-[2px]">
            for Assured Earnings
          </p>
        </div>

        <button
          onClick={openModal}
          className="max-w-[682px] w-full mx-auto bg-[#1A8F25] rounded-[4px] md:rounded-lg md:mt-[24px] mt-[20px] py-[12px] px-4 flex flex-col md:gap-2 gap-[4px] cursor-pointer items-center justify-center"
        >
          <p className="text-white tracking-[1.2%] font-[600] text-center lg:text-[16px] md:text-[1.7vw] leading-[12px] text-[12px] uppercase">
            get free career counseling from experts
          </p>
          <div className="flex items-center gap-1">
            <p className="text-white uppercase text-[18px] lg:text-[24px] md:text-[2.5vw] font-[700] leading-[20px] tracking-[1.2%]">
              Book YOUR SEAT Now
            </p>
            <HiMiniArrowRight
              className="md:text-[24px] text-[20px]"
              color="white"
              strokeWidth={0.6}
            />
          </div>
        </button>

        <BookSeatModal isOpen={isModalOpen} onClose={closeModal} />

        <p className="text-black opacity-[0.6] lg:text-[20px] md:text-[17px] text-[14px] md:leading-[27.32px] leading-[16px] font-[400] md:mt-[24px] mt-[20px]">
          Enroll in the Best Python Training Institute for Comprehensive Python
          Course & Classes. Learn Python Language with Certificate & Job
          Placement!
        </p>

        <div className="flex items-center justify-center md:mt-[24px] mt-[20px] gap-[16px]">
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
            <img
              src={Jd}
              className="md:w-[48px] w-[32px] md:h-[48px] h-[32px]"
              alt="JustDial"
            />
            <div className="flex flex-col gap-[4px]">
              <span className="text-[#0F172A] md:text-[20px] text-[18px] font-[700] md:leading-[22px] leading-[20px]">
                4.9 (480)
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
        </div>
      </div>

      {/* Video and Play Button Section */}
      <div className="w-full md:order-2 order-1 md:w-1/2 mb-[16px] md:mb-0 flex justify-center">
        <div className="relative md:h-[454px] h-[473px] md:w-[473px] w-full">
          {/* Video element with click event to toggle play/pause */}
          <video
            ref={videoRef}
            src={Video}
            className="rounded-lg object-cover w-full h-full cursor-pointer"
            onClick={handlePlayClick} // Click on video to toggle play/pause
          />

          {/* Black overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex justify-center items-center transition-opacity duration-500 ease-in-out">
              {/* Play button */}
              <img
                src={PlayBtn}
                alt="Play Button"
                className="cursor-pointer"
                onClick={handlePlayClick} // Clicking the button also starts the video
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
