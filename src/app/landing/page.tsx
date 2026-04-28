"use client";

import { LandingNavbar } from "./components/navbar";
import { HeroParallaxDemo } from "./components/hero-parallax-demo";
import { LogoCarousel } from "./components/logo-carousel";
import { StatsSection } from "./components/stats-section";
import { FeaturesSection } from "./components/features-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { PricingSection } from "./components/pricing-section";
import { ContactSection } from "./components/contact-section";
import { FaqSection } from "./components/faq-section";
import { LandingFooter } from "./components/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <main>
        <HeroParallaxDemo />
        <LogoCarousel />
        <StatsSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <LandingFooter />
    </div>
  );
}
