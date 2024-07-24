import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Welcome to Saurav's Taste Journey.</p>
            </div>
            <p className="mid">
           
 Discover a world of flavors at Saurav's Taste Journey, where culinary creativity meets exceptional quality.
 Our diverse menu, crafted with passion and the finest ingredients, promises an unforgettable dining experience. 
 Join us for a delightful adventure through exquisite tastes and memorable moments.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;