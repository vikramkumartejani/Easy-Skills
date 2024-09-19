import React from "react";
import Animation from "../assets/2d-3d-animation.svg";
import AppDev from "../assets/app-dev.svg";
import BackendDev from "../assets/backend-dev.svg";
import BusinessDev from "../assets/business-dev.svg";
import CyberSecurity from "../assets/cyber-security.svg";

const courses = [
  { id: 1, src: Animation, alt: "2D-3D Animation" },
  { id: 2, src: AppDev, alt: "Application Development" },
  { id: 3, src: BackendDev, alt: "Back End Development" },
  { id: 4, src: BusinessDev, alt: "Business Development" },
  { id: 5, src: CyberSecurity, alt: "Cyber Security" },
  { id: 1, src: Animation, alt: "2D-3D Animation" },
  { id: 2, src: AppDev, alt: "Application Development" },
  { id: 3, src: BackendDev, alt: "Back End Development" },
  { id: 4, src: BusinessDev, alt: "Business Development" },
  { id: 5, src: CyberSecurity, alt: "Cyber Security" },
];

const CoursesSlider = () => {
  return (
    <section className="py-8 xxl:py-20">
      <h2 className="text-[30px] md:text-[40px] px-4 xxl:px-20 leading-[22px] md:leading-[44px] text-center font-bold mb-[14px] md:mb-10">
        Our Courses
      </h2>
      <div className="w-full overflow-x-auto ps-4 xxl:ps-20 scrollbar-hide">
        <div className="flex gap-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="md:min-w-[280px] min-w-[190px] md:h-[280px] h-[190px] bg-gray-300 rounded-lg flex-shrink-0"
            >
              <img
                className="object-contain w-full h-full"
                src={course.src}
                alt={course.alt}
              />
            </div>
          ))}
          {/* Add an extra spacer div at the end to create space */}
          <div className="min-w-[1px] flex-shrink-0"></div> {/* Spacer */}
        </div>
      </div>
    </section>
  );
};

export default CoursesSlider;
