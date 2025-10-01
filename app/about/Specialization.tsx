import React from "react";

export default function Specialization() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">
        We Specialize In
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-800">
        <li>
          <span className="font-semibold">Safety Nets</span> – Durable nets to prevent accidents in balconies, terraces, windows, construction sites.
        </li>
        <li>
          <span className="font-semibold">Pigeon Protection Nets</span> – Keeps birds away safely for clean, healthy environment.
        </li>
        <li>
          <span className="font-semibold">Bird Spikes</span> – Prevent pigeons and birds from nesting on ledges and pipes.
        </li>
        <li>
          <span className="font-semibold">Invisible Grills</span> – Stylish, rust-proof grills that do not block views.
        </li>
      </ul>
    </section>
  );
}
