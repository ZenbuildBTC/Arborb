import React, { useState } from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "./SEOHead.jsx";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";

const TermsOfService = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white overflow-hidden">
      <SEOHead
        title="Terms of Service | Arbor Pay Go UK Business Consultancy"
        description="Read the terms and conditions governing the use of Arbor Pay Go's services, website, and products."
        keywords="terms of service, terms and conditions, legal terms, business consultancy terms, service agreement"
        canonicalUrl="https://arborpaygo.com/terms-of-service"
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
            <span className="text-[#2a2a2a]">Terms of </span>
            <span className="text-[#2e7d32]">Service</span>
          </h1>

          <p className="w-full md:w-[800px] mt-[20px] text-lg md:text-xl font-medium leading-relaxed text-[#575757] text-center">
            Last Updated: June 1, 2024
          </p>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="w-full px-4 md:px-[152px] py-[40px]">
        <div className="max-w-[900px] mx-auto">
          <div className="mb-[40px]">
            <h2 className="text-[#1e1e1e] text-2xl font-bold mb-[15px]">
              1. Introduction
            </h2>
            <p className="text-[#575757] text-lg mb-[15px]">
              Welcome to Arbor Pay Go ("Company", "we", "our", "us")! These
              Terms of Service ("Terms", "Terms of Service") govern your use of
              our website located at www.arborpaygo.com (together or
              individually "Service") operated by Arbor Pay Go.
            </p>
            <p className="text-[#575757] text-lg">
              Our Privacy Policy also governs your use of our Service and
              explains how we collect, safeguard and disclose information that
              results from your use of our web pages. Please read it here:{" "}
              <Link to="/privacy-policy" className="text-[#2e7d32] underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="mb-[40px]">
            <h2 className="text-[#1e1e1e] text-2xl font-bold mb-[15px]">
              2. Acceptance of Terms
            </h2>
            <p className="text-[#575757] text-lg mb-[15px]">
              By accessing or using the Service you agree to be bound by these
              Terms. If you disagree with any part of the terms then you may not
              access the Service.
            </p>
            <p className="text-[#575757] text-lg">
              By creating an account on our Service, you agree to subscribe to
              newsletters, marketing or promotional materials and other
              information we may send. However, you may opt out of receiving
              any, or all, of these communications from us by following the
              unsubscribe link or by emailing us at contact@arborpaygo.com.
            </p>
          </div>

          <div className="mb-[40px]">
            <h2 className="text-[#1e1e1e] text-2xl font-bold mb-[15px]">
              3. Service Usage
            </h2>
            <p className="text-[#575757] text-lg mb-[15px]">
              Our Service allows you to access our business consultancy
              services, including payment solutions, business funding, and
              restaurant booking apps. We reserve the right to refuse service to
              anyone for any reason at any time.
            </p>
            <p className="text-[#575757] text-lg">
              You understand that your content (not including credit card
              information), may be transferred unencrypted and involve (a)
              transmissions over various networks; and (b) changes to conform
              and adapt to technical requirements of connecting networks or
              devices.
            </p>
          </div>

          <div className="mb-[40px]">
            <h2 className="text-[#1e1e1e] text-2xl font-bold mb-[15px]">
              4. Intellectual Property
            </h2>
            <p className="text-[#575757] text-lg mb-[15px]">
              The Service and its original content (excluding content provided
              by users), features and functionality are and will remain the
              exclusive property of Arbor Pay Go and its licensors. The Service
              is protected by copyright, trademark, and other laws of both the
              United Kingdom and foreign countries. Our trademarks and trade
              dress may not be used in connection with any product or service
              without the prior written consent of Arbor Pay Go.
            </p>
          </div>

          <div className="mb-[40px]">
            <h2 className="text-[#1e1e1e] text-2xl font-bold mb-[15px]">
              5. Accounts
            </h2>
            <p className="text-[#575757] text-lg mb-[15px]">
              When you create an account with us, you guarantee that you are
              above the age of 18, and that the information you provide us is
              accurate, complete, and current at all times. Inaccurate,
              incomplete, or obsolete information may result in the immediate
              termination of your account on the Service.
            </p>
            <p className="text-[#575757] text-lg mb-[15px]">
              You are responsible for maintaining the confidentiality of your
              account and password, including but not limited to the restriction
              of access to your computer and/or account. You agree to accept
              responsibility for any and all activities or actions that occur
              under your account and/or password, whether your password is with
              our Service or a third-party service. You must notify us
              immediately upon becoming aware of any breach of security or
              unauthorized use of your account.
            </p>
          </div>

          <div className="mb-[40px]">
            <h2 className="text-[#1e1e1e] text-2xl font-bold mb-[15px]">
              6. Termination
            </h2>
            <p className="text-[#575757] text-lg mb-[15px]">
              We may terminate or suspend your account and bar access to the
              Service immediately, without prior notice or liability, under our
              sole discretion, for any reason whatsoever and without limitation,
              including but not limited to a breach of the Terms.
            </p>
            <p className="text-[#575757] text-lg">
              If you wish to terminate your account, you may simply discontinue
              using the Service. All provisions of the Terms which by their
              nature should survive termination shall survive termination,
              including, without limitation, ownership provisions, warranty
              disclaimers, indemnity and limitations of liability.
            </p>
          </div>

          <div className="mb-[40px]">
            <h2 className="text-[#1e1e1e] text-2xl font-bold mb-[15px]">
              7. Limitation of Liability
            </h2>
            <p className="text-[#575757] text-lg mb-[15px]">
              In no event shall Arbor Pay Go, nor its directors, employees,
              partners, agents, suppliers, or affiliates, be liable for any
              indirect, incidental, special, consequential or punitive damages,
              including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses, resulting from (i) your
              access to or use of or inability to access or use the Service;
              (ii) any conduct or content of any third party on the Service;
              (iii) any content obtained from the Service; and (iv) unauthorized
              access, use or alteration of your transmissions or content,
              whether based on warranty, contract, tort (including negligence)
              or any other legal theory, whether or not we have been informed of
              the possibility of such damage.
            </p>
          </div>

          <div className="mb-[40px]">
            <h2 className="text-[#1e1e1e] text-2xl font-bold mb-[15px]">
              8. Governing Law
            </h2>
            <p className="text-[#575757] text-lg mb-[15px]">
              These Terms shall be governed and construed in accordance with the
              laws of the United Kingdom, without regard to its conflict of law
              provisions.
            </p>
            <p className="text-[#575757] text-lg">
              Our failure to enforce any right or provision of these Terms will
              not be considered a waiver of those rights. If any provision of
              these Terms is held to be invalid or unenforceable by a court, the
              remaining provisions of these Terms will remain in effect.
            </p>
          </div>

          <div className="mb-[40px]">
            <h2 className="text-[#1e1e1e] text-2xl font-bold mb-[15px]">
              9. Changes to Terms
            </h2>
            <p className="text-[#575757] text-lg mb-[15px]">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material we will provide
              at least 30 days' notice prior to any new terms taking effect.
              What constitutes a material change will be determined at our sole
              discretion.
            </p>
            <p className="text-[#575757] text-lg">
              By continuing to access or use our Service after any revisions
              become effective, you agree to be bound by the revised terms. If
              you do not agree to the new terms, you are no longer authorized to
              use the Service.
            </p>
          </div>

          <div className="mb-[40px]">
            <h2 className="text-[#1e1e1e] text-2xl font-bold mb-[15px]">
              10. Contact Us
            </h2>
            <p className="text-[#575757] text-lg mb-[15px]">
              If you have any questions about these Terms, please contact us:
            </p>
            <p className="text-[#575757] text-lg mb-[5px]">
              Email: legal@arborpaygo.com
            </p>
            <p className="text-[#575757] text-lg mb-[5px]">
              Postal address: 167-169 Great Portland Street, 5th Floor, London,
              W1W 5PF
            </p>
            <p className="text-[#575757] text-lg">
              Telephone number: +44 (0) 123 456 7890
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
