export default function BenefitApplications() {
  return (
    <div className="mt-8 grid md:grid-cols-2 gap-6">
      <div className="p-6 bg-blue-50 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-blue-600 mb-2">Key Benefits</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Durable & Weather-resistant</li>
          <li>Custom Fittings</li>
          <li>Professional Installation</li>
        </ul>
      </div>
      <div className="p-6 bg-green-50 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-green-600 mb-2">Applications</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Residential Balconies</li>
          <li>Commercial Buildings</li>
          <li>Industrial Safety</li>
        </ul>
      </div>
    </div>
  );
}
