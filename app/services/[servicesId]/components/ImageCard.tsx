import Image from "next/image";

type ImageCardProps = {
  image: string;
  title: string;
};

export default function ImageCard({ image, title }: ImageCardProps) {
  return (
    <div className="relative">
      <Image
        src={image}
        alt={title}
        width={600}
        height={200}
        className="rounded-2xl shadow-2xl object-cover"
      />
      <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 w-52 text-center">
        <h3 className="font-bold text-blue-600">Trusted by 10,000+</h3>
        <p className="text-sm text-gray-500">Happy Customers</p>
      </div>
    </div>
  );
}
