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
                  We Are The Leader In <br /> The Education system
                </h2>
              </div>
              <div className="text">
                At CodeCircuit, we are dedicated to empowering learners
                of all ages by providing high-quality, accessible education
                resources. Our mission is to make learning engaging, effective,
                and personalized, with a focus on helping students achieve their
                full potential. Whether you're a student looking to enhance your
                skills, a teacher seeking innovative tools, or a lifelong
                learner exploring new topics, we offer a range of courses,
                tutorials, and materials designed to meet your unique needs.
                With expert instructors, a collaborative community, and a
                passion for education, we strive to inspire and support the
                journey of learning for everyone.
              </div>
             
              <a href="/Courses" className="theme-btn btn-style-three">
               Browse Courses
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
                <img src="../assets/education-about-us.jpg" />
                <div className="overlay-box">
                  <div className="year-box">
                    <span className="number">5</span>Years <br /> in E-learning
                    <br /> Space
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
