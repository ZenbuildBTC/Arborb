import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import SEOHead from "../components/SEOHead.jsx";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

const BlogPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedArticles, setExpandedArticles] = useState<number[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleArticle = (index: number) => {
    setExpandedArticles((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      <SEOHead
        title="Blog | Arbor Pay Go Business Consultancy"
        description="Insights, tips, and industry news about payment solutions, business funding, and hospitality technology for UK businesses."
        keywords="business blog UK, payment processing tips, business funding advice, restaurant technology trends, SME growth strategies, UK business insights"
        canonicalUrl="https://arbor.com/blog"
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
      <section className="w-full px-4 md:px-[152px] pt-[60px] pb-[80px]">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-center">
            <span className="text-[#2a2a2a]">Our </span>
            <span className="text-[#2e7d32]">Blog</span>
          </h1>

          <p className="w-full md:w-[800px] mt-[20px] md:mt-[40px] text-lg md:text-2xl font-medium leading-relaxed md:leading-[41px] text-[#575757] text-center">
            Insights, tips, and industry news to help your business thrive in
            the UK market.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="w-full px-4 md:px-[152px] py-[60px] bg-[#f9f9f9]">
        <div className="flex flex-col md:flex-row items-center gap-[40px]">
          <div className="w-full md:w-1/2 h-[400px] rounded-[20px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&q=80"
              alt="The Future of Payment Solutions in the UK"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-[20px]">
              <div className="w-[156px] h-[35px] bg-[#2e7d32]/10 rounded flex items-center justify-center">
                <span className="text-[#2e7d32] text-lg font-semibold uppercase">
                  FEATURED
                </span>
              </div>
              <div className="w-24 h-0 border-2 border-[#2e7d32] ml-5"></div>
            </div>

            <h2 className="text-[#1e1e1e] text-3xl font-bold mb-[20px]">
              The Future of Payment Solutions in the UK
            </h2>

            <p className="text-[#575757] text-lg leading-[32px] mb-[30px]">
              As the UK continues to embrace digital transformation, payment
              solutions are evolving at an unprecedented pace. From contactless
              payments to blockchain technology, discover the trends shaping the
              future of transactions for UK businesses.
            </p>

            <div className="flex items-center text-[#575757] text-base mb-[30px]">
              <span>June 15, 2025</span>
              <span className="mx-3">•</span>
              <span>8 min read</span>
            </div>

            <Link
              to="/blog/future-of-payment-solutions"
              className="bg-[#2e7d32] text-white text-lg font-semibold py-[15px] px-[30px] rounded-[10px] shadow-[0px_10px_20px_rgba(0,0,0,0.1)] inline-flex items-center"
              onClick={() => window.scrollTo(0, 0)}
            >
              Read Article <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="w-full px-4 md:px-[152px] py-[80px]">
        <h2 className="text-[#1e1e1e] text-3xl font-bold mb-[50px]">
          Recent Articles
        </h2>

        <div className="flex flex-col space-y-6">
          {/* Article 1 */}
          <div className="bg-white rounded-[20px] overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div
              className="p-[30px] cursor-pointer"
              onClick={() => toggleArticle(0)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center text-[#575757] text-sm mb-[15px]">
                    <span>May 28, 2025</span>
                    <span className="mx-3">•</span>
                    <span>6 min read</span>
                  </div>
                  <h3 className="text-[#1e1e1e] text-xl font-bold">
                    Securing Business Funding in 2025: What UK SMEs Need to Know
                  </h3>
                </div>
                {expandedArticles.includes(0) ? (
                  <ChevronUp className="w-6 h-6 text-[#2e7d32]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#2e7d32]" />
                )}
              </div>
            </div>

            {expandedArticles.includes(0) && (
              <div className="px-[30px] pb-[30px]">
                <div className="h-[250px] relative overflow-hidden mb-[20px]">
                  <img
                    src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=500&q=80"
                    alt="Securing Business Funding in 2025"
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                </div>
                <p className="text-[#575757] text-base mb-[20px]">
                  Navigating the funding landscape can be challenging for small
                  and medium enterprises. This guide breaks down the latest
                  options and strategies for UK businesses seeking capital in
                  2025, including government-backed schemes, alternative lending
                  platforms, and equity investment opportunities.
                </p>
                <Link
                  to="/blog/securing-business-funding"
                  className="flex items-center text-[#2e7d32] font-semibold"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Read more <ChevronRight className="w-5 h-5 ml-1" />
                </Link>
              </div>
            )}
          </div>

          {/* Article 2 */}
          <div className="bg-white rounded-[20px] overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div
              className="p-[30px] cursor-pointer"
              onClick={() => toggleArticle(1)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center text-[#575757] text-sm mb-[15px]">
                    <span>May 12, 2025</span>
                    <span className="mx-3">•</span>
                    <span>5 min read</span>
                  </div>
                  <h3 className="text-[#1e1e1e] text-xl font-bold">
                    How Technology is Revolutionizing Restaurant Bookings
                  </h3>
                </div>
                {expandedArticles.includes(1) ? (
                  <ChevronUp className="w-6 h-6 text-[#2e7d32]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#2e7d32]" />
                )}
              </div>
            </div>

            {expandedArticles.includes(1) && (
              <div className="px-[30px] pb-[30px]">
                <div className="h-[250px] relative overflow-hidden mb-[20px]">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80"
                    alt="Revolutionizing Restaurant Bookings"
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                </div>
                <p className="text-[#575757] text-base mb-[20px]">
                  From AI-powered reservation systems to integrated customer
                  management, discover how technology is transforming the dining
                  experience for both restaurants and customers. Learn how
                  modern booking platforms are reducing no-shows, optimizing
                  table management, and creating personalized dining
                  experiences.
                </p>
                <Link
                  to="/blog/revolutionizing-restaurant-bookings"
                  className="flex items-center text-[#2e7d32] font-semibold"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Read more <ChevronRight className="w-5 h-5 ml-1" />
                </Link>
              </div>
            )}
          </div>

          {/* Article 3 */}
          <div className="bg-white rounded-[20px] overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div
              className="p-[30px] cursor-pointer"
              onClick={() => toggleArticle(2)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center text-[#575757] text-sm mb-[15px]">
                    <span>April 30, 2025</span>
                    <span className="mx-3">•</span>
                    <span>4 min read</span>
                  </div>
                  <h3 className="text-[#1e1e1e] text-xl font-bold">
                    The Rise of AI-Built Websites for Small Businesses
                  </h3>
                </div>
                {expandedArticles.includes(2) ? (
                  <ChevronUp className="w-6 h-6 text-[#2e7d32]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#2e7d32]" />
                )}
              </div>
            </div>

            {expandedArticles.includes(2) && (
              <div className="px-[30px] pb-[30px]">
                <div className="h-[250px] relative overflow-hidden mb-[20px]">
                  <img
                    src="https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=500&q=80"
                    alt="AI Websites for Small Businesses"
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                </div>
                <p className="text-[#575757] text-base mb-[20px]">
                  Artificial intelligence is making professional web design
                  accessible to businesses of all sizes. Learn how AI-built
                  websites are changing the game for UK small businesses by
                  providing cost-effective, high-quality online presence
                  solutions with minimal setup time and technical expertise
                  required.
                </p>
                <Link
                  to="/blog/ai-websites-small-businesses"
                  className="flex items-center text-[#2e7d32] font-semibold"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Read more <ChevronRight className="w-5 h-5 ml-1" />
                </Link>
              </div>
            )}
          </div>

          {/* Article 4 */}
          <div className="bg-white rounded-[20px] overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div
              className="p-[30px] cursor-pointer"
              onClick={() => toggleArticle(3)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center text-[#575757] text-sm mb-[15px]">
                    <span>April 15, 2025</span>
                    <span className="mx-3">•</span>
                    <span>7 min read</span>
                  </div>
                  <h3 className="text-[#1e1e1e] text-xl font-bold">
                    Contactless Payment Adoption: UK Leads the Way
                  </h3>
                </div>
                {expandedArticles.includes(3) ? (
                  <ChevronUp className="w-6 h-6 text-[#2e7d32]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#2e7d32]" />
                )}
              </div>
            </div>

            {expandedArticles.includes(3) && (
              <div className="px-[30px] pb-[30px]">
                <div className="h-[250px] relative overflow-hidden mb-[20px]">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80"
                    alt="Contactless Payment Adoption"
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                </div>
                <p className="text-[#575757] text-base mb-[20px]">
                  The UK has become a global leader in contactless payment
                  adoption. Explore the factors driving this trend and what it
                  means for businesses across different sectors. Discover how
                  the latest innovations in contactless technology are creating
                  new opportunities for customer engagement and operational
                  efficiency.
                </p>
                <Link
                  to="/blog/contactless-payment-adoption"
                  className="flex items-center text-[#2e7d32] font-semibold"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Read more <ChevronRight className="w-5 h-5 ml-1" />
                </Link>
              </div>
            )}
          </div>

          {/* Article 5 */}
          <div className="bg-white rounded-[20px] overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
            <div
              className="p-[30px] cursor-pointer"
              onClick={() => toggleArticle(4)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center text-[#575757] text-sm mb-[15px]">
                    <span>March 28, 2025</span>
                    <span className="mx-3">•</span>
                    <span>6 min read</span>
                  </div>
                  <h3 className="text-[#1e1e1e] text-xl font-bold">
                    Beyond Banks: Alternative Funding Options for UK Startups
                  </h3>
                </div>
                {expandedArticles.includes(4) ? (
                  <ChevronUp className="w-6 h-6 text-[#2e7d32]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#2e7d32]" />
                )}
              </div>
            </div>

            {expandedArticles.includes(4) && (
              <div className="px-[30px] pb-[30px]">
                <div className="h-[250px] relative overflow-hidden mb-[20px]">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80"
                    alt="Alternative Funding Options"
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                </div>
                <p className="text-[#575757] text-base mb-[20px]">
                  Traditional bank loans aren't the only way to fund your
                  startup. Discover the growing ecosystem of alternative funding
                  sources available to UK entrepreneurs, including crowdfunding
                  platforms, revenue-based financing, angel investment networks,
                  and specialized venture capital funds focused on early-stage
                  businesses.
                </p>
                <Link
                  to="/blog/alternative-funding-options"
                  className="flex items-center text-[#2e7d32] font-semibold"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Read more <ChevronRight className="w-5 h-5 ml-1" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full px-4 md:px-[152px] py-[80px] bg-[#f9f9f9]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-[#1e1e1e] text-3xl font-bold mb-[20px]">
            Subscribe to Our Newsletter
          </h2>

          <p className="text-[#575757] text-lg mb-[40px]">
            Stay updated with the latest insights, tips, and news about business
            growth, payment solutions, and funding opportunities.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-6 py-4 rounded-[10px] border border-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#2e7d32]"
            />
            <button className="bg-[#2e7d32] text-white font-semibold px-8 py-4 rounded-[10px] shadow-[0px_10px_20px_rgba(0,0,0,0.1)]">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
