"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Image, Palette, Brush } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Anasayfa", id: "/" },
        { name: "Hizmetler", id: "/services" },
        { name: "İletişim", id: "#contact" },
      ]}
      brandName="Deniz Çerçeve"
      button={{
        text: "Teklif Al",        href: "/services"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Deniz Çerçeve"
      description="Ankara’da 1974’ten beri resim çerçeveleme, tuval ve kanvas şase üretiminde tecrübe ve kalite. Ölçünüze özel çözümler için hemen teklif alın."
      buttons={[
        { text: "Hizmetlerimizi İnceleyin", href: "/services" },
        { text: "Teklif Al", href: "#contact" },
      ]}
      slides={[
        { imageSrc: "http://img.b2bpic.net/free-photo/modern-artist-concept-with-brushes-colorful-paint_23-2148002103.jpg", imageAlt: "Çerçeveleme atölyesi" },
        { imageSrc: "http://img.b2bpic.net/free-photo/vintage-golden-frame-easel_23-2148661004.jpg", imageAlt: "Özel çerçeve üretimi" },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "Çerçeveleme",          description: "Özel ölçü tablo ve fotoğraf çerçeveleme.",          items: [{ icon: Image, text: "Resim, tablo, puzzle, diploma çerçeveleri" }],
          media: { imageSrc: "http://img.b2bpic.net/free-photo/young-man-going-art-gallery_23-2149709090.jpg", imageAlt: "Çerçeve" },
          reverse: false,
        },
      ]}
      title="İhtiyacınıza Göre Çözümler"
      description="Ev, ofis ve atölye ihtiyaçlarınız için profesyonel çerçeveleme ve tuval hizmetleri."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="İletişim"
      title="Teklif Alın"
      description="Ölçünüzü ve ihtiyaç türünüzü paylaşın, size en uygun teklifi hazırlayalım."
      buttons={[
        { text: "WhatsApp'tan Yaz", href: "https://wa.me/903123974849" },
        { text: "Hemen Ara", href: "tel:+903123974849" },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        { title: "Menü", items: [{ label: "Anasayfa", href: "/" }, { label: "Hizmetler", href: "/services" }, { label: "İletişim", href: "#contact" }] },
        { title: "İletişim", items: [{ label: "0312 397 48 49", href: "tel:+903123974849" }] },
      ]}
      logoText="Deniz Çerçeve"
      copyrightText="© 1974-2025 | Deniz Çerçeve Ankara"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}