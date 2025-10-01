import { Metadata } from "next";
import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";
import { servicesData } from "@/app/servicesData/servicesData";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";

type Params = {
  params: Promise<{ servicesId: string }>;
};

// Static generation for all service pages
export async function generateStaticParams(): Promise<Array<{ servicesId: string }>> {
  return Object.keys(servicesData).map((servicesId) => ({ servicesId }));
}

// SEO metadata per page
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { servicesId } = await params;
  const service = servicesData[servicesId as keyof typeof servicesData];
  const description = service?.description?.trim() || `Discover our premium ${service?.title || "service"} designed for excellent results.`;
  return {
    title: service?.title || "Service Details",
    description: service?.description,
    openGraph: {
      title: service?.title,
      description,
      images: [service?.image],
    },
  };
}

export default async function ServiceDetailsPage({ params }: Params) {
  const { servicesId } = await params;
  const service = servicesData[servicesId as keyof typeof servicesData];
  if (!service) return <div>Service not found</div>;

  return (
    <>
      <Navbar />
      <HeroSection {...service} />
      <InfoSection {...service} />
      <StickyContactIcons />
      <Footer />
    </>
  );
}
