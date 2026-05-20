"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Palette, Ruler, ShoppingCart, Info } from "lucide-react";

export default function TuvalPage() {
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
            { name: "Kanvas İmalatı", id: "/ankara-kanvas-tablo-imalati" },
            { name: "Ankara’da Şövale Satışı ve Kiralama", id: "/ankara-sovale-satis-kiralama" },
            { name: "İletişim", id: "#contact" },
          ]}
          brandName="Deniz Çerçeve"
          button={{ text: "Teklif Al", href: "#contact" }}
        />

        <div id="hero">
          <HeroCarouselLogo
              logoText="Tuval Üretim Merkezi"
              description="Sanatçılar, okullar ve atölyeler için 1. sınıf malzemelerle, sağlam ahşap şaseli tuval üretiminde Ankara’nın öncüsü."
              buttons={[
                { text: "Hemen Ara", href: "tel:+903123974849" },
                { text: "WhatsApp", href: "https://wa.me/903123974849" },
                { text: "Yol Tarifi", href: "https://maps.google.com" },
                { text: "Teklif İste", href: "#contact" }
              ]}
              slides={[{ imageSrc: "http://img.b2bpic.net/free-photo/close-up-blank-canvas-easel_23-2148906917.jpg?_wi=2", imageAlt: "Kaliteli tuval" }]}
          />
        </div>

        <div id="products">
          <FeatureCardTen
            title="Tuval Çeşitlerimiz"
            description="Her ihtiyaca özel tuval çözümleri sunuyoruz."
            textboxLayout="split"
            animationType="slide-up"
            useInvertedBackground={true}
            features={[
                { title: "Standart & Siyah Tuval", description: "Sanatçılar için ideal yüzey kalitesi.", items: [{ icon: Palette, text: "Standart tuval, Siyah tuval" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/painting-brushes-canvas-table_23-2148118073.jpg?_wi=2" }, reverse: false },
                { title: "Duble, Parçalı & Özel Ölçü", description: "Yaratıcılığınızı sınırlandırmayın, özel ölçülerle çalışıyoruz.", items: [{ icon: Ruler, text: "Duble tuval, Parçalı tuval, Özel ölçü" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/artist-studio-with-paintings_23-2148906919.jpg" }, reverse: true }
            ]}
          />
        </div>

        <div id="quality">
          <FeatureCardTen
            title="Kalite Standartları"
            description="Ürünlerimizde uzun ömürlülük ve dayanıklılık önceliğimizdir."
            textboxLayout="split"
            animationType="slide-up"
            useInvertedBackground={false}
            features={[
                { title: "Birinci Sınıf Malzeme", description: "En kaliteli bezler ve sağlam ahşap şaseler ile üretim.", items: [{ icon: Info, text: "1. Sınıf Bez, Sağlam Ahşap Şase, Düzgün Gergi" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/close-up-painter-working-studio_23-2148906912.jpg" }, reverse: false }
            ]}
          />
        </div>

        <div id="audience">
          <FeatureCardTen
            title="Kimin İçin?"
            description="Toplu alımlar ve atölye ihtiyaçları için çözümler."
            textboxLayout="split"
            animationType="slide-up"
            useInvertedBackground={true}
            features={[
                { title: "Profesyonel Çözümler", description: "Sanatçıdan okula, toplu alımlara kadar geniş hizmet yelpazesi.", items: [{ icon: ShoppingCart, text: "Sanatçı, Öğrenci, Atölye, Okul, Toplu Alım" }], media: { imageSrc: "http://img.b2bpic.net/free-photo/artist-painting-art-class_23-2149175240.jpg?_wi=2" }, reverse: true }
            ]}
          />
        </div>

        <div id="contact">
          <ContactCTA
              tag="Sipariş"
              title="Özel Ölçü Teklifi Alın"
              description="Siparişleriniz için bizimle iletişime geçin. Online satış ve katalog entegrasyonu hazırlıklarımız sürmektedir, en kısa sürede size daha hızlı hizmet vereceğiz."
              buttons={[
                { text: "WhatsApp’tan Yaz", href: "https://wa.me/903123974849" },
                { text: "Atölyemizi Ziyaret Edin", href: "https://maps.google.com" }
              ]}
              background={{ variant: "sparkles-gradient" }}
              useInvertedBackground={false}
          />
        </div>

        <FooterBase
          columns={[
            { title: "Menü", items: [{ label: "Anasayfa", href: "/" }, { label: "Hizmetler", href: "/services" }, { label: "Tuval", href: "/tuval" }, { label: "Kanvas", href: "/ankara-kanvas-tablo" }, { label: "Kanvas İmalatı", href: "/ankara-kanvas-tablo-imalati" }, { label: "Ankara’da Şövale Satışı ve Kiralama", href: "/ankara-sovale-satis-kiralama" }, { label: "İletişim", href: "#contact" }] },
          ]}
          logoText="Deniz Çerçeve"
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
