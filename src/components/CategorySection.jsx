import React from "react";
import { BiSolidSchool } from "react-icons/bi";
import { MdOutlineSchool } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";
import { SlBookOpen } from "react-icons/sl";

const categories = [
  {
    title: "Colleges",
    description: "Browse previous year papers of your college.",
    icon: <BiSolidSchool />,
    iconClass: "college-icon",
  },
  {
    title: "Courses",
    description: "Explore papers from different courses.",
    icon: <MdOutlineSchool />,
    iconClass: "course-icon",
  },
  {
    title: "Years",
    description: "Access up to 10 years of previous papers.",
    icon: <MdCalendarMonth />,
    iconClass: "year-icon",
  },
  {
    title: "Subjects",
    description: "Find papers of specific subjects with ease.",
    icon: <SlBookOpen />,
    iconClass: "subject-icon",
  },
];

const ExploreCategory = () => {
  return (
    <section className="explore-category">
      <div className="container">

        {/* Section Heading */}
        <div className="explore-heading text-center">
          <h2>
            Explore by <span>Category</span>
          </h2>

          <p>
            Find papers by colleges, courses, years and subjects easily.
          </p>
        </div>

        {/* Category Cards */}
        <div className="row g-4 justify-content-center">

          {categories.map((category, index) => (
            <div
              className="col-12 col-sm-6 col-lg-3"
              key={index}
            >
              <div className="category-card">

                {/* 
                  ICON YAHAN LAGANA HAI

                  Example:
                  <img src="/images/college-icon.png" alt="College" />

                  Ya Font Awesome / React Icons ka icon
                  yahan add kar sakte ho.
                */}

                <div className={`category-icon ${category.iconClass}`}>
                  {category.icon}
                </div>

                <h3>{category.title}</h3>

                <p>{category.description}</p>

                {/* Bottom Small Line */}
                <div className="category-line"></div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ExploreCategory;