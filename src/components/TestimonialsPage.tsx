import React, { useState } from "react";
import { Facebook, Twitter, Instagram, Mail, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "./SEOHead.jsx";
import MobileMenu from "./MobileMenu";

const TestimonialsPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white overflow-hidden">
      <SEOHead
        title="Client Testimonials | Arbor UK Business Consultancy"
        description="Discover what our clients have to say about their experience working with Arbor and how our solutions have helped their businesses grow."
        keywords="business consultancy reviews UK, payment solutions testimonials, business funding success stories, restaurant booking app reviews, UK consultancy case studies"
        canonicalUrl="https://arbor.com/testimonials"
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
      <section className="w-full px-4 md:px-[152px] pt-[60px] pb-[80px]">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-center">
            <span className="text-[#2a2a2a]">Client </span>
            <span className="text-[#2e7d32]">Testimonials</span>
          </h1>

          <p className="w-full md:w-[800px] mt-[20px] md:mt-[40px] text-lg md:text-2xl font-medium leading-relaxed md:leading-[41px] text-[#575757] text-center">
            Discover what our clients have to say about their experience working
            with Arbor and how our solutions have helped their businesses grow.
          </p>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="w-full px-4 md:px-[152px] py-[80px] bg-[#f9f9f9]">
        <h2 className="text-[#1e1e1e] text-3xl md:text-4xl font-bold text-center mb-[40px] md:mb-[60px]">
          Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-[20px] p-[40px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="flex items-center mb-[30px]">
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden mr-[20px]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
                  alt="Client"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-[#1e1e1e] text-xl font-bold">
                  Michael Brown
                </h3>
                <p className="text-[#575757] text-base">
                  Restaurant Owner, London
                </p>
              </div>
            </div>

            <p className="text-[#575757] text-lg italic leading-[32px] mb-[20px]">
              "Arbor's booking app has completely transformed how we manage
              reservations. We've seen a 30% increase in bookings and our staff
              can now focus on providing excellent service rather than managing
              phone calls. The implementation was smooth and the support has
              been outstanding."
            </p>

            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-[#1e1e1e] font-semibold ml-2">5.0</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-[20px] p-[40px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="flex items-center mb-[30px]">
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden mr-[20px]">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
                  alt="Client"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-[#1e1e1e] text-xl font-bold">
                  Sarah Johnson
                </h3>
                <p className="text-[#575757] text-base">
                  Retail Business Owner, Manchester
                </p>
              </div>
            </div>

            <p className="text-[#575757] text-lg italic leading-[32px] mb-[20px]">
              "The payment solution Arbor implemented for our retail stores has
              streamlined our operations and improved customer satisfaction. The
              team was professional and knowledgeable throughout the process,
              and the ongoing support has been exceptional."
            </p>

            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-[#1e1e1e] font-semibold ml-2">5.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="w-full px-4 md:px-[152px] py-[80px]">
        <h2 className="text-[#1e1e1e] text-3xl md:text-4xl font-bold text-center mb-[40px] md:mb-[60px]">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-[20px] p-[30px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="flex items-center mb-[20px]">
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden mr-[15px]">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
                  alt="Client"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-[#1e1e1e] text-lg font-bold">
                  James Wilson
                </h4>
                <p className="text-[#575757] text-sm">Cafe Owner</p>
              </div>
            </div>

            <p className="text-[#575757] text-base italic">
              "The booking app has been a game-changer for our small cafe. We've
              reduced no-shows by 50% and increased our daily bookings
              significantly."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-[20px] p-[30px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="flex items-center mb-[20px]">
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden mr-[15px]">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80"
                  alt="Client"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-[#1e1e1e] text-lg font-bold">
                  Emma Thompson
                </h4>
                <p className="text-[#575757] text-sm">Boutique Owner</p>
              </div>
            </div>

            <p className="text-[#575757] text-base italic">
              "Arbor helped us secure funding at a critical time for our
              business expansion. Their expertise and connections made the
              process smooth and efficient."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-[20px] p-[30px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="flex items-center mb-[20px]">
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden mr-[15px]">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80"
                  alt="Client"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-[#1e1e1e] text-lg font-bold">David Chen</h4>
                <p className="text-[#575757] text-sm">Tech Startup Founder</p>
              </div>
            </div>

            <p className="text-[#575757] text-base italic">
              "The payment solution implementation was flawless. Our customers
              love the seamless checkout experience, and we've seen a 15%
              increase in sales."
            </p>
          </div>

          {/* Testimonial 4 */}
          <div className="bg-white rounded-[20px] p-[30px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="flex items-center mb-[20px]">
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden mr-[15px]">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80"
                  alt="Client"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-[#1e1e1e] text-lg font-bold">
                  Olivia Baker
                </h4>
                <p className="text-[#575757] text-sm">Restaurant Manager</p>
              </div>
            </div>

            <p className="text-[#575757] text-base italic">
              "The table management feature in Arbor's booking app has
              revolutionized how we organize our restaurant. Staff training was
              minimal, and adoption was immediate."
            </p>
          </div>

          {/* Testimonial 5 */}
          <div className="bg-white rounded-[20px] p-[30px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
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
                  Robert Taylor
                </h4>
                <p className="text-[#575757] text-sm">Small Business Owner</p>
              </div>
            </div>

            <p className="text-[#575757] text-base italic">
              "Arbor's consultancy services provided us with a clear growth
              strategy that has already yielded a 25% increase in revenue within
              six months."
            </p>
          </div>

          {/* Testimonial 6 */}
          <div className="bg-white rounded-[20px] p-[30px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="flex items-center mb-[20px]">
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden mr-[15px]">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
                  alt="Client"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-[#1e1e1e] text-lg font-bold">
                  Jennifer Adams
                </h4>
                <p className="text-[#575757] text-sm">Hotel Manager</p>
              </div>
            </div>

            <p className="text-[#575757] text-base italic">
              "We adapted Arbor's booking system for our hotel, and it has
              streamlined our reservation process significantly. The customer
              support team is always responsive and helpful."
            </p>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="w-full px-4 md:px-[152px] py-[80px] bg-[#f9f9f9]">
        <h2 className="text-[#1e1e1e] text-3xl md:text-4xl font-bold text-center mb-[20px]">
          Hear From Our Clients
        </h2>
        <p className="text-[#575757] text-xl text-center mb-[60px] max-w-[800px] mx-auto">
          Watch these short videos to learn how Arbor has helped businesses
          across the UK grow and thrive.
        </p>

        <div className="w-full bg-[#2e7d32] rounded-[20px] px-6 md:px-[60px] py-[60px] flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="max-w-[600px]">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-[25px]">
              Ready to Join Our Success Stories?
            </h2>

            <p className="text-white/90 text-lg md:text-xl mb-[40px]">
              Contact us today to discuss how our solutions can help your
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
            <p className="text-[#575757] text-sm">Privacy Policy</p>
            <p className="text-[#575757] text-sm">Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TestimonialsPage;
