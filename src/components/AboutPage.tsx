import React, { useState } from "react";
import { Facebook, Twitter, Instagram, Mail, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "./SEOHead.jsx";
import MobileMenu from "./MobileMenu";

const AboutPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="w-full bg-white overflow-hidden">
      <SEOHead
        title="About Arbor | UK Business Growth Consultancy"
        description="We're a UK-based consultancy dedicated to helping businesses grow through innovative payment solutions, strategic funding, and cutting-edge hospitality technology."
        keywords="about Arbor, UK business consultancy, payment solutions experts, business funding specialists, hospitality technology consultants, SME growth partners"
        canonicalUrl="https://arbor.com/about"
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
          <Link to="/about" className="text-[#2e7d32] text-xl font-semibold">
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
      <section className="w-full px-4 md:px-[152px] pt-[60px] pb-[80px]">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-center">
            <span className="text-[#2a2a2a]">About </span>
            <span className="text-[#2e7d32]">Arbor</span>
          </h1>

          <p className="w-full md:w-[800px] mt-[20px] md:mt-[40px] text-lg md:text-2xl font-medium leading-relaxed md:leading-[41px] text-[#575757] text-center">
            We're a UK-based consultancy dedicated to helping businesses grow
            through innovative payment solutions, strategic funding, and
            cutting-edge hospitality technology.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full px-4 md:px-[152px] py-[80px] bg-[#f9f9f9]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-[500px]">
            <div className="flex items-center mb-[20px]">
              <div className="w-[156px] h-[35px] bg-[#2e7d32]/10 rounded flex items-center justify-center">
                <span className="text-[#2e7d32] text-lg font-semibold uppercase">
                  OUR STORY
                </span>
              </div>
              <div className="w-24 h-0 border-2 border-[#2e7d32] ml-5"></div>
            </div>

            <h2 className="text-[#1e1e1e] text-4xl font-bold mb-[30px]">
              Growing Together Since 2021
            </h2>

            <p className="text-[#575757] text-xl leading-[32px] mb-[30px]">
              Arbor was founded with a simple mission: to help UK businesses
              thrive in an increasingly competitive market. What started as a
              small consultancy has grown into a comprehensive business growth
              partner for SMEs and hospitality businesses across the United
              Kingdom.
            </p>

            <p className="text-[#575757] text-xl leading-[32px]">
              Our team of experts brings decades of combined experience in
              payment solutions, business funding, and hospitality technology,
              allowing us to provide tailored solutions that drive real results
              for our clients.
            </p>
          </div>

          <div className="w-full md:w-[550px] h-[550px] relative mt-8 md:mt-0">
            <div className="w-[500px] h-[500px] bg-[#2e7d32]/10 rounded-full absolute top-0 left-0"></div>
            <div className="w-[450px] h-[450px] bg-white rounded-full absolute top-[50px] left-[50px] flex items-center justify-center">
              <div className="w-[350px] h-[350px] bg-[#f5f5f5] rounded-full flex items-center justify-center">
                <span className="text-[#2e7d32] text-9xl">🌳</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full px-4 md:px-[152px] py-[80px]">
        <h2 className="text-[#1e1e1e] text-4xl font-bold text-center mb-[60px]">
          Our Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
          {/* Growth Value */}
          <div className="bg-white rounded-[20px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)] p-[40px]">
            <div className="w-[80px] h-[80px] bg-[#2e7d32]/10 rounded-full flex items-center justify-center mb-[30px]">
              <span className="text-[#2e7d32] text-4xl">🌱</span>
            </div>

            <h3 className="text-[#1e1e1e] text-2xl font-bold mb-[20px]">
              Growth Mindset
            </h3>

            <p className="text-[#575757] text-lg leading-[28px]">
              We believe in continuous improvement and helping our clients
              achieve sustainable growth through innovative solutions and
              strategic thinking.
            </p>
          </div>

          {/* Integrity Value */}
          <div className="bg-white rounded-[20px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)] p-[40px]">
            <div className="w-[80px] h-[80px] bg-[#2e7d32]/10 rounded-full flex items-center justify-center mb-[30px]">
              <span className="text-[#2e7d32] text-4xl">🤝</span>
            </div>

            <h3 className="text-[#1e1e1e] text-2xl font-bold mb-[20px]">
              Integrity
            </h3>

            <p className="text-[#575757] text-lg leading-[28px]">
              We operate with transparency and honesty in all our dealings,
              building trust with our clients through ethical business practices
              and reliable service.
            </p>
          </div>

          {/* Innovation Value */}
          <div className="bg-white rounded-[20px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)] p-[40px]">
            <div className="w-[80px] h-[80px] bg-[#2e7d32]/10 rounded-full flex items-center justify-center mb-[30px]">
              <span className="text-[#2e7d32] text-4xl">💡</span>
            </div>

            <h3 className="text-[#1e1e1e] text-2xl font-bold mb-[20px]">
              Innovation
            </h3>

            <p className="text-[#575757] text-lg leading-[28px]">
              We constantly seek new and better ways to solve business
              challenges, embracing technology and creative thinking to deliver
              cutting-edge solutions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 md:px-[152px] py-[80px]">
        <div className="w-full bg-[#2e7d32] rounded-[20px] px-6 md:px-[60px] py-[60px] flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="max-w-[600px]">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-[25px]">
              Ready to Work With Us?
            </h2>

            <p className="text-white/90 text-lg md:text-xl mb-[40px]">
              Join the hundreds of businesses that have grown stronger with
              Arbor's expert consultancy services.
            </p>

            <Link
              to="/contact"
              className="bg-white text-[#2e7d32] text-lg font-semibold py-[15px] px-[30px] rounded-[10px] shadow-[0px_10px_20px_rgba(0,0,0,0.1)] inline-block"
            >
              Contact Our Team
            </Link>
          </div>

          <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-white/10 rounded-full flex items-center justify-center">
            <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] bg-white rounded-full flex items-center justify-center">
                <span className="text-[#2e7d32] text-4xl md:text-5xl">🌳</span>
              </div>
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

export default AboutPage;
