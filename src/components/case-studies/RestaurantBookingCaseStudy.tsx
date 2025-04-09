import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowLeft } from "lucide-react";
import SEOHead from "../SEOHead.jsx";
import MobileMenu from "../MobileMenu";
import Footer from "../Footer";

const RestaurantBookingCaseStudy = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white overflow-hidden">
      <SEOHead
        title="Case Study: Restaurant Booking App | Arbor Pay Go"
        description="How Arbor Pay Go's booking app solution helped a UK restaurant chain increase reservations by 45% and improve operational efficiency."
        keywords="restaurant booking app case study, hospitality technology UK, table management system, online reservation system, restaurant booking solution"
        canonicalUrl="https://arbor.com/case-studies/restaurant-booking"
        schema={`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How a Restaurant Chain Increased Bookings by 45% with Arbor Pay Go's App",
            "description": "Case study of how Arbor Pay Go implemented a booking app solution for a UK restaurant chain, resulting in 45% more reservations and improved operational efficiency.",
            "image": "https://arbor.com/images/case-studies/restaurant-booking.jpg",
            "datePublished": "2025-04-20",
            "author": {
              "@type": "Organization",
              "name": "Arbor Pay Go"
            }
          }
        `}
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

      {/* Back to Solutions */}
      <div className="w-full px-4 md:px-[152px] pt-[30px]">
        <Link
          to="/solutions"
          className="flex items-center text-[#2e7d32] font-medium hover:underline"
          onClick={(e) => {
            // Ensure it navigates to the top of the solutions page
            window.scrollTo(0, 0);
          }}
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Solutions
        </Link>
      </div>

      {/* Hero Section */}
      <section className="w-full px-4 md:px-[152px] pt-[40px] pb-[60px]">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-[20px]">
            <div className="w-[156px] h-[35px] bg-[#2e7d32]/10 rounded flex items-center justify-center">
              <span className="text-[#2e7d32] text-lg font-semibold uppercase">
                CASE STUDY
              </span>
            </div>
            <div className="w-24 h-0 border-2 border-[#2e7d32] ml-5"></div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-center mb-[30px]">
            How a Restaurant Chain Increased Bookings by 45% with Arbor Pay Go's
            App
          </h1>

          <p className="w-full md:w-[800px] text-lg md:text-xl font-medium leading-relaxed text-[#575757] text-center mb-[40px]">
            A comprehensive booking solution that transformed operations for a
            popular UK restaurant group
          </p>

          <div className="w-full h-[300px] md:h-[500px] rounded-[20px] overflow-hidden mb-[40px]">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"
              alt="Restaurant booking app"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="w-full px-4 md:px-[152px] py-[60px] bg-[#f9f9f9]">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[700px]">
            <div className="bg-white rounded-[20px] p-[40px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)] mb-[40px]">
              <h2 className="text-[#1e1e1e] text-2xl md:text-3xl font-bold mb-[30px]">
                The Challenge
              </h2>

              <p className="text-[#575757] text-lg leading-[32px] mb-[20px]">
                The Riverside Restaurant Group, a popular chain with 12
                locations across the UK, was facing several challenges with
                their reservation system:
              </p>

              <ul className="list-disc pl-6 space-y-3 mb-[30px]">
                <li className="text-[#575757] text-lg leading-[32px]">
                  High no-show rates of approximately 20%, resulting in
                  significant revenue loss
                </li>
                <li className="text-[#575757] text-lg leading-[32px]">
                  Inefficient phone-based booking system requiring dedicated
                  staff
                </li>
                <li className="text-[#575757] text-lg leading-[32px]">
                  Difficulty managing table inventory across multiple locations
                </li>
                <li className="text-[#575757] text-lg leading-[32px]">
                  Limited customer data collection for marketing and loyalty
                  programs
                </li>
                <li className="text-[#575757] text-lg leading-[32px]">
                  Inability to offer seamless online booking, putting them at a
                  disadvantage compared to competitors
                </li>
              </ul>

              <p className="text-[#575757] text-lg leading-[32px]">
                The restaurant group needed a modern, efficient booking solution
                that would reduce no-shows, streamline operations, and enhance
                the customer experience across all their locations.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-[40px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)] mb-[40px]">
              <h2 className="text-[#1e1e1e] text-2xl md:text-3xl font-bold mb-[30px]">
                Our Solution
              </h2>

              <p className="text-[#575757] text-lg leading-[32px] mb-[30px]">
                After a thorough analysis of the restaurant group's needs, Arbor
                Pay Go implemented a customized booking app solution that
                included:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-[30px]">
                <div className="bg-[#f9f9f9] rounded-[15px] p-[25px]">
                  <h3 className="text-[#1e1e1e] text-xl font-bold mb-[15px]">
                    Multi-Channel Booking System
                  </h3>
                  <p className="text-[#575757] text-base">
                    A user-friendly booking platform accessible via web, mobile
                    app, and integration with popular third-party reservation
                    platforms.
                  </p>
                </div>

                <div className="bg-[#f9f9f9] rounded-[15px] p-[25px]">
                  <h3 className="text-[#1e1e1e] text-xl font-bold mb-[15px]">
                    Smart Table Management
                  </h3>
                  <p className="text-[#575757] text-base">
                    AI-powered table allocation that optimizes seating
                    arrangements based on party size, reservation duration, and
                    restaurant layout.
                  </p>
                </div>

                <div className="bg-[#f9f9f9] rounded-[15px] p-[25px]">
                  <h3 className="text-[#1e1e1e] text-xl font-bold mb-[15px]">
                    Automated Communications
                  </h3>
                  <p className="text-[#575757] text-base">
                    Confirmation emails, SMS reminders, and follow-up messages
                    to reduce no-shows and collect feedback.
                  </p>
                </div>

                <div className="bg-[#f9f9f9] rounded-[15px] p-[25px]">
                  <h3 className="text-[#1e1e1e] text-xl font-bold mb-[15px]">
                    Customer Database
                  </h3>
                  <p className="text-[#575757] text-base">
                    Comprehensive customer profiles with dining preferences,
                    dietary requirements, and visit history to enhance
                    personalization.
                  </p>
                </div>
              </div>

              <p className="text-[#575757] text-lg leading-[32px]">
                The implementation was completed within 8 weeks, including staff
                training and a phased rollout across all 12 locations. The
                system was designed to be intuitive for both customers and
                staff, with minimal disruption to existing operations during the
                transition period.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-[40px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
              <h2 className="text-[#1e1e1e] text-2xl md:text-3xl font-bold mb-[30px]">
                The Results
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-[30px]">
                <div className="bg-[#2e7d32]/10 rounded-[15px] p-[25px] text-center">
                  <h3 className="text-[#2e7d32] text-4xl font-bold mb-[10px]">
                    45%
                  </h3>
                  <p className="text-[#575757] text-lg">
                    Increase in online bookings
                  </p>
                </div>

                <div className="bg-[#2e7d32]/10 rounded-[15px] p-[25px] text-center">
                  <h3 className="text-[#2e7d32] text-4xl font-bold mb-[10px]">
                    60%
                  </h3>
                  <p className="text-[#575757] text-lg">
                    Reduction in no-shows
                  </p>
                </div>

                <div className="bg-[#2e7d32]/10 rounded-[15px] p-[25px] text-center">
                  <h3 className="text-[#2e7d32] text-4xl font-bold mb-[10px]">
                    28%
                  </h3>
                  <p className="text-[#575757] text-lg">
                    Increase in table turnover
                  </p>
                </div>
              </div>

              <p className="text-[#575757] text-lg leading-[32px] mb-[20px]">
                Within three months of full implementation, The Riverside
                Restaurant Group experienced significant improvements across
                their operations:
              </p>

              <ul className="list-disc pl-6 space-y-3 mb-[30px]">
                <li className="text-[#575757] text-lg leading-[32px]">
                  Online bookings increased by 45%, reducing the workload on
                  staff and allowing them to focus on customer service
                </li>
                <li className="text-[#575757] text-lg leading-[32px]">
                  No-show rates decreased from 20% to just 8%, thanks to
                  automated reminders and a streamlined cancellation process
                </li>
                <li className="text-[#575757] text-lg leading-[32px]">
                  Table turnover improved by 28% due to optimized seating
                  arrangements and better timing management
                </li>
                <li className="text-[#575757] text-lg leading-[32px]">
                  Customer database grew by 15,000 profiles in three months,
                  providing valuable insights for marketing initiatives
                </li>
                <li className="text-[#575757] text-lg leading-[32px]">
                  Staff reported 75% less time spent on managing reservations,
                  allowing them to focus on enhancing the dining experience
                </li>
              </ul>

              <div className="border-l-4 border-[#2e7d32] pl-6 py-2 mb-[30px]">
                <p className="text-[#1e1e1e] text-lg italic">
                  "Arbor Pay Go's booking app has completely transformed how we
                  manage reservations across our restaurants. Not only have we
                  seen a significant increase in bookings, but the reduction in
                  no-shows has had a direct impact on our bottom line. The
                  system is intuitive for both our staff and customers, and the
                  data we're collecting is helping us make more informed
                  business decisions."
                </p>
                <p className="text-[#575757] text-base mt-3">
                  - Operations Director, The Riverside Restaurant Group
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[350px] mt-8 md:mt-0">
            <div className="bg-white rounded-[20px] p-[30px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)] sticky top-[100px]">
              <h3 className="text-[#1e1e1e] text-xl font-bold mb-[20px]">
                Key Highlights
              </h3>

              <div className="space-y-[15px] mb-[30px]">
                <div className="flex items-start">
                  <div className="w-[40px] h-[40px] bg-[#2e7d32]/10 rounded-full flex items-center justify-center mr-[15px] flex-shrink-0">
                    <span className="text-[#2e7d32] text-lg">1</span>
                  </div>
                  <p className="text-[#575757] text-base">
                    45% increase in online bookings across all locations
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-[40px] h-[40px] bg-[#2e7d32]/10 rounded-full flex items-center justify-center mr-[15px] flex-shrink-0">
                    <span className="text-[#2e7d32] text-lg">2</span>
                  </div>
                  <p className="text-[#575757] text-base">
                    60% reduction in no-shows through automated reminders
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-[40px] h-[40px] bg-[#2e7d32]/10 rounded-full flex items-center justify-center mr-[15px] flex-shrink-0">
                    <span className="text-[#2e7d32] text-lg">3</span>
                  </div>
                  <p className="text-[#575757] text-base">
                    AI-powered table management optimizing restaurant capacity
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-[40px] h-[40px] bg-[#2e7d32]/10 rounded-full flex items-center justify-center mr-[15px] flex-shrink-0">
                    <span className="text-[#2e7d32] text-lg">4</span>
                  </div>
                  <p className="text-[#575757] text-base">
                    Implementation completed in just 8 weeks across 12 locations
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-[40px] h-[40px] bg-[#2e7d32]/10 rounded-full flex items-center justify-center mr-[15px] flex-shrink-0">
                    <span className="text-[#2e7d32] text-lg">5</span>
                  </div>
                  <p className="text-[#575757] text-base">
                    Comprehensive customer database with 15,000+ profiles
                  </p>
                </div>
              </div>

              <div className="w-full h-[2px] bg-[#f0f0f0] my-[30px]"></div>

              <h3 className="text-[#1e1e1e] text-xl font-bold mb-[20px]">
                Technologies Used
              </h3>

              <div className="space-y-[10px]">
                <p className="text-[#575757] text-base">
                  • Multi-Channel Booking Platform
                </p>
                <p className="text-[#575757] text-base">
                  • AI-Powered Table Management
                </p>
                <p className="text-[#575757] text-base">
                  • Automated SMS & Email System
                </p>
                <p className="text-[#575757] text-base">
                  • Customer Relationship Management
                </p>
                <p className="text-[#575757] text-base">
                  • Analytics Dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 md:px-[152px] py-[80px]">
        <div className="w-full bg-[#2e7d32] rounded-[20px] px-6 md:px-[60px] py-[60px] flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="max-w-[600px]">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-[25px]">
              Ready to Transform Your Booking System?
            </h2>

            <p className="text-white/90 text-lg md:text-xl mb-[40px]">
              Contact us today to discuss how our booking app solutions can help
              your restaurant increase reservations, reduce no-shows, and
              improve operational efficiency.
            </p>

            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-white text-[#2e7d32] text-lg font-semibold py-[15px] px-[30px] rounded-[10px] shadow-[0px_10px_20px_rgba(0,0,0,0.1)] inline-block"
            >
              Get in Touch
            </a>
          </div>

          <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-white/10 rounded-full flex items-center justify-center">
            <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] bg-white rounded-full flex items-center justify-center">
                <span className="text-[#2e7d32] text-4xl md:text-5xl">📱</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RestaurantBookingCaseStudy;
