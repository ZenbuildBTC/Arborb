import React, { useState } from "react";
import { Facebook, Twitter, Instagram, Mail, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "./SEOHead.jsx";
import MobileMenu from "./MobileMenu";

const ArborWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white overflow-hidden">
      <SEOHead
        title="Arbor | UK Business Growth Consultancy for Payment Solutions & Funding"
        description="UK-based consultancy specializing in payment solutions, business funding, and restaurant booking apps for SMEs and hospitality businesses."
        keywords="business consultancy UK, payment solutions, business funding, restaurant booking apps, SME consultancy, hospitality technology"
        canonicalUrl="https://arbor.com"
      />
      {/* Navbar */}
      <nav className="w-full h-[60px] px-4 md:px-[152px] py-[15px] flex justify-between items-center">
        <Link to="/" className="text-[#2e7d32] text-2xl font-bold">
          Arbor
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
            <span className="text-[#2e7d32]">with Arbor</span>
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
          Why Choose Arbor
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
              Our restaurant booking apps and payment solutions streamline your
              operations, saving you time and resources.
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
              With years of experience in the UK market, our consultants provide
              expert guidance for SMEs and hospitality businesses.
            </p>
          </div>
        </div>
      </section>

      {/* AI Websites Section */}
      <section className="w-full px-4 md:px-[155px] py-[60px] bg-[#f9f9f9]">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="w-full md:w-[600px]">
            <h2 className="text-[#1e1e1e] text-3xl md:text-4xl font-bold mb-[30px]">
              Free AI-Built Websites for Retail Businesses
            </h2>

            <p className="text-[#575757] text-lg md:text-xl leading-[32px] mb-[30px]">
              Arbor is proud to offer{" "}
              <span className="font-bold text-[#2e7d32]">
                free AI-built websites
              </span>{" "}
              for retail businesses in the UK. Our cutting-edge AI technology
              creates professional, responsive brochure websites that showcase
              your products and services effectively.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] mb-[30px]">
              <div className="bg-white rounded-[15px] p-[20px] shadow-[0px_5px_15px_rgba(0,0,0,0.05)]">
                <h4 className="text-[#1e1e1e] text-lg font-bold mb-[10px]">
                  5 Pages Free
                </h4>
                <p className="text-[#575757] text-base">
                  Get up to 5 professionally designed pages at no cost to your
                  business.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-[20px] shadow-[0px_5px_15px_rgba(0,0,0,0.05)]">
                <h4 className="text-[#1e1e1e] text-lg font-bold mb-[10px]">
                  Additional Pages
                </h4>
                <p className="text-[#575757] text-base">
                  Need more content? Add 5 more pages for just £200.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-[20px] shadow-[0px_5px_15px_rgba(0,0,0,0.05)]">
                <h4 className="text-[#1e1e1e] text-lg font-bold mb-[10px]">
                  Mobile Responsive
                </h4>
                <p className="text-[#575757] text-base">
                  All websites are fully responsive and look great on any
                  device.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-[20px] shadow-[0px_5px_15px_rgba(0,0,0,0.05)]">
                <h4 className="text-[#1e1e1e] text-lg font-bold mb-[10px]">
                  Quick Turnaround
                </h4>
                <p className="text-[#575757] text-base">
                  Get your professional website up and running in days, not
                  weeks.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="bg-[#2e7d32] text-white text-lg font-semibold py-[15px] px-[30px] rounded-[10px] shadow-[0px_10px_20px_rgba(0,0,0,0.1)] inline-block"
            >
              Get Your Free Website
            </Link>
          </div>

          <div className="w-full md:w-[500px] h-[400px] md:h-[500px] relative">
            <div className="w-full h-full bg-white rounded-[20px] shadow-[0px_20px_50px_rgba(0,0,0,0.1)] p-[20px] relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=800&q=80"
                alt="AI Website Design"
                className="w-full h-full object-cover rounded-[10px]"
              />
              <div className="absolute inset-0 bg-[#2e7d32]/10 rounded-[10px]"></div>
              <div className="absolute bottom-0 left-0 w-full bg-white/80 p-[20px]">
                <h3 className="text-[#2e7d32] text-2xl font-bold">
                  AI-Powered Design
                </h3>
                <p className="text-[#575757] text-lg">
                  Modern websites for retail businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 md:px-[155px] py-[60px]">
        <div className="w-full h-auto md:h-[400px] bg-[#2e7d32] rounded-tl-[35px] rounded-tr-lg rounded-bl-lg rounded-br-[35px] px-6 md:px-[75px] py-10 md:py-[68px] flex flex-col md:flex-row justify-between">
          <div className="w-full md:max-w-[626px]">
            <h2 className="text-white text-4xl font-bold leading-tight">
              Ready to grow your business with Arbor?
            </h2>

            <p className="text-white/90 text-xl font-medium mt-6 mb-10">
              Contact us today to learn how our consultancy services can help
              your business thrive.
            </p>

            <Link
              to="/contact"
              className="w-full md:w-[200px] h-[60px] bg-white rounded flex items-center justify-center"
            >
              <span className="text-[#2e7d32] text-xl font-semibold">
                Contact Us
              </span>
            </Link>
          </div>

          <div className="relative hidden md:block">
            <div className="w-[350px] h-[350px] bg-[#4caf50] rounded-full opacity-30"></div>
            <div className="w-[250px] h-[250px] bg-[#4caf50] rounded-full absolute top-[50px] left-[50px] opacity-50"></div>
            <div className="w-[150px] h-[150px] bg-white rounded-full absolute top-[100px] left-[100px] flex items-center justify-center">
              <span className="text-[#2e7d32] text-5xl">🌳</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#f5f5f5] px-4 md:px-[155px] pt-[60px] pb-[40px]">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          <div className="w-full md:w-[350px]">
            <h2 className="text-[#2e7d32] text-2xl font-bold">Arbor</h2>
            <p className="text-[#575757] text-base mt-4">
              UK-based business growth consultancy specializing in payment
              solutions, business funding, and restaurant booking apps.
            </p>

            <div className="mt-[30px] flex space-x-4">
              <Facebook className="w-6 h-6 text-[#2e7d32]" />
              <Twitter className="w-6 h-6 text-[#2e7d32]" />
              <Instagram className="w-6 h-6 text-[#2e7d32]" />
            </div>
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
              <Link to="/about" className="text-[#575757] text-base block">
                Our Team
              </Link>
              <Link
                to="/testimonials"
                className="text-[#575757] text-base block"
              >
                Testimonials
              </Link>
            </div>
          </div>

          <div className="w-[250px]">
            <h3 className="text-[#1e1e1e] text-lg font-bold">Contact</h3>

            <div className="mt-4 space-y-2">
              <p className="text-[#575757] text-base">contact@arbor.com</p>
              <p className="text-[#575757] text-base">+44 (0) 123 456 7890</p>
              <p className="text-[#575757] text-base">London, United Kingdom</p>
            </div>
          </div>
        </div>

        <div className="w-full h-0 border-t border-[#e0e0e0] mt-[50px]"></div>

        <div className="flex flex-col md:flex-row justify-between mt-[24px] space-y-4 md:space-y-0">
          <p className="text-[#575757] text-sm">
            © 2023 Arbor. All rights reserved.
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
    </div>
  );
};

export default ArborWebsite;
