import React from "react";
import Logo from "../assets/Logo.svg";
import Qr from "../assets/qr.png";
import PhoneIcon from "../assets/icons/blue-phone.svg";
import CallCenterIcon from "../assets/icons/call-center-support-service.svg";
import MailEnvelopeIcon from "../assets/icons/mail-send-envelope.svg";
import FacebookIcon from "../assets/icons/facebook-1.svg";
import TwitterIcon from "../assets/icons/twitter-1.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import LocationIcon from "../assets/icons/Location-Pin.svg";

const Footer = () => {
  return (
    <footer>
      <div className="px-4 py-4 md:py-10 bg-white relative z-[40]">
        <div className="xxl:px-20">
          <div className="flex flex-col gap-3 md:gap-5 items-center justify-center mb-5 md:mb-8">
            <div className="flex items-center flex-col">
              <p className="text-[7px] md:text-[9.27px] font-bold tracking-[1%] plus-jakarta">
                AN ISO 9001:2015 CERTIFIED INSTITUTE
              </p>
              <img src={Logo} alt="Logo" className="md:h-[49.35px] h-[37px]" />
            </div>

            <p className="opacity-60 leading-[19.12px] md:leading-[27.32px] text-sm md:text-xl max-w-[680px] w-full mx-auto text-center">
              We’re reimagining how you buy, sell and rent. It’s now easier to
              get into a place you love. So let’s do this, together.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-4 md:gap-12 mb-5">
            <div className="flex-1">
              <div className="flex gap-3 md:gap-6 items-center md:mb-8">
                <div className="flex flex-col gap-1 order-2 md:order-1">
                  <img
                    src={Qr}
                    alt="Qr"
                    className="md:w-[120px] w-[72px] md:h-[120px] h-[72px]"
                  />
                  <p className="block md:hidden opacity-50 text-xs font-medium text-center">
                    Click for Map
                  </p>
                </div>
                <div className="flex gap-2 md:gap-4 flex-col flex-1 order-1 md:order-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={LocationIcon}
                      alt="LocationIcon"
                      className="block md:hidden w-4 h-4"
                    />
                    <h3 className="plus-jakarta font-bold text-xl md:text-[40px] leading-[24px] md:leading-[48px] text-[#15508B] flex-1">
                      Branch - 1 (
                      <strong className="text-[#000000A3]">Adajan</strong>)
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src={PhoneIcon}
                      alt="PhoneIcon"
                      className="w-4 h-4 md:h-7 md:w-7"
                    />
                    <p className="text-[#15508B] leading-[19.2px] md:leading-[33.6px] text-base md:text-[28px] font-bold plus-jakarta">
                      +91 90815 45151
                    </p>
                  </div>

                  <p className="block md:hidden text-sm font-normal leading-[16.8px]">
                    UG-1, 1st Floor, V3 Corner, Honey Park Rd, Adajan, Surat -
                    395009
                  </p>
                </div>
              </div>

              <p className="text-2xl font-medium opacity-60 plus-jakarta leading-[31.2px] hidden md:block">
                UG-1, 1st Floor, V3 Corner, Honey Park Rd, Adajan, Surat -
                395009
              </p>
            </div>

            <div className="opacity-25 border-2 border-dashed"></div>

            <div className="flex-1">
              <div className="flex gap-3 md:gap-6 items-center md:mb-8">
                <div className="flex flex-col gap-1 order-2 md:order-1">
                  <img
                    src={Qr}
                    alt="Qr"
                    className="md:w-[120px] w-[72px] md:h-[120px] h-[72px]"
                  />
                  <p className="block md:hidden opacity-50 text-xs font-medium text-center">
                    Click for Map
                  </p>
                </div>
                <div className="flex gap-2 md:gap-4 flex-col flex-1 order-1 md:order-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={LocationIcon}
                      alt="LocationIcon"
                      className="block md:hidden w-4 h-4"
                    />
                    <h3 className="plus-jakarta font-bold text-xl md:text-[40px] leading-[24px] md:leading-[48px] text-[#15508B] flex-1">
                      Branch - 2 (
                      <strong className="text-[#000000A3]">Vesu</strong>)
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src={PhoneIcon}
                      alt="PhoneIcon"
                      className="w-4 h-4 md:h-7 md:w-7"
                    />
                    <p className="text-[#15508B] leading-[19.2px] md:leading-[33.6px] text-base md:text-[28px] font-bold plus-jakarta">
                      +91 99780 82823
                    </p>
                  </div>

                  <p className="block md:hidden text-sm font-normal leading-[16.8px]">
                    M-40, 2nd Floor, Someshwar Square, Near VNSGU Rd, Vesu,
                    Surat - 395007
                  </p>
                </div>
              </div>

              <p className="text-2xl font-medium opacity-60 plus-jakarta leading-[31.2px] hidden md:block">
                M-40, 2nd Floor, Someshwar Square, Near VNSGU Rd, Vesu, Surat -
                395007
              </p>
            </div>
          </div>

          <div className="flex items-start md:items-center justify-start md:justify-center gap-3 md:gap-12 flex-col md:flex-row mb-5 md:mb-10">
            <div className="flex items-center gap-3">
              <img src={CallCenterIcon} alt="Call Center Icon" />
              <p className="text-[#15508B] text-sm md:text-xl font-semibold md:font-bold leading-[19.12px] md:leading-[24px] plus-jakarta">
                +91 99780 82823
              </p>
            </div>

            <div className="flex items-center gap-3">
              <img src={MailEnvelopeIcon} alt="Mail Envelope Icon" />
              <p className="text-[#15508B] text-xl font-bold leading-[24px] plus-jakarta">
                info@easyskill.in
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#15508B] py-3 md:py-5 px-4 md:px-10 gap-3 flex-col md:flex-row flex items-center justify-between">
        <p className="text-sm md:text-lg font-medium text-center max-w-[200px] md:max-w-full  text-white">
          © 2024 All Rights Reserved by Easyskill Career Academy.
        </p>

        <div className="flex items-center">
          <a href="/privacy-policy" className="text-white text-[15px] sm:text-[18px] font-medium leading-[22px]">Privacy Policy</a> 
          <span className="text-white text-[18px] font-medium px-2">.</span>
          <a href="/terms-services" className="text-white text-[15px] sm:text-[18px] font-medium leading-[22px]">Terms & Services</a>
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          <img src={FacebookIcon} alt="Facebook Icon" />
          <img src={InstagramIcon} alt="Instagram Icon" />
          <img src={TwitterIcon} alt="Twitter Icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
