"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Palette, Ruler, Layers, Settings, Phone, MessageCircle, MapPin } from "lucide-react";

export default function CercevelemeMerkeziPage() {
  const navItems = [
    { name: "Anasayfa", id: "/" },
    { name: "Çerçeveleme Merkezi", id: "/cerceveleme-merkezi" },
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
            logoText="Ankara'da Resim ve Tablo Çerçeveleme Merkezi"
            description="Sanat eserlerinizi, fotoğraflarınızı ve değerli eşyalarınızı uzun yıllar koruyacak estetik çerçeve çözümleri. 1974'ten beri profesyonel hizmet."
            buttons={[
                { text: "Teklif Al", href: "#contact" },
                { text: "Hizmetleri İncele", href: "#services" }
            ]}
            slides={[{ imageSrc: "https://img.b2bpic.net/free-photo/young-man-going-art-gallery_23-2149709090.jpg?_wi=2", imageAlt: "Profesyonel Çerçeveleme Merkezi" }]}
            />
        </div>

        <div id="services" data-section="services">
            <FeatureCardTen
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={true}
            title="Hizmet Türleri"
            description="Her türlü sanat eseri için özel çerçeve çözümleri sunuyoruz."
            features={[
                { title: "Ahşap Çerçeve", description: "Doğal ve şık ahşap profillerle mekanlarınıza sıcaklık katın.", items: [{ icon: Palette, text: "Geniş model seçenekleri" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/vintage-golden-frame-easel_23-2148661004.jpg" }, reverse: false },
                { title: "Modern Çerçeve", description: "Minimalist hatlara sahip, modern dekorasyona uygun çerçeveler.", items: [{ icon: Ruler, text: "Hassas kesim" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/painting-brushes-canvas-table_23-2148118073.jpg?_wi=2" }, reverse: true },
                { title: "Paspartu Uygulaması", description: "Eserinizin derinliğini ön plana çıkaran profesyonel paspartu tasarımları.", items: [{ icon: Layers, text: "Müze kalite karton" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/close-up-blank-canvas-easel_23-2148906917.jpg?_wi=2" }, reverse: false },
                { title: "Özel Tasarım", description: "Kişiselleştirilmiş ölçü ve özel detaylarla çerçeveleriniz hayalinizdeki gibi.", items: [{ icon: Settings, text: "Tam kişiselleştirme" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/studio-with-props-painting_23-2148885701.jpg?_wi=2" }, reverse: true },
            ]}
            />
        </div>

        <div id="importance" data-section="importance">
           <FeatureCardTen
            animationType="blur-reveal"
            textboxLayout="default"
            useInvertedBackground={false}
            title="Çerçevelemenin Önemi"
            description="Kaliteli bir çerçeve sadece bir süs değildir; eserinizi tozdan, nemden ve dış etkenlerden koruyan bir kalkan görevi görür."
            features={[]}
            />
        </div>

        <div id="process" data-section="process">
           <FeatureCardTen
            animationType="scale-rotate"
            textboxLayout="default"
            useInvertedBackground={true}
            title="4 Adımda Çerçeveleme"
            description="Sanatınızı mükemmelleştiren süreç."
            features={[
                { title: "1. Keşif", description: "Eserinizi ve ihtiyaçlarınızı belirliyoruz.", items: [{ icon: Ruler, text: "Ücretsiz danışmanlık" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/young-man-going-art-gallery_23-2149709090.jpg?_wi=2" }, reverse: false },
                { title: "2. Tasarım", description: "En uygun profil ve cam seçeneklerini seçiyoruz.", items: [{ icon: Palette, text: "Tasarım desteği" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/painting-brushes-canvas-table_23-2148118073.jpg?_wi=3" }, reverse: true },
                { title: "3. Üretim", description: "Atölyemizde hassas kesim ve birleştirme yapıyoruz.", items: [{ icon: Settings, text: "Yüksek teknoloji" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/close-up-blank-canvas-easel_23-2148906917.jpg?_wi=3" }, reverse: false },
                { title: "4. Teslimat", description: "Eserinizi titizlikle paketleyip teslim ediyoruz.", items: [{ icon: Layers, text: "Güvenli teslimat" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/studio-with-props-painting_23-2148885701.jpg?_wi=3" }, reverse: true },
            ]}
            />
        </div>

        <div id="contact" data-section="contact-teklif">
            <ContactCTA
            useInvertedBackground={false}
            background={{ variant: "sparkles-gradient" }}
            tag="İletişim"
            title="Hemen Teklif Alın"
            description="Ankara Yenimahalle'deki atölyemizde sanat eserlerinizi birlikte değerlendirelim."
            buttons={[
                { text: "WhatsApp", href: "https://wa.me/903123974849" },
                { text: "Yol Tarifi", href: "https://maps.google.com" }
            ]}
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterBase
            columns={[
                { title: "Menü", items: [{ label: "Anasayfa", href: "/" }, { label: "Çerçeveleme Merkezi", href: "/cerceveleme-merkezi" }, { label: "İletişim", href: "#contact" }] },
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