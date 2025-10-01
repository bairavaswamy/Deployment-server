export default function FAQSection() {
  return (
    <section className="py-20 px-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-800">How long do safety nets last?</h3>
            <p className="text-gray-600">Our nets typically last 3–5 years depending on exposure and maintenance.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Do you provide installation services?</h3>
            <p className="text-gray-600">Yes, we provide professional installation with warranty on work.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
