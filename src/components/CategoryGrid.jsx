import { services } from "../data/services";
import {
  Zap,
  Droplet,
  Filter,
  Wind,
  Sun,
  Hammer,
} from "lucide-react";

/* icon mapper */
const iconMap = {
  Zap,
  Droplet,
  Filter,
  Wind,
  Sun,
  Hammer,
};

export default function CategoryGrid({ setCategory }) {
  return (
    <section className="scroll-mt-16 px-4 sm:px-6 lg:px-8 py-10">
      {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            What service do you need?
          </h2>
          <p className="mt-2 text-gray-600 text-sm md:text-base">
           Choose a category to get started
          </p>
        </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {Object.values(services).map((service) => {
          const Icon = iconMap[service.icon];

          return (
            <div
              key={service.id}
              onClick={() => setCategory(service.id)}
              className="
                group cursor-pointer
                rounded-2xl bg-white p-5
                flex flex-col items-center justify-center text-center
                shadow-[0_6px_20px_rgba(0,0,0,0.08)]
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.14)]
                active:scale-[0.97]
                transition-all
              "
            >
              {/* Icon Container */}
              <div
                className="
                  mb-3 flex items-center justify-center
                  h-12 w-12 rounded-full
                  bg-gray-100
                  group-hover:bg-gray-200
                  transition
                "
              >
                {Icon && (
                  <Icon
                    size={24}
                    strokeWidth={1.8}
                    className="text-green-600"
                  />
                )}
              </div>

              {/* Label */}
              <p className="text-sm font-medium text-gray-900">
                {service.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
