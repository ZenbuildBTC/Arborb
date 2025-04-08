import React from "react";
import { Helmet } from "react-helmet";

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl = "https://arbor.com",
  ogImage = "https://arbor.com/images/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
}) => {
  // Ensure all titles include "Arbor Pay Go"
  const formattedTitle = title.includes("Arbor Pay Go")
    ? title
    : `${title} | Arbor Pay Go`;
  return (
    <Helmet>
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={formattedTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Arbor Pay Go",
            "url": "https://arbor.com",
            "logo": "https://arbor.com/images/logo.png",
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
        `}
      </script>
    </Helmet>
  );
};

export default SEOHead;
