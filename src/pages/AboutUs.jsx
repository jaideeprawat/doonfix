import {useStrings} from "../utils/Utils"
export default function AboutUs() {
  const t = useStrings();
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-4xl mx-auto px-4 py-10">

        {/* PAGE TITLE */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {t.about.header}
          </h1>
          <p className="text-gray-600 mt-2">
            {t.about.subheader}
          </p>
        </header>

        {/* INTRO */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <p className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: t.about.description }}>

          </p>

          <p className="text-gray-700 leading-relaxed mt-4"dangerouslySetInnerHTML={{ __html: t.about.descriptioncat }}>
          </p>
        </section>

        {/* WHY WE STARTED */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {t.about.why}
          </h2>

          <p className="text-gray-700 leading-relaxed">
            {t.about.whyDes}
          </p>

          <p className="text-gray-700 leading-relaxed mt-4"
                    dangerouslySetInnerHTML={{ __html: t.about.whySubDescription }}>

          </p>

        </section>

        {/* WHAT MAKES US DIFFERENT */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {t.about.whatDifferent}
          </h2>

          <ul className="space-y-3 text-gray-700">
            {t.about.highlights.map((item, index) => (
    <li key={index}>✔ {item}</li>
  ))}
          </ul>
        </section>

        {/* SERVICES */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {t.about.services}
          </h2>

          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700">
            {t.about.servicesList.map((service, index) => (
    <li key={index}>{service}</li>
  ))}
          </ul>
        </section>

        {/* MISSION */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            {t.about.mission}
          </h2>

          <p className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t.about.missionDescription }}>
          </p>
        </section>

        {/* SERVICE AREA */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        {t.about.serviceArea}

          </h2>

          <p className="text-gray-700"
                    dangerouslySetInnerHTML={{ __html: t.about.serviceAreaDes }}>

          </p>
        </section>

        {/* CONTACT */}
        <section className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {t.about.getTouch}
          </h2>

          <div className="space-y-2 text-gray-700">
            <p>📍 {t.about.contact.location}</p>
  <p>📞 {t.about.contact.phone}</p>
  <p>📧 {t.about.contact.email}</p>
          </div>
        </section>

      </main>
    </div>
  );
}
