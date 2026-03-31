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
        { imageSrc: "http://img.b2bpic.net/premium-photo/internet-network-technology-digital-software-development-future-tech-background-iot-concept-man-using-digital-tablet-laptop-computer-with-global-network-connection_928174-8058.jpg?id=382184544", imageAlt: "Precision motherboard repair" },
        { imageSrc: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800&h=1000", imageAlt: "Advanced electronics diagnostics" },
        { imageSrc: "http://img.b2bpic.net/premium-photo/digital-technology-global-internet-network-ai-artificial-intelligence-big-data-concept-computer-programmer-software-engineer-coding-laptop-global-network-cyber-security_928174-8320.jpg?id=382220369", imageAlt: "Micro-soldering expertise" },
        { imageSrc: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?q=80&w=800&h=1000", imageAlt: "Component testing" },
        { imageSrc: "http://img.b2bpic.net/premium-photo/internet-network-technology-digital-software-development-future-tech-background-iot-concept-man-using-digital-tablet-laptop-computer-with-global-network-connection_928174-8058.jpg?id=382184544", imageAlt: "Precision tool set" },
        { imageSrc: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=800&h=1000", imageAlt: "Screen repair display" },
        { imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&h=1000", imageAlt: "Working on electronics" }
      ]}
      rightCarouselItems={[
        { imageSrc: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&h=1000", imageAlt: "Laptop screen replacement" },
        { imageSrc: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&h=1000", imageAlt: "Professional tech lab setup" },
        { imageSrc: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=800&h=1000", imageAlt: "Quality battery replacement" },
        { imageSrc: "http://img.b2bpic.net/premium-photo/digital-technology-global-internet-network-ai-artificial-intelligence-big-data-concept-computer-programmer-software-engineer-coding-laptop-global-network-cyber-security_928174-8320.jpg?id=382220369", imageAlt: "Tablet repair bench" },
        { imageSrc: "http://img.b2bpic.net/premium-photo/digital-technology-cloud-computing-concept-software-engineer-using-mobile-smart-phone-laptop-computer-with-global-network-connection-technology-innovative-communication-concept_928174-9452.jpg?id=382306749", imageAlt: "Device assembly station" },
        { imageSrc: "http://img.b2bpic.net/free-vector/blue-technology-circuit-diagram-with-glowing-line-lights_1017-17266.jpg?id=3922435", imageAlt: "Hardware maintenance" },
        { imageSrc: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800&h=1000", imageAlt: "Tech repair equipment" }
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
      logos={["https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=200&h=100", "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=200&h=100", "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=200&h=100", "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=200&h=100", "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=200&h=100", "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=200&h=100"]}
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
      imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&h=800"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Delfilio B.", handle: "@delfilio", testimonial: "I don't give them 20 stars because it isn't an option. Super trustworthy.", imageSrc: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&h=200" },
        { id: "2", name: "CJ Noe", handle: "@cjnoe", testimonial: "A go-to for tech where integrity and service are the guiding principles.", imageSrc: "https://images.unsplash.com/photo-1633332755192-727a02c4f01d?q=80&w=200&h=200" },
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