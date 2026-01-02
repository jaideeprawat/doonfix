import {
  ShieldCheck,
  Clock,
  IndianRupee,
  MapPin,
  Smartphone,
  Users
} from "lucide-react";
import {getFeatutesData,useStrings} from "../utils/Utils"


export const list = [
  {
    id:"verified",
    icon: ShieldCheck,
  },
  {
    id:"whatsApp",
    icon: Smartphone,
   },
  {
    id:"transparent",
    icon: IndianRupee,
   },
  {
    id:"fast",
    icon: Clock,
   },
  {
    id:"mapPin",
    icon: MapPin,
  },
  {
    id:"users",
    icon: Users,
   },
];

export default function WhyChooseUs() {
    const t = useStrings();
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t.whyChoose.whyChooseBefore}{" "}
  <span>
    Doon<span className="text-green-600">Fix</span>
  </span>
  {t.whyChoose.whyChooseAfter}
          </h2>
          <p className="mt-2 text-gray-600 text-sm md:text-base">
            {t.whyChoose.des}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {list.map((item, i) => {
            const data = getFeatutesData()[i];
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
                  {data.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {data.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
