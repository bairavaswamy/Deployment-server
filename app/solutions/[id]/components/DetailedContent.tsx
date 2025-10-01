type DetailedContentProps = {
  title: string;
  description: string;
  detailedContent?: string;
};

export default function DetailedContent({ title, description, detailedContent }: DetailedContentProps) {
  return (
    <section className="py-20 px-6 lg:px-20 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About {title}</h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{detailedContent || description}</p>
      </div>
    </section>
  );
}
