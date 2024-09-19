import React, { useState, useRef, useEffect } from "react";
import ChevronDown from "../assets/icons/chevron-down.svg";
import ChevronUp from "../assets/icons/chevron-up.svg";

const Faqs = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const faqRefs = useRef([]);

  useEffect(() => {
    faqRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight =
          openFaq === index ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [openFaq]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-4 md:py-20 px-4">
      <div className="max-w-[800px] w-full mx-auto">
        <div className="flex items-center flex-col justify-center text-center gap-2 md:gap-4 mb-4 md:mb-7">
          <div className="text-xs md:text-base leading-[13.2px] md:leading-[17.6px] text-[#15508B] font-bold bg-[#0084FE29] text-center py-2 px-4 rounded-[99px]">
            Frequently Asked Questions
          </div>
          <h1 className="text-xl md:text-[40px] leading-[27.32px] md:leading-[54.64px] font-bold text-center">
            Got Questions? We’ve Got Answers!
          </h1>
        </div>

        <ul className="flex flex-col w-full gap-3 md:gap-4">
          {[0, 1, 2, 3].map((index) => (
            <li
              key={index}
              className={`rounded-lg overflow-hidden transition-transform duration-300 ${
                openFaq === index
                  ? "border-[#15508B] border-[1.5px]"
                  : "border-[#DDDDDD] border-[1.5px]"
              }`}
            >
              <div
                className={`flex gap-2 p-[10px] md:p-3 cursor-pointer ${
                  openFaq === index
                    ? "bg-[#15508B] text-white"
                    : "bg-transparent text-[#4D4D4D]"
                }`}
                onClick={() => toggleFaq(index)}
              >
                <h3 className="flex-1 tracking-[-0.17px] text-[15px] md:text-[19px] leading-[20.49px] md:leading-[25.95px] font-medium">
                  {/* Dynamic content for each FAQ */}
                  {index === 0 &&
                    "Who can join the UI-UX graphics designing Course?"}
                  {index === 1 && "Why should I learn UI-UX graphics design?"}
                  {index === 2 &&
                    "What after the UI-UX graphics design course?"}
                  {index === 3 &&
                    "Who can join the UI-UX graphics designing Course?"}
                </h3>
                <img
                  src={openFaq === index ? ChevronUp : ChevronDown}
                  alt="chevron-arrow"
                  loading="lazy"
                  className="transition-transform duration-300"
                />
              </div>
              <div
                ref={(el) => (faqRefs.current[index] = el)}
                className={`overflow-hidden transition-all duration-300`}
                style={{ maxHeight: "0px" }}
              >
                <div className="p-2 md:p-3">
                  <ul className="list-disc pl-6 text-[#101828] text-sm md:text-lg leading-[19.12px] md:leading-[24.59px] opacity-80">
                    <li>Never a recession</li>
                    <li>An excellent source of Side Income</li>
                    <li>Constantly growing demand in every field.</li>
                    <li>
                      UI-UX Graphics Design is required for the sale of any
                      product
                    </li>
                    <li>Compensation according to experience</li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faqs;
