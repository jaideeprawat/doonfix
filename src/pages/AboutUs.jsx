export default function AboutUs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-4xl mx-auto px-4 py-10">

        {/* PAGE TITLE */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            About DoonFix
          </h1>
          <p className="text-gray-600 mt-2">
            Reliable local home services in Dehradun
          </p>
        </header>

        {/* INTRO */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <p className="text-gray-700 leading-relaxed">
            <strong>DoonFix</strong> is a local home-services platform based in
            <strong> Dehradun</strong>, built to make finding reliable technicians
            simple, fast, and stress-free. We connect customers with
            <strong> verified local professionals</strong> for everyday home
            repair and maintenance needs — without complicated apps, logins,
            or hidden charges.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            From electrical issues and plumbing repairs to AC servicing and
            carpentry work, DoonFix lets you book trusted help in just a few
            clicks through <strong>WhatsApp</strong>.
          </p>
        </section>

        {/* WHY WE STARTED */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Why We Started DoonFix
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Finding a dependable service professional at the right time is
            still a challenge for many households. Long waiting times,
            unclear pricing, and unreliable contacts often turn small problems
            into big frustrations.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            DoonFix was created to solve this by offering
            <strong> quick booking</strong>, <strong>transparent pricing</strong>,
            and trusted local professionals who understand local needs.
          </p>
        </section>

        {/* WHAT MAKES US DIFFERENT */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            What Makes Us Different
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Local technicians from Dehradun</li>
            <li>✔ Verified and reliable professionals</li>
            <li>✔ No app, no login — book directly on WhatsApp</li>
            <li>✔ Clear and transparent service pricing</li>
            <li>✔ Customer-first and safety-focused approach</li>
          </ul>
        </section>

        {/* SERVICES */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Our Services
          </h2>

          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700">
            <li>🔧 Electrician</li>
            <li>🚿 Plumber</li>
            <li>❄️ AC Repair</li>
            <li>🪚 Carpenter</li>
            <li>🏠 Home Maintenance</li>
            <li>☀️ Solar all Services</li>
    <li>💧 RO/Water Purifier Services</li>
          </ul>
        </section>

        {/* MISSION */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Our Mission
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Our mission is to become <strong>Dehradun’s most trusted local
            home-service brand</strong>, making professional help accessible
            to every household through a simple, transparent, and fast
            booking experience.
          </p>
        </section>

        {/* SERVICE AREA */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Service Area
          </h2>

          <p className="text-gray-700">
            We currently serve <strong>Dehradun</strong>, including
            <strong> Banjarawala and nearby localities</strong>, with plans
            to expand across the city.
          </p>
        </section>

        {/* CONTACT */}
        <section className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Get in Touch
          </h2>

          <div className="space-y-2 text-gray-700">
            <p>📍 Banjarawala, Dehradun</p>
            <p>📞 +91 90844 37614</p>
            <p>📧 info@doonfix.in</p>
          </div>
        </section>

      </main>
    </div>
  );
}
