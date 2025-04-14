import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Share2, Calendar, Clock } from "lucide-react";
import Footer from "../Footer";

interface BlogArticleLayoutProps {
  title: string;
  date: string;
  readTime: string;
  category: string;
  heroImage: string;
  children: React.ReactNode;
}

const BlogArticleLayout = ({
  title,
  date,
  readTime,
  category,
  heroImage,
  children,
}: BlogArticleLayoutProps) => {
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Back to blog link */}
      <div className="w-full px-4 md:px-[152px] pt-[30px]">
        <Link
          to="/blog"
          className="flex items-center text-[#2e7d32] font-medium hover:underline"
          onClick={() => window.scrollTo(0, 0)}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all articles
        </Link>
      </div>

      {/* Hero section */}
      <div className="w-full px-4 md:px-[152px] pt-[30px] pb-[50px]">
        <div className="max-w-[900px] mx-auto">
          {/* Category tag */}
          <div className="mb-4">
            <span className="bg-[#e0f2e0] text-[#2e7d32] px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-[#1e1e1e] mb-6">
            {title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center text-[#575757] mb-8">
            <div className="flex items-center mr-6 mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{date}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <Clock className="w-4 h-4 mr-2" />
              <span>{readTime} read</span>
            </div>
            <div className="flex items-center mb-2 ml-auto">
              <button className="flex items-center text-[#2e7d32] hover:underline">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>
          </div>

          {/* Hero image */}
          <div className="w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden mb-10">
            <img
              src={heroImage}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article content */}
          <div className="article-content">{children}</div>

          {/* Share and related articles section */}
          <div className="mt-16 border-t border-gray-200 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-xl font-bold mb-2">Share this article</h3>
                <div className="flex space-x-4">
                  <button className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-[#e0f2e0]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2e7d32"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-[#e0f2e0]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2e7d32"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-[#e0f2e0]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2e7d32"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </button>
                </div>
              </div>
              <Link
                to="/blog"
                className="mt-6 md:mt-0 bg-[#2e7d32] text-white px-6 py-3 rounded-lg font-medium flex items-center hover:bg-[#1b5e20] transition-colors w-full md:w-auto text-center justify-center"
                onClick={() => window.scrollTo(0, 0)}
              >
                View all articles
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogArticleLayout;
