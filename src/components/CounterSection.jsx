import React from "react";
import { BsBank } from "react-icons/bs";
import { MdOutlineSchool } from "react-icons/md";
import { FaRegCalendarDays } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";


const counterData = [
  {
    number: "50+",
    title: "Colleges",
    description: "Top colleges covered.",
    icon: <BsBank />,
    iconClass: "college-counter",
  },
  {
    number: "100+",
    title: "Courses",
    description: "Wide range of courses.",
    icon: <MdOutlineSchool />,
    iconClass: "course-counter",
  },
  {
    number: "10",
    title: "Years of Papers",
    description: "Up to 10 years of papers.",
    icon: <FaRegCalendarDays />,
    iconClass: "year-counter",
  },
  {
    number: "1000+",
    title: "Papers",
    description: "Huge collection of papers.",
    icon: <IoNewspaperOutline />,
    iconClass: "paper-counter",
  },
];

const CounterSection = () => {
  return (
    <section className="counter-section">
      <div className="container">

        <div className="counter-box">
          <div className="row g-0">

            {counterData.map((item, index) => (
              <div
                className="col-12 col-sm-6 col-lg-3"
                key={index}
              >
                <div
                  className={`counter-item ${item.iconClass}`}
                >{category.icon}

                  {/* =========================
                      ICON YAHAN LAGANA HAI
                      
                      Example:
                      <FaUniversity />
                      
                      Aap React Icons khud add kar sakte ho.
                  ========================== */}

                  <div className="counter-icon">
                    {/* YOUR REACT ICON HERE */}
                  </div>

                  {/* Counter Number */}
                  <div className="counter-content">
                    <div className="counter-number">
                      {item.number}
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default CounterSection;