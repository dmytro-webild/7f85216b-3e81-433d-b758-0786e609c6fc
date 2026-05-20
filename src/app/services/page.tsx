"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';

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
            { name: "İletişim", id: "#contact" },
          ]}
          brandName="Deniz Çerçeve"
          button={{ text: "Teklif Al", href: "#contact" }}
        />
        <HeroCarouselLogo
            logoText="Profesyonel Hizmetlerimiz"
            description="Deniz Çerçeve olarak sunduğumuz tüm çerçeveleme, sanat ve koruma çözümlerini inceleyin."
            buttons={[{ text: "Teklif Al", href: "#contact" }]}
            slides={[{ imageSrc: "http://img.b2bpic.net/free-photo/modern-artist-concept-with-brushes-colorful-paint_23-2148002103.jpg" }]}
        />
        <FeatureCardTen
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={true}
            title="Hizmetlerimiz"
            description="Sanat eserleriniz için en uygun koruma ve sunum çözümleri."
            features={[
                { title: "Özel Çerçeveleme", description: "Sanat eserleri, fotoğraflar ve özel eşyalarınız için estetik çerçeveler.", media: { imageSrc: "http://img.b2bpic.net/free-photo/vintage-golden-frame-easel_23-2148661004.jpg" }, items: [], reverse: false },
                { title: "Kanvas Şase", description: "Tuvalinizi uzun yıllar koruyacak ahşap şase imalatı.", media: { imageSrc: "http://img.b2bpic.net/free-photo/studio-with-props-painting_23-2148885701.jpg" }, items: [], reverse: true }
            ]}
        />
        <MetricCardEleven
            animationType="slide-up"
            title="Fiyatlandırma İlkeleri"
            description="Kaliteli işçilik ve adil fiyatlandırma anlayışımız."
            metrics={[
                { id: "p1", value: "Şeffaf", title: "Net Fiyatlandırma", description: "Gizli maliyetler olmadan, malzeme ve işçilik bazlı hesaplama.", imageSrc: "http://img.b2bpic.net/free-photo/blank-frame-collection-wall-vase_23-2148875398.jpg" }
            ]}
        />
        <FaqSplitMedia
            faqs={[
                { id: "q1", title: "Süreç nasıl ilerliyor?", content: "Görselinizi veya ölçünüzü paylaşın, size en uygun modeli sunalım." },
                { id: "q2", title: "Teslimat süresi nedir?", content: "Ürün tipine göre değişiklik göstermekle birlikte genelde 3-5 iş günüdür." }
            ]}
            title="Sıkça Sorulan Sorular"
            faqsAnimation="slide-up"
            textboxLayout="split"
        />
        <ContactSplitForm
            title="Bize Ulaşın"
            description="Projeniz için hemen ücretsiz danışmanlık alın."
            inputs={[{ name: "name", type: "text", placeholder: "İsim" }, { name: "email", type: "email", placeholder: "E-posta" }]}
            textarea={{ name: "message", placeholder: "Mesajınız" }}
        />
        <FooterBase
          columns={[
            { title: "Menü", items: [{ label: "Anasayfa", href: "/" }, { label: "Hizmetler", href: "/services" }, { label: "İletişim", href: "#contact" }] },
          ]}
          logoText="Deniz Çerçeve"
        />
      </ReactLenis>
    </ThemeProvider>
  );
}