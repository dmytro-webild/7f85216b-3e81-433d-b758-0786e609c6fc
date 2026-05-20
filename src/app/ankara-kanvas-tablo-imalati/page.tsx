"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBase from '@/components/sections/footer/FooterBase';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import { Ruler, Award, Palette, Info, MapPin } from "lucide-react";

export default function BulkCanvasProduction() {
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
                { name: "Ankara’da Kanvas Şase İmalatı", id: "/ankara-kanvas-tablo-imalati" },
                { name: "İletişim", id: "#contact" },
            ]}
            brandName="Deniz Çerçeve"
            button={{ text: "Teklif Al", href: "#contact" }}
            />
        </div>

        <div id="hero" data-section="hero">
            <HeroCarouselLogo
            logoText="Ankara’da Kanvas Şase İmalatı"
            description="Profesyonel sanatçılar ve toplu alım yapan kurumlar için Ankara, Yenimahalle merkezli yüksek kaliteli, fırınlanmış ahşap şase ve kanvas üretimi."
            buttons={[
                { text: "Toplu Fiyat Teklifi Al", href: "#contact" },
                { text: "Üretim Sürecini İncele", href: "#process" },
            ]}
            slides={[{ imageSrc: "http://img.b2bpic.net/free-photo/close-up-blank-canvas-easel_23-2148906917.jpg?_wi=1", imageAlt: "Kanvas Şase İmalatı" }]}
            />
        </div>

        <div id="benefits" data-section="services">
            <FeatureCardTen
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={true}
            title="Neden Profesyonel Şase?"
            features={[
                { title: "Fırınlanmış Gürgen", description: "Zamanla yamulma yapmayan, dayanıklı fırınlanmış ahşap.", items: [{ icon: Ruler, text: "Standart ve özel ölçü" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/studio-with-props-painting_23-2148885701.jpg" }, reverse: false },
                { title: "Kalite Garantisi", description: "Sanatçılar için ideal gerginlik ve pürüzsüz yüzey.", items: [{ icon: Award, text: "Uzun ömürlü yapı" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/young-man-going-art-gallery_23-2149709090.jpg" }, reverse: true },
            ]}
            />
        </div>

        <div id="faq" data-section="services">
            <FaqSplitMedia
            title="Sıkça Sorulan Sorular"
            description="Toplu üretim ve kalite standartlarımız hakkında bilgiler."
            faqsAnimation="slide-up"
            textboxLayout="split"
            faqs={[
                { id: "q1", title: "Toplu alımlarda indirim yapıyor musunuz?", content: "Evet, kurumlar ve sanat atölyeleri için özel toplu alım fiyatları sunuyoruz." },
                { id: "q2", title: "Özel ölçü üretim yapıyor musunuz?", content: "Ankara Yenimahalle atölyemizde istediğiniz her ölçüde kanvas şase üretebiliyoruz." },
            ]}
            />
        </div>

        <div id="contact" data-section="contact-teklif">
            <ContactCTA
            useInvertedBackground={true}
            background={{ variant: "sparkles-gradient" }}
            tag="İletişim"
            title="İşbirliği İçin Bize Ulaşın"
            description="Ankara Yenimahalle’deki atölyemizde kanvas şaselerimizi yerinde inceleyin veya projeniz için teklif alın."
            buttons={[
                { text: "WhatsApp", href: "https://wa.me/903123974849" },
                { text: "Yol Tarifi", href: "https://maps.google.com" }
            ]}
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterBase
            columns={[
                { title: "Menü", items: [{ label: "Anasayfa", href: "/" }, { label: "Ankara’da Kanvas Şase İmalatı", href: "/ankara-kanvas-tablo-imalati" }, { label: "İletişim", href: "#contact" }] },
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