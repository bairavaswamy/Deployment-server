import Head from "next/head";
import Image from "next/image";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import StickyContactIcons from "../stickyicons/stickyIcons";

import AboutIntro from "../about/AboutIntro";
import Specialization from "../about/Specialization";
import WhyChooseUs from "../about/WhyChooseUs";
import Mission from "../about/Mission";
import Values from "../about/Values";
import WhySolutionsMatter from "../about/WhySolutionsMatter";
import Closing from "../about/Closing";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Servanisafety Nets</title>
        <meta
          name="description"
          content="Learn about Servanisafety Nets, your trusted partner for safety nets, pigeon protection, and invisible grills."
        />
        <meta property="og:title" content="About Us - Servanisafety Nets" />
        <meta
          property="og:description"
          content="Providing premium safety solutions for homes and workplaces."
        />
        <link rel="canonical" href="https://yourwebsite.com/about" />
      </Head>
      <Navbar />
      <main className="w-full mt-16 px-6 py-12 bg-gray-50 text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">
            About Us
          </h1>

          <AboutIntro />

          <div className="relative w-full h-72 my-8 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/safety-nets-installation.png"
              alt="Safety Nets Installation"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////2wBDAf//////////////////////////////////////////////////////////////////////////////////////wAARCAAgACADASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAPvlAP/EABkQAQEBAQEBAAAAAAAAAAAAAAIBAAMREjH/2gAIAQEAAQUClMcXfVZ//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AY//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AY//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/Ahv/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAE/IY//2Q=="
              loading="lazy"
            />
          </div>

          <Specialization />
          <WhyChooseUs />
          <Mission />
          <Values />
          <WhySolutionsMatter />
          <Closing />
        </div>
      </main>
      <StickyContactIcons />
      <Footer />
    </>
  );
}
