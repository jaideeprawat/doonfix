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

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      id: "electrician",
      name: "Electrician",
      desc: "Wiring, switches, lights, fans & power issues",
      icon: <FaBolt />,
    },
    {
      id: "plumber",
      name: "Plumber",
      desc: "Leakage, taps, pipes, bathrooms & kitchens",
      icon: <FaTools />,
    },
    {
      id: "ac",
      name: "AC Repair & Service",
      desc: "AC installation, servicing & gas refill",
      icon: <FaSnowflake />,
    },
    {
      id: "carpenter",
      name: "Carpenter",
      desc: "Furniture repair, doors & fittings",
      icon: <FaHammer />,
    },
    {
      id: "solar",
      name: "Solar Installation & Service",
      desc: "Solar panels, inverter & maintenance",
      icon: <FaSolarPanel />,
    },
    {
      id: "ro",
      name: "RO Water Purifier Service",
      desc: "RO installation, filter change & repair",
      icon: <FaTint />,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-6xl mx-auto px-4 py-10">

        {/* HEADER */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="text-gray-600 mt-2">
            Reliable home services in Dehradun
          </p>
        </header>

        {/* SERVICES GRID */}
        <section className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
          {services.map((service) => (
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
                  {service.name}
                </h3>
              </div>

              <p className="text-sm text-gray-600">
                {service.desc}
              </p>

              <p className="text-sm text-green-600 font-medium mt-3 group-hover:underline">
                Book Now →
              </p>
            </button>
          ))}
        </section>

        {/* TRUST SECTION */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Why Book with DoonFix?
          </h2>

          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-gray-700">
            <li>✔ Verified local technicians</li>
            <li>✔ Transparent pricing</li>
            <li>✔ Fast response</li>
            <li>✔ No advance payment</li>
          </ul>
        </section>

        {/* SERVICE AREA */}
        <section className="text-center mb-10">
          <p className="text-gray-600">
            Currently serving <strong>Banjarawala, Dehradun</strong> and nearby areas.
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
              Book a Service on WhatsApp
            </span>
          </button>
        </section>

      </main>
    </div>
  );
}
