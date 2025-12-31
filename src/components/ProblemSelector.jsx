export default function ProblemSelector({ service, onSelect }) {
  return (
    <div className="space-y-3">
      {service.problems.map((p) => (
        <button
          key={p.id}
          onClick={() => onSelect(p.id)}
          className="w-full border rounded-xl p-4 text-left hover:border-green-500"
        >
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">{p.title}</p>
              <p className="text-sm text-gray-500">{p.subtitle}</p>
            </div>
            <span className="text-sm font-medium">{p.price}</span>
          </div>
        </button>
      ))}
    </div>
  );
}
