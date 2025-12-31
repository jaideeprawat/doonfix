export default function Terms() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-3xl mx-auto px-4 py-10">

        {/* HEADER */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Terms & Conditions</h1>
          <p className="text-gray-600 mt-2">
            Please read these terms before using DoonFix services
          </p>
        </header>

        {/* TERMS CONTENT */}
        <section className="bg-white rounded-2xl shadow-sm p-6 space-y-4 text-gray-700">
          <p>
            By using DoonFix services, you agree to the following terms and conditions:
          </p>

          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Service Booking:</strong> All bookings are subject to availability. We strive to confirm same-day service where possible.
            </li>
            <li>
              <strong>Pricing:</strong> Prices are indicative and may vary based on the actual service required. Final charges will be communicated before work begins.
            </li>
            <li>
              <strong>Payments:</strong> No advance payment is required. Payment should be made directly to the technician after service completion.
            </li>
            <li>
              <strong>User Responsibility:</strong> Users should provide accurate contact information and full service address to ensure smooth service delivery.
            </li>
            <li>
              <strong>Cancellation:</strong> Users can cancel the service by informing DoonFix through WhatsApp. Repeated cancellations may affect service availability.
            </li>
            <li>
              <strong>Liability:</strong> DoonFix acts as a facilitator connecting users with verified service technicians. We are not responsible for any damages arising during service delivery.
            </li>
            <li>
              <strong>Changes to Terms:</strong> DoonFix reserves the right to modify these terms at any time. Users are encouraged to review them periodically.
            </li>
          </ol>

          <p>
            By booking a service with DoonFix, you acknowledge and accept these terms.
          </p>
        </section>
      </main>
    </div>
  );
}
