import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-br from-green-200 to-blue-300 dark:from-green-700 dark:to-blue-800 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Home?</h2>
      <Link
        href="/contactUs"
        className="mt-6 inline-block px-6 py-2 bg-yellow-500 rounded-full text-black font-semibold hover:bg-yellow-600 transition"
      >
        Contact Us Today
      </Link>
    </section>
  );
}
