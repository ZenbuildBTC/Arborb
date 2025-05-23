import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowLeft } from "lucide-react";
import SEOHead from "../SEOHead.jsx";
import MobileMenu from "../MobileMenu";
import Footer from "../Footer";

const PaymentSolutionCaseStudy = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white overflow-hidden">
      <SEOHead
        title="Case Study: Retail Chain Payment Solution | Arbor Pay Go"
        description="How Arbor Pay Go helped a UK retail chain streamline their payment processes, reduce transaction fees, and improve customer experience with our innovative payment solutions."
        keywords="payment solution case study, retail payment processing, UK payment system implementation, contactless payment terminals, payment gateway integration"
        canonicalUrl="https://arbor.com/case-studies/payment-solution"
        schema={`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How a UK Retail Chain Streamlined Payments with Arbor Pay Go's Solutions",
            "description": "Case study of how Arbor Pay Go implemented an integrated payment solution for a retail chain, resulting in 15% cost savings and improved customer satisfaction.",
            "image": "https://arbor.com/images/case-studies/payment-solution.jpg",
            "datePublished": "2025-05-15",
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
            How a UK Retail Chain Streamlined Payments with Arbor Pay Go's
            Solutions
          </h1>

          <p className="w-full md:w-[800px] text-lg md:text-xl font-medium leading-relaxed text-[#575757] text-center mb-[40px]">
            A comprehensive payment solution that reduced transaction fees by
            15% and improved customer checkout times by 35%
          </p>

          <div className="w-full h-[300px] md:h-[500px] rounded-[20px] overflow-hidden mb-[40px]">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80"
              alt="Retail payment solution"
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
                A leading UK retail chain with 25 locations across the country
                was struggling with an outdated payment system that was causing
                numerous issues:
              </p>

              <ul className="list-disc pl-6 space-y-3 mb-[30px]">
                <li className="text-[#575757] text-lg leading-[32px]">
                  High transaction fees eating into profit margins
                </li>
                <li className="text-[#575757] text-lg leading-[32px]">
                  Slow checkout processes leading to customer frustration
                </li>
                <li className="text-[#575757] text-lg leading-[32px]">
                  Limited payment options for customers
                </li>
                <li className="text-[#575757] text-lg leading-[32px]">
                  Disconnected systems between in-store and online sales
                </li>
                <li className="text-[#575757] text-lg leading-[32px]">
                  Difficulty reconciling payments across multiple locations
                </li>
              </ul>

              <p className="text-[#575757] text-lg leading-[32px]">
                The company needed a comprehensive payment solution that would
                address these issues while being easy to implement across all
                locations with minimal disruption to their operations.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-[40px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)] mb-[40px]">
              <h2 className="text-[#1e1e1e] text-2xl md:text-3xl font-bold mb-[30px]">
                Our Solution
              </h2>

              <p className="text-[#575757] text-lg leading-[32px] mb-[30px]">
                After a thorough analysis of the client's needs, Arbor Pay Go
                implemented a tailored payment solution that included:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-[30px]">
                <div className="bg-[#f9f9f9] rounded-[15px] p-[25px]">
                  <h3 className="text-[#1e1e1e] text-xl font-bold mb-[15px]">
                    Modern POS Terminals
                  </h3>
                  <p className="text-[#575757] text-base">
                    State-of-the-art contactless payment terminals with fast
                    processing speeds and multiple payment options.
                  </p>
                </div>

                <div className="bg-[#f9f9f9] rounded-[15px] p-[25px]">
                  <h3 className="text-[#1e1e1e] text-xl font-bold mb-[15px]">
                    Integrated Payment Gateway
                  </h3>
                  <p className="text-[#575757] text-base">
                    A unified payment gateway that connected in-store and online
                    sales channels for seamless operations.
                  </p>
                </div>

                <div className="bg-[#f9f9f9] rounded-[15px] p-[25px]">
                  <h3 className="text-[#1e1e1e] text-xl font-bold mb-[15px]">
                    Negotiated Transaction Rates
                  </h3>
                  <p className="text-[#575757] text-base">
                    Leveraging our industry relationships to secure
                    significantly lower transaction fees for all payment types.
                  </p>
                </div>

                <div className="bg-[#f9f9f9] rounded-[15px] p-[25px]">
                  <h3 className="text-[#1e1e1e] text-xl font-bold mb-[15px]">
                    Centralized Reporting System
                  </h3>
                  <p className="text-[#575757] text-base">
                    A comprehensive dashboard providing real-time payment data
                    across all locations with detailed analytics.
                  </p>
                </div>
              </div>

              <p className="text-[#575757] text-lg leading-[32px]">
                The implementation was phased across all 25 locations over a
                period of 6 weeks, with minimal disruption to daily operations.
                Staff training was provided at each location to ensure smooth
                adoption of the new system.
              </p>
            </div>

            <div className="bg-white rounded-[20px] p-[40px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
              <h2 className="text-[#1e1e1e] text-2xl md:text-3xl font-bold mb-[30px]">
                The Results
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-[30px]">
                <div className="bg-[#2e7d32]/10 rounded-[15px] p-[25px] text-center">
                  <h3 className="text-[#2e7d32] text-4xl font-bold mb-[10px]">
                    15%
                  </h3>
                  <p className="text-[#575757] text-lg">
                    Reduction in transaction fees
                  </p>
                </div>

                <div className="bg-[#2e7d32]/10 rounded-[15px] p-[25px] text-center">
                  <h3 className="text-[#2e7d32] text-4xl font-bold mb-[10px]">
                    35%
                  </h3>
                  <p className="text-[#575757] text-lg">
                    Faster checkout times
                  </p>
                </div>

                <div className="bg-[#2e7d32]/10 rounded-[15px] p-[25px] text-center">
                  <h3 className="text-[#2e7d32] text-4xl font-bold mb-[10px]">
                    22%
                  </h3>
                  <p className="text-[#575757] text-lg">
                    Increase in customer satisfaction
                  </p>
                </div>
              </div>

              <p className="text-[#575757] text-lg leading-[32px] mb-[20px]">
                Within three months of full implementation, the client
                experienced significant improvements across their business:
              </p>

              <ul className="list-disc pl-6 space-y-3 mb-[30px]">
                <li className="text-[#575757] text-lg leading-[32px]">
                  Transaction fees were reduced by 15%, resulting in annual
                  savings of approximately £120,000
                </li>
                <li className="text-[#575757] text-lg leading-[32px]">
                  Checkout times improved by 35%, reducing queues and improving
                  customer experience
                </li>
                <li className="text-[#575757] text-lg leading-[32px]">
                  Customer satisfaction scores increased by 22% in post-purchase
                  surveys
                </li>
                <li className="text-[#575757] text-lg leading-[32px]">
                  Staff reported 40% less time spent on payment reconciliation
                  tasks
                </li>
                <li className="text-[#575757] text-lg leading-[32px]">
                  The unified system provided valuable customer insights that
                  informed marketing strategies
                </li>
              </ul>

              <div className="border-l-4 border-[#2e7d32] pl-6 py-2 mb-[30px]">
                <p className="text-[#1e1e1e] text-lg italic">
                  "Arbor Pay Go's payment solution has transformed our retail
                  operations. Not only are we saving significantly on
                  transaction fees, but our customers are enjoying a much
                  smoother checkout experience. The centralized reporting has
                  given us insights we never had before, helping us make better
                  business decisions across all our locations."
                </p>
                <p className="text-[#575757] text-base mt-3">
                  - Operations Director, UK Retail Chain
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
                    15% reduction in transaction fees across all payment methods
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-[40px] h-[40px] bg-[#2e7d32]/10 rounded-full flex items-center justify-center mr-[15px] flex-shrink-0">
                    <span className="text-[#2e7d32] text-lg">2</span>
                  </div>
                  <p className="text-[#575757] text-base">
                    35% improvement in checkout speed, enhancing customer
                    experience
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-[40px] h-[40px] bg-[#2e7d32]/10 rounded-full flex items-center justify-center mr-[15px] flex-shrink-0">
                    <span className="text-[#2e7d32] text-lg">3</span>
                  </div>
                  <p className="text-[#575757] text-base">
                    Unified system connecting 25 retail locations and online
                    store
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-[40px] h-[40px] bg-[#2e7d32]/10 rounded-full flex items-center justify-center mr-[15px] flex-shrink-0">
                    <span className="text-[#2e7d32] text-lg">4</span>
                  </div>
                  <p className="text-[#575757] text-base">
                    Implementation completed in just 6 weeks with minimal
                    disruption
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-[40px] h-[40px] bg-[#2e7d32]/10 rounded-full flex items-center justify-center mr-[15px] flex-shrink-0">
                    <span className="text-[#2e7d32] text-lg">5</span>
                  </div>
                  <p className="text-[#575757] text-base">
                    Comprehensive staff training ensuring smooth adoption
                  </p>
                </div>
              </div>

              <div className="border-t border-[#e0e0e0] pt-[20px] mb-[20px]">
                <h4 className="text-[#1e1e1e] text-lg font-bold mb-[15px]">
                  Industry
                </h4>
                <p className="text-[#575757] text-base mb-[20px]">Retail</p>

                <h4 className="text-[#1e1e1e] text-lg font-bold mb-[15px]">
                  Company Size
                </h4>
                <p className="text-[#575757] text-base mb-[20px]">
                  25 locations, 300+ employees
                </p>

                <h4 className="text-[#1e1e1e] text-lg font-bold mb-[15px]">
                  Project Duration
                </h4>
                <p className="text-[#575757] text-base">
                  6 weeks implementation
                </p>
              </div>

              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full bg-[#2e7d32] text-white text-lg font-semibold py-[15px] px-[30px] rounded-[10px] flex items-center justify-center"
              >
                Discuss Your Payment Needs{" "}
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 md:px-[152px] py-[80px] bg-[#f9f9f9]">
        <div className="w-full bg-[#2e7d32] rounded-[20px] px-6 md:px-[60px] py-[60px] flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="max-w-[600px]">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-[25px]">
              Ready to Transform Your Payment Systems?
            </h2>

            <p className="text-white/90 text-lg md:text-xl mb-[40px]">
              Contact us today to discuss how our payment solutions can help
              your business reduce costs and improve customer experience.
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
                <span className="text-[#2e7d32] text-4xl md:text-5xl">💳</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PaymentSolutionCaseStudy;
