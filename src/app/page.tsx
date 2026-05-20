"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import { Image, Phone, MessageCircle, MapPin } from "lucide-react";

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
                { name: "Tuval", id: "/tuval" },
                { name: "İletişim", id: "#contact" },
            ]}
            brandName="Deniz Çerçeve"
            button={{ text: "Teklif Al", href: "/services" }}
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
                title: "Çerçeveleme",                description: "Özel ölçü tablo ve fotoğraf çerçeveleme.",                items: [{ icon: Image, text: "Resim, tablo, puzzle, diploma çerçeveleri" }],
                media: { imageSrc: "http://img.b2bpic.net/free-photo/young-man-going-art-gallery_23-2149709090.jpg", imageAlt: "Çerçeve" },
                reverse: false,
                },
            ]}
            title="İhtiyacınıza Göre Çözümler"
            description="Ev, ofis ve atölye ihtiyaçlarınız için profesyonel çerçeveleme ve tuval hizmetleri."
            />
        </div>

        <div id="contact-teklif" data-section="contact-teklif">
            <ContactCTA
            useInvertedBackground={false}
            background={{ variant: "plain" }}
            tag="İletişim ve Teklif"
            title="Bizimle İletişime Geçin"
            description="Size yardımcı olmamız için aşağıdaki kanallardan bize ulaşabilir veya atölyemizi ziyaret edebilirsiniz."
            buttons={[
                { text: "Hemen Ara", href: "tel:+903123974849" },
                { text: "WhatsApp’tan Yaz", href: "https://wa.me/903123974849" },
                { text: "Yol Tarifi Al", href: "https://maps.google.com" },
                { text: "Instagram", href: "https://instagram.com" }
            ]}
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterBase
            columns={[
                { title: "Menü", items: [{ label: "Anasayfa", href: "/" }, { label: "Hizmetler", href: "/services" }, { label: "Tuval", href: "/tuval" }, { label: "İletişim", href: "#contact" }] },
                { title: "İletişim", items: [{ label: "0312 397 48 49", href: "tel:+903123974849" }] },
            ]}
            logoText="Deniz Çerçeve"
            copyrightText="© 1974-2025 | Deniz Çerçeve Ankara"
            />
        </div>

        <div className="fixed bottom-0 left-0 w-full bg-card z-50 flex border-t py-3 md:hidden">
            <a href="tel:+903123974849" className="flex-1 flex flex-col items-center gap-1 text-xs font-semibold"><Phone size={20}/>Ara</a>
            <a href="https://wa.me/903123974849" className="flex-1 flex flex-col items-center gap-1 text-xs font-semibold"><MessageCircle size={20}/>WhatsApp</a>
            <a href="https://maps.google.com" className="flex-1 flex flex-col items-center gap-1 text-xs font-semibold"><MapPin size={20}/>Yol Tarifi</a>
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}