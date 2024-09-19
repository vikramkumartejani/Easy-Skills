import React from "react";

import WebDev from "../assets/icons/web-dev.png";
import AppDev from "../assets/icons/app-dev.png";
import UIUX from "../assets/icons/ui-ux.png";
import DataScience from "../assets/icons/data-science.png";
import DigitalMarketing from "../assets/icons/digital-marketing.png";
import WebDesign from "../assets/icons/web-design.png";
import BlockChain from "../assets/icons/block-chain.png";
import GameDev from "../assets/icons/game-dev.png";
import CCCTaily from "../assets/icons/ccc-taily.png";
import AIML from "../assets/icons/ai-ml.png";
import GameDesign from "../assets/icons/game-design.png";
import PythonDev from "../assets/icons/python-dev.png";
import CJava from "../assets/icons/c-java.png";
import Animation from "../assets/icons/2d-3d.png";
import VideoEditing from "../assets/icons/video-editing.png";
import GraphicDesign from "../assets/icons/graphic-design.png";
import CyberSecurity from "../assets/icons/cyber-security.png";
import FullStackDev from "../assets/icons/full-stack-dev.png";

// Courses Data
const coursesData = [
  {
    image: WebDev,
    name: "Web Development",
    disc: "Advanced Program in Visual Effects gives you an in-depth understanding of the basic and advanced levels of VFX that makes you",
  },
  {
    image: AppDev,
    name: "App Development",
    disc: "Advanced Program in Visual Effects gives you an in-depth understanding of the basic and advanced levels of VFX that makes you",
  },
  {
    image: UIUX,
    name: "UI/UX Design",
    disc: "Advanced Program in Visual Effects gives you an in-depth understanding of the basic and advanced levels of VFX that makes you",
  },
  {
    image: DataScience,
    name: "Data Science",
    disc: "Advanced Program in Visual Effects gives you an in-depth understanding of the basic and advanced levels of VFX that makes you",
  },
  {
    image: DigitalMarketing,
    name: "Digital Marketing",
    disc: "Advanced Program in Visual Effects gives you an in-depth understanding of the basic and advanced levels of VFX that makes you",
  },
  {
    image: WebDesign,
    name: "Web Design",
    disc: "Advanced Program in Visual Effects gives you an in-depth understanding of the basic and advanced levels of VFX that makes you",
  },
  {
    image: BlockChain,
    name: "BlockChain",
    disc: "Advanced Program in Visual Effects gives you an in-depth understanding of the basic and advanced levels of VFX that makes you",
  },
  {
    image: GameDev,
    name: "Game Development",
    disc: "Advanced Program in Visual Effects gives you an in-depth understanding of the basic and advanced levels of VFX that makes you",
  },
  {
    image: CCCTaily,
    name: "CCC/Taily",
    disc: "Advanced Program in Visual Effects gives you an in-depth understanding of the basic and advanced levels of VFX that makes you",
  },
  {
    image: AIML,
    name: "AI/ML",
    disc: "Advanced Program in Visual Effects gives you an in-depth understanding of the basic and advanced levels of VFX that makes you",
  },
  {
    image: GameDesign,
    name: "Game Design",
    disc: "Advanced Program in Visual Effects gives you an in-depth understanding of the basic and advanced levels of VFX that makes you",
  },
  {
    image: PythonDev,
    name: "Python Development",
    disc: "Advanced Program in Visual Effects gives you an in-depth understanding of the basic and advanced levels of VFX that makes you",
  },
  {
    image: CJava,
    name: "C/C++/Java",
    disc: "Advanced Program in Visual Effects gives you an in-depth understanding of the basic and advanced levels of VFX that makes you",
  },
  {
    image: Animation,
    name: "2D/3D Animation",
    disc: "Advanced Program in Visual Effects gives you an in-depth understanding of the basic and advanced levels of VFX that makes you",
  },
  {
    image: VideoEditing,
    name: "Video Editing",
    disc: "Advanced Program in Visual Effects gives you an in-depth understanding of the basic and advanced levels of VFX that makes you",
  },
  {
    image: GraphicDesign,
    name: "Graphic Design",
    disc: "Advanced Program in Visual Effects gives you an in-depth understanding of the basic and advanced levels of VFX that makes you",
  },
  {
    image: CyberSecurity,
    name: "Cyber Security",
    disc: "Advanced Program in Visual Effects gives you an in-depth understanding of the basic and advanced levels of VFX that makes you",
  },
  {
    image: FullStackDev,
    name: "Full Stack Dev.",
    disc: "Advanced Program in Visual Effects gives you an in-depth understanding of the basic and advanced levels of VFX that makes you",
  },
];

const OurCourses = () => {
  return (
    <section className="px-4 xxl:px-20 py-8 xxl:py-20">
      <div>
        <h2 className="text-[30px] md:text-[40px] px-4 xxl:px-20 leading-[22px] md:leading-[44px] text-center font-bold mb-[14px] md:mb-10">
          Our Courses
        </h2>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 courses">
          {coursesData.map((course, index) => (
            <li
              key={index}
              className="border border-[#DDDDDD] p-[10px] md:p-4 flex flex-col gap-[10px] md:gap-4 rounded-lg"
            >
              <img
                src={course.image}
                alt={course.name}
                className="w-8 md:w-12 h-8 md:h-12"
              />

              <div className="flex flex-col gap-1">
                <h3 className="text-sm md:text-2xl leading-[16px] md:leading-[26.4px] font-bold">
                  {course.name}
                </h3>
                <p className="text-sm md:text-lg font-medium leading-[15px] md:leading-[24px] opacity-60">
                  {course.disc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default OurCourses;
