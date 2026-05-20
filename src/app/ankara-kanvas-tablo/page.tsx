"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Palette, Ruler, Image } from "lucide-react";

export default function CanvasPage() {
  const navItems = [
    { name: "Anasayfa", id: "/" },
    { name: "Çerçeveleme Merkezi", id: "/services" },
    { name: "Tuval", id: "/tuval" },
    { name: "Kanvas Tablo Mağazası", id: "/ankara-kanvas-tablo" },
    { name: "Kanvas Şase İmalatı", id: "/ankara-kanvas-tablo-imalati" },
    { name: "Şövale", id: "/ankara-sovale-satis-kiralama" },
    { name: "İletişim", id: "#contact" },
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
            <NavbarStyleFullscreen
              navItems={navItems}
              brandName="Deniz Çerçeve"
              button={{ text: "Teklif Al", href: "#contact" }}
              className="[&_a]:text-[18px] md:[&_a]:text-[20px] [&_a]:leading-[1.4] [&_li]:py-[16px]"
            />
        </div>

        <div id="hero" data-section="hero">
            <HeroCarouselLogo
            logoText="Ankara’da Kanvas Tablo Mağazası"
            description="Deniz Çerçeve kalitesiyle evinizin havasını değiştirecek premium kanvas tablolar. Özel ölçü üretim ve profesyonel çerçeveleme seçenekleriyle sanat evinize gelsin."
            buttons={[
                { text: "Ürünleri İncele", href: "#categories" },
                { text: "Teklif Al", href: "#contact" },
            ]}
            slides={[
                { imageSrc: "http://img.b2bpic.net/free-photo/modern-artist-concept-with-brushes-colorful-paint_23-2148002103.jpg?_wi=1", imageAlt: "Kanvas Tablo" },
            ]}
            />
        </div>

        <div id="categories" data-section="services">
            <FeatureCardTen
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={true}
            title="Kanvas Tablo Koleksiyonumuz"
            description="Her mekâna uygun sanatsal dokunuşlar."
            features={[
                { title: "Manzara Kanvaslar", description: "Doğanın huzuru duvarlarınızda.", items: [{ icon: Image, text: "Yüksek çözünürlüklü baskı" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/vintage-golden-frame-easel_23-2148661004.jpg?_wi=1" }, reverse: false },
                { title: "Modern Sanat", description: "Çağdaş çizgilerle estetik dokunuşlar.", items: [{ icon: Palette, text: "Canlı renkler" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/young-man-going-art-gallery_23-2149709090.jpg?_wi=1" }, reverse: true },
            ]}
            />
        </div>

        <div id="quality" data-section="services">
            <FeatureCardTen
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            title="Premium Kalite"
            description="Uzun ömürlü ve solmaya dayanıklı baskı teknolojisi."
            features={[
                { title: "Dayanıklı Şase", description: "Fırınlanmış gürgen ağacından sağlam ahşap şaseler.", items: [{ icon: Ruler, text: "Gerçek ahşap çerçeve" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/close-up-blank-canvas-easel_23-2148906917.jpg?_wi=1" }, reverse: false },
            ]}
            />
        </div>

        <div id="contact" data-section="contact-teklif">
            <ContactCTA
            useInvertedBackground={true}
            background={{ variant: "sparkles-gradient" }}
            tag="İletişim"
            title="Mağazamızı Ziyaret Edin"
            description="Ankara Yenimahalle’deki atölyemizde kanvas tablolarımızı yerinde inceleyebilir, özel siparişlerinizi verebilirsiniz."
            buttons={[
                { text: "Yol Tarifi", href: "https://maps.google.com" },
                { text: "WhatsApp", href: "https://wa.me/903123974849" }
            ]}
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterBase
            columns={[
                { title: "Menü", items: [{ label: "Anasayfa", href: "/" }, { label: "Hizmetler", href: "/services" }, { label: "Kanvas", href: "/ankara-kanvas-tablo" }, { label: "Kanvas İmalatı", href: "/ankara-kanvas-tablo-imalati" }, { label: "Ankara’da Şövale Satışı ve Kiralama", href: "/ankara-sovale-satis-kiralama" }, { label: "İletişim", href: "#contact" }] },
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