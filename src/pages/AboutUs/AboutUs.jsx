import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row clearfix">
          <div className="content-column col-md-6 col-sm-12 col-xs-12">
            <div className="inner-column">
              <div className="sec-title">
                <div className="title">About Us</div>
                <h2>
                  We Are The Leader In <br /> The Interiores
                </h2>
              </div>
              <div className="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </div>
              <div className="email">
                Request Quote:{" "}
                <span NclassName="theme_color">freequote@gmail.com</span>
              </div>
              <a href="about.html" className="theme-btn btn-style-three">
                Read More
              </a>
            </div>
          </div>

          <div className="image-column col-md-6 col-sm-12 col-xs-12">
            <div
              className="inner-column "
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="image">
                <img src="https://i.ibb.co/vQbkKj7/about.jpg" />
                <div className="overlay-box">
                  <div className="year-box">
                    <span className="number">5</span>Years <br /> Experience{" "}
                    <br /> Working
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
