"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBase from '@/components/sections/footer/FooterBase';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Ruler, Award, Phone, MessageCircle, MapPin } from "lucide-react";

export default function KanvasSaseImalatiPage() {
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
            logoText="Ankara’da Kanvas Şase İmalatı"
            description="Profesyonel sanatçılar, galeriler ve toplu alım yapan kurumlar için Yenimahalle merkezli yüksek kaliteli, fırınlanmış ahşap şase ve kanvas üretimi."
            buttons={[
                { text: "Fiyat Teklifi Al", href: "#contact" },
                { text: "Üretim Sürecini İncele", href: "#services" },
            ]}
            slides={[{ imageSrc: "http://img.b2bpic.net/free-photo/close-up-blank-canvas-easel_23-2148906917.jpg?_wi=1", imageAlt: "Kanvas Şase İmalatı" }]}
            />
        </div>

        <div id="services" data-section="services">
            <FeatureCardTen
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={true}
            title="Üretim Avantajları"
            description="Atölyemizde kullandığımız yöntemlerle uzun ömürlü sonuçlar."
            features={[
                { title: "Fırınlanmış Gürgen", description: "Zamanla yamulma veya dönme yapmayan, yüksek kaliteli fırınlanmış ahşap iskelet.", items: [{ icon: Ruler, text: "Standart ve özel ölçü imkanı" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/studio-with-props-painting_23-2148885701.jpg?_wi=2" }, reverse: false },
                { title: "Kalite Garantisi", description: "Sanat eserleriniz için ideal yüzey gerginliği ve pürüzsüz doku sağlayan üretim standartları.", items: [{ icon: Award, text: "Profesyonel gergi kalitesi" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/young-man-going-art-gallery_23-2149709090.jpg" }, reverse: true },
            ]}
            />
        </div>

        <div id="testimonials" data-section="testimonials">
            <TestimonialCardTen
                title="Referanslarımız"
                description="Sanat atölyeleri ve galerilerin bizi neden tercih ettiğini görün."
                textboxLayout="split"
                useInvertedBackground={false}
                testimonials={[
                    { id: "t1", title: "Memnuniyet", quote: "Yıllardır şaselerimizi buradan alıyoruz, kaliteden hiç ödün vermediler.", name: "Ankara Sanat Galerisi", role: "Kurumsal Alıcı" },
                    { id: "t2", title: "Hız", quote: "Büyük ölçekli projelerimizde hızlı teslimatları sayesinde işimiz hiç aksamadı.", name: "Deniz A.", role: "Sanatçı" }
                ]}
            />
        </div>

        <div id="faq" data-section="faq">
            <FaqSplitMedia
            title="Sıkça Sorulan Sorular"
            description="Toplu üretim süreçlerimiz ve malzeme kalitesi hakkındaki sorularınız."
            faqsAnimation="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            faqs={[
                { id: "q1", title: "Toplu alımlarda indirim sağlıyor musunuz?", content: "Evet, sanat atölyeleri, galeriler ve kurumlar için özel fiyatlandırma seçeneklerimiz bulunmaktadır." },
                { id: "q2", title: "Özel ölçü üretim süreci nasıldır?", content: "Yenimahalle atölyemizde istediğiniz her milimetrik ölçüde, profesyonel ekipmanlarla şase üretimi yapabiliyoruz." },
                { id: "q3", title: "Kullanılan ağaç nedir?", content: "Dayanıklılığı ile bilinen, fırınlanmış gürgen ağacı kullanıyoruz." },
                { id: "q4", title: "Tuval bezi dahil mi?", content: "İsteğinize göre sadece şase veya kaliteli kanvas bez gerilmiş hazır tuval olarak üretim yapıyoruz." },
                { id: "q5", title: "Ankara içi teslimatınız var mı?", content: "Evet, geniş çaplı siparişlerinizde atölyemizden kendi araçlarımızla teslimat sağlıyoruz." },
                { id: "q6", title: "İşbirliği için nasıl görüşebiliriz?", content: "Teklif formumuzu doldurabilir veya WhatsApp üzerinden detaylı görüşme başlatabilirsiniz." },
            ]}
            />
        </div>

        <div id="contact" data-section="contact-teklif">
            <ContactCTA
            useInvertedBackground={true}
            background={{ variant: "sparkles-gradient" }}
            tag="İletişim"
            title="Hemen Teklif Alın"
            description="Projeniz veya toplu alım ihtiyaçlarınız için bizimle iletişime geçin, Ankara Yenimahalle’deki atölyemizde üretim detaylarını görüşelim."
            buttons={[
                { text: "WhatsApp", href: "https://wa.me/903123974849" },
                { text: "Yol Tarifi", href: "https://maps.google.com" }
            ]}
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterBase
            columns={[
                { title: "Menü", items: [{ label: "Anasayfa", href: "/" }, { label: "Kanvas Şase İmalatı", href: "/ankara-kanvas-tablo-imalati" }, { label: "İletişim", href: "#contact" }] },
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