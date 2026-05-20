"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactText from '@/components/sections/contact/ContactText';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Image, Phone, MessageCircle, MapPin, Palette, Ruler, Star, Mail, Clock } from "lucide-react";

export default function LandingPage() {
  const navItems = [
    { name: "Anasayfa", id: "/" },
    { name: "Hizmetler", id: "#services" },
    { name: "Galeri", id: "#gallery" },
    { name: "Yorumlar", id: "#reviews" },
    { name: "SSS", id: "#faq" },
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
              button={{ text: "Teklif Al", href: "#contact-form" }}
            />
        </div>

        <div id="hero" data-section="hero">
            <HeroCarouselLogo
            logoText="Deniz Çerçeve"
            description="Ankara’da 1974’ten beri resim çerçeveleme, tuval ve kanvas şase üretiminde tecrübe ve kalite. Ölçünüze özel çözümler için hemen teklif alın."
            buttons={[{ text: "Teklif Al", href: "#contact-form" }]}
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
                { title: "Tuval ve Şase", description: "Yüksek kaliteli tuval ve fırınlanmış ahşap şase.", items: [{ icon: Palette, text: "Sanatçılar için ideal yüzey" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/painting-brushes-canvas-table_23-2148118073.jpg" }, reverse: true },
            ]}
            />
        </div>

        <div id="gallery" data-section="gallery">
          <FeatureCardTen 
            title="Galeri"
            description="Atölyemizden seçilmiş çalışmalar."
            animationType="slide-up"
            textboxLayout="default"
            features={[]}
          />
        </div>

        <div id="reviews" data-section="reviews">
            <TestimonialCardFive
                title="Müşterilerimizden Yorumlar"
                description="Bizi tercih eden değerli müşterilerimizin deneyimleri."
                textboxLayout="split"
                useInvertedBackground={false}
                testimonials={[
                    { id: "r1", name: "Ahmet Y.", date: "2024-05-12", title: "Harika İşçilik", quote: "Çerçevelerim tam istediğim gibi oldu, teşekkürler.", tag: "Kalite", avatarSrc: "" },
                    { id: "r2", name: "Ayşe S.", date: "2024-06-20", title: "Çok Hızlı", quote: "Hızlı teslimat ve güler yüzlü hizmet.", tag: "Güven", avatarSrc: "" },
                    { id: "r3", name: "Mehmet K.", date: "2024-07-05", title: "Profesyonel", quote: "Şövale kiralama sürecinden çok memnun kaldım.", tag: "Profesyonellik", avatarSrc: "" }
                ]}
            />
        </div>

        <div id="faq" data-section="faq">
            <FaqBase
                title="Sıkça Sorulan Sorular"
                description="Hizmetlerimizle ilgili merak ettiğiniz detaylar."
                faqsAnimation="slide-up"
                textboxLayout="split"
                faqs={[
                    { id: "f1", title: "Özel ölçü imalat yapıyor musunuz?", content: "Evet, tüm çerçeve ve şase ürünlerimizde özel ölçü imalatımız bulunmaktadır." },
                    { id: "f2", title: "Teslimat süresi ne kadar?", content: "Genel olarak sipariş yoğunluğuna göre 3-7 iş günü içerisinde teslimat sağlıyoruz." },
                    { id: "f3", title: "Şövale kiralıyor musunuz?", content: "Evet, sergileriniz ve projeleriniz için şövale kiralama hizmeti sunuyoruz." },
                    { id: "f4", title: "Kargo ile gönderim var mı?", content: "Evet, güvenli paketleme ile Türkiye'nin her yerine kargo gönderimi yapmaktayız." },
                    { id: "f5", title: "Hangi ödeme yöntemleri geçerli?", content: "Nakit, kredi kartı ve banka havalesi ile ödeme alabiliyoruz." },
                    { id: "f6", title: "Çerçeve onarımı yapıyor musunuz?", content: "Eski ve yıpranmış çerçeveleriniz için profesyonel onarım hizmeti veriyoruz." },
                    { id: "f7", title: "Kurumsal iş birlikleri yapıyor musunuz?", content: "Galeriler, sanatçılar ve kurumlar için özel projelendirme desteğimiz mevcuttur." },
                    { id: "f8", title: "Mağazanız nerede?", content: "Atölyemiz Ankara Yenimahalle'de hizmetinizdedir, bekleriz." }
                ]}
            />
        </div>

        <div id="contact-form" data-section="contact-form">
            <ContactCTA
            useInvertedBackground={true}
            background={{ variant: "sparkles-gradient" }}
            tag="İletişim"
            title="Teklif Formu"
            description="İhtiyacınız olan çerçeve veya tuval için bize detayları yazın, hemen dönüş yapalım."
            buttons={[{ text: "Gönder", href: "#" }]}
            />
        </div>

        <div id="contact" data-section="contact">
          <ContactText 
            text="Adres: Yenimahalle, Ankara | Telefon: 0312 397 48 49 | E-posta: info@denizcerceve.com | Çalışma Saatleri: 09:00-19:00"
            background={{ variant: "plain" }}
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