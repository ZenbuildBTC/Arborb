import React, { useState } from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "./SEOHead.jsx";
import MobileMenu from "./MobileMenu";

const PrivacyPolicy = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white overflow-hidden">
      <SEOHead
        title="Privacy Policy | Arbor UK Business Consultancy"
        description="Learn about how Arbor collects, uses, and protects your personal information in compliance with UK data protection laws."
        keywords="privacy policy, data protection, GDPR compliance, business consultancy privacy, UK data protection"
        canonicalUrl="https://arbor.com/privacy-policy"
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
      <section className="w-full px-4 md:px-[152px] pt-[60px] pb-[40px]">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-center">
            <span className="text-[#2a2a2a]">Privacy </span>
            <span className="text-[#2e7d32]">Policy</span>
          </h1>

          <p className="w-full md:w-[800px] mt-[20px] text-lg md:text-xl font-medium leading-relaxed text-[#575757] text-center">
            Last Updated: June 1, 2023
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="w-full px-4 md:px-[152px] py-[40px]">
        <div className="max-w-[900px] mx-auto">
          <div className="mb-[40px]">
            <h2 className="text-[#1e1e1e] text-2xl font-bold mb-[15px]">
              1. Introduction
            </h2>
            <p className="text-[#575757] text-lg mb-[15px]">
              At Arbor ("we," "our," or "us"), we respect your privacy and are
              committed to protecting your personal data. This privacy policy
              will inform you about how we look after your personal data when
              you visit our website and tell you about your privacy rights and
              how the law protects you.
            </p>
            <p className="text-[#575757] text-lg">
              This privacy policy applies to all personal data collected through
              our website, as well as any related services, sales, marketing, or
              events.
            </p>
          </div>

          <div className="mb-[40px]">
            <h2 className="text-[#1e1e1e] text-2xl font-bold mb-[15px]">
              2. The Data We Collect About You
            </h2>
            <p className="text-[#575757] text-lg mb-[15px]">
              Personal data, or personal information, means any information
              about an individual from which that person can be identified. It
              does not include data where the identity has been removed
              (anonymous data).
            </p>
            <p className="text-[#575757] text-lg mb-[15px]">
              We may collect, use, store, and transfer different kinds of
              personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-[30px] text-[#575757] text-lg mb-[15px] space-y-2">
              <li>
                Identity Data includes first name, last name, username or
                similar identifier, title.
              </li>
              <li>
                Contact Data includes billing address, delivery address, email
                address, and telephone numbers.
              </li>
              <li>
                Financial Data includes bank account and payment card details.
              </li>
              <li>
                Transaction Data includes details about payments to and from you
                and other details of products and services you have purchased
                from us.
              </li>
              <li>
                Technical Data includes internet protocol (IP) address, your
                login data, browser type and version, time zone setting and
                location, browser plug-in types and versions, operating system
                and platform, and other technology on the devices you use to
                access this website.
              </li>
              <li>
                Profile Data includes your username and password, purchases or
                orders made by you, your interests, preferences, feedback, and
                survey responses.
              </li>
              <li>
                Usage Data includes information about how you use our website,
                products, and services.
              </li>
              <li>
                Marketing and Communications Data includes your preferences in
                receiving marketing from us and our third parties and your
                communication preferences.
              </li>
            </ul>
          </div>

          <div className="mb-[40px]">
            <h2 className="text-[#1e1e1e] text-2xl font-bold mb-[15px]">
              3. How We Use Your Personal Data
            </h2>
            <p className="text-[#575757] text-lg mb-[15px]">
              We will only use your personal data when the law allows us to.
              Most commonly, we will use your personal data in the following
              circumstances:
            </p>
            <ul className="list-disc pl-[30px] text-[#575757] text-lg mb-[15px] space-y-2">
              <li>
                Where we need to perform the contract we are about to enter into
                or have entered into with you.
              </li>
              <li>
                Where it is necessary for our legitimate interests (or those of
                a third party) and your interests and fundamental rights do not
                override those interests.
              </li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
            <p className="text-[#575757] text-lg">
              Generally, we do not rely on consent as a legal basis for
              processing your personal data although we will get your consent
              before sending third party direct marketing communications to you
              via email or text message. You have the right to withdraw consent
              to marketing at any time by contacting us.
            </p>
          </div>

          <div className="mb-[40px]">
            <h2 className="text-[#1e1e1e] text-2xl font-bold mb-[15px]">
              4. Data Security
            </h2>
            <p className="text-[#575757] text-lg mb-[15px]">
              We have put in place appropriate security measures to prevent your
              personal data from being accidentally lost, used, or accessed in
              an unauthorized way, altered, or disclosed. In addition, we limit
              access to your personal data to those employees, agents,
              contractors, and other third parties who have a business need to
              know. They will only process your personal data on our
              instructions, and they are subject to a duty of confidentiality.
            </p>
            <p className="text-[#575757] text-lg">
              We have put in place procedures to deal with any suspected
              personal data breach and will notify you and any applicable
              regulator of a breach where we are legally required to do so.
            </p>
          </div>

          <div className="mb-[40px]">
            <h2 className="text-[#1e1e1e] text-2xl font-bold mb-[15px]">
              5. Your Legal Rights
            </h2>
            <p className="text-[#575757] text-lg mb-[15px]">
              Under certain circumstances, you have rights under data protection
              laws in relation to your personal data. These include the right
              to:
            </p>
            <ul className="list-disc pl-[30px] text-[#575757] text-lg mb-[15px] space-y-2">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>
            <p className="text-[#575757] text-lg">
              If you wish to exercise any of the rights set out above, please
              contact us at privacy@arbor.com.
            </p>
          </div>

          <div className="mb-[40px]">
            <h2 className="text-[#1e1e1e] text-2xl font-bold mb-[15px]">
              6. Cookies
            </h2>
            <p className="text-[#575757] text-lg mb-[15px]">
              Cookies are small text files that are placed on your computer by
              websites that you visit. They are widely used in order to make
              websites work, or work more efficiently, as well as to provide
              information to the owners of the site. Most web browsers allow
              some control of most cookies through the browser settings.
            </p>
            <p className="text-[#575757] text-lg">
              To find out more about cookies, including how to see what cookies
              have been set and how to manage and delete them, visit
              www.aboutcookies.org or www.allaboutcookies.org.
            </p>
          </div>

          <div className="mb-[40px]">
            <h2 className="text-[#1e1e1e] text-2xl font-bold mb-[15px]">
              7. Contact Us
            </h2>
            <p className="text-[#575757] text-lg mb-[15px]">
              If you have any questions about this privacy policy or our privacy
              practices, please contact us in the following ways:
            </p>
            <p className="text-[#575757] text-lg mb-[5px]">
              Email address: privacy@arbor.com
            </p>
            <p className="text-[#575757] text-lg mb-[5px]">
              Postal address: 123 Business Street, London, UK
            </p>
            <p className="text-[#575757] text-lg">
              Telephone number: +44 (0) 123 456 7890
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
              className="text-[#2e7d32] text-sm font-semibold"
            >
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-[#575757] text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
