"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBase from '@/components/sections/footer/FooterBase';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import { Phone, MessageCircle, MapPin, Brush } from "lucide-react";

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
            slides={[{ imageSrc: "https://img.b2bpic.net/free-photo/full-shot-woman-holding-brush_23-2149050502.jpg?id=16693386", imageAlt: "Şövale çeşitleri" }]}
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

        <div id="faq" data-section="faq">
          <FaqSplitText
            faqs={[
              { id: "q1", title: "Kiralama süreleri ne kadar?", content: "Günlük, haftalık veya aylık kiralama seçeneklerimiz mevcuttur." },
              { id: "q2", title: "Şövale kurulumu yapılıyor mu?", content: "Evet, sergi alanlarında kurulum desteği sağlıyoruz." }
            ]}
            sideTitle="Sıkça Sorulan Sorular"
            faqsAnimation="slide-up"
            useInvertedBackground={false}
          />
        </div>

        <div id="contact" data-section="contact-teklif">
            <ContactCTA
            useInvertedBackground={true}
            background={{ variant: "sparkles-gradient" }}
            tag="İletişim"
            title="Hemen Teklif Alın"
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
        
        <div className="fixed bottom-0 left-0 w-full bg-card z-50 flex border-t py-3 md:hidden">
            <a href="tel:+903123974849" className="flex-1 flex flex-col items-center gap-1 text-xs font-semibold"><Phone size={20}/>Ara</a>
            <a href="https://wa.me/903123974849" className="flex-1 flex flex-col items-center gap-1 text-xs font-semibold"><MessageCircle size={20}/>WhatsApp</a>
            <a href="https://maps.google.com" className="flex-1 flex flex-col items-center gap-1 text-xs font-semibold"><MapPin size={20}/>Yol Tarifi</a>
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}