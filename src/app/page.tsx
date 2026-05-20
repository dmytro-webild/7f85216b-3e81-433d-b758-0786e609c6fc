"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Image, Palette } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Anasayfa",
          id: "#hero",
        },
        {
          name: "Çerçeveleme",
          id: "#services",
        },
        {
          name: "İletişim",
          id: "#contact",
        },
      ]}
      brandName="Deniz Çerçeve"
      button={{
        text: "Teklif Al",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Deniz Çerçeve"
      description="Ankara’da 1974’ten beri resim çerçeveleme, tuval ve kanvas şase üretiminde tecrübe ve kalite. Ölçünüze özel çözümler için hemen teklif alın."
      buttons={[
        {
          text: "WhatsApp’tan Görsel Gönder",
          href: "#contact",
        },
        {
          text: "Teklif Al",
          href: "#contact",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/modern-artist-concept-with-brushes-colorful-paint_23-2148002103.jpg?_wi=1",
          imageAlt: "Çerçeveleme atölyesi",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/vintage-golden-frame-easel_23-2148661004.jpg",
          imageAlt: "Özel çerçeve üretimi",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/studio-with-props-painting_23-2148885701.jpg",
          imageAlt: "Kanvas şase detayları",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/white-empty-frame-with-free-copy-space_1204-445.jpg",
          imageAlt: "Ahşap çerçeve seçenekleri",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/carpentry-workshop_23-2147773389.jpg",
          imageAlt: "Şövale ve sanat malzemeleri",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/golden-fancy-frame_24837-272.jpg",
          imageAlt: "Ankara çerçeveci",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "Çerçeveleme",
          description: "Özel ölçü tablo ve fotoğraf çerçeveleme.",
          items: [
            {
              icon: Image,
              text: "Resim, tablo, puzzle, diploma çerçeveleri",
            },
          ],
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/young-man-going-art-gallery_23-2149709090.jpg",
            imageAlt: "Çerçeve",
          },
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/modern-artist-concept-with-brushes-colorful-paint_23-2148002103.jpg?_wi=2",
          imageAlt: "diverse picture frames on wall",
        },
        {
          title: "Tuval ve Şase",
          description: "Kaliteli ahşap şase ve tuval imalatı.",
          items: [
            {
              icon: Palette,
              text: "Özel ölçü tuval üretimi",
            },
          ],
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/assortment-white-minimalist-frames_23-2148226792.jpg",
            imageAlt: "Tuval",
          },
          reverse: true,
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-artisan-jobs-equipment-assortment_23-2148732419.jpg?_wi=1",
          imageAlt: "diverse picture frames on wall",
        },
        {
          title: "Şövale",
          description: "Satış ve kiralama seçenekleri.",
          items: [
            {
              icon: Brush,
              text: "Sanatçı ve sergi şövaleleri",
            },
          ],
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/young-man-going-art-gallery_23-2149709117.jpg",
            imageAlt: "Şövale",
          },
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/flirty-couple-attending-art-workshop-having-fun-together-while-dating_662251-328.jpg?_wi=1",
          imageAlt: "diverse picture frames on wall",
        },
      ]}
      title="İhtiyacınıza Göre Çözümler"
      description="Ev, ofis ve atölye ihtiyaçlarınız için profesyonel çerçeveleme ve tuval hizmetleri."
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="1974’ten Beri Tecrübe"
      description="3 kuşaktır Ankara’da çerçevecilik sanatını icra ediyor, imalattan aracısız satış yapıyoruz."
      metrics={[
        {
          value: "50+",
          title: "Yıllık Tecrübe",
        },
        {
          value: "3",
          title: "Nesil Deneyim",
        },
        {
          value: "Özel",
          title: "Üretim",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-artisan-jobs-equipment-assortment_23-2148732419.jpg?_wi=2"
      imageAlt="Usta işçilik"
      mediaAnimation="blur-reveal"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="why-us" data-section="why-us">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "100%",
          title: "İmalattan Satış",
          description: "Aracı komisyonu olmadan doğrudan imalathaneden.",
          imageSrc: "http://img.b2bpic.net/free-photo/blank-frame-collection-wall-vase_23-2148875398.jpg",
        },
        {
          id: "m2",
          value: "Özel",
          title: "Ölçü Üretim",
          description: "Her çalışmaya özel, milimetrik üretim.",
          imageSrc: "http://img.b2bpic.net/free-photo/elevated-view-blank-slate-various-worktools_23-2147865581.jpg",
        },
        {
          id: "m3",
          value: "Geniş",
          title: "Model Çeşitliliği",
          description: "Mağazada model görerek karar verme imkanı.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-doing-daily-activities-minimal-decorated-room_23-2150407586.jpg",
        },
      ]}
      title="Neden Deniz Çerçeve?"
      description="Kaliteli malzeme ve usta işçiliğin birleşimi."
    />
  </div>

  <div id="process" data-section="process">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "p1",
          title: "1. Görsel veya Ölçü Paylaşın",
          content: "İşinize dair ölçüleri ve görseli bize gönderin.",
        },
        {
          id: "p2",
          title: "2. Model Seçimi",
          content: "Size en uygun çerçeve modellerini önerelim.",
        },
        {
          id: "p3",
          title: "3. Fiyatlandırma",
          content: "Model ve işçiliğe göre fiyatı paylaşalım.",
        },
        {
          id: "p4",
          title: "4. Üretim",
          content: "Onayınız sonrası hazırlığa başlayalım.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/arranged-notepads-with-frames-table_23-2147755053.jpg"
      title="Nasıl Teklif Alınır?"
      description="4 kolay adımda hizmet alın."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Ahmet K.",
          role: "Müşteri",
          testimonial: "3 kuşaktır çerçevelerimi buradan alırım, çok kaliteli.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-couple-making-plans-remodel-house_23-2148814629.jpg",
        },
        {
          id: "t2",
          name: "Ayşe Y.",
          role: "Müşteri",
          testimonial: "Özel ölçü tablo çerçevelemede harikalar.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-joyful-woman-with-dark-curly-hair-standing-near-table-happily-showing-fashion-sketches-laptop-while-spending-time-modern-cozy-workshop-with-big-windows_574295-496.jpg",
        },
        {
          id: "t3",
          name: "Can M.",
          role: "Müşteri",
          testimonial: "Hızlı, dürüst ve çok iyi işçilik yapıyorlar.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-holding-pillows-decorating-new-home_23-2149086785.jpg",
        },
        {
          id: "t4",
          name: "Sibel T.",
          role: "Müşteri",
          testimonial: "Mağazada çok model var, seçim yapmak çok kolay.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-person-painting-wall_23-2148263389.jpg",
        },
        {
          id: "t5",
          name: "Emre G.",
          role: "Müşteri",
          testimonial: "Kanvas şaselerim her zaman sağlam geliyor.",
          imageSrc: "http://img.b2bpic.net/free-photo/flirty-couple-attending-art-workshop-having-fun-together-while-dating_662251-328.jpg?_wi=2",
        },
      ]}
      title="Müşterilerimiz Neler Diyor?"
      description="Yıllardır bize güvenen Ankara müşterilerimiz."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="İletişim"
      title="Teklif Alın"
      description="Ölçünüzü ve ihtiyaç türünüzü paylaşın, size en uygun teklifi hazırlayalım."
      buttons={[
        {
          text: "WhatsApp'tan Yaz",
          href: "https://wa.me/903123974849",
        },
        {
          text: "Hemen Ara",
          href: "tel:+903123974849",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Menü",
          items: [
            {
              label: "Anasayfa",
              href: "/",
            },
            {
              label: "Çerçeveleme",
              href: "#services",
            },
            {
              label: "İletişim",
              href: "#contact",
            },
          ],
        },
        {
          title: "İletişim",
          items: [
            {
              label: "0312 397 48 49",
              href: "tel:+903123974849",
            },
            {
              label: "Yenimahalle, Ankara",
              href: "#",
            },
          ],
        },
        {
          title: "Sosyal Medya",
          items: [
            {
              label: "Instagram",
              href: "https://www.instagram.com/cerceveciankara/",
            },
          ],
        },
      ]}
      logoText="Deniz Çerçeve"
      copyrightText="© 1974-2025 | Deniz Çerçeve Ankara"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
