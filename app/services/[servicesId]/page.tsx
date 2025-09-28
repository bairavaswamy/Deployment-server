import Footer from "@/app/footer/footer";
import Navbar from "@/app/navbar/navbar";
import StickyContactIcons from "@/app/stickyicons/stickyIcons";
import Image from "next/image";

const servicesData: Record<
  string,
  { title: string; description: string; image: string }
> = {
  balcony: {
    title: "Balcony Safety Nets",
    description:
      "Our balcony safety nets provide protection from accidental falls, ensuring safety for kids, pets, and family members while maintaining ventilation and aesthetics.",
    image: "/images/balcony-net.jpg",
  },
  invisible: {
    title: "Invisible Grills",
    description:
      "Invisible grills are modern and stylish safety solutions for balconies and windows. They offer protection without obstructing your view.",
    image: "/images/invisible-grill.jpg",
  },
  pigeon: {
    title: "Pigeon Safety Nets",
    description:
      "Keep your surroundings clean and hygienic by preventing pigeons and other birds from entering your balconies and open areas.",
    image: "/images/pigeon-net.jpg",
  },
  residential: {
    title: "Residential Safety Nets",
    description:
      "Strong and durable nets designed to enhance home safety. Suitable for windows, balconies, staircases, and other open spaces.",
    image: "/images/residential-net.jpg",
  },
  sports: {
    title: "Sports Safety Nets",
    description:
      "High-quality sports nets for cricket, football, and other games, ensuring player safety and preventing ball loss.",
    image: "/images/sports-net.jpg",
  },
  construction: {
    title: "Construction Safety Nets",
    description:
      "Heavy-duty safety nets used at construction sites to protect workers and pedestrians from falling debris.",
    image: "/images/construction-net.jpg",
  },
};

export default async function ServicesDetails({
  params,
}: {
  params: Promise<{ servicesId: string }>;
}) {
  const service =
    servicesData[(await params).servicesId as keyof typeof servicesData];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center">
        {/* Background Image */}
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          className="object-cover brightness-75"
        />
        {/* Overlay Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
            {service.description}
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-6 lg:px-20 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-600">
              Why Choose {service.title}?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>✔ Durable & long-lasting material</li>
              <li>✔ Professional installation service</li>
              <li>✔ Affordable pricing</li>
              <li>✔ 100% Safety guaranteed</li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition">
              <a href="https://wa.me/7995792953" target="_blank">Get a Free Quote</a>
            </button>
          </div>

          {/* Right Side Image Card */}
          <div className="relative">
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={200}
              className="rounded-2xl shadow-2xl object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 w-52 text-center">
              <h3 className="font-bold text-blue-600">Trusted by 10,000+</h3>
              <p className="text-sm text-gray-500">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>
      <StickyContactIcons/>
      <Footer />
    </>
  );
}
