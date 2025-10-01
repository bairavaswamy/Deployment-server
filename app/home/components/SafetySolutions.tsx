import SafetyCard from "@/app/home/components/cards";

type CardData = {
  image: string;
  title: string;
  description: string;
  readMoreLink: string;
  callNumber: string;
};

export default function SafetySolutions({ cards }: { cards: CardData[] }) {
  return (
    <section className="py-16 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-10">Our Solutions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <SafetyCard key={i} {...card} />
        ))}
      </div>
    </section>
  );
}
