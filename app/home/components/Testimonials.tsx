type Testimonial = {
  comment: string;
  author: string;
};

const TestimonialCard = ({ comment, author }: Testimonial) => (
  <blockquote className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow">
    <p className="italic text-gray-700 dark:text-gray-200">&ldquo;{comment}&rdquo;</p>
    <footer className="mt-4 font-semibold">– {author}</footer>
  </blockquote>
);

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="py-16 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
}
