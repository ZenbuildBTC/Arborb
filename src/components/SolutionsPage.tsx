import React, { useState } from "react";
import { Facebook, Twitter, Instagram, Mail, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "./SEOHead.jsx";
import MobileMenu from "./MobileMenu";

const SolutionsPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="w-full bg-white overflow-hidden">
      <SEOHead
        title="Solutions | Arbor UK Business Growth Technology"
        description="Innovative technology solutions designed to help UK businesses streamline operations, increase revenue, and enhance customer experience."
        keywords="payment solutions UK, business funding options, restaurant booking technology, hospitality apps UK, SME technology solutions, business growth technology"
        canonicalUrl="https://arbor.com/solutions"
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
            className="text-[#2e7d32] text-xl font-semibold"
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
            <span className="text-[#2e7d32]">Solutions</span>
          </h1>

          <p className="w-full md:w-[800px] mt-[20px] md:mt-[40px] text-lg md:text-2xl font-medium leading-relaxed md:leading-[41px] text-[#575757] text-center">
            Innovative technology solutions designed to help UK businesses
            streamline operations, increase revenue, and enhance customer
            experience.
          </p>
        </div>
      </section>

      {/* Payment Solutions */}
      <section className="w-full px-4 md:px-[152px] py-[80px] bg-[#f9f9f9]">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="w-full md:w-[500px]">
            <div className="flex items-center mb-[20px]">
              <div className="w-[156px] h-[35px] bg-[#2e7d32]/10 rounded flex items-center justify-center">
                <span className="text-[#2e7d32] text-lg font-semibold uppercase">
                  SOLUTION
                </span>
              </div>
              <div className="w-24 h-0 border-2 border-[#2e7d32] ml-5"></div>
            </div>

            <h2 className="text-[#1e1e1e] text-3xl md:text-4xl font-bold mb-[30px]">
              Payment Solutions
            </h2>

            <p className="text-[#575757] text-lg md:text-xl leading-[32px] mb-[30px]">
              Our payment solutions are designed to streamline transactions,
              reduce costs, and enhance security for businesses of all sizes.
              From contactless terminals to online payment gateways, we provide
              the tools you need to accept payments efficiently.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] mb-[30px]">
              <div className="bg-white rounded-[15px] p-[20px] shadow-[0px_5px_15px_rgba(0,0,0,0.05)]">
                <h4 className="text-[#1e1e1e] text-lg font-bold mb-[10px]">
                  Contactless Terminals
                </h4>
                <p className="text-[#575757] text-base">
                  Modern, secure payment terminals for in-person transactions.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-[20px] shadow-[0px_5px_15px_rgba(0,0,0,0.05)]">
                <h4 className="text-[#1e1e1e] text-lg font-bold mb-[10px]">
                  Online Gateways
                </h4>
                <p className="text-[#575757] text-base">
                  Secure payment processing for e-commerce and online
                  businesses.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-[20px] shadow-[0px_5px_15px_rgba(0,0,0,0.05)]">
                <h4 className="text-[#1e1e1e] text-lg font-bold mb-[10px]">
                  Mobile Payments
                </h4>
                <p className="text-[#575757] text-base">
                  Accept payments anywhere with our mobile payment solutions.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-[20px] shadow-[0px_5px_15px_rgba(0,0,0,0.05)]">
                <h4 className="text-[#1e1e1e] text-lg font-bold mb-[10px]">
                  Recurring Billing
                </h4>
                <p className="text-[#575757] text-base">
                  Automated subscription and recurring payment management.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="bg-[#2e7d32] text-white text-lg font-semibold py-[15px] px-[30px] rounded-[10px] shadow-[0px_10px_20px_rgba(0,0,0,0.1)] inline-block"
            >
              Learn More
            </Link>
          </div>

          <div className="w-full md:w-[550px] h-[400px] md:h-[550px] relative hidden md:block">
            <div className="w-[500px] h-[500px] bg-white rounded-[20px] shadow-[0px_20px_50px_rgba(0,0,0,0.1)] p-[40px] absolute top-0 left-0">
              <div className="w-full h-full bg-[#f5f5f5] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
                  alt="Payment Solutions"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#2e7d32]/10"></div>
                <div className="absolute bottom-0 left-0 w-full bg-white/80 p-[20px]">
                  <h3 className="text-[#2e7d32] text-2xl font-bold">
                    Secure & Efficient
                  </h3>
                  <p className="text-[#575757] text-lg">
                    Payment processing for modern businesses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Funding */}
      <section className="w-full px-4 md:px-[152px] py-[80px]">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center space-y-8 md:space-y-0 space-y-reverse md:space-y-reverse-0">
          <div className="w-full md:w-[550px] h-[400px] md:h-[550px] relative hidden md:block">
            <div className="w-[500px] h-[500px] bg-white rounded-[20px] shadow-[0px_20px_50px_rgba(0,0,0,0.1)] p-[40px] absolute top-0 right-0">
              <div className="w-full h-full bg-[#f5f5f5] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80"
                  alt="Business Funding"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#2e7d32]/10"></div>
                <div className="absolute bottom-0 left-0 w-full bg-white/80 p-[20px]">
                  <h3 className="text-[#2e7d32] text-2xl font-bold">
                    Flexible Funding
                  </h3>
                  <p className="text-[#575757] text-lg">
                    Capital solutions for business growth
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[500px]">
            <div className="flex items-center mb-[20px]">
              <div className="w-[156px] h-[35px] bg-[#2e7d32]/10 rounded flex items-center justify-center">
                <span className="text-[#2e7d32] text-lg font-semibold uppercase">
                  SOLUTION
                </span>
              </div>
              <div className="w-24 h-0 border-2 border-[#2e7d32] ml-5"></div>
            </div>

            <h2 className="text-[#1e1e1e] text-3xl md:text-4xl font-bold mb-[30px]">
              Business Funding
            </h2>

            <p className="text-[#575757] text-lg md:text-xl leading-[32px] mb-[30px]">
              Access the capital you need to grow your business with our range
              of funding solutions. We work with a network of lenders to find
              the best financing options for your specific needs, whether you're
              looking to expand, purchase equipment, or manage cash flow.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] mb-[30px]">
              <div className="bg-white rounded-[15px] p-[20px] shadow-[0px_5px_15px_rgba(0,0,0,0.05)]">
                <h4 className="text-[#1e1e1e] text-lg font-bold mb-[10px]">
                  Business Loans
                </h4>
                <p className="text-[#575757] text-base">
                  Secured and unsecured loans with competitive rates.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-[20px] shadow-[0px_5px_15px_rgba(0,0,0,0.05)]">
                <h4 className="text-[#1e1e1e] text-lg font-bold mb-[10px]">
                  Equipment Financing
                </h4>
                <p className="text-[#575757] text-base">
                  Specialized funding for business equipment purchases.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-[20px] shadow-[0px_5px_15px_rgba(0,0,0,0.05)]">
                <h4 className="text-[#1e1e1e] text-lg font-bold mb-[10px]">
                  Invoice Factoring
                </h4>
                <p className="text-[#575757] text-base">
                  Convert outstanding invoices into immediate cash flow.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-[20px] shadow-[0px_5px_15px_rgba(0,0,0,0.05)]">
                <h4 className="text-[#1e1e1e] text-lg font-bold mb-[10px]">
                  Merchant Advances
                </h4>
                <p className="text-[#575757] text-base">
                  Funding based on future credit card sales.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="bg-[#2e7d32] text-white text-lg font-semibold py-[15px] px-[30px] rounded-[10px] shadow-[0px_10px_20px_rgba(0,0,0,0.1)] inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Restaurant Booking Apps */}
      <section className="w-full px-4 md:px-[152px] py-[80px] bg-[#f9f9f9]">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="w-full md:w-[500px]">
            <div className="flex items-center mb-[20px]">
              <div className="w-[156px] h-[35px] bg-[#2e7d32]/10 rounded flex items-center justify-center">
                <span className="text-[#2e7d32] text-lg font-semibold uppercase">
                  SOLUTION
                </span>
              </div>
              <div className="w-24 h-0 border-2 border-[#2e7d32] ml-5"></div>
            </div>

            <h2 className="text-[#1e1e1e] text-3xl md:text-4xl font-bold mb-[30px]">
              Restaurant Booking Apps
            </h2>

            <p className="text-[#575757] text-lg md:text-xl leading-[32px] mb-[30px]">
              Our specialized booking applications help hospitality businesses
              streamline reservations, manage tables efficiently, and enhance
              the customer experience. With features designed specifically for
              restaurants, cafes, and bars, our apps provide the tools you need
              to optimize your operations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] mb-[30px]">
              <div className="bg-white rounded-[15px] p-[20px] shadow-[0px_5px_15px_rgba(0,0,0,0.05)]">
                <h4 className="text-[#1e1e1e] text-lg font-bold mb-[10px]">
                  Online Reservations
                </h4>
                <p className="text-[#575757] text-base">
                  24/7 booking capability through your website and app.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-[20px] shadow-[0px_5px_15px_rgba(0,0,0,0.05)]">
                <h4 className="text-[#1e1e1e] text-lg font-bold mb-[10px]">
                  Table Management
                </h4>
                <p className="text-[#575757] text-base">
                  Optimize seating arrangements and maximize capacity.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-[20px] shadow-[0px_5px_15px_rgba(0,0,0,0.05)]">
                <h4 className="text-[#1e1e1e] text-lg font-bold mb-[10px]">
                  Customer Database
                </h4>
                <p className="text-[#575757] text-base">
                  Track preferences and build relationships with guests.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-[20px] shadow-[0px_5px_15px_rgba(0,0,0,0.05)]">
                <h4 className="text-[#1e1e1e] text-lg font-bold mb-[10px]">
                  Mobile Ordering
                </h4>
                <p className="text-[#575757] text-base">
                  Allow customers to order directly from their devices.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="bg-[#2e7d32] text-white text-lg font-semibold py-[15px] px-[30px] rounded-[10px] shadow-[0px_10px_20px_rgba(0,0,0,0.1)] inline-block"
            >
              Learn More
            </Link>
          </div>

          <div className="w-full md:w-[550px] h-[400px] md:h-[550px] relative hidden md:block">
            <div className="w-[500px] h-[500px] bg-white rounded-[20px] shadow-[0px_20px_50px_rgba(0,0,0,0.1)] p-[40px] absolute top-0 left-0">
              <div className="w-full h-full bg-[#f5f5f5] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80"
                  alt="Restaurant Booking App"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#2e7d32]/10"></div>
                <div className="absolute bottom-0 left-0 w-full bg-white/80 p-[20px]">
                  <h3 className="text-[#2e7d32] text-2xl font-bold">
                    Streamlined Bookings
                  </h3>
                  <p className="text-[#575757] text-lg">
                    Reservation management for hospitality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Websites Section */}
      <section className="w-full px-4 md:px-[152px] py-[80px]">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="w-full md:w-[550px] h-[400px] md:h-[550px] relative hidden md:block">
            <div className="w-[500px] h-[500px] bg-white rounded-[20px] shadow-[0px_20px_50px_rgba(0,0,0,0.1)] p-[40px] absolute top-0 right-0">
              <div className="w-full h-full bg-[#f5f5f5] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                  alt="AI Website Solution"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#2e7d32]/10"></div>
                <div className="absolute bottom-0 left-0 w-full bg-white/80 p-[20px]">
                  <h3 className="text-[#2e7d32] text-2xl font-bold">
                    AI-Powered Websites
                  </h3>
                  <p className="text-[#575757] text-lg">
                    Free brochure sites for retail businesses
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[500px]">
            <div className="flex items-center mb-[20px]">
              <div className="w-[156px] h-[35px] bg-[#2e7d32]/10 rounded flex items-center justify-center">
                <span className="text-[#2e7d32] text-lg font-semibold uppercase">
                  NEW SOLUTION
                </span>
              </div>
              <div className="w-24 h-0 border-2 border-[#2e7d32] ml-5"></div>
            </div>

            <h2 className="text-[#1e1e1e] text-3xl md:text-4xl font-bold mb-[30px]">
              AI-Built Retail Websites
            </h2>

            <p className="text-[#575757] text-lg md:text-xl leading-[32px] mb-[30px]">
              Arbor Pay Go now offers completely{" "}
              <span className="font-bold text-[#2e7d32]">
                free AI-built websites
              </span>{" "}
              for retail businesses across the UK. Our cutting-edge AI
              technology creates professional brochure websites that showcase
              your products and services effectively, helping you establish a
              strong online presence without the high costs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] mb-[30px]">
              <div className="bg-white rounded-[15px] p-[20px] shadow-[0px_5px_15px_rgba(0,0,0,0.05)]">
                <h4 className="text-[#1e1e1e] text-lg font-bold mb-[10px]">
                  Free 5-Page Websites
                </h4>
                <p className="text-[#575757] text-base">
                  Get a professional 5-page website at absolutely no cost.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-[20px] shadow-[0px_5px_15px_rgba(0,0,0,0.05)]">
                <h4 className="text-[#1e1e1e] text-lg font-bold mb-[10px]">
                  Affordable Expansion
                </h4>
                <p className="text-[#575757] text-base">
                  Add 5 more pages for just £200 when you need to grow.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-[20px] shadow-[0px_5px_15px_rgba(0,0,0,0.05)]">
                <h4 className="text-[#1e1e1e] text-lg font-bold mb-[10px]">
                  Fully Responsive
                </h4>
                <p className="text-[#575757] text-base">
                  Websites that look perfect on desktops, tablets, and phones.
                </p>
              </div>

              <div className="bg-white rounded-[15px] p-[20px] shadow-[0px_5px_15px_rgba(0,0,0,0.05)]">
                <h4 className="text-[#1e1e1e] text-lg font-bold mb-[10px]">
                  Working Contact Forms
                </h4>
                <p className="text-[#575757] text-base">
                  Real, functional contact forms to connect with customers.
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
        </div>
      </section>

      {/* Case Studies */}
      <section className="w-full px-4 md:px-[152px] py-[80px]">
        <h2 className="text-[#1e1e1e] text-3xl md:text-4xl font-bold text-center mb-[40px] md:mb-[60px]">
          Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {/* Case Study 1 */}
          <div className="bg-white rounded-[20px] overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="w-full h-[250px] relative">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80"
                alt="Restaurant Case Study"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#2e7d32]/30"></div>
            </div>

            <div className="p-[30px]">
              <h3 className="text-[#1e1e1e] text-xl font-bold mb-[15px]">
                The Riverside Restaurant
              </h3>

              <p className="text-[#575757] text-base mb-[20px]">
                A popular London restaurant increased bookings by 40% and
                reduced no-shows by 60% after implementing our booking app
                solution.
              </p>

              <Link
                to="/case-studies/restaurant-booking-case-study"
                className="flex items-center text-[#2e7d32] font-semibold"
              >
                Read full case study <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-white rounded-[20px] overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="w-full h-[250px] relative">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&q=80"
                alt="Retail Case Study"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#2e7d32]/30"></div>
            </div>

            <div className="p-[30px]">
              <h3 className="text-[#1e1e1e] text-xl font-bold mb-[15px]">
                Green Leaf Retail Chain
              </h3>

              <p className="text-[#575757] text-base mb-[20px]">
                This UK retail chain saw a 25% increase in transaction speed and
                a 15% boost in customer satisfaction after upgrading their
                payment systems.
              </p>

              <Link
                to="/case-studies/payment-solution-case-study"
                className="flex items-center text-[#2e7d32] font-semibold"
              >
                Read full case study <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="bg-white rounded-[20px] overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="w-full h-[250px] relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80"
                alt="Tech Startup Case Study"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#2e7d32]/30"></div>
            </div>

            <div className="p-[30px]">
              <h3 className="text-[#1e1e1e] text-xl font-bold mb-[15px]">
                TechGrow Startup
              </h3>

              <p className="text-[#575757] text-base mb-[20px]">
                This innovative tech startup secured £500,000 in funding through
                our business funding solutions, enabling them to scale
                operations and double their team.
              </p>

              <Link
                to="/case-studies/business-funding-case-study"
                className="flex items-center text-[#2e7d32] font-semibold"
              >
                Read full case study <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 md:px-[152px] py-[80px] bg-[#f9f9f9]">
        <div className="w-full bg-[#2e7d32] rounded-[20px] px-6 md:px-[60px] py-[60px] flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="max-w-[600px]">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-[25px]">
              Ready to Implement Our Solutions?
            </h2>

            <p className="text-white/90 text-lg md:text-xl mb-[40px]">
              Contact us today to discuss how our innovative solutions can help
              your business grow and thrive in the competitive UK market.
            </p>

            <Link
              to="/contact"
              className="bg-white text-[#2e7d32] text-lg font-semibold py-[15px] px-[30px] rounded-[10px] shadow-[0px_10px_20px_rgba(0,0,0,0.1)] inline-block"
            >
              Schedule a Consultation
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
            © 2023 Arbor Pay Go. All rights reserved.
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

export default SolutionsPage;
