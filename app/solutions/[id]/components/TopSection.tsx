import Image from "next/image";

type TopSectionProps = {
  title: string;
  description: string;
  image: string;
};

export default function TopSection({ title, description, image }: TopSectionProps) {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-6">
        <div>
          <h1 className="text-4xl font-extrabold text-blue-700 mb-6">{title}</h1>
          <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
        </div>
        <div className="relative h-100 w-full overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
