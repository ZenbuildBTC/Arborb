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
      <section className="w-full px-[152px] py-[80px] bg-[#f9f9f9]">
        <div className="flex justify-between items-center">
          <div className="w-[500px]">
            <div className="flex items-center mb-[20px]">
              <div className="w-[156px] h-[35px] bg-[#2e7d32]/10 rounded flex items-center justify-center">
                <span className="text-[#2e7d32] text-lg font-semibold uppercase">
                  OUR STORY
                </span>
              </div>
              <div className="w-24 h-0 border-2 border-[#2e7d32] ml-5"></div>
            </div>

            <h2 className="text-[#1e1e1e] text-4xl font-bold mb-[30px]">
              Growing Together Since 2015
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

          <div className="w-[550px] h-[550px] relative">
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
      <section className="w-full px-[152px] py-[80px]">
        <h2 className="text-[#1e1e1e] text-4xl font-bold text-center mb-[60px]">
          Our Values
        </h2>

        <div className="grid grid-cols-3 gap-[40px]">
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

      {/* Team Section */}
      <section className="w-full px-[152px] py-[80px] bg-[#f9f9f9]">
        <h2 className="text-[#1e1e1e] text-4xl font-bold text-center mb-[60px]">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-4 gap-[30px]">
          {/* Team Member 1 */}
          <div className="bg-white rounded-[20px] overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="w-full h-[300px] bg-[#e0f2e0] flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                alt="CEO"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-[30px]">
              <h3 className="text-[#1e1e1e] text-xl font-bold">James Wilson</h3>
              <p className="text-[#2e7d32] text-lg font-medium mb-[15px]">
                CEO & Founder
              </p>
              <p className="text-[#575757] text-base">
                With over 15 years of experience in business consulting and
                fintech, James leads our vision for growth.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-[20px] overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="w-full h-[300px] bg-[#e0f2e0] flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
                alt="COO"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-[30px]">
              <h3 className="text-[#1e1e1e] text-xl font-bold">
                Sarah Johnson
              </h3>
              <p className="text-[#2e7d32] text-lg font-medium mb-[15px]">
                Chief Operations Officer
              </p>
              <p className="text-[#575757] text-base">
                Sarah ensures our operations run smoothly and our clients
                receive exceptional service every time.
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-[20px] overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="w-full h-[300px] bg-[#e0f2e0] flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
                alt="CTO"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-[30px]">
              <h3 className="text-[#1e1e1e] text-xl font-bold">David Chen</h3>
              <p className="text-[#2e7d32] text-lg font-medium mb-[15px]">
                Chief Technology Officer
              </p>
              <p className="text-[#575757] text-base">
                David leads our technology initiatives, developing innovative
                solutions for payment processing and booking systems.
              </p>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="bg-white rounded-[20px] overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="w-full h-[300px] bg-[#e0f2e0] flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80"
                alt="Finance Director"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-[30px]">
              <h3 className="text-[#1e1e1e] text-xl font-bold">
                Emma Thompson
              </h3>
              <p className="text-[#2e7d32] text-lg font-medium mb-[15px]">
                Finance Director
              </p>
              <p className="text-[#575757] text-base">
                Emma oversees our funding solutions, helping businesses secure
                the capital they need to grow and thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-[152px] py-[80px]">
        <div className="w-full bg-[#2e7d32] rounded-[20px] px-[60px] py-[60px] flex justify-between items-center">
          <div className="max-w-[600px]">
            <h2 className="text-white text-4xl font-bold mb-[25px]">
              Ready to Work With Us?
            </h2>

            <p className="text-white/90 text-xl mb-[40px]">
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

          <div className="w-[300px] h-[300px] bg-white/10 rounded-full flex items-center justify-center">
            <div className="w-[200px] h-[200px] bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-[120px] h-[120px] bg-white rounded-full flex items-center justify-center">
                <span className="text-[#2e7d32] text-5xl">🌳</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#f5f5f5] px-[155px] pt-[60px] pb-[40px]">
        <div className="flex justify-between">
          <div className="w-[350px]">
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
              <p className="text-[#575757] text-base">Payment Solutions</p>
              <p className="text-[#575757] text-base">Business Funding</p>
              <p className="text-[#575757] text-base">Booking Apps</p>
              <p className="text-[#575757] text-base">Consultancy</p>
            </div>
          </div>

          <div className="w-[200px]">
            <h3 className="text-[#1e1e1e] text-lg font-bold">Company</h3>

            <div className="mt-4 space-y-2">
              <Link to="/about" className="text-[#575757] text-base block">
                About Us
              </Link>
              <p className="text-[#575757] text-base">Our Team</p>
              <p className="text-[#575757] text-base">Testimonials</p>
              <p className="text-[#575757] text-base">Blog</p>
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

        <div className="flex justify-between mt-[24px]">
          <p className="text-[#575757] text-sm">
            © 2023 Arbor. All rights reserved.
          </p>

          <div className="flex space-x-[30px]">
            <p className="text-[#575757] text-sm">Privacy Policy</p>
            <p className="text-[#575757] text-sm">Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
