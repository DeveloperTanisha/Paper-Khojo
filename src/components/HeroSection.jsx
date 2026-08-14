import React from "react";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center hero-row">

          {/* LEFT PART */}
          <div className="col-lg-6 col-md-6 col-12">
            <div className="hero-content">

              <h1 className="hero-title">
                Apna Previous
                <br />
                Year <span>Paper Khojo</span>
              </h1>

              <div className="hero-line"></div>

              <p className="hero-description">
                10 saal tak ke previous year question papers
                <br className="desktop-break" />
                ek jagah par. Apni preparation ko do
                <br className="desktop-break" />
                sahi direction.
              </p>

              <button className="hero-button">
                Apna previous year paper khojo
              </button>

            </div>
          </div>

          {/* RIGHT PART */}
          <div className="col-lg-6 col-md-6 col-12">
            <div className="hero-image-area">
              <img src='/book2.png' alt='book' className="book"/>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;