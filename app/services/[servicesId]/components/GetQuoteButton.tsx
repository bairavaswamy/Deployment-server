'use client';

export default function GetQuoteButton() {
  return (
    <button
      onClick={() => window.open('https://wa.me/7995792953', '_blank', 'noopener')}
      className="mt-6 px-6 py-3 min-w-[44px] min-h-[44px] bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition"
    >
      Get a Free Quote
    </button>
  );
}
