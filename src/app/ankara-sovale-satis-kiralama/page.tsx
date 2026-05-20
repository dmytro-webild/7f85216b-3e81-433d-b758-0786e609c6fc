"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Brush, BookOpen } from "lucide-react";

export default function SovalePage() {
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
            />
        </div>

        <div id="hero" data-section="hero">
            <HeroCarouselLogo
            logoText="Ankara’da Şövale Satışı ve Kiralama"
            description="Resim sanatınızı sergilemeniz veya atölyenizi donatmanız için profesyonel şövale çözümleri. Masaüstü, atölye ve sergi tipi şövalelerde Ankara'daki tercihiniz."
            buttons={[
                { text: "Teklif Al", href: "#contact" },
                { text: "Mağazayı Ziyaret Et", href: "#contact" }
            ]}
            slides={[{ imageSrc: "https://img.b2bpic.net/premium-photo/blank-white-canvas-minimalist-neutral-easel_53876-1072255.jpg?id=417369544", imageAlt: "Şövale çeşitleri" }]}
            />
        </div>

        <div id="products" data-section="services">
            <FeatureCardTen
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={true}
            title="Şövale Çeşitlerimiz"
            description="Sanatınıza değer katacak her ihtiyaca yönelik modellerimizle hizmetinizdeyiz."
            features={[
                { title: "Masaüstü Şövaleler", description: "Küçük ebatlı çalışmalar ve başlangıç seviyesi için ideal, hafif ve pratik çözümler.", items: [{ icon: Brush, text: "Ergonomik tasarım" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/painting-brushes-canvas-table_23-2148118073.jpg?_wi=1" }, reverse: false },
                { title: "Atölye Şövaleleri", description: "Profesyonel çalışmalarınız için sağlam yapılı, ayarlanabilir profesyonel atölye şövaleleri.", items: [{ icon: Brush, text: "Yüksek stabilite" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/studio-with-props-painting_23-2148885701.jpg?_wi=1" }, reverse: true },
                { title: "Sergi Şövaleleri", description: "Sergilerinizde tablolarınızı şık bir şekilde sunmanızı sağlayacak dekoratif ve gösterişli modeller.", items: [{ icon: Brush, text: "Sergiye uygun estetik" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/vintage-golden-frame-easel_23-2148661004.jpg?_wi=1" }, reverse: false },
            ]}
            />
        </div>

        <div id="guide" data-section="services">
            <FeatureCardTen
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            title="Doğru Şövaleyi Seçin"
            description="İhtiyacınıza göre rehberimiz."
            features={[
                { title: "Kullanım Amacı", description: "Hobi mi yoksa profesyonel stüdyo çalışması mı? Boyut ve dayanıklılık tercihinizi belirler.", items: [{ icon: BookOpen, text: "Özelleştirilmiş seçim" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/artist-painting-art-class_23-2149175240.jpg?_wi=1" }, reverse: false }
            ]}
            />
        </div>

        <div id="contact" data-section="contact-teklif">
            <ContactCTA
            useInvertedBackground={true}
            background={{ variant: "sparkles-gradient" }}
            tag="İletişim"
            title="Hemen Teklif Alın veya Mağazayı Ziyaret Edin"
            description="Ankara Yenimahalle'deki atölyemizde şövalelerimizi yakından inceleyin."
            buttons={[
                { text: "WhatsApp", href: "https://wa.me/903123974849" },
                { text: "Yol Tarifi", href: "https://maps.google.com" }
            ]}
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterBase
            columns={[
                { title: "Menü", items: [{ label: "Anasayfa", href: "/" }, { label: "Hizmetler", href: "/services" }, { label: "Ankara’da Şövale Satışı ve Kiralama", href: "/ankara-sovale-satis-kiralama" }, { label: "İletişim", href: "#contact" }] },
            ]}
            logoText="Deniz Çerçeve"
            copyrightText="© 1974-2025 | Deniz Çerçeve Ankara"
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}