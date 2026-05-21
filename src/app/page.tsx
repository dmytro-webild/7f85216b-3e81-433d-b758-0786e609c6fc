"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import { Palette, Ruler, Image, MapPin, Phone, MessageCircle } from "lucide-react";

export default function LandingPage() {
  const navItems = [
    { name: "Anasayfa", id: "/" },
    { name: "Çerçeveleme Merkezi", id: "/cerceveleme-merkezi" },
    { name: "Tuval", id: "/tuval" },
    { name: "Kanvas Tablo Mağazası", id: "/ankara-kanvas-tablo" },
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
        background="none"
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
              button={{ text: "Hemen Ara", href: "tel:+903123974849" }}
            />
        </div>

        <div id="hero" data-section="hero">
            <HeroCarouselLogo
            logoText="Deniz Çerçeve"
            description="Ankara’da 1974’ten beri resim çerçeveleme, tuval ve kanvas şase üretiminde tecrübe ve kalite. Ölçünüze özel çözümler için hemen teklif alın."
            buttons={[
                { text: "Hemen Ara", href: "tel:+903123974849" },
                { text: "Hemen Ara", href: "tel:+903123974849" },
            ]}
            slides={[
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DuLC64vrw5MEWRhPmsIWQkpOvm/uploaded-1779350851239-msjpj02y.png", imageAlt: "Deniz Çerçeve Logo" },
            ]}
            />
        </div>

        <div id="maps" data-section="maps">
            <div className="container mx-auto py-12 px-6 flex justify-center">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.824982633857!2d32.78401367683937!3d39.923164987019676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f0d367e9b0d%3A0x6a053c84ea89c090!2sYenimahalle%2C%20Ankara!5e0!3m2!1str!2str!4v1715694830386!5m2!1str!2str" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Konum"
                ></iframe>
            </div>
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
                { title: "Tuval", description: "Yüksek kaliteli tuval çözümleri.", items: [{ icon: Palette, text: "Sanatçılar için ideal yüzey" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/painting-brushes-canvas-table_23-2148118073.jpg?_wi=1" }, reverse: true },
                { title: "Tablo", description: "Evinizi güzelleştiren dekoratif tablolar.", items: [{ icon: Image, text: "Premium baskı kalitesi" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/studio-with-props-painting_23-2148885701.jpg?_wi=1" }, reverse: false },
                { title: "Şövale", description: "Profesyonel şövale satış ve kiralama.", items: [{ icon: Palette, text: "Sergi ve atölye modelleri" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/vintage-golden-frame-easel_23-2148661004.jpg?_wi=2" }, reverse: true },
            ]}
            buttons={[{ text: "Hemen Ara", href: "tel:+903123974849" }]}
            />
        </div>

        <div id="contact" data-section="contact-teklif">
            <ContactCTA
            useInvertedBackground={false}
            background={{ variant: "plain" }}
            tag="İletişim"
            title="Bize Ulaşın"
            description="Size yardımcı olmamız için aşağıdaki kanallardan bize ulaşabilir veya atölyemizi ziyaret edebilirsiniz."
            buttons={[
                { text: "Hemen Ara", href: "tel:+903123974849" },
                { text: "WhatsApp", href: "https://wa.me/903123974849" },
            ]}
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterBase
            columns={[
                { title: "Menü", items: navItems.map(n => ({ label: n.name, href: n.id })) },
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