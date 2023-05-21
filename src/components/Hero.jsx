import React from "react";

const Hero = ({ titleBlogs }) => {
  return (
    <div>
      <div className="wrapper-hero relative">
        <div className="caption-hero relative sm:text-7xl text-4xl text-white flex justify-center items-center text-center">
          @kareltrisnanto <br />
          {titleBlogs}
        </div>
      </div>
    </div>
  );
};

export default Hero;
