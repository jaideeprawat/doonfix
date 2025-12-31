import { useEffect } from "react";
import { X, ChevronRight } from "lucide-react";
import { services } from "../data/services";
import ServiceProblemCard from "./ServiceProblemCard";
export default function ServicePreviewModal({
  category,
  onClose,
  handleViewDetailClick,
  handleServiceClick,
}) {
  const service = services[category];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="
          relative bg-white w-full sm:w-[420px]
          rounded-t-3xl sm:rounded-3xl
          max-h-[84vh]
          shadow-2xl
          animate-slideUp
        "
      >
        {/* Header */}
<div className="
  flex items-center justify-between
  px-5 py-4
  sticky top-0 z-10
  bg-white
  shadow-[0_1px_6px_rgba(0,0,0,0.06)]
">
  <h2 className="text-lg font-semibold">{service.label}</h2>
  <button
    onClick={onClose}
    className="p-2 rounded-full hover:bg-gray-100"
  >
    <X size={20} />
  </button>
</div>


        {/* Body */}
        {/* Body Wrapper */}
<div className="flex flex-col max-h-[calc(84vh-64px)]">

  {/* Scrollable Cards */}

  <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5">
    {service.problems.map((work) => {return(
      <ServiceProblemCard
work={work}
onBook={() => handleServiceClick(category, work.id)}
  ></ServiceProblemCard>
    )}
      
    )}
  </div> 

  {/* Fixed Bottom Section */}
<div className="
  sticky bottom-0
  bg-white
  px-4 py-3
  space-y-2
  shadow-[0_-6px_16px_rgba(0,0,0,0.08)]
">
  <p className="text-xs flex items-center justify-center gap-1 text-gray-500">
  <span className="text-green-500 font-semibold">✔</span>
  Verified local technicians · Same day service
</p>



  <button
  onClick={() => handleViewDetailClick(category)}
  className="
    w-full flex items-center justify-center gap-2
    py-3 rounded-2xl
    text-sm font-medium
    bg-gray-100 text-gray-900
    shadow-[0_6px_16px_rgba(0,0,0,0.08)]
    hover:bg-gray-200
    hover:shadow-[0_8px_22px_rgba(0,0,0,0.12)]
    active:scale-[0.98]
    transition-all
  "
>
  View full details
  <ChevronRight size={16} />
</button>

</div>


</div>

      </div>
    </div>
  );
}
