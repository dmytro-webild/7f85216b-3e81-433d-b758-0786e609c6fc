"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Image, Phone, MessageCircle, MapPin, Palette, Ruler } from "lucide-react";

export default function LandingPage() {
  const navItems = [
    { label: "Anasayfa", href: "/" },
    { label: "Hizmetler", href: "/services" },
    { label: "Tuval", href: "/tuval" },
    { label: "Kanvas Tablo Mağazası", href: "/ankara-kanvas-tablo" },
    { label: "Kanvas Şase İmalatı", href: "/ankara-kanvas-tablo-imalati" },
    { label: "Şövale", href: "/ankara-sovale-satis-kiralama" },
    { label: "İletişim", href: "#contact" },
  ];

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
              navItems={navItems}
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
                { imageSrc: "http://img.b2bpic.net/free-photo/modern-artist-concept-with-brushes-colorful-paint_23-2148002103.jpg?_wi=1", imageAlt: "Çerçeveleme atölyesi" },
                { imageSrc: "http://img.b2bpic.net/free-photo/vintage-golden-frame-easel_23-2148661004.jpg?_wi=1", imageAlt: "Özel çerçeve üretimi" },
            ]}
            />
        </div>

        <div id="services" data-section="services">
            <FeatureCardTen
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={true}
            title="Hizmetlerimiz"
            description="Profesyonel üretim ve çerçeveleme çözümleri."
            features={[
                { title: "Çerçeveleme Merkezi", description: "Özel ölçü tablo ve fotoğraf çerçeveleme.", items: [{ icon: Image, text: "Sanat eseri koruma" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/young-man-going-art-gallery_23-2149709090.jpg?_wi=2" }, reverse: false },
                { title: "Tuval", description: "Yüksek kaliteli tuval çözümleri.", items: [{ icon: Palette, text: "Sanatçılar için ideal yüzey" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/painting-brushes-canvas-table_23-2148118073.jpg" }, reverse: true },
                { title: "Kanvas Tablo Mağazası", description: "Evinizi güzelleştiren dekoratif tablolar.", items: [{ icon: Image, text: "Premium baskı kalitesi" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/studio-with-props-painting_23-2148885701.jpg" }, reverse: false },
                { title: "Kanvas Şase İmalatı", description: "Dayanıklı fırınlanmış ahşap şase üretimi.", items: [{ icon: Ruler, text: "Özel ölçü imalat" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/close-up-blank-canvas-easel_23-2148906917.jpg" }, reverse: true },
                { title: "Şövale", description: "Profesyonel şövale satış ve kiralama.", items: [{ icon: Palette, text: "Sergi ve atölye modelleri" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/vintage-golden-frame-easel_23-2148661004.jpg" }, reverse: false },
            ]}
            />
        </div>

        <div id="testimonials" data-section="testimonials">
            <TestimonialCardTen
                title="Müşterilerimiz Neler Diyor?"
                description="Müşterilerimizin deniz çerçeve hakkındaki yorumları."
                textboxLayout="split"
                useInvertedBackground={false}
                testimonials={[
                    { id: "t1", title: "Kalite", quote: "Çerçeve kalitesi tek kelimeyle mükemmel.", name: "Ahmet Y.", role: "Sanatçı" },
                    { id: "t2", title: "Güven", quote: "İmalat süreci çok hızlı ve profesyonel.", name: "Ayşe S.", role: "Galeri Sahibi" },
                    { id: "t3", title: "Profesyonellik", quote: "Şövale kiralama hizmetinden çok memnun kaldım.", name: "Mehmet K.", role: "Akademisyen" }
                ]}
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
                { title: "Menü", items: navItems },
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