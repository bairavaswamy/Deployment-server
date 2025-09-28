import { servicesData } from "@/app/data/servicesData"
import Navbar from "@/app/navbar/navbar";
import Footer from "@/app/footer/footer";
import Image from "next/image";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";

export default function SolutionDetails({ params }: { params: { id: string } }) {
  const service = servicesData[params.id];

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

      {/* Top Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-6">
          <div>
            <h1 className="text-4xl font-extrabold text-blue-700 mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              {service.description}
            </p>
          </div>
          <div className="relative">
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-20 px-6 lg:px-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            About {service.title}
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {service.detailedContent || service.description}
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                Key Benefits
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Durable & Weather-resistant</li>
                <li>Custom Fittings</li>
                <li>Professional Installation</li>
              </ul>
            </div>
            <div className="p-6 bg-green-50 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-green-600 mb-2">
                Applications
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Residential Balconies</li>
                <li>Commercial Buildings</li>
                <li>Industrial Safety</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800">
                How long do safety nets last?
              </h3>
              <p className="text-gray-600">
                Our nets typically last 3–5 years depending on exposure and
                maintenance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                Do you provide installation services?
              </h3>
              <p className="text-gray-600">
                Yes, we provide professional installation with warranty on work.
              </p>
            </div>
          </div>
        </div>
      </section>
      <StickyContactIcons/>
      <Footer />
    </>
  );
}
