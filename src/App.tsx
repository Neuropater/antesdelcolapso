/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductExplanation from "./components/ProductExplanation";
import WhatYouWillLearn from "./components/WhatYouWillLearn";
import PracticalExample from "./components/PracticalExample";
import BonusSection from "./components/BonusSection";
import OfferSection from "./components/OfferSection";
import SummarySection from "./components/SummarySection";
import TrustMessage from "./components/TrustMessage";
import AboutAuthor from "./components/AboutAuthor";
import FAQ from "./components/FAQ";
import CTAFinal from "./components/CTAFinal";
import StickyCTA from "./components/StickyCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#FAF7FF] selection:bg-purple-200 selection:text-purple-900 overflow-x-hidden">
      {/* Sales Landing Page Sections */}
      <Hero />
      <Features />
      <ProductExplanation />
      <WhatYouWillLearn />
      <BonusSection />
      <PracticalExample />
      <OfferSection />
      <SummarySection />
      <TrustMessage />
      <AboutAuthor />
      <FAQ />
      <CTAFinal />
      
      {/* Sticky Conversion Footer for Mobile Screen width */}
      <StickyCTA />
      
      {/* Brand Disclaimer & Social Footer */}
      <Footer />
    </div>
  );
}

