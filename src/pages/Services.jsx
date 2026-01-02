import { useNavigate } from "react-router-dom";
import {
  FaBolt,
  FaTools,
  FaSnowflake,
  FaHammer,
  FaHome,
  FaSolarPanel,
  FaTint
} from "react-icons/fa";
import {useStrings} from "../utils/Utils"


export default function Services() {
  const navigate = useNavigate();
    const t = useStrings();

  const services = [
  {
    id: "electrician",
    icon: <FaBolt />,
  },
  {
    id: "plumber",
    icon: <FaTools />,
  },
  {
    id: "ac",
    icon: <FaSnowflake />,
  },
  {
    id: "carpenter",
    icon: <FaHammer />,
  },
  {
    id: "solar",
    icon: <FaSolarPanel />,
  },
  {
    id: "ro",
    icon: <FaTint />,
  },
];

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-6xl mx-auto px-4 py-10">

        {/* HEADER */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            {t.services.ourServices}
          </h1>
          <p className="text-gray-600 mt-2">
                        {t.services.des}

          </p>
        </header>

        {/* SERVICES GRID */}
        <section className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
          {services.map((service) => {
          
            const data = t.services.allServices[service.id];
            return(
<button
              key={service.id}
              onClick={() =>
                navigate(`/book/${service.id}`, {
                  state: { fromApp: true },
                })
              }
              className="
                bg-white rounded-2xl p-4
                shadow-sm hover:shadow-md
                transition
                text-left
                group
              "
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-green-600 text-xl">
                  {service.icon}
                </span>
                <h3 className="font-semibold text-gray-900">
                  {data.name}
                </h3>
              </div>

              <p className="text-sm text-gray-600">
                {data.desc}
              </p>

              <p className="text-sm text-green-600 font-medium mt-3 group-hover:underline">
                {t.services.book}
              </p>
            </button>
            )}
            
          )}
        </section>

        {/* TRUST SECTION */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {t.services.why}
          </h2>

          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-gray-700">
            {t.services.checkList.map((item, index) => (
    <li key={index}>✔ {item}</li>
  ))}
          </ul>
        </section>

        {/* SERVICE AREA */}
        <section className="text-center mb-10">
          <p className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: t.services.serving }}>
          </p>
        </section>

        {/* CTA */}
        <section className="text-center">
          <button
            onClick={() => navigate("/book", { state: { fromApp: true } })}
            className="
              relative overflow-hidden
              inline-flex items-center justify-center
              bg-green-500 hover:bg-green-600
              text-white font-semibold
              px-8 py-3
              rounded-xl
              shadow-lg
              transition
              active:scale-95
            "
          >
            <span className="shine-layer"></span>
            <span className="relative z-10">
              {t.services.bookBtn}
            </span>
          </button>
        </section>

      </main>
    </div>
  );
}
