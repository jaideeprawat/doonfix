export default function BookingSummary({ service, problem }) {
  return (
    <div className="bg-white border rounded-xl p-4 space-y-2">
      <p className="text-sm text-gray-500">Selected service</p>
      <p className="font-semibold">{service.label}</p>

      <p className="text-sm text-gray-500">Work type</p>
      <p className="font-semibold">{problem.title}</p>

      <p className="font-medium">{problem.price}</p>
    </div>
  );
}
