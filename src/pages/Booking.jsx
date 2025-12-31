import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { services } from "../data/services";
import CategoryGrid from "../components/CategoryGrid";
import ServiceProblemCard from "../components/ServiceProblemCard";
import { FaWhatsapp } from "react-icons/fa";
import { FloatingInput, FloatingTextarea } from "../components/FloatingInput";

export default function Booking() {
  const { serviceId, problemId } = useParams();
  const navigate = useNavigate();

  const service = serviceId ? services[serviceId] : null;
  const problem = service?.problems.find(p => p.id === problemId);

  /* ---------------- FORM STATE ---------------- */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  /* ---------------- SAFETY: INVALID URL ---------------- */
  useEffect(() => {
    if (service && problemId && !problem) {
      navigate(`/book/${serviceId}`, { replace: true });
    }
  }, [service, problemId, problem, navigate, serviceId]);
useEffect(() => {
  function handleVisibilityChange() {
    if (document.visibilityState === "visible") {
      alert("If you haven’t sent the WhatsApp message yet, please send it to confirm your booking.");

    }
  }

  document.addEventListener("visibilitychange", handleVisibilityChange);

  return () => {
    document.removeEventListener("visibilitychange", handleVisibilityChange);
  };
}, []);

  /* ---------------- VALIDATION ---------------- */
  function isValidIndianPhone(phone) {
    const clean = phone.replace(/\D/g, "");
    return /^[6-9]\d{9}$/.test(clean);
  }

  function validate() {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Required";

    if (!phone.trim()) {
      newErrors.phone = "Required";
    } else if (!isValidIndianPhone(phone)) {
      newErrors.phone = "Enter valid 10-digit number";
    }

    if (!address.trim()) newErrors.address = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(field, value) {
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }

    if (field === "name") setName(value);
    if (field === "phone") setPhone(value);
    if (field === "address") setAddress(value);
    if (field === "note") setNote(value);
  }

  /* ---------------- WHATSAPP BOOKING ---------------- */
  function handleWhatsAppBooking() {
    if (!validate()) return;

    setLoading(true);

    const cleanPhone = phone.replace(/\D/g, "");

    const message = `
Hi DoonFix 👋

🔧 Service: ${service.label}
🛠 Problem: ${problem.title}
💰 Price: ${problem.price}

👤 Name: ${name}
📞 Phone: +91 ${cleanPhone}
📍 Address: ${address}
📝 Note: ${note || "No note"}

Please confirm availability.
    `;

    window.open(
      `https://wa.me/919084437614?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setTimeout(() => {
      alert("WhatsApp opened. Please send the message to confirm booking.");
      setLoading(false);
    }, 800);
  }

  /* =====================================================
     UI FLOW
     ===================================================== */

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ---------------- STEP 0: CATEGORY ---------------- */}
      {!service && (
        <div className="max-w-xl mx-auto px-4 pt-6">
          <CategoryGrid
            setCategory={(id) =>
              navigate(`/book/${id}`, { state: { fromApp: true } })
            }
          />
        </div>
      )}

      {/* ---------------- STEP 1: PROBLEM ---------------- */}
      {service && !problem && (
        <div className="max-w-md mx-auto px-4 pt-6 space-y-5">
          <h2 className="font-semibold text-lg">
            What kind of work do you need?
          </h2>

          {service.problems.map(work => (
            <ServiceProblemCard
              key={work.id}
              work={work}
              onBook={() =>
                navigate(`/book/${serviceId}/${work.id}`, {
                  state: { fromApp: true }
                })
              }
            />
          ))}
        </div>
      )}

      {/* ---------------- STEP 2: BOOKING ---------------- */}
      {service && problem && (
        <>
          <main className="max-w-md mx-auto px-4 pb-32">

            {/* Selected Problem */}
            <div className="bg-white rounded-2xl shadow-sm p-4 mt-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-2">
                  <span
                    className="mt-1 h-2.5 w-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: problem.accent }}
                  />
                  <h3 className="font-medium text-gray-900 leading-snug">
                    {problem.title}
                  </h3>
                </div>

                <span className="text-sm font-semibold whitespace-nowrap">
                  {problem.price}
                </span>
              </div>

              <p className="text-sm text-gray-800 mt-1 pl-4">
                {problem.subtitle}
              </p>

              <ul className="mt-3 text-sm text-gray-600 space-y-1 pl-4">
                {problem.examples.map(ex => (
                  <li key={ex} className="list-disc">
                    {ex}
                  </li>
                ))}
              </ul>
            </div>

            {/* FORM */}
            <div className="bg-white rounded-2xl shadow-sm p-4 mt-4 space-y-4">

              <FloatingInput
                label="Your name"
                value={name}
                error={errors.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />

              <FloatingInput
                label="WhatsApp number"
                type="tel"
                value={phone}
                error={errors.phone}
                onChange={(e) =>
                  handleChange("phone", e.target.value.replace(/\D/g, ""))
                }
              />
              <p className="text-xs text-gray-500 -mt-2 ml-1">
                We’ll contact you on this number for booking confirmation
              </p>

              <FloatingTextarea
                label="Service address"
                rows={2}
                value={address}
                error={errors.address}
                onChange={(e) => handleChange("address", e.target.value)}
              />
              <p className="text-xs text-gray-500 -mt-2 ml-1">
                Please enter full address so technician can reach you easily
              </p>

              <FloatingTextarea
                label="Describe issue (optional)"
                rows={3}
                value={note}
                onChange={(e) => handleChange("note", e.target.value)}
              />
              <p className="text-xs text-gray-400 -mt-2 ml-1">
                Mention any special details to help the technician prepare better
              </p>
            </div>
          </main>

          {/* ---------------- CTA ---------------- */}
          <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-6px_20px_rgba(0,0,0,0.08)] p-3">
            <div className="max-w-md mx-auto">
              <button
                onClick={handleWhatsAppBooking}
                disabled={loading}
                
                className={`
                  relative overflow-hidden
                  w-full flex items-center justify-center gap-3
                  bg-gradient-to-r from-green-500 to-green-600
                  text-white font-semibold
                  py-3 rounded-xl
                  shadow-lg
                  transition
                  ${loading ? "opacity-70" : "active:scale-95"}
                `}
              >
                <span className="shine-layer"></span>
                <FaWhatsapp size={20} />
                {loading ? "Opening WhatsApp..." : "Book on WhatsApp"}
              </button>

              <p className="text-xs text-center text-gray-500 mt-2">
                Trusted local professionals • No advance payment
              </p>
            </div>
          </div>
          
        </>
      )}
    </div>
  );
}
