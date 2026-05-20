"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Phone, MessageCircle, MapPin, Ruler, Award } from "lucide-react";

export default function TuvalServicePage() {
  const navItems = [
    { name: "Anasayfa", id: "/" },
    { name: "Çerçeveleme Merkezi", id: "/services" },
    { name: "Tuval", id: "/tuval" },
    { name: "Kanvas Tablo", id: "/ankara-kanvas-tablo" },
    { name: "İletişim", id: "#contact-teklif" },
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
              button={{ text: "Teklif Al", href: "#contact-teklif" }}
            />
        </div>

        <div id="hero" data-section="hero">
            <HeroCarouselLogo
            logoText="Premium Tuval ve Şase Üretimi"
            description="Ankara'da sanatınıza değer katan, fırınlanmış ahşap şaseli ve yüksek kaliteli bez tuval üretim merkezi."
            buttons={[
                { text: "Hemen Ara", href: "tel:+903123974849" },
                { text: "WhatsApp’tan Yaz", href: "https://wa.me/903123974849" },
                { text: "Yol Tarifi Al", href: "https://maps.google.com" },
                { text: "Teklif Al", href: "#contact-teklif" }
            ]}
            slides={[{ imageSrc: "http://img.b2bpic.net/free-photo/close-up-blank-canvas-easel_23-2148906917.jpg?_wi=1", imageAlt: "Premium Tuval" }]}
            />
        </div>

        <div id="services" data-section="services">
            <FeatureCardTen
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={true}
            title="Tuval Çeşitlerimiz"
            description="Her seviye sanatçı için profesyonel çözümler."
            features={[
                { title: "Standart ve Özel Ölçü", description: "İhtiyacınıza göre fırınlanmış gürgen şase üretimi.", items: [{ icon: Ruler, text: "Standart, Siyah, Double, Parçalı" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/painting-brushes-canvas-table_23-2148118073.jpg?_wi=1" }, reverse: false },
                { title: "Kalite ve Güvence", description: "Uzun ömürlü ve deforme olmayan şaseler.", items: [{ icon: Award, text: "Profesyonel gerginlik" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/studio-with-props-painting_23-2148885701.jpg?_wi=1" }, reverse: true }
            ]}
            />
        </div>

        <div id="testimonials" data-section="testimonials">
            <TestimonialCardTen
                title="Müşteri Deneyimleri"
                description="Atölyemizin kalitesine güvenen sanatçılar."
                textboxLayout="split"
                useInvertedBackground={false}
                testimonials={[
                    { id: "t1", title: "Kalite", quote: "Tuval gerginliği harika.", name: "Deniz A.", role: "Sanatçı" },
                    { id: "t2", title: "Hız", quote: "Özel ölçülerim tam vaktinde ulaştı.", name: "Emre K.", role: "Resim Öğretmeni" }
                ]}
            />
        </div>

        <div id="faq" data-section="faq">
            <FaqDouble
            title="Sıkça Sorulan Sorular"
            description="Tuval üretim sürecimizle ilgili merak edilenler."
            faqsAnimation="slide-up"
            textboxLayout="split"
            useInvertedBackground={true}
            faqs={[
                { id: "1", title: "Özel ölçü tuval yapıyor musunuz?", content: "Evet, atölyemizde istediğiniz her ölçüde üretim yapıyoruz." },
                { id: "2", title: "Toplu alım imkanı var mı?", content: "Kurumlar ve sanat okulları için toplu üretim yapıyoruz." },
                { id: "3", title: "Tuval beziniz kaliteli mi?", content: "1. sınıf, astarlı, uzun ömürlü kanvas kullanıyoruz." },
                { id: "4", title: "Teslimat süresi ne kadar?", content: "Sipariş yoğunluğuna göre 3-5 iş gününde hazır." },
                { id: "5", title: "Siyah tuvaliniz mevcut mu?", content: "Evet, özel siyah tuval seçeneklerimiz mevcuttur." },
                { id: "6", title: "Ödemeyi nasıl yaparım?", content: "İletişim kanallarımızdan detaylı bilgi alabilirsiniz." }
            ]}
            />
        </div>

        <div id="contact-teklif" data-section="contact-teklif">
            <ContactCTA
            useInvertedBackground={false}
            background={{ variant: "sparkles-gradient" }}
            tag="İletişim"
            title="Teklif Alın"
            description="Ankara Yenimahalle’deki atölyemizde sizi bekliyoruz."
            buttons={[
                { text: "WhatsApp", href: "https://wa.me/903123974849" },
                { text: "Yol Tarifi", href: "https://maps.google.com" }
            ]}
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterBaseReveal
            logoText="Deniz Çerçeve"
            columns={[
                { title: "Adres", items: [{ label: "Yenimahalle, Ankara", href: "#" }] },
                { title: "İletişim", items: [{ label: "0312 397 48 49", href: "tel:+903123974849" }] },
                { title: "Çalışma Saatleri", items: [{ label: "Haftaiçi: 09:00-19:00", href: "#" }] }
            ]}
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
