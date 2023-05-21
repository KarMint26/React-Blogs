import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-10 gap-1 py-2">
      <div className="footer-title">
        <h3 className="text-xl">Made with ❤ in Indonesia</h3>
      </div>
      <div className="footer-content flex gap-4 text-lg">
        <a
          target="_blank"
          href="https://react.dev"
          className="text-indigo-500 font-sans font-semibold"
        >
          ReactJS
        </a>
        <a
          target="_blank"
          href="https://tailwindcss.com"
          className="text-[#01B7D6] font sans font font-semibold"
        >
          Tailwindcss
        </a>
      </div>
    </div>
  );
};

export default Footer;
