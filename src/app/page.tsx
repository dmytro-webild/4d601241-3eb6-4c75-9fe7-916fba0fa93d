"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Heart, Laptop, MapPin, ShoppingBag, Smartphone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSmallSizeMediumTitles"
        background="none"
        cardStyle="inset"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Services", id: "services" },
        { name: "About", id: "about" },
        { name: "Contact", id: "contact" },
      ]}
      button={{
        text: "Book Repair",        onClick: () => window.open("https://wa.me/15551234567?text=Hi, I would like to book a repair.", "_blank"),
      }}
      brandName="Electronics House"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{ variant: "gradient-bars" }}
      title="Expert Tech Care, Faster Than Your Morning Coffee."
      description="Premium repairs, certified pre-owned devices, and world-class service. We don’t just fix screens; we restore your connection to the world—usually in under 30 minutes."
      leftCarouselItems={[
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/high-tech-laptop-repair-close-up-1774882601000.png", imageAlt: "Tech 1" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/smartphone-screen-assembly-1774882602000.png", imageAlt: "Tech 2" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/precision-electronics-tools-1774882603000.png", imageAlt: "Tech 3" }
      ]}
      rightCarouselItems={[
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/motherboard-repair-close-up-1774882604000.png", imageAlt: "Tech 4" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/modern-tech-lab-workspace-1774882605000.png", imageAlt: "Tech 5" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/soldering-circuit-board-1774882606000.png", imageAlt: "Tech 6" }
      ]}
      buttons={[
        { text: "Get a Quick Quote", onClick: () => window.open("https://wa.me/15551234567?text=I need a quote for my device repair.", "_blank") },
        { text: "Browse Devices", href: "#products" },
      ]}
      avatars={[]}
      avatarText="Trusted by 370+ local residents"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={["Google Local Guide", "4.8 Star Rating", "Verified Expert", "Quick Repair", "Trusted Hub", "Certified", "Community Favorite"]}
      title="Rated 4.8 Stars by 370+ Neighbors in Orlando"
      description="Verified by our community as the local experts in tech restoration."
    />
  </div>

  <div id="services" data-section="services">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        { icon: Smartphone, title: "iPhone/iPad Repair", description: "Back to Life in 30 Minutes. Rapid battery and screen replacements with integrity-backed pricing." },
        { icon: Laptop, title: "MacBook Pro Experts", description: "Specialized diagnostics and hardware upgrades for the pros who can’t afford downtime." },
        { icon: ShoppingBag, title: "Curated Tech Sales", description: "Quality-checked, brand-new, and certified pre-owned devices at extremely reasonable prices." },
      ]}
      title="Our Expertise"
      description="We specialize in premium tech care for your essential devices."
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Integrity First"
      title="Why Choose Us"
      description="We’ve been a 'go-to' tech hub since day one because we value people over pixels."
      subdescription="Our team treats your tech like it’s our own, following the 30-Minute Standard and providing transparent, jargon-free quotes."
      icon={Heart}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-professional-and-approachable-portrait-1774882599155-8d39fa68.png"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Delfilio B.", handle: "@delfilio", testimonial: "I don't give them 20 stars because it isn't an option. Super trustworthy." },
        { id: "2", name: "CJ Noe", handle: "@cjnoe", testimonial: "A go-to for tech where integrity and service are the guiding principles." },
      ]}
      title="What Our Community Says"
      description="Customer stories that define our service philosophy."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactFaq
      animationType="slide-up"
      useInvertedBackground={false}
      faqs={[]}
      ctaTitle="Ready to fix it? Swing by Belle Isle Commons."
      ctaDescription="Visit our team at 5062 Conway Rd for quick, expert repairs. We are ready to assist you."
      ctaButton={{
        text: "Get Directions",        onClick: () => window.open("https://www.google.com/maps/dir/?api=1&destination=5062+Conway+Rd,Orlando,FL", "_blank"),
      }}
      ctaIcon={MapPin}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[]}
      logoText="Electronics House"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}