"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import TimelineProcessFlow from '@/components/cardStack/layouts/timelines/TimelineProcessFlow';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Palette, Ruler, PackageCheck, Zap } from "lucide-react";

export default function ServicesPage() {
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
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Anasayfa", id: "/" },
            { name: "Hizmetler", id: "/services" },
            { name: "Tuval", id: "/tuval" },
            { name: "Kanvas", id: "/ankara-kanvas-tablo" },
            { name: "İletişim", id: "#contact" },
          ]}
          brandName="Deniz Çerçeve"
          button={{ text: "İletişim", href: "#contact" }}
        />

        <div id="hero">
          <HeroCarouselLogo
              logoText="Ankara’da Resim ve Tablo Çerçeveleme Merkezi"
              description="Yenimahalle ve çevresinde sanat eserlerinize değer katıyor, profesyonel çerçeveleme ve şase üretim hizmetlerimizle estetiği ön planda tutuyoruz."
              buttons={[{ text: "Teklif Al", href: "#contact" }]}
              slides={[{ imageSrc: "http://img.b2bpic.net/free-photo/modern-artist-concept-with-brushes-colorful-paint_23-2148002103.jpg?_wi=2", imageAlt: "Profesyonel çerçeveleme" }]}
          />
        </div>

        <div id="framing-expertise">
          <FeatureCardTen
            title="Uzmanlık Alanlarımız"
            description="Ankara'da çerçeveleme sanatını tecrübemizle birleştiriyoruz."
            textboxLayout="split"
            animationType="slide-up"
            useInvertedBackground={true}
            features={[
                { title: "Sanatsal Çerçeveleme", description: "Değerli tablolarınız için özel tasarımlar.", items: [{ icon: Palette, text: "Sanat eseri koruma" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/vintage-golden-frame-easel_23-2148661004.jpg?_wi=2" }, reverse: false },
                { title: "Özel Ölçü Üretim", description: "İhtiyacınıza göre milimetrik kesim ve montaj.", items: [{ icon: Ruler, text: "Hassas ölçüm teknolojisi" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/studio-with-props-painting_23-2148885701.jpg" }, reverse: true }
            ]}
          />
        </div>

        <div id="workflow">
            <TimelineProcessFlow
              title="4 Adımda Çerçeveleme"
              description="Süreci nasıl yönettiğimizi keşfedin."
              textboxLayout="split"
              animationType="slide-up"
              items={[
                  { content: "İhtiyaç Belirleme: Sanat eseriniz veya dekorasyon ihtiyacınız için analiz.", media: <Zap className="size-12" />, reverse: false },
                  { content: "Model Seçimi: Geniş çerçeve model ve renk kataloğumuzdan seçim.", media: <Palette className="size-12" />, reverse: true },
                  { content: "Profesyonel Üretim: Atölyemizde özenle el yapımı üretim.", media: <Ruler className="size-12" />, reverse: false },
                  { content: "Teslimat ve Montaj: Eseriniz güvenle hazırlanır ve teslim edilir.", media: <PackageCheck className="size-12" />, reverse: true }
              ]}
            />
        </div>

        <div id="faq">
          <FaqSplitMedia
            title="Sıkça Sorulan Sorular"
            description="Çerçeveleme süreci hakkında bilmeniz gerekenler."
            faqsAnimation="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            faqs={[
                { id: "q1", title: "Özel ölçü çalışıyor musunuz?", content: "Evet, Ankara'daki merkezimizde her boyutta tablo ve fotoğraf için özel ölçü çerçeveleme yapıyoruz." },
                { id: "q2", title: "Fiyatlar neye göre belirlenir?", content: "Çerçeve profili, kullanılan cam tipi ve emeğe göre uygun fiyatlandırma sunuyoruz." },
                { id: "q3", title: "Süreç ne kadar sürer?", content: "Genellikle 3-5 iş günü içerisinde teslimat sağlıyoruz." }
            ]}
          />
        </div>

        <div id="contact">
          <ContactCTA
              tag="Bize Ulaşın"
              title="Hemen Teklif Alın"
              description="Ankara Yenimahalle’deki atölyemizde eserlerinizi profesyonelce çerçeveliyoruz."
              buttons={[{ text: "WhatsApp Üzerinden Teklif Al", href: "https://wa.me/903123974849" }]}
              background={{ variant: "sparkles-gradient" }}
              useInvertedBackground={false}
          />
        </div>

        <FooterBase
          columns={[
            { title: "Menü", items: [{ label: "Anasayfa", href: "/" }, { label: "Hizmetler", href: "/services" }, { label: "Tuval", href: "/tuval" }, { label: "Kanvas", href: "/ankara-kanvas-tablo" }, { label: "İletişim", href: "#contact" }] },
          ]}
          logoText="Deniz Çerçeve"
        />
      </ReactLenis>
    </ThemeProvider>
  );
}