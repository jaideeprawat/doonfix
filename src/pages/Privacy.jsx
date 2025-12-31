export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-4xl mx-auto px-4 py-10">

        {/* PAGE HEADER */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mt-2">
            Effective Date: {new Date().toLocaleDateString("en-IN")}
          </p>
        </header>

        {/* CONTENT */}
        <section className="space-y-6">

          {/* INTRO */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <p className="text-gray-700 leading-relaxed">
              At <strong>DoonFix</strong>, we respect your privacy and are
              committed to protecting the personal information you share with
              us. This Privacy Policy explains how we collect, use, and safeguard
              your information when you use our website and services.
            </p>
          </div>

          {/* INFO COLLECTION */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. Information We Collect
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Name</li>
              <li>Mobile / WhatsApp number</li>
              <li>Service address</li>
              <li>Service details or issue description</li>
            </ul>
            <p className="text-gray-700 mt-3">
              We do <strong>not</strong> collect passwords, payment card details,
              or sensitive personal data.
            </p>
          </div>

          {/* USAGE */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Process and confirm your service booking</li>
              <li>Contact you via WhatsApp or phone</li>
              <li>Assign your request to a service professional</li>
              <li>Improve service quality and customer experience</li>
            </ul>
            <p className="text-gray-700 mt-3">
              We do <strong>not</strong> use your information for spam or
              unsolicited marketing.
            </p>
          </div>

          {/* WHATSAPP */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. WhatsApp Communication
            </h2>
            <p className="text-gray-700 leading-relaxed">
              DoonFix uses <strong>WhatsApp</strong> as a primary communication
              channel. By booking a service, you consent to being contacted via
              WhatsApp for booking confirmation and service updates.
            </p>
            <p className="text-gray-700 mt-2">
              WhatsApp communication is subject to WhatsApp’s own privacy policy.
            </p>
          </div>

          {/* SHARING */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. Sharing of Information
            </h2>
            <p className="text-gray-700">
              We only share your information with:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 mt-2">
              <li>Assigned service professionals</li>
              <li>Internal team members for service fulfillment</li>
            </ul>
            <p className="text-gray-700 mt-3">
              We do <strong>not</strong> sell, rent, or trade your personal
              information.
            </p>
          </div>

          {/* SECURITY */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use reasonable technical and organizational measures to protect
              your data. However, no online transmission is completely secure.
            </p>
          </div>

          {/* COOKIES */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              6. Cookies & Analytics
            </h2>
            <p className="text-gray-700">
              Our website may use basic cookies or analytics tools to understand
              traffic and improve user experience. These do not collect
              personally identifiable information.
            </p>
          </div>

          {/* THIRD PARTY */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              7. Third-Party Links
            </h2>
            <p className="text-gray-700">
              Our website may contain links to third-party services such as
              WhatsApp. We are not responsible for their privacy practices.
            </p>
          </div>

          {/* RIGHTS */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              8. Your Rights
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Request access to your personal data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw communication consent</li>
            </ul>
          </div>

          {/* UPDATES */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              9. Changes to This Policy
            </h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. Updates will
              be posted on this page.
            </p>
          </div>

          {/* CONTACT */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              10. Contact Us
            </h2>
            <div className="text-gray-700 space-y-1">
              <p>📍 Banjarawala, Dehradun</p>
              <p>📞 +91 90844 37614</p>
              <p>📧 info@doonfix.in</p>
            </div>
          </div>

        </section>

      </main>
    </div>
  );
}
