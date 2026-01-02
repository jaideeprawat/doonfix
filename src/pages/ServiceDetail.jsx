import { useParams, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import {useStrings,useData} from "../utils/Utils"


export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
const t= useStrings();
const services= useData();

  const service = services[slug];

  if (!service) {
    return (
      <div className="p-6 text-center text-gray-600">
        Service not found
      </div>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">

      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          {/* {service.label} in Banjarawala, Dehradun */}
          {t.serviceDetail.title.replace("{service}",service.label)}
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          {t.serviceDetail.subTitle}
        </p>
      </header>

      {/* Intro (SEO) */}
      <p className="text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto text-center"
      dangerouslySetInnerHTML={{ __html: t.serviceDetail.intro.replace("{service}",service.label.toLowerCase()) }}>
        {/* Looking for reliable {service.label.toLowerCase()} services in
        Banjarawala, Dehradun? DoonFix connects you with verified local
        technicians for fast, affordable, and professional service at your
        doorstep. */}
      </p>

      {/* Work Types */}
      <section className="grid gap-6">
        {service.problems.map((work) => (
          <div
            key={work.id}
            className="
              rounded-2xl bg-white p-6
              shadow-[0_6px_22px_rgba(0,0,0,0.08)]
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.14)]
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
              onClick={() =>
                
                navigate(`/book/${slug}/${work.id}`, {
  state: { fromApp: true }
})
              }
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
              {t.serviceDetail.book.replace("{service}",service.label)}
            </button>
          </div>
        ))}
      </section>

      {/* Coverage Area */}
      <section className="mt-12 max-w-3xl mx-auto">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          {t.serviceDetail.area}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
                    {t.serviceDetail.areaDetail}

        </p>
      </section>

      {/* Trust Section */}
      <section className="mt-10 max-w-3xl mx-auto space-y-2">
        {                    t.serviceDetail.list
.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 text-sm text-gray-600"
          >
            <CheckCircle size={16} className="text-green-500" />
            {item}
          </div>
        ))}
      </section>
    </main>
  );
}
