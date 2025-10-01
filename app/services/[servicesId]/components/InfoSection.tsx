import GetQuoteButton from "./GetQuoteButton";
import ImageCard from "./ImageCard";

type InfoSectionProps = {
  title: string;
  description: string;
  image: string;
};

export default function InfoSection({ title, description, image }: InfoSectionProps) {
  return (
    <section className="py-20 px-6 lg:px-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-600">Why Choose {title}?</h2>
          <p className="text-gray-700 leading-relaxed">{description}</p>
          <ul className="space-y-3 text-gray-600">
            <li>✔ Durable &amp; long-lasting material</li>
            <li>✔ Professional installation service</li>
            <li>✔ Affordable pricing</li>
            <li>✔ 100% Safety guaranteed</li>
          </ul>
            <GetQuoteButton />
        </div>
        <ImageCard image={image} title={title} />
      </div>
    </section>
  );
}
