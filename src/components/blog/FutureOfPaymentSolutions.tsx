import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import SEOHead from "../SEOHead.jsx";
import MobileMenu from "../MobileMenu";

const FutureOfPaymentSolutions = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white overflow-hidden">
      <SEOHead
        title="The Future of Payment Solutions in the UK | Arbor Blog"
        description="Explore the latest trends and innovations shaping the future of payment solutions for UK businesses, from contactless payments to blockchain technology."
        keywords="payment solutions UK, future of payments, contactless payment trends, blockchain payments, digital payment innovation, UK payment technology"
        canonicalUrl="https://arbor.com/blog/future-of-payment-solutions"
        schema={`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "The Future of Payment Solutions in the UK",
            "description": "As the UK continues to embrace digital transformation, payment solutions are evolving at an unprecedented pace. From contactless payments to blockchain technology, discover the trends shaping the future of transactions for UK businesses.",
            "image": "https://arbor.com/images/blog/future-of-payment-solutions.jpg",
            "datePublished": "2023-06-15",
            "dateModified": "2023-06-15",
            "author": {
              "@type": "Organization",
              "name": "Arbor"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Arbor",
              "logo": {
                "@type": "ImageObject",
                "url": "https://arbor.com/logo.png"
              }
            }
          }
        `}
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

      {/* Back to Blog */}
      <div className="w-full px-4 md:px-[152px] pt-[30px]">
        <Link
          to="/blog"
          className="flex items-center text-[#2e7d32] font-medium hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <section className="w-full px-4 md:px-[152px] pt-[40px] pb-[60px]">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-[30px]">
            The Future of Payment Solutions in the UK
          </h1>

          <div className="flex flex-wrap items-center text-[#575757] mb-[40px]">
            <div className="flex items-center mr-6 mb-2">
              <Calendar className="w-5 h-5 mr-2" />
              <span>June 15, 2023</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <Clock className="w-5 h-5 mr-2" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center mb-2">
              <Share2 className="w-5 h-5 mr-2" />
              <span>Share</span>
            </div>
          </div>

          <div className="w-full h-[400px] md:h-[500px] rounded-[20px] overflow-hidden mb-[40px]">
            <img
              src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=1200&q=80"
              alt="The Future of Payment Solutions in the UK"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="w-full px-4 md:px-[152px] py-[40px]">
        <div className="max-w-[800px] mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-[#575757] text-lg leading-[32px] mb-[30px]">
              As the UK continues to embrace digital transformation, payment
              solutions are evolving at an unprecedented pace. The way
              businesses accept payments and the way consumers make them has
              changed dramatically in recent years, with the COVID-19 pandemic
              accelerating many of these trends. In this article, we'll explore
              the key developments shaping the future of payment solutions in
              the UK and what they mean for businesses across various sectors.
            </p>

            <h2 className="text-[#1e1e1e] text-2xl font-bold mt-[50px] mb-[20px]">
              The Rise of Contactless Payments
            </h2>

            <p className="text-[#575757] text-lg leading-[32px] mb-[30px]">
              The UK has been at the forefront of contactless payment adoption,
              with the technology now accounting for over 80% of all in-store
              transactions. The contactless limit has increased multiple times,
              most recently to £100, making it even more convenient for
              consumers to tap and pay for a wider range of purchases.
            </p>

            <p className="text-[#575757] text-lg leading-[32px] mb-[30px]">
              This trend is expected to continue, with mobile wallets like Apple
              Pay and Google Pay removing the upper limit altogether when
              authenticated with biometrics. For businesses, this means ensuring
              your payment terminals are up-to-date and capable of accepting all
              forms of contactless payments, including wearable devices.
            </p>

            <div className="bg-[#f9f9f9] rounded-[15px] p-[25px] my-[40px]">
              <h3 className="text-[#1e1e1e] text-xl font-bold mb-[15px]">
                Key Statistic
              </h3>
              <p className="text-[#575757] text-lg">
                Contactless payments now account for over 80% of all in-store
                transactions in the UK, up from just 40% in 2019.
              </p>
            </div>

            <h2 className="text-[#1e1e1e] text-2xl font-bold mt-[50px] mb-[20px]">
              The Integration of Payment Systems
            </h2>

            <p className="text-[#575757] text-lg leading-[32px] mb-[30px]">
              One of the most significant trends in payment solutions is the
              move toward integrated systems. Rather than having separate
              solutions for in-store payments, online transactions, and
              back-office operations, businesses are increasingly adopting
              unified platforms that connect all aspects of their financial
              operations.
            </p>

            <p className="text-[#575757] text-lg leading-[32px] mb-[30px]">
              These integrated payment ecosystems offer several advantages:
            </p>

            <ul className="list-disc pl-6 space-y-3 mb-[30px]">
              <li className="text-[#575757] text-lg leading-[32px]">
                Seamless omnichannel experiences for customers
              </li>
              <li className="text-[#575757] text-lg leading-[32px]">
                Simplified reconciliation and accounting
              </li>
              <li className="text-[#575757] text-lg leading-[32px]">
                Better data collection and analytics
              </li>
              <li className="text-[#575757] text-lg leading-[32px]">
                Reduced administrative overhead
              </li>
              <li className="text-[#575757] text-lg leading-[32px]">
                Enhanced security through standardized protocols
              </li>
            </ul>

            <h2 className="text-[#1e1e1e] text-2xl font-bold mt-[50px] mb-[20px]">
              Blockchain and Cryptocurrency Payments
            </h2>

            <p className="text-[#575757] text-lg leading-[32px] mb-[30px]">
              While still in the early stages of adoption, blockchain technology
              and cryptocurrencies are beginning to make inroads into mainstream
              payment systems. The UK government has shown interest in exploring
              central bank digital currencies (CBDCs), with the Bank of England
              actively researching a digital pound.
            </p>

            <p className="text-[#575757] text-lg leading-[32px] mb-[30px]">
              For businesses, particularly those in e-commerce and international
              trade, accepting cryptocurrency payments can offer benefits such
              as lower transaction fees, faster settlement times, and access to
              a growing market of crypto enthusiasts. However, regulatory
              uncertainty and price volatility remain challenges to widespread
              adoption.
            </p>

            <div className="border-l-4 border-[#2e7d32] pl-6 py-2 my-[40px]">
              <p className="text-[#1e1e1e] text-lg italic">
                "The future of payments is not just about technology, but about
                creating seamless, secure, and personalized experiences that
                meet the evolving needs of both businesses and consumers."
              </p>
            </div>

            <h2 className="text-[#1e1e1e] text-2xl font-bold mt-[50px] mb-[20px]">
              Artificial Intelligence and Machine Learning
            </h2>

            <p className="text-[#575757] text-lg leading-[32px] mb-[30px]">
              AI and machine learning are revolutionizing payment systems in
              several ways:
            </p>

            <ol className="list-decimal pl-6 space-y-3 mb-[30px]">
              <li className="text-[#575757] text-lg leading-[32px]">
                <strong>Fraud detection:</strong> Advanced algorithms can
                identify suspicious patterns and potential fraud in real-time,
                reducing losses for businesses and protecting consumers.
              </li>
              <li className="text-[#575757] text-lg leading-[32px]">
                <strong>Personalized recommendations:</strong> Payment data can
                be analyzed to offer tailored products, services, and payment
                options to customers.
              </li>
              <li className="text-[#575757] text-lg leading-[32px]">
                <strong>Predictive analytics:</strong> Businesses can forecast
                cash flow, identify trends, and optimize pricing strategies
                based on payment data.
              </li>
              <li className="text-[#575757] text-lg leading-[32px]">
                <strong>Automated reconciliation:</strong> AI can match payments
                with invoices, reducing manual processing and errors.
              </li>
            </ol>

            <h2 className="text-[#1e1e1e] text-2xl font-bold mt-[50px] mb-[20px]">
              Open Banking and API-Driven Solutions
            </h2>

            <p className="text-[#575757] text-lg leading-[32px] mb-[30px]">
              The UK has been a pioneer in open banking, which allows
              third-party financial service providers to access banking data
              through APIs (Application Programming Interfaces). This has led to
              a proliferation of innovative payment solutions that can integrate
              directly with bank accounts, offering alternatives to traditional
              card payments.
            </p>

            <p className="text-[#575757] text-lg leading-[32px] mb-[30px]">
              For businesses, open banking payments can offer several
              advantages:
            </p>

            <ul className="list-disc pl-6 space-y-3 mb-[30px]">
              <li className="text-[#575757] text-lg leading-[32px]">
                Lower transaction fees compared to card payments
              </li>
              <li className="text-[#575757] text-lg leading-[32px]">
                Immediate settlement of funds
              </li>
              <li className="text-[#575757] text-lg leading-[32px]">
                Reduced risk of chargebacks
              </li>
              <li className="text-[#575757] text-lg leading-[32px]">
                Enhanced security through bank-level authentication
              </li>
            </ul>

            <h2 className="text-[#1e1e1e] text-2xl font-bold mt-[50px] mb-[20px]">
              Biometric Authentication
            </h2>

            <p className="text-[#575757] text-lg leading-[32px] mb-[30px]">
              Biometric authentication methods such as fingerprint scanning,
              facial recognition, and voice identification are becoming
              increasingly common in payment systems. These technologies offer a
              balance of security and convenience, reducing the need for
              passwords or PINs while providing strong protection against fraud.
            </p>

            <p className="text-[#575757] text-lg leading-[32px] mb-[30px]">
              As biometric technology continues to advance, we can expect to see
              more innovative applications in payment solutions, such as
              behavioral biometrics that analyze typing patterns or how a person
              holds their phone to add an extra layer of security.
            </p>

            <h2 className="text-[#1e1e1e] text-2xl font-bold mt-[50px] mb-[20px]">
              Preparing Your Business for the Future
            </h2>

            <p className="text-[#575757] text-lg leading-[32px] mb-[30px]">
              To stay competitive in this rapidly evolving landscape, UK
              businesses should consider the following steps:
            </p>

            <ol className="list-decimal pl-6 space-y-3 mb-[30px]">
              <li className="text-[#575757] text-lg leading-[32px]">
                <strong>Audit your current payment infrastructure:</strong>{" "}
                Identify gaps and opportunities for improvement in your existing
                payment systems.
              </li>
              <li className="text-[#575757] text-lg leading-[32px]">
                <strong>Embrace omnichannel payments:</strong> Ensure customers
                can pay how they want, where they want, with a consistent
                experience across all channels.
              </li>
              <li className="text-[#575757] text-lg leading-[32px]">
                <strong>Prioritize security and compliance:</strong> Stay
                up-to-date with the latest security standards and regulatory
                requirements, such as Strong Customer Authentication (SCA).
              </li>
              <li className="text-[#575757] text-lg leading-[32px]">
                <strong>Leverage data analytics:</strong> Use payment data to
                gain insights into customer behavior and optimize your business
                operations.
              </li>
              <li className="text-[#575757] text-lg leading-[32px]">
                <strong>Stay informed about emerging technologies:</strong> Keep
                an eye on developments in blockchain, AI, and biometrics to
                identify opportunities for your business.
              </li>
            </ol>

            <h2 className="text-[#1e1e1e] text-2xl font-bold mt-[50px] mb-[20px]">
              Conclusion
            </h2>

            <p className="text-[#575757] text-lg leading-[32px] mb-[30px]">
              The future of payment solutions in the UK is being shaped by a
              convergence of technologies and changing consumer preferences. By
              embracing these trends and working with experienced partners like
              Arbor, businesses can not only keep pace with the evolving payment
              landscape but also gain a competitive edge through enhanced
              customer experiences, improved operational efficiency, and reduced
              costs.
            </p>

            <p className="text-[#575757] text-lg leading-[32px] mb-[30px]">
              The businesses that will thrive in this new era are those that
              view payments not just as a necessary transaction but as a
              strategic opportunity to create value and build stronger
              relationships with their customers.
            </p>
          </div>

          {/* Author Section */}
          <div className="border-t border-[#e0e0e0] mt-[50px] pt-[30px]">
            <div className="flex items-start">
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden mr-[20px]">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
                  alt="Author"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-[#1e1e1e] text-xl font-bold mb-[5px]">
                  Arbor Research Team
                </h3>
                <p className="text-[#575757] text-base">
                  Our team of payment experts and financial analysts brings
                  decades of combined experience in the UK financial services
                  sector.
                </p>
              </div>
            </div>
          </div>

          {/* Share and Tags */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-[#e0e0e0] mt-[30px] pt-[30px]">
            <div className="mb-4 md:mb-0">
              <span className="text-[#1e1e1e] font-semibold mr-3">Share:</span>
              <button className="w-[40px] h-[40px] bg-[#f5f5f5] rounded-full inline-flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#1e1e1e]"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </button>
              <button className="w-[40px] h-[40px] bg-[#f5f5f5] rounded-full inline-flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#1e1e1e]"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </button>
              <button className="w-[40px] h-[40px] bg-[#f5f5f5] rounded-full inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#1e1e1e]"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </button>
            </div>

            <div className="flex flex-wrap">
              <span className="text-[#1e1e1e] font-semibold mr-3">Tags:</span>
              <span className="bg-[#f5f5f5] text-[#575757] text-sm px-3 py-1 rounded-full mr-2 mb-2">
                Payment Solutions
              </span>
              <span className="bg-[#f5f5f5] text-[#575757] text-sm px-3 py-1 rounded-full mr-2 mb-2">
                Contactless Payments
              </span>
              <span className="bg-[#f5f5f5] text-[#575757] text-sm px-3 py-1 rounded-full mr-2 mb-2">
                Blockchain
              </span>
              <span className="bg-[#f5f5f5] text-[#575757] text-sm px-3 py-1 rounded-full mb-2">
                UK Business
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="w-full px-4 md:px-[152px] py-[80px] bg-[#f9f9f9]">
        <h2 className="text-[#1e1e1e] text-3xl font-bold mb-[50px]">
          Related Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {/* Related Article 1 */}
          <div className="bg-white rounded-[20px] overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="h-[200px] relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80"
                alt="Contactless Payment Adoption"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-[30px]">
              <div className="flex items-center text-[#575757] text-sm mb-[15px]">
                <span>April 15, 2023</span>
                <span className="mx-3">•</span>
                <span>7 min read</span>
              </div>

              <h3 className="text-[#1e1e1e] text-xl font-bold mb-[15px]">
                Contactless Payment Adoption: UK Leads the Way
              </h3>

              <p className="text-[#575757] text-base mb-[20px]">
                The UK has become a global leader in contactless payment
                adoption. Explore the factors driving this trend and what it
                means for businesses.
              </p>

              <Link
                to="/blog/contactless-payment-adoption"
                className="flex items-center text-[#2e7d32] font-semibold"
              >
                Read more <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </div>
          </div>

          {/* Related Article 2 */}
          <div className="bg-white rounded-[20px] overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="h-[200px] relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80"
                alt="Digital Transformation for SMEs"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-[30px]">
              <div className="flex items-center text-[#575757] text-sm mb-[15px]">
                <span>March 10, 2023</span>
                <span className="mx-3">•</span>
                <span>5 min read</span>
              </div>

              <h3 className="text-[#1e1e1e] text-xl font-bold mb-[15px]">
                Digital Transformation: A Practical Guide for UK SMEs
              </h3>

              <p className="text-[#575757] text-base mb-[20px]">
                Digital transformation doesn't have to be overwhelming. This
                practical guide offers step-by-step advice for small businesses.
              </p>

              <Link
                to="/blog/digital-transformation-guide"
                className="flex items-center text-[#2e7d32] font-semibold"
              >
                Read more <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </div>
          </div>

          {/* Related Article 3 */}
          <div className="bg-white rounded-[20px] overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div className="h-[200px] relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80"
                alt="Alternative Funding Options"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-[30px]">
              <div className="flex items-center text-[#575757] text-sm mb-[15px]">
                <span>March 28, 2023</span>
                <span className="mx-3">•</span>
                <span>6 min read</span>
              </div>

              <h3 className="text-[#1e1e1e] text-xl font-bold mb-[15px]">
                Beyond Banks: Alternative Funding Options for UK Startups
              </h3>

              <p className="text-[#575757] text-base mb-[20px]">
                Traditional bank loans aren't the only way to fund your startup.
                Discover the growing ecosystem of alternative funding sources.
              </p>

              <Link
                to="/blog/alternative-funding-options"
                className="flex items-center text-[#2e7d32] font-semibold"
              >
                Read more <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 md:px-[152px] py-[80px]">
        <div className="w-full bg-[#2e7d32] rounded-[20px] px-6 md:px-[60px] py-[60px] flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="max-w-[600px]">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-[25px]">
              Ready to Upgrade Your Payment Systems?
            </h2>

            <p className="text-white/90 text-lg md:text-xl mb-[40px]">
              Contact us today to discuss how our payment solutions can help
              your business reduce costs, improve customer experience, and
              prepare for the future.
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
                <span className="text-[#2e7d32] text-4xl md:text-5xl">💳</span>
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

export default FutureOfPaymentSolutions;
