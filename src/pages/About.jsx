import React from "react";
import Hero from "../components/Hero";
import myProfile from "../assets/my-profile.jpg";

const About = () => {
  const titleAbout = "About Me";
  return (
    <div>
      <Hero titleBlogs={titleAbout} />
      <div className="wrapper flex gap-14 justify-center items-center px-20 py-10 mt-10">
        <img
          src={myProfile}
          alt="my-profile"
          className="aspect-square object-cover rounded-lg shadow-lg"
        />
        <div className="content text-slate-600 flex flex-col gap-5">
          <div className="title text-3xl font-bold">
            Hi, I'm Front End <br /> Web Developer Enthusiast
          </div>
          <div className="content-inner">
            <p className="leading-7">
              Hello, I am an informatics engineering student and <br /> I am an
              activist in the field of front end web developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
