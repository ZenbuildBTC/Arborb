import React, { useState } from "react";
import { Facebook, Twitter, Instagram, Mail, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "./SEOHead.jsx";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";

const ArborWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white overflow-hidden">
      <SEOHead
        title="Arbor Pay Go | UK Business Growth Consultancy for Payment Solutions & Funding"
        description="UK-based consultancy specializing in payment solutions, business funding, and restaurant booking apps for SMEs and hospitality businesses."
        keywords="business consultancy UK, payment solutions, business funding, restaurant booking apps, SME consultancy, hospitality technology"
        canonicalUrl="https://arborpaygo.com"
      />
      {/* Navbar */}
      <nav className="w-full h-[60px] px-4 md:px-[152px] py-[15px] flex justify-between items-center">
        <Link to="/" className="text-[#2e7d32] text-2xl font-bold">
          Arbor Pay Go
        </Link>

        <div className="hidden md:flex space-x-[60px]">
          <Link to="/" className="text-[#2a2a2a] text-xl font-semibold">
            Home
          </Link>
          <Link to="/services" className="text-[#2a2a2a] text-xl font-semibold">
            Services
          </Link>
          <Link
            to="/solutions"
            className="text-[#2a2a2a] text-xl font-semibold"
          >
            Solutions
          </Link>
          <Link to="/about" className="text-[#2a2a2a] text-xl font-semibold">
            About
          </Link>
          <Link to="/contact" className="text-[#2a2a2a] text-xl font-semibold">
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#2e7d32]"
          onClick={() => setMobileMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      </nav>

      {/* Hero Section */}
      <section className="w-full px-4 md:px-[152px] pt-[60px] pb-[80px] flex flex-col md:flex-row">
        <div className="w-full md:w-[742px] flex flex-col">
          <h1 className="text-4xl md:text-[86px] font-semibold leading-tight md:leading-[98px]">
            <span className="text-[#2a2a2a]">Grow Stronger </span>
            <span className="text-[#2e7d32]">with Arbor Pay Go</span>
          </h1>

          <p className="w-full md:w-[600px] mt-[20px] md:mt-[40px] text-lg md:text-2xl font-medium leading-relaxed md:leading-[41px] text-[#575757]">
            UK-based consultancy specializing in payment solutions, business
            funding, and restaurant booking apps for SMEs and hospitality
            businesses.
          </p>

          <div className="mt-[30px] md:mt-[60px] flex space-x-[20px]">
            <Link
              to="/contact"
              className="w-full md:w-[192px] h-[60px] md:h-[76px] bg-[#2e7d32] rounded shadow-[0px_15px_26px_0px_rgba(0,0,0,0.03)] text-white text-xl font-semibold flex items-center justify-center"
              onClick={() => window.scrollTo(0, 0)}
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="w-full md:w-[628px] h-[400px] md:h-[663px] relative mt-8 md:mt-0 overflow-hidden">
          {/* Circular elements */}
          <div className="w-[607px] h-[607px] absolute left-0 top-[22px] rounded-full border-2 border-[#e8e8e8]"></div>
          <div className="w-[399px] h-[399px] absolute left-[104px] top-[126px] rounded-full border-2 border-[#e8e8e8]"></div>

          {/* Decorative elements */}
          <div className="w-[68px] h-[68px] absolute left-[57px] top-[68px] -rotate-6 bg-[#4caf50] rounded-full shadow-[0px_10px_20px_0px_rgba(76,175,80,0.20)]"></div>
          <div className="w-[55px] h-[55px] absolute left-[573px] top-[360px] bg-[#81fd9b] rounded-full shadow-[0px_20px_20px_0px_rgba(63,212,94,0.20)] flex justify-center items-center">
            <span className="text-white text-2xl font-semibold rotate-6">
              £
            </span>
          </div>
          <div className="w-[48px] h-[48px] absolute left-[95px] top-[235px] -rotate-6 bg-[#2e7d32] rounded-full shadow-[0px_10px_26px_0px_rgba(46,125,50,0.20)]"></div>

          {/* Chart 1 */}
          <div className="w-[521px] h-[360px] absolute left-[24px] top-[303px] bg-white rounded-tl-[35px] rounded-tr rounded-bl rounded-br-[35px] shadow-[15px_20px_60px_0px_rgba(0,0,0,0.08)]">
            <div className="flex justify-between px-[30px] absolute bottom-[30px] w-full">
              <span className="text-[#a6a6a6] text-xl font-semibold">10</span>
              <span className="text-[#a6a6a6] text-xl font-semibold">20</span>
              <span className="text-[#a6a6a6] text-xl font-semibold">30</span>
              <span className="text-[#a6a6a6] text-xl font-semibold">40</span>
              <span className="text-[#a6a6a6] text-xl font-semibold">50</span>
              <span className="text-[#a6a6a6] text-xl font-semibold">60</span>
              <span className="text-[#a6a6a6] text-xl font-semibold">70</span>
            </div>

            {/* Chart elements */}
            <div className="relative mt-[40px] mx-[40px]">
              {/* Red dot and tooltip */}
              <div className="w-[19px] h-[19px] absolute left-[56px] top-[168px] bg-[#ff8181] rounded-full">
                <div className="w-[11px] h-[11px] absolute left-[4px] top-[4px] bg-[#fbdada] rounded-full"></div>
              </div>
              <div className="w-[79px] h-[31px] absolute left-[28px] top-[118px] bg-[#ff8181] rounded-sm flex justify-center items-center">
                <span className="text-white text-xl font-semibold">24.08</span>
              </div>

              {/* Green dot and tooltip */}
              <div className="w-[19px] h-[19px] absolute left-[320px] top-[40px] bg-[#4caf50] rounded-full">
                <div className="w-[11px] h-[11px] absolute left-[4px] top-[4px] bg-[#e0f2e0] rounded-full"></div>
              </div>
              <div className="w-[79px] h-[33px] absolute left-[290px] top-0 bg-[#4caf50] rounded-sm flex justify-center items-center">
                <span className="text-white text-xl font-semibold">48.09</span>
              </div>
            </div>
          </div>

          {/* Chart 2 */}
          <div className="w-[385px] h-[303px] absolute left-[233px] top-0 bg-white rounded-tl-[35px] rounded-tr rounded-bl rounded-br-[35px] shadow-[14px_30px_60px_0px_rgba(0,0,0,0.12)]">
            <div className="w-[293px] h-[260px] mx-auto mt-[17px]">
              <h3 className="text-[#2e7d32]/80 text-[22px] font-black tracking-tight">
                Growth
              </h3>

              <div className="mt-[20px] relative h-[220px]">
                {/* Bar chart */}
                <div className="absolute bottom-[40px] left-0 w-10 h-[68px] bg-[#fde354] rounded-md"></div>
                <div className="absolute bottom-[40px] left-[83px] w-10 h-[125px] bg-[#ff8080] rounded-md"></div>
                <div className="absolute bottom-[40px] left-[166px] w-10 h-[175px] bg-[#80ff9c] rounded-md"></div>
                <div className="absolute bottom-[40px] left-[249px] w-10 h-[214px] bg-[#2e7d32] rounded-md"></div>

                {/* X-axis labels */}
                <div className="absolute bottom-0 left-0 w-full flex justify-between">
                  <span className="text-[#a6a6a6] text-xl font-semibold">
                    Q1
                  </span>
                  <span className="text-[#a6a6a6] text-xl font-semibold">
                    Q2
                  </span>
                  <span className="text-[#a6a6a6] text-xl font-semibold">
                    Q3
                  </span>
                  <span className="text-[#a6a6a6] text-xl font-semibold">
                    Q4
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full px-4 md:px-[155px] py-[60px]">
        <h2 className="text-[#1e1e1e] text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Why Choose Arbor Pay Go
        </h2>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-[30px]">
          {/* Growth Card */}
          <div className="w-full md:w-[430px] h-auto md:h-[403px] rounded-tl-[35px] rounded-tr rounded-bl rounded-br-[35px] border-2 border-[#d5dddd] p-5 md:p-[35px] relative bg-white">
            <div className="w-[75px] h-[75px] bg-[#e0f2e0] rounded-full flex items-center justify-center">
              <span className="text-[#2e7d32] text-3xl">📈</span>
            </div>

            <h3 className="text-[#1e1e1e] text-2xl font-bold mt-6">Growth</h3>

            <p className="text-[#575757] text-xl font-medium mt-4">
              We help your business grow with strategic payment solutions and
              funding opportunities tailored to your specific needs.
            </p>
          </div>

          {/* Efficiency Card */}
          <div className="w-full md:w-[430px] h-auto md:h-[403px] bg-[#2e7d32] rounded-tl-[35px] rounded-tr rounded-bl rounded-br-[35px] p-5 md:p-[35px] relative">
            <div className="w-[75px] h-[75px] bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white text-3xl">⚡</span>
            </div>

            <h3 className="text-white text-2xl font-bold mt-6">Efficiency</h3>

            <p className="text-white text-xl font-medium mt-4">
              Our restaurant booking apps streamline operations and enhance
              customer experience, saving you time and resources.
            </p>
          </div>

          {/* Expertise Card */}
          <div className="w-full md:w-[430px] h-auto md:h-[403px] rounded-tl-[35px] rounded-tr rounded-bl rounded-br-[35px] border-2 border-[#d5dddd] p-5 md:p-[35px] relative bg-white">
            <div className="w-[75px] h-[75px] bg-[#e0f2e0] rounded-full flex items-center justify-center">
              <span className="text-[#2e7d32] text-3xl">🧠</span>
            </div>

            <h3 className="text-[#1e1e1e] text-2xl font-bold mt-6">
              Expertise
            </h3>

            <p className="text-[#575757] text-xl font-medium mt-4">
              Our team of experts brings years of industry experience to help
              you navigate complex financial and technological landscapes.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArborWebsite;
