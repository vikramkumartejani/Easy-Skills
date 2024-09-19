import React from "react";
import Award1 from "../assets/icons/award1.png";
import Award2 from "../assets/icons/award2.png";
import Award3 from "../assets/icons/award3.png";

const awardsData = [
  { id: 1, src: Award1, alt: "Award 1" },
  { id: 2, src: Award2, alt: "Award 2" }, // Updated ID to be unique
  { id: 3, src: Award3, alt: "Award 3" },
];

const OurRecognition = () => {
  return (
    <section className="px-4 xxl:px-20 py-8 xxl:py-20">
      <h2 className="text-[30px] md:text-[40px] px-4 xxl:px-20 leading-[22px] md:leading-[44px] text-center font-bold mb-[20px] md:mb-10">
        Our Recognition
      </h2>
      <div className="flex items-center justify-center md:gap-[48px] gap-[20px]">
        {awardsData.map((award) => (
          <div
            key={award.id}
            className="max-w-[190.3px] max-h-[200px] relative flex items-center justify-center"
          >
            <img
              className="object-contain h-full w-full" // Centers the image within the container
              src={award.src}
              alt={award.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurRecognition;
