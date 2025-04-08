import React from "react";
import { Helmet } from "react-helmet";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  schema?: string;
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl = "https://arbor.com",
  ogImage = "https://arbor.com/images/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  schema,
}: SEOHeadProps) => {
  // Default organization schema
  const organizationSchema = `
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Arbor",
      "url": "https://arbor.com",
      "logo": "https://arbor.com/images/logo.png",
      "description": "UK-based consultancy specializing in payment solutions, business funding, restaurant booking apps, and free AI-built websites for retail businesses.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+44-123-456-7890",
        "contactType": "customer service",
        "areaServed": "GB",
        "availableLanguage": "en"
      },
      "sameAs": [
        "https://www.facebook.com/arboruk",
        "https://www.twitter.com/arboruk",
        "https://www.instagram.com/arboruk"
      ]
    }
  `;

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Arbor" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#2e7d32" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Arbor" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@arboruk" />

      {/* Structured Data - Organization or custom schema */}
      <script type="application/ld+json">{schema || organizationSchema}</script>
    </Helmet>
  );
};

export default SEOHead;
