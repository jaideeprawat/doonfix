import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {useStrings} from "../utils/Utils"
import {openWhatsApp} from "../utils/Utils"

export default function Contact() {
    const t = useStrings();
  
  const whatsappNumber = "+919084437614";

const handleWhatsAppClick = () => {
    openWhatsApp(
      whatsappNumber,
      t.contact.whatsappMsg
    );
  };
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-3xl mx-auto px-4 py-10">

        {/* HEADER */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">{t.contact.header}</h1>
          <p className="text-gray-600 mt-2">
            {t.contact.headerDes}
          </p>
        </header>

        {/* CONTACT INFO */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-8 space-y-4">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-green-600 text-xl" />
            <p>{t.contact.address}</p>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-green-600 text-xl" />
            <p>+91 90844 37614</p>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-green-600 text-xl" />
            <p>info@doonfix.in</p>
          </div>
        </section>

        {/* WHATSAPP CTA */}
        <section className="text-center">
          <button
            onClick={handleWhatsAppClick}
            className="
              relative overflow-hidden
              inline-flex items-center justify-center gap-3
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
            <FaWhatsapp size={20} />
            <span className="relative z-10">{t.contact.buttonText}</span>
          </button>
          <p className="text-gray-500 text-sm mt-2">
            {t.contact.msg}
          </p>
        </section>

      </main>
    </div>
  );
}
