"use client";
import React from "react";

function Intro() {
  function openAccordion(event) {
    document.querySelectorAll(".accordion-info").forEach((element) => {
      element.classList.remove("active");
      element.style.maxHeight = 0;
      element.parentElement.classList.remove("active");
    });
    event.currentTarget.parentElement.classList.add("active");
    event.currentTarget.nextElementSibling.style.maxHeight = "300px";
    event.currentTarget.nextElementSibling.classList.add("active");
  }
  return (
    <div>
      <section className="intro section-padding">
        <div className="container">
          <div className="row lg-marg">
            <div className="col-lg-8">
              <div className="row lg-marg">
                <div className="col-md-6">
                  <div>
                    <h6 className="sub-title main-color mb-15">Description</h6>
                    <h3 className="mb-30">
                      We believe in the power of{" "}
                      <span className="fw-300">individual</span>{" "}
                      <span className="fw-300">contribution.</span>
                    </h3>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text">
                    <p className="mb-15">
                      At Sole Digital Media, we offer a comprehensive range of
                      digital marketing services designed to elevate your
                      brand’s online presence and drive measurable results. Our
                      expert team employs cutting-edge strategies and innovative
                      solutions tailored to meet your business needs. Explore
                      our core services below to see how we can help you achieve
                      your marketing goals
                    </p>
                    <p>
                      Taken possession of my entire soul, like these sweet
                      mornings of spring which i enjoy with my whole.
                    </p>

                    <div className="mt-30">
                      <ul className="rest dot-list">
                        <li className="mb-10">Front-End Development</li>
                        <li className="mb-10">Back-End Development</li>
                        <li className="mb-10">Full-Stack Solutions</li>
                        <li className="mb-10">CMS & E-commerce Integration</li>
                        <li className="mb-10">CMS & E-commerce Integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="numbers mt-80 md-mb50">
                <div className="row lg-marg">
                  <div className="col-md-6">
                    <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20 sm-mb30">
                      <div>
                        <h3 className="fw-300 mb-10">100%</h3>
                        <h6 className="p-color sub-title">
                          Clients Satisfaction
                        </h6>
                      </div>
                      <div className="ml-auto">
                        <div className="icon-img-40">
                          <img src="/assets/imgs/arw0.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                      <div>
                        <h3 className="fw-300 mb-10">6700</h3>
                        <h6 className="p-color sub-title">
                          Projects Completed
                        </h6>
                      </div>
                      <div className="ml-auto">
                        <div className="icon-img-40">
                          <img src="/assets/imgs/arw0.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img-full fit-img">
                <img src="/assets/imgs/intro/2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="intro-accord">
        <div className="container ontop">
          <div className="row xlg-marg">
            <div className="col-lg-6">
              <div className="img md-mb50">
                <img src="/assets/imgs/arw2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 valign">
              <div>
                <div className="sec-head mb-50">
                  <h6 className="sub-title main-color mb-15">Why choose us?</h6>
                  <h3>
                    The creative process behind <br /> our digital marketing.
                  </h3>
                </div>
                <div className="accordion bord">
                  <div
                    className="item active wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <div onClick={openAccordion} className="title">
                      <h6>Designing Content With AI Power</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        Taken possession of my entire soul, like these sweet
                        mornings of spring which i enjoy with my whole.
                      </p>
                    </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".3s">
                    <div onClick={openAccordion} className="title">
                      <h6>Talented, Professional & Expert Team</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        Taken possession of my entire soul, like these sweet
                        mornings of spring which i enjoy with my whole.
                      </p>
                    </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".5s">
                    <div onClick={openAccordion} className="title">
                      <h6>We Build and Activate Brands</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        Taken possession of my entire soul, like these sweet
                        mornings of spring which i enjoy with my whole.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;
