import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f5f5f5] px-4 md:px-[155px] pt-[60px] pb-[40px]">
      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        <div className="w-full md:w-[350px]">
          <h2 className="text-[#2e7d32] text-2xl font-bold">Arbor Pay Go</h2>
          <p className="text-[#575757] text-base mt-4">
            UK-based business growth consultancy specializing in payment
            solutions, business funding, and restaurant booking apps.
          </p>
        </div>

        <div className="w-[200px]">
          <h3 className="text-[#1e1e1e] text-lg font-bold">Services</h3>

          <div className="mt-4 space-y-2">
            <Link to="/services" className="text-[#575757] text-base block">
              Payment Solutions
            </Link>
            <Link to="/services" className="text-[#575757] text-base block">
              Business Funding
            </Link>
            <Link to="/services" className="text-[#575757] text-base block">
              Booking Apps
            </Link>
            <Link to="/services" className="text-[#575757] text-base block">
              Consultancy
            </Link>
          </div>
        </div>

        <div className="w-[200px]">
          <h3 className="text-[#1e1e1e] text-lg font-bold">Company</h3>

          <div className="mt-4 space-y-2">
            <Link to="/about" className="text-[#575757] text-base block">
              About Us
            </Link>
            <Link to="/testimonials" className="text-[#575757] text-base block">
              Testimonials
            </Link>
            <Link to="/blog" className="text-[#575757] text-base block">
              Blog
            </Link>
          </div>
        </div>

        <div className="w-[250px]">
          <h3 className="text-[#1e1e1e] text-lg font-bold">Contact</h3>

          <div className="mt-4 space-y-2">
            <p className="text-[#575757] text-base">hello@arborpaygo.com</p>
            <p className="text-[#575757] text-base">
              167-169 Great Portland Street, 5th Floor, London, W1W 5PF
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-0 border-t border-[#e0e0e0] mt-[50px]"></div>

      <div className="flex flex-col md:flex-row justify-between mt-[24px] space-y-4 md:space-y-0">
        <p className="text-[#575757] text-sm">
          © 2024 Arbor Pay Go. All rights reserved.
        </p>

        <div className="flex space-x-[30px]">
          <Link
            to="/privacy-policy"
            className="text-[#575757] text-sm hover:text-[#2e7d32]"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="text-[#575757] text-sm hover:text-[#2e7d32]"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
