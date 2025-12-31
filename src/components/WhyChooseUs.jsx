import {
  ShieldCheck,
  Clock,
  IndianRupee,
  MapPin,
  Smartphone,
  Users
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Local Professionals",
    desc: "All service providers are background-checked and experienced in local homes."
  },
  {
    icon: Smartphone,
    title: "Instant WhatsApp Booking",
    desc: "No app download or login. Book directly on WhatsApp in seconds."
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    desc: "Clear pricing shared upfront. No hidden charges after work."
  },
  {
    icon: Clock,
    title: "Fast Response",
    desc: "Quick confirmation and same-day service for most requests."
  },
  {
    icon: MapPin,
    title: "Local Dehradun Experts",
    desc: "We understand local areas like Banjarawala, Kargi, ISBT & more."
  },
  {
    icon: Users,
    title: "Trusted by Local Families",
    desc: "Growing trust among Dehradun homes and small businesses."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Why Choose Doon<span className="text-green-600">Fix</span>?
          </h2>
          <p className="mt-2 text-gray-600 text-sm md:text-base">
            Trusted local home services in Dehradun
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  <Icon className="text-green-600" size={24} />
                </div>

                <h3 className="font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
