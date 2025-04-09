import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
// @ts-ignore
import routes from "tempo-routes";

const ArborWebsite = lazy(() => import("./components/ArborWebsite"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const ServicesPage = lazy(() => import("./components/ServicesPage"));
const SolutionsPage = lazy(() => import("./components/SolutionsPage"));
const ContactPage = lazy(() => import("./components/ContactPage"));
const TestimonialsPage = lazy(() => import("./components/TestimonialsPage"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./components/TermsOfService"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const FutureOfPaymentSolutions = lazy(
  () => import("./pages/blog/FutureOfPaymentSolutions"),
);
const SecuringBusinessFunding = lazy(
  () => import("./pages/blog/SecuringBusinessFunding"),
);
const RevolutionizingRestaurantBookings = lazy(
  () => import("./pages/blog/RevolutionizingRestaurantBookings"),
);

function App() {
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex items-center justify-center bg-white">
          <p className="text-2xl text-[#2e7d32] font-bold">Loading...</p>
        </div>
      }
    >
      <>
        <Routes>
          <Route path="/" element={<ArborWebsite />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route
            path="/blog/future-of-payment-solutions"
            element={<FutureOfPaymentSolutions />}
          />
          <Route
            path="/blog/securing-business-funding"
            element={<SecuringBusinessFunding />}
          />
          <Route
            path="/blog/revolutionizing-restaurant-bookings"
            element={<RevolutionizingRestaurantBookings />}
          />
          {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
