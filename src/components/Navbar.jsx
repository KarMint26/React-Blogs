import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bgHero from "../assets/Home.jpg";

const Navbar = ({ title }) => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const buttonClicked = () => {
    const hamburgerButton = document.getElementById("hamburger");
    setToggleNavbar((prev) => !prev);
    hamburgerButton.classList.toggle("sp-active");
  };
  window.onscroll = () => {
    const navbar = document.querySelector(".navbar");
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      navbar.classList.add("nav-active");
    } else {
      navbar.classList.remove("nav-active");
    }
  };
  return (
    <div>
      <div className="navbar fixed top-0 left-0 bg-teal-300 w-full flex px-7 z-[9999] py-4 justify-between items-center sm:py-5 sm:px-16 text-xl">
        <div className="navbar-brand">
          <h1 className="title-nav sm:text-white text-slate-700 font-semibold font-serif sm:text-[1.58rem] hover:scale-105 transition duration-300 cursor-pointer">
            {title}
          </h1>
        </div>

        {/* Tablet and Desktop View */}
        <div className="navbar-link hidden sm:flex gap-10">
          <Link
            className="link-item sm:text-white sm:hover:text-white/90 transition"
            to="/"
          >
            Home
          </Link>
          <Link
            className="link-item sm:text-white sm:hover:text-white/90 transition"
            to="/blogs"
          >
            Blogs
          </Link>
          <Link
            className="link-item sm:text-white sm:hover:text-white/90 transition"
            to="/about"
          >
            About
          </Link>
        </div>

        {/* Mobile View */}
        <button
          id="hamburger"
          className="hamburger-toggle sm:hidden flex flex-col justify-center items-center"
          onClick={() => buttonClicked()}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {toggleNavbar ? (
          <div className="navbar-link sm:hidden gap-5 sm:gap-10 absolute top-20 right-5 flex flex-col rounded-lg bg-teal-300 py-4 px-8 text-white font-semibold shadow-lg">
            <Link className="link-item" to="/">
              Home
            </Link>
            <Link className="link-item" to="/blogs">
              Blogs
            </Link>
            <Link className="link-item" to="/about">
              About
            </Link>
          </div>
        ) : (
          <div className="navbar-link hidden sm:hidden gap-5 sm:gap-10 absolute top-20 right-10 flex-col rounded-lg bg-teal-300 py-4 px-8 text-white font-semibold shadow-lg">
            <Link className="link-item" to="/">
              Home
            </Link>
            <Link className="link-item" to="/blogs">
              Blogs
            </Link>
            <Link className="link-item" to="/about">
              About
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
