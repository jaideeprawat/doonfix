import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const whatsappNumber = "+919084437614";

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi DoonFix 👋 I want to book a service."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-3xl mx-auto px-4 py-10">

        {/* HEADER */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-gray-600 mt-2">
            Get in touch with DoonFix for home services in Dehradun
          </p>
        </header>

        {/* CONTACT INFO */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-8 space-y-4">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-green-600 text-xl" />
            <p>Banjarawala, Dehradun, Uttarakhand, 248001</p>
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
            <span className="relative z-10">Chat on WhatsApp</span>
          </button>
          <p className="text-gray-500 text-sm mt-2">
            We'll respond quickly and help you book a service
          </p>
        </section>

      </main>
    </div>
  );
}
