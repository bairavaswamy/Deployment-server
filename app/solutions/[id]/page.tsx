import { servicesData } from "@/app/data/servicesData";
import Navbar from "@/app/navbar/Navbar";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";
import Footer from "@/app/footer/Footer";
import TopSection from "./components/TopSection";
import DetailedContent from "./components/DetailedContent";
import BenefitApplications from "./components/BenefitApplications";
import FAQSection from "./components/FAQSection";

// The params argument is now a promise, so mark function async and await it
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = servicesData[id];
  return {
    title: service?.title || "Service Details",
    description: service?.description,
    openGraph: {
      title: service?.title,
      description: service?.description,
      images: [service?.image],
    },
  };
}

export default async function SolutionDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = servicesData[id];

  if (!service) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-600">Service Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <TopSection {...service} />
      <DetailedContent
        title={service.title}
        description={service.description}
        detailedContent={service.detailedContent}
      />
      <BenefitApplications />
      <FAQSection />
      <StickyContactIcons />
      <Footer />
    </>
  );
}
