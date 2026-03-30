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
        {
          name: "Services",
          id: "services",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      button={{
        text: "Book Repair",
        href: "#contact",
      }}
      brandName="Electronics House"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Expert Tech Care, Faster Than Your Morning Coffee."
      description="Premium repairs, certified pre-owned devices, and world-class service. We don’t just fix screens; we restore your connection to the world—usually in under 30 minutes."
      leftCarouselItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-high-end-professional-close-up-of-a-te-1774882601356-7e52be88.png",
          imageAlt: "Technician repair 1",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-high-end-professional-close-up-of-a-te-1774882601356-7e52be88.png",
          imageAlt: "Technician repair 2",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-high-end-professional-close-up-of-a-te-1774882601356-7e52be88.png",
          imageAlt: "Technician repair 3",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-high-end-professional-close-up-of-a-te-1774882601356-7e52be88.png",
          imageAlt: "Technician repair 4",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-high-end-professional-close-up-of-a-te-1774882601356-7e52be88.png",
          imageAlt: "Technician repair 5",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-high-end-professional-close-up-of-a-te-1774882601356-7e52be88.png",
          imageAlt: "Technician repair 6",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-high-end-professional-close-up-of-a-te-1774882601356-7e52be88.png",
          imageAlt: "Technician repair 1",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-high-end-professional-close-up-of-a-te-1774882601356-7e52be88.png",
          imageAlt: "Technician repair 2",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-high-end-professional-close-up-of-a-te-1774882601356-7e52be88.png",
          imageAlt: "Technician repair 3",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-high-end-professional-close-up-of-a-te-1774882601356-7e52be88.png",
          imageAlt: "Technician repair 4",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-high-end-professional-close-up-of-a-te-1774882601356-7e52be88.png",
          imageAlt: "Technician repair 5",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-high-end-professional-close-up-of-a-te-1774882601356-7e52be88.png",
          imageAlt: "Technician repair 6",
        },
      ]}
      buttons={[
        {
          text: "Get a Quick Quote",
          href: "#contact",
        },
        {
          text: "Browse Devices",
          href: "#products",
        },
      ]}
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-professional-headshot-of-a-diverse-cus-1774882597374-ff4e17f6.png",
          alt: "User 1",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-professional-headshot-of-a-diverse-cus-1774882600080-0b228320.png",
          alt: "User 2",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-professional-headshot-of-a-diverse-cus-1774882600335-942f514d.png",
          alt: "User 3",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-professional-headshot-of-a-diverse-cus-1774882596838-b60b0b08.png",
          alt: "User 4",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-professional-headshot-of-a-diverse-cus-1774882597374-ff4e17f6.png",
          alt: "User 5",
        },
      ]}
      avatarText="Trusted by 370+ local residents"
      marqueeItems={[
        {
          type: "text",
          text: "Apple Certified",
        },
        {
          type: "text",
          text: "Samsung Partner",
        },
        {
          type: "text",
          text: "Fast Turnaround",
        },
        {
          type: "text",
          text: "Affordable Pricing",
        },
        {
          type: "text",
          text: "Expert Repairs",
        },
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Google Local Guide",
        "4.8 Star Rating",
        "Verified Expert",
        "Quick Repair",
        "Trusted Hub",
        "Certified",
        "Community Favorite",
      ]}
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
        {
          icon: Smartphone,
          title: "iPhone/iPad Repair",
          description: "Back to Life in 30 Minutes. Rapid battery and screen replacements with integrity-backed pricing.",
        },
        {
          icon: Laptop,
          title: "MacBook Pro Experts",
          description: "Specialized diagnostics and hardware upgrades for the pros who can’t afford downtime.",
        },
        {
          icon: ShoppingBag,
          title: "Curated Tech Sales",
          description: "Quality-checked, brand-new, and certified pre-owned devices at extremely reasonable prices.",
        },
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
        {
          id: "1",
          name: "Delfilio B.",
          handle: "@delfilio",
          testimonial: "I don't give them 20 stars because it isn't an option. Super trustworthy.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-professional-headshot-of-a-diverse-cus-1774882597374-ff4e17f6.png",
        },
        {
          id: "2",
          name: "CJ Noe",
          handle: "@cjnoe",
          testimonial: "A go-to for tech where integrity and service are the guiding principles.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-professional-headshot-of-a-diverse-cus-1774882600080-0b228320.png",
        },
        {
          id: "3",
          name: "Ashley",
          handle: "@ashleyr",
          testimonial: "In and out in 30 minutes. Very sweet and family owned!",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-professional-headshot-of-a-diverse-cus-1774882600335-942f514d.png",
        },
        {
          id: "4",
          name: "Mike Smith",
          handle: "@mikesmith",
          testimonial: "Professional, fast, and exactly as promised. Highly recommend for any repair.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-professional-headshot-of-a-diverse-cus-1774882596838-b60b0b08.png",
        },
        {
          id: "5",
          name: "Sarah J.",
          handle: "@sarahj",
          testimonial: "They fixed my laptop screen perfectly. Could not be happier with the results!",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-professional-headshot-of-a-diverse-cus-1774882597374-ff4e17f6.png",
        },
      ]}
      title="What Our Community Says"
      description="Customer stories that define our service philosophy."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactFaq
      animationType="slide-up"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "How long do repairs take?",
          content: "Most repairs are completed on-site in under 30 minutes while you wait.",
        },
        {
          id: "f2",
          title: "Do you offer warranties?",
          content: "Yes, all repairs are backed by our integrity-focused warranty policy.",
        },
        {
          id: "f3",
          title: "Do you buy used tech?",
          content: "We offer a curated selection of pre-owned devices. Contact us for trade-in inquiries.",
        },
      ]}
      ctaTitle="Ready to fix it? Swing by Belle Isle Commons."
      ctaDescription="Visit our team at 5062 Conway Rd for quick, expert repairs. We are ready to assist you."
      ctaButton={{
        text: "Get Directions",
      }}
      ctaIcon={MapPin}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "NFC Payments Accepted",
              href: "#",
            },
            {
              label: "Free Wi-Fi While You Wait",
              href: "#",
            },
            {
              label: "Wheelchair Accessible",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Repairs",
              href: "#services",
            },
            {
              label: "Sales",
              href: "#services",
            },
            {
              label: "About Us",
              href: "#about",
            },
          ],
        },
      ]}
      logoText="Electronics House"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
