import HeroSlider from "@/app/home//components/HeroSlider";
import SafetySolutions from "@/app/home/components/SafetySolutions";
import Gallery from "@/app/home/components/Gallery";
import Testimonials from "@/app/home/components/Testimonials";
import CTASection from "@/app/home/components/CTASection";
import MissionSection from "@/app/home/components/MissionSection";
import { Metadata } from "next";
import Head from "next/head";

type CardData = {
  image: string;
  title: string;
  description: string;
  readMoreLink: string;
  callNumber: string;
};

// ---------------- SEO ----------------
export const metadata: Metadata = {
  title: "Home Safety Nets & Grills | Servani Safety Nets",
  description:
    "Protect your family, pets, and property with Servani's balcony nets, invisible grills, and safety solutions in Visakhapatnam.",
  openGraph: {
    title: "Home Safety Solutions | Servani",
    description:
      "Safe, hygienic, and modern protection for your family and pets. Contact us for balcony nets, invisible grills, and more.",
    images: ["/images/slider_1.png"],
  },
  twitter: { card: "summary_large_image" },
};

// ---------------- Data ----------------
const heroSlides = [
  { bg: "/images/slider_1.png", title: "Safe & Secure Homes", subtitle: "Experience peace of mind with our innovative home safety solutions." },
  { bg: "/images/slider_2.png", title: "Invisible Grills for Modern Living", subtitle: "Blend security seamlessly with modern aesthetics and clear views." },
  { bg: "/images/slider_4.png", title: "Protect Your Family & Pets", subtitle: "Safety nets designed to safeguard every member of your household." },
];

const cardsData: CardData[] = [
  {
    image: "/images/balcony-safety-net.png",
    title: "Balcony Safety Nets",
    description:
      "Installed to protect children, pets, and belongings from falling. Ideal for terraces, balconies, windows, and pools.",
    readMoreLink: "/services/balcony",
    callNumber: "+917995792953",
  },
  {
    image: "/images/invisible-grill.png",
    title: "Invisible Grills",
    description:
      "Modern, stylish, and safe invisible grills that secure your home without blocking the view.",
    readMoreLink: "/services/invisible",
    callNumber: "+917995792953",
  },
  {
    image: "/images/bird-safety-net.png",
    title: "Pigeon Safety Nets",
    description:
      "Keep pigeons away from balconies and windows while maintaining airflow and hygiene.",
    readMoreLink: "/services/pigeon",
    callNumber: "+917995792953",
  },
  {
    image: "/images/residential-net.png",
    title: "Residential Safety Nets",
    description:
      "Safety nets for apartments, villas, and independent houses to protect your loved ones.",
    readMoreLink: "/services/residential",
    callNumber: "+917995792953",
  },
  {
    image: "/images/sports-safety.png",
    title: "Sports Safety Nets",
    description:
      "Durable nets for playgrounds, cricket, football, and other sports facilities.",
    readMoreLink: "/services/sports",
    callNumber: "+917995792953",
  },
  {
    image: "/images/construction-net.png",
    title: "Construction Safety Nets",
    description:
      "Strong nets designed for construction sites to prevent debris and ensure worker safety.",
    readMoreLink: "/services/construction",
    callNumber: "+917995792953",
  },
  {
    image: "/images/swimming-pool-net.png",
    title: "Swimming Pool Nets",
    description: "Prevent accidents by securing your swimming pools with safety nets.",
    readMoreLink: "/solutions/swimming-pool-safety-nets",
    callNumber: "+917995792953",
  },
  {
    image: "/images/staircase-safety.png",
    title: "Staircase Safety Nets",
    description: "Best protection for staircases in apartments and commercial spaces.",
    readMoreLink: "#",
    callNumber: "+917995792953",
  },
];

const testimonials = [
  { comment: "Servani installed invisible grills at my home. They look amazing and provide safety.", author: "Ramesh Kumar" },
  { comment: "Excellent service and professional team. My balcony is now safe for kids and pets.", author: "Priya Sharma" },
];

const galleryImages = Array.from({ length: 12 }, (_, i) => `/images/gallery_${i + 1}.jpg`);

// ---------------- Page ----------------
export default function HomePage() {
  return (
    <>
    <Head>
        <meta
          name="description"
          content="Protect your family, pets, and property with Servani's balcony nets, invisible grills, and safety solutions in Your City."
        />
      </Head>
    <div className="mt-20 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <HeroSlider slides={heroSlides} />
      <SafetySolutions cards={cardsData} />
      <Gallery images={galleryImages} />
      <Testimonials testimonials={testimonials} />
      <CTASection />
      <MissionSection />
    </div>
    </>
  );
}
