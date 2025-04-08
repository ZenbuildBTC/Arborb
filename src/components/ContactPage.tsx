import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "./SEOHead.jsx";
import MobileMenu from "./MobileMenu";

const ContactPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="w-full bg-white overflow-hidden">
      <SEOHead
        title="Contact Arbor | UK Business Consultancy"
        description="Get in touch with our team to discuss how we can help your business grow with our innovative solutions and expert consultancy."
        keywords="contact business consultancy UK, payment solutions enquiry, business funding consultation, restaurant booking app demo, UK consultancy contact"
        canonicalUrl="https://arbor.com/contact"
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
          <Link to="/contact" className="text-[#2e7d32] text-xl font-semibold">
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
            <span className="text-[#2a2a2a]">Contact </span>
            <span className="text-[#2e7d32]">Us</span>
          </h1>

          <p className="w-full md:w-[800px] mt-[20px] md:mt-[40px] text-lg md:text-2xl font-medium leading-relaxed md:leading-[41px] text-[#575757] text-center">
            Get in touch with our team to discuss how we can help your business
            grow with our innovative solutions and expert consultancy.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full px-4 md:px-[152px] py-[80px] bg-[#f9f9f9]">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          <div className="w-full md:w-[550px]">
            <h2 className="text-[#1e1e1e] text-3xl md:text-4xl font-bold mb-[30px] md:mb-[40px]">
              Send Us a Message
            </h2>

            <form
              className="space-y-[30px]"
              action="https://formspree.io/f/xleqgwkj"
              method="POST"
              onSubmit={(e) => {
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const name = formData.get("name") as string;
                if (name) {
                  localStorage.setItem("arbor_contact_name", name);
                  setTimeout(() => {
                    alert(
                      `Thank you for contacting us, ${name}! We'll get back to you shortly.`,
                    );
                  }, 1000);
                }
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                <div>
                  <label
                    className="block text-[#1e1e1e] text-lg font-medium mb-[10px]"
                    htmlFor="name"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full h-[60px] bg-white border border-[#e0e0e0] rounded-[10px] px-[20px] text-lg focus:outline-none focus:border-[#2e7d32]"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    className="block text-[#1e1e1e] text-lg font-medium mb-[10px]"
                    htmlFor="email"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full h-[60px] bg-white border border-[#e0e0e0] rounded-[10px] px-[20px] text-lg focus:outline-none focus:border-[#2e7d32]"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-[#1e1e1e] text-lg font-medium mb-[10px]"
                  htmlFor="company"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full h-[60px] bg-white border border-[#e0e0e0] rounded-[10px] px-[20px] text-lg focus:outline-none focus:border-[#2e7d32]"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label
                  className="block text-[#1e1e1e] text-lg font-medium mb-[10px]"
                  htmlFor="subject"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full h-[60px] bg-white border border-[#e0e0e0] rounded-[10px] px-[20px] text-lg focus:outline-none focus:border-[#2e7d32]"
                  placeholder="Subject"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-[#1e1e1e] text-lg font-medium mb-[10px]"
                  htmlFor="message"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full h-[200px] bg-white border border-[#e0e0e0] rounded-[10px] p-[20px] text-lg focus:outline-none focus:border-[#2e7d32] resize-none"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="interest-website"
                  name="interest"
                  value="free-ai-website"
                  className="mt-1 mr-3"
                />
                <label
                  htmlFor="interest-website"
                  className="text-[#575757] text-base"
                >
                  I'm interested in a free AI-built website for my retail
                  business
                </label>
              </div>

              <button
                type="submit"
                className="w-full h-[60px] bg-[#2e7d32] rounded-[10px] text-white text-xl font-semibold flex items-center justify-center"
              >
                Send Message <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>

          <div className="w-full md:w-[500px] mt-8 md:mt-0">
            <h2 className="text-[#1e1e1e] text-3xl md:text-4xl font-bold mb-[30px] md:mb-[40px]">
              Contact Information
            </h2>

            <div className="bg-white rounded-[20px] p-[40px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
              <div className="space-y-[30px]">
                <div className="flex items-start">
                  <div className="w-[60px] h-[60px] bg-[#2e7d32]/10 rounded-full flex items-center justify-center mr-[20px]">
                    <MapPin className="w-6 h-6 text-[#2e7d32]" />
                  </div>

                  <div>
                    <h3 className="text-[#1e1e1e] text-xl font-bold mb-[5px]">
                      Our Office
                    </h3>
                    <p className="text-[#575757] text-lg">
                      167-169 Great Portland Street, 5th Floor, London, W1W 5PF
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-[60px] h-[60px] bg-[#2e7d32]/10 rounded-full flex items-center justify-center mr-[20px]">
                    <Mail className="w-6 h-6 text-[#2e7d32]" />
                  </div>

                  <div>
                    <h3 className="text-[#1e1e1e] text-xl font-bold mb-[5px]">
                      Email Us
                    </h3>
                    <p className="text-[#575757] text-lg">
                      hello@arborpaygo.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[40px]">
              <h3 className="text-[#1e1e1e] text-xl font-bold mb-[20px]">
                Business Hours
              </h3>

              <div className="bg-white rounded-[20px] p-[30px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
                <div className="space-y-[15px]">
                  <div className="flex justify-between">
                    <span className="text-[#575757] text-lg">
                      Monday - Friday:
                    </span>
                    <span className="text-[#1e1e1e] text-lg font-semibold">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-[#575757] text-lg">Saturday:</span>
                    <span className="text-[#1e1e1e] text-lg font-semibold">
                      10:00 AM - 4:00 PM
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-[#575757] text-lg">Sunday:</span>
                    <span className="text-[#1e1e1e] text-lg font-semibold">
                      Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[500px] bg-[#e0e0e0]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340002653!2d-0.24168120642536509!3d51.52855824164916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1656543745932!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* FAQ Section */}
      <section className="w-full px-4 md:px-[152px] py-[80px]">
        <h2 className="text-[#1e1e1e] text-3xl md:text-4xl font-bold text-center mb-[40px] md:mb-[60px]">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          <div className="bg-white rounded-[20px] p-[30px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <h3 className="text-[#1e1e1e] text-xl font-bold mb-[15px]">
              How quickly can you implement payment solutions?
            </h3>
            <p className="text-[#575757] text-lg">
              Our card payments services can be activated on the same day you
              are approved, which is most cases can be a few hours. So you can
              start taking payments right away. For more complex systems which
              require integration, it all depends on the requirements. However,
              1-2 weeks is a usual time frame for most clients.
            </p>
          </div>

          <div className="bg-white rounded-[20px] p-[30px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <h3 className="text-[#1e1e1e] text-xl font-bold mb-[15px]">
              What types of businesses do you work with?
            </h3>
            <p className="text-[#575757] text-lg">
              We work with a wide range of businesses, from small startups to
              established enterprises, with a particular focus on SMEs and
              hospitality businesses across the UK.
            </p>
          </div>

          <div className="bg-white rounded-[20px] p-[30px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <h3 className="text-[#1e1e1e] text-xl font-bold mb-[15px]">
              How much funding can I apply for?
            </h3>
            <p className="text-[#575757] text-lg">
              Our business funding solutions range from £1,000 to £1 million,
              depending on your business needs, revenue, and credit history.
            </p>
          </div>

          <div className="bg-white rounded-[20px] p-[30px] shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <h3 className="text-[#1e1e1e] text-xl font-bold mb-[15px]">
              Can your booking apps integrate with existing systems?
            </h3>
            <p className="text-[#575757] text-lg">
              Yes, our restaurant booking apps are designed to integrate
              seamlessly with most existing POS systems, payment processors, and
              other hospitality management software.
            </p>
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

export default ContactPage;
