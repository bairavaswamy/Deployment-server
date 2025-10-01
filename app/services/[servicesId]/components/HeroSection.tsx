import Image from "next/image";

type HeroSectionProps = {
  title: string;
  description: string;
  image: string;
};

export default function HeroSection({ title, description, image }: HeroSectionProps) {
  return (
    <section className="relative h-[70vh] w-full flex items-center justify-center">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover brightness-75"
      />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">{title}</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">{description}</p>
      </div>
    </section>
  );
}
