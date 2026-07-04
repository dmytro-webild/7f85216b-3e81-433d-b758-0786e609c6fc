"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Image, Phone, MessageCircle, MapPin, Palette, Ruler, Frame, Square, Zap } from "lucide-react";

export default function LandingPage() {
  const navItems = [
    { name: "Anasayfa", id: "/" },
    { name: "Çerçeveleme Merkezi", id: "/cerceveleme-merkezi" },
    { name: "Tuval", id: "/tuval" },
    { name: "Kanvas Tablo Mağazası", id: "/ankara-kanvas-tablo" },
    { name: "Şövale", id: "/ankara-sovale-satis-kiralama" },
    { name: "İletişim", id: "#contact-teklif" },
  ];

  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="none"
        cardStyle="solid"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
            <NavbarStyleFullscreen
              navItems={navItems}
              brandName="Deniz Çerçeve"
              logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DuLC64vrw5MEWRhPmsIWQkpOvm/uploaded-1779453155471-4b3qfi4o.png"
              button={{ text: "Hemen Ara", href: "tel:+903123974849" }}
            />
        </div>

        <div id="hero" data-section="hero">
            <HeroCarouselLogo
            logoText="Deniz Çerçeve"
            description="Ankara’da 50 yıllık 'Atölye' tecrübemizle resim çerçeveleme, tuval ve kanvas şase üretiminde kaliteyi adresinize getiriyoruz. 1974’ten beri ustalığımızla sanat eserlerinizi güvence altına alıyoruz."
            buttons={[
                { text: "Hemen Ara", href: "tel:+903123974849" },
                { text: "Hizmetlerimizi İnceleyin", href: "/cerceveleme-merkezi" },
            ]}
            slides={[
                { videoSrc: "https://storage.googleapis.com/webild/users/user_3DuLC64vrw5MEWRhPmsIWQkpOvm/uploaded-1783160346460-053p9jkg.mp4", imageAlt: "Çerçeveleme atölyesi" },
            ]}
            />
        </div>
        
        <div id="google-maps" className="w-full py-10 flex justify-center bg-white">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.123!2d32.79!3d39.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU3JzM2LjAiTiAzMsKwNDcnMjQuMCJF!5e0!3m2!1str!2str!4v1700000000000" width="80%" height="300" style={{border:0}} loading="lazy"></iframe>
        </div>

        <div id="services" data-section="services">
            <FeatureCardTen
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            title="Hizmetlerimiz"
            description="Profesyonel üretim ve çerçeveleme çözümleri."
            features={[
                { title: "Çerçeveleme Merkezi", description: "Özel ölçü tablo ve fotoğraf çerçeveleme.", items: [{ icon: Frame, text: "Sanat eseri koruma" }], media: { imageSrc: "https://storage.googleapis.com/webild/users/user_3DuLC64vrw5MEWRhPmsIWQkpOvm/uploaded-1783160509275-oovferg9.jpg" }, reverse: false },
                { title: "Tuval", description: "Yüksek kaliteli tuval çözümleri.", items: [{ icon: Palette, text: "Sanatçılar için ideal yüzey" }], media: { imageSrc: "https://storage.googleapis.com/webild/users/user_3DuLC64vrw5MEWRhPmsIWQkpOvm/uploaded-1783160532640-ff9uko8z.jpg" }, reverse: true },
                { title: "Tablo", description: "Evinizi güzelleştiren dekoratif tablolar.", items: [{ icon: Image, text: "Premium baskı kalitesi" }], media: { imageSrc: "https://storage.googleapis.com/webild/users/user_3DuLC64vrw5MEWRhPmsIWQkpOvm/uploaded-1783160550237-zgo4fwa9.jpg" }, reverse: false },
                { title: "Şövale", description: "Profesyonel şövale satış ve kiralama.", items: [{ icon: Square, text: "Sergi ve atölye modelleri" }], media: { imageSrc: "https://storage.googleapis.com/webild/users/user_3DuLC64vrw5MEWRhPmsIWQkpOvm/uploaded-1783160572755-bbsnjoex.jpg" }, reverse: true },
            ]}
            />
        </div>

        <div id="testimonials" data-section="testimonials">
            <TestimonialCardTen
                title="Müşterilerimiz Neler Diyor?"
                description="Müşterilerimizin deniz çerçeve hakkındaki yorumları."
                textboxLayout="split"
                useInvertedBackground={true}
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
                { text: "Yol Tarifi Al", href: "https://maps.google.com" }
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
      </ReactLenis>
    </ThemeProvider>
  );
}