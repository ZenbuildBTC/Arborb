import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  ChevronRight,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "./SEOHead.jsx";
import MobileMenu from "./MobileMenu";

const ServicesPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="w-full bg-white overflow-hidden">
      <SEOHead
        title="Services | Arbor UK Business Consultancy"
        description="Comprehensive business growth services including payment solutions, business funding, restaurant booking apps, and expert consultancy for UK businesses."
        keywords="business services UK, payment processing UK, business funding solutions, restaurant booking system, SME consultancy services, hospitality technology UK"
        canonicalUrl="https://arbor.com/services"
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
          <Link to="/services" className="text-[#2e7d32] text-xl font-semibold">
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
      <section className="w-full px-4 md:px-[152px] pt-[60px] pb-[80px]">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-center">
            <span className="text-[#2a2a2a]">Our </span>
            <span className="text-[#2e7d32]">Services</span>
          </h1>

          <p className="w-full md:w-[800px] mt-[20px] md:mt-[40px] text-lg md:text-2xl font-medium leading-relaxed md:leading-[41px] text-[#575757] text-center">
            Comprehensive business growth solutions tailored to the unique needs
            of UK SMEs and hospitality businesses.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full px-4 md:px-[152px] py-[80px] bg-[#f9f9f9]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[60px]">
          {/* Payment Solutions */}
          <div className="bg-white rounded-[20px] p-[40px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="w-[80px] h-[80px] bg-[#2e7d32]/10 rounded-full flex items-center justify-center mb-[30px]">
              <span className="text-[#2e7d32] text-4xl">💳</span>
            </div>

            <h3 className="text-[#1e1e1e] text-2xl font-bold mb-[20px]">
              Payment Solutions
            </h3>

            <p className="text-[#575757] text-lg leading-[28px] mb-[30px]">
              Streamline your payment processes with our cutting-edge solutions
              designed specifically for UK businesses. Our payment systems are
              secure, efficient, and integrate seamlessly with your existing
              infrastructure.
            </p>

            <ul className="space-y-[15px] mb-[30px]">
              <li className="flex items-start">
                <Check className="w-6 h-6 text-[#2e7d32] mr-3 mt-1" />
                <span className="text-[#575757] text-lg">
                  Contactless payment terminals
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-[#2e7d32] mr-3 mt-1" />
                <span className="text-[#575757] text-lg">
                  Online payment gateways
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-[#2e7d32] mr-3 mt-1" />
                <span className="text-[#575757] text-lg">
                  Mobile payment solutions
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-[#2e7d32] mr-3 mt-1" />
                <span className="text-[#575757] text-lg">
                  Subscription billing systems
                </span>
              </li>
            </ul>

            <Link
              to="/contact"
              className="flex items-center text-[#2e7d32] font-semibold text-lg"
            >
              Learn more <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>

          {/* Business Funding */}
          <div className="bg-white rounded-[20px] p-[40px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="w-[80px] h-[80px] bg-[#2e7d32]/10 rounded-full flex items-center justify-center mb-[30px]">
              <span className="text-[#2e7d32] text-4xl">💰</span>
            </div>

            <h3 className="text-[#1e1e1e] text-2xl font-bold mb-[20px]">
              Business Funding
            </h3>

            <p className="text-[#575757] text-lg leading-[28px] mb-[30px]">
              Access the capital you need to grow with our tailored funding
              options for small and medium enterprises. We work with a network
              of lenders to find the best financing solution for your business
              needs.
            </p>

            <ul className="space-y-[15px] mb-[30px]">
              <li className="flex items-start">
                <Check className="w-6 h-6 text-[#2e7d32] mr-3 mt-1" />
                <span className="text-[#575757] text-lg">Business loans</span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-[#2e7d32] mr-3 mt-1" />
                <span className="text-[#575757] text-lg">
                  Equipment financing
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-[#2e7d32] mr-3 mt-1" />
                <span className="text-[#575757] text-lg">
                  Invoice factoring
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-[#2e7d32] mr-3 mt-1" />
                <span className="text-[#575757] text-lg">
                  Merchant cash advances
                </span>
              </li>
            </ul>

            <Link
              to="/contact"
              className="flex items-center text-[#2e7d32] font-semibold text-lg"
            >
              Learn more <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>

          {/* Restaurant Booking Apps */}
          <div className="bg-white rounded-[20px] p-[40px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="w-[80px] h-[80px] bg-[#2e7d32]/10 rounded-full flex items-center justify-center mb-[30px]">
              <span className="text-[#2e7d32] text-4xl">📱</span>
            </div>

            <h3 className="text-[#1e1e1e] text-2xl font-bold mb-[20px]">
              Restaurant Booking Apps
            </h3>

            <p className="text-[#575757] text-lg leading-[28px] mb-[30px]">
              Enhance customer experience and streamline reservations with our
              specialized booking applications. Our apps are designed
              specifically for the hospitality industry, helping you manage
              bookings efficiently.
            </p>

            <ul className="space-y-[15px] mb-[30px]">
              <li className="flex items-start">
                <Check className="w-6 h-6 text-[#2e7d32] mr-3 mt-1" />
                <span className="text-[#575757] text-lg">
                  Online reservation systems
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-[#2e7d32] mr-3 mt-1" />
                <span className="text-[#575757] text-lg">Table management</span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-[#2e7d32] mr-3 mt-1" />
                <span className="text-[#575757] text-lg">
                  Customer database integration
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-[#2e7d32] mr-3 mt-1" />
                <span className="text-[#575757] text-lg">
                  Mobile ordering capabilities
                </span>
              </li>
            </ul>

            <Link
              to="/contact"
              className="flex items-center text-[#2e7d32] font-semibold text-lg"
            >
              Learn more <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>

          {/* Consultancy Services */}
          <div className="bg-white rounded-[20px] p-[40px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="w-[80px] h-[80px] bg-[#2e7d32]/10 rounded-full flex items-center justify-center mb-[30px]">
              <span className="text-[#2e7d32] text-4xl">🤝</span>
            </div>

            <h3 className="text-[#1e1e1e] text-2xl font-bold mb-[20px]">
              Consultancy Services
            </h3>

            <p className="text-[#575757] text-lg leading-[28px] mb-[30px]">
              Get expert advice and strategic guidance to navigate the
              complexities of business growth and technology adoption. Our
              consultants work closely with you to develop tailored strategies
              for your business.
            </p>

            <ul className="space-y-[15px] mb-[30px]">
              <li className="flex items-start">
                <Check className="w-6 h-6 text-[#2e7d32] mr-3 mt-1" />
                <span className="text-[#575757] text-lg">
                  Business growth strategies
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-[#2e7d32] mr-3 mt-1" />
                <span className="text-[#575757] text-lg">
                  Technology implementation
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-[#2e7d32] mr-3 mt-1" />
                <span className="text-[#575757] text-lg">Market analysis</span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-[#2e7d32] mr-3 mt-1" />
                <span className="text-[#575757] text-lg">
                  Operational efficiency
                </span>
              </li>
            </ul>

            <Link
              to="/contact"
              className="flex items-center text-[#2e7d32] font-semibold text-lg"
            >
              Learn more <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full px-4 md:px-[152px] py-[80px]">
        <h2 className="text-[#1e1e1e] text-3xl md:text-4xl font-bold text-center mb-[40px] md:mb-[60px]">
          Our Process
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative space-y-12 md:space-y-0">
          {/* Step 1 */}
          <div className="w-full md:w-[250px] flex flex-col items-center text-center z-10">
            <div className="w-[80px] h-[80px] bg-[#2e7d32] rounded-full flex items-center justify-center mb-[20px] text-white text-2xl font-bold">
              1
            </div>

            <h3 className="text-[#1e1e1e] text-xl font-bold mb-[15px]">
              Consultation
            </h3>

            <p className="text-[#575757] text-base">
              We begin with a thorough consultation to understand your business
              needs and goals.
            </p>
          </div>

          {/* Step 2 */}
          <div className="w-full md:w-[250px] flex flex-col items-center text-center z-10">
            <div className="w-[80px] h-[80px] bg-[#2e7d32] rounded-full flex items-center justify-center mb-[20px] text-white text-2xl font-bold">
              2
            </div>

            <h3 className="text-[#1e1e1e] text-xl font-bold mb-[15px]">
              Strategy Development
            </h3>

            <p className="text-[#575757] text-base">
              Our team develops a tailored strategy based on your specific
              requirements and market conditions.
            </p>
          </div>

          {/* Step 3 */}
          <div className="w-full md:w-[250px] flex flex-col items-center text-center z-10">
            <div className="w-[80px] h-[80px] bg-[#2e7d32] rounded-full flex items-center justify-center mb-[20px] text-white text-2xl font-bold">
              3
            </div>

            <h3 className="text-[#1e1e1e] text-xl font-bold mb-[15px]">
              Implementation
            </h3>

            <p className="text-[#575757] text-base">
              We implement the solutions efficiently, ensuring minimal
              disruption to your business operations.
            </p>
          </div>

          {/* Step 4 */}
          <div className="w-full md:w-[250px] flex flex-col items-center text-center z-10">
            <div className="w-[80px] h-[80px] bg-[#2e7d32] rounded-full flex items-center justify-center mb-[20px] text-white text-2xl font-bold">
              4
            </div>

            <h3 className="text-[#1e1e1e] text-xl font-bold mb-[15px]">
              Ongoing Support
            </h3>

            <p className="text-[#575757] text-base">
              We provide continuous support and optimization to ensure long-term
              success and growth.
            </p>
          </div>

          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[40px] left-[165px] w-[920px] h-[2px] bg-[#e0e0e0]"></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full px-4 md:px-[152px] py-[80px] bg-[#f9f9f9]">
        <h2 className="text-[#1e1e1e] text-3xl md:text-4xl font-bold text-center mb-[40px] md:mb-[60px]">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-[20px] p-[40px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="flex items-center mb-[20px]">
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden mr-[15px]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                  alt="Client"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-[#1e1e1e] text-lg font-bold">
                  Michael Brown
                </h4>
                <p className="text-[#575757] text-sm">Restaurant Owner</p>
              </div>
            </div>

            <p className="text-[#575757] text-lg italic">
              "Arbor's booking app has transformed our reservation process.
              We've seen a 30% increase in bookings and our staff can manage
              tables more efficiently than ever before."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-[20px] p-[40px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="flex items-center mb-[20px]">
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden mr-[15px]">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
                  alt="Client"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-[#1e1e1e] text-lg font-bold">
                  Rebecca Taylor
                </h4>
                <p className="text-[#575757] text-sm">Retail Business Owner</p>
              </div>
            </div>

            <p className="text-[#575757] text-lg italic">
              "The payment solution Arbor implemented for our retail stores has
              streamlined our operations and improved customer satisfaction. The
              team was professional and knowledgeable throughout the process."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-[20px] p-[40px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="flex items-center mb-[20px]">
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden mr-[15px]">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
                  alt="Client"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-[#1e1e1e] text-lg font-bold">
                  Daniel Smith
                </h4>
                <p className="text-[#575757] text-sm">Tech Startup Founder</p>
              </div>
            </div>

            <p className="text-[#575757] text-lg italic">
              "Arbor helped us secure the funding we needed to scale our
              business at a critical time. Their expertise in the UK market and
              connections with lenders made all the difference."
            </p>
          </div>
        </div>
      </section>

      {/* AI Websites Section */}
      <section className="w-full px-4 md:px-[152px] py-[80px] bg-[#f9f9f9]">
        <div className="flex flex-col items-center mb-[40px]">
          <div className="flex items-center mb-[20px]">
            <div className="w-[156px] h-[35px] bg-[#2e7d32]/10 rounded flex items-center justify-center">
              <span className="text-[#2e7d32] text-lg font-semibold uppercase">
                NEW SERVICE
              </span>
            </div>
            <div className="w-24 h-0 border-2 border-[#2e7d32] ml-5"></div>
          </div>
          <h2 className="text-[#1e1e1e] text-3xl md:text-4xl font-bold mb-[20px] text-center">
            Free AI-Built Websites
          </h2>
        </div>

        <div className="max-w-[900px] mx-auto bg-white rounded-[20px] p-[40px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
          <p className="text-[#575757] text-lg md:text-xl leading-[32px] mb-[30px]">
            Arbor is proud to offer{" "}
            <span className="font-bold text-[#2e7d32]">
              completely free AI-built websites
            </span>{" "}
            for retail businesses across the UK. Our cutting-edge AI technology
            creates professional, responsive brochure websites that effectively
            showcase your products and services without any cost to your
            business.
          </p>

          <p className="text-[#575757] text-lg md:text-xl leading-[32px] mb-[30px]">
            Each free website includes 5 professionally designed pages with
            modern layouts, responsive design for all devices, and SEO
            optimization to help customers find your business online. For
            businesses requiring additional content, we offer an affordable
            expansion option of 5 more pages for just £200.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-[30px]">
            <div className="bg-[#f9f9f9] rounded-[15px] p-[20px]">
              <h4 className="text-[#1e1e1e] text-lg font-bold mb-[10px]">
                What's Included:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#2e7d32] mr-2">✓</span>
                  <span className="text-[#575757]">
                    5 professionally designed pages
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2e7d32] mr-2">✓</span>
                  <span className="text-[#575757]">
                    Mobile-responsive design
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2e7d32] mr-2">✓</span>
                  <span className="text-[#575757]">SEO optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2e7d32] mr-2">✓</span>
                  <span className="text-[#575757]">
                    Contact form integration
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2e7d32] mr-2">✓</span>
                  <span className="text-[#575757]">Fast loading speeds</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] rounded-[15px] p-[20px]">
              <h4 className="text-[#1e1e1e] text-lg font-bold mb-[10px]">
                Perfect For:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#2e7d32] mr-2">✓</span>
                  <span className="text-[#575757]">
                    Retail stores and boutiques
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2e7d32] mr-2">✓</span>
                  <span className="text-[#575757]">
                    Professional service providers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2e7d32] mr-2">✓</span>
                  <span className="text-[#575757]">Restaurants and cafés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2e7d32] mr-2">✓</span>
                  <span className="text-[#575757]">Beauty salons and spas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2e7d32] mr-2">✓</span>
                  <span className="text-[#575757]">
                    Fitness studios and gyms
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Link
              to="/contact"
              className="bg-[#2e7d32] text-white text-lg font-semibold py-[15px] px-[30px] rounded-[10px] shadow-[0px_10px_20px_rgba(0,0,0,0.1)] inline-block"
            >
              Request Your Free Website
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 md:px-[152px] py-[80px]">
        <div className="w-full bg-[#2e7d32] rounded-[20px] px-6 md:px-[60px] py-[60px] flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="max-w-[600px]">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-[25px]">
              Ready to Transform Your Business?
            </h2>

            <p className="text-white/90 text-lg md:text-xl mb-[40px]">
              Contact us today to discuss how our services can help your
              business grow and thrive in the competitive UK market.
            </p>

            <Link
              to="/contact"
              className="bg-white text-[#2e7d32] text-lg font-semibold py-[15px] px-[30px] rounded-[10px] shadow-[0px_10px_20px_rgba(0,0,0,0.1)] inline-block"
            >
              Get in Touch
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

export default ServicesPage;
