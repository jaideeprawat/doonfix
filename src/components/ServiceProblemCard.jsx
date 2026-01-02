import {useStrings} from "../utils/Utils"

export default function ServiceProblemCard({
  work,
  onBook,
}) {
      const t = useStrings();
  
  return (
    <div
      className="
        rounded-2xl bg-white p-4
        shadow-[0_4px_20px_rgba(0,0,0,0.08)]
        hover:shadow-[0_6px_24px_rgba(0,0,0,0.12)]
        transition
      "
    >
      {/* Title + Price */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2">
          <span
            className="mt-1 h-2.5 w-2.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: work.accent }}
          />
          <h3 className="font-medium text-gray-900 leading-snug">
            {work.title}
          </h3>
        </div>

        <span className="text-sm font-semibold whitespace-nowrap">
          {work.price}
        </span>
      </div>
{/* Subtitle */}
            <p className="text-sm text-gray-800 mt-1 pl-4">
              {work.subtitle}
            </p>
      {/* Examples */}
      <ul className="mt-3 text-sm text-gray-600 space-y-1 pl-4">
        {work.examples.map((ex) => (
          <li key={ex} className="list-disc">
            {ex}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={onBook}
        className="
          mt-4 w-full
          py-2.5
          rounded-2xl
          text-sm font-medium
          text-green-700
          bg-green-50
          shadow-sm
          hover:bg-green-100
          active:scale-[0.98]
          transition-all
        "
      >
        {t.serviceProblem.bookBtn}
      </button>
    </div>
  );
}
