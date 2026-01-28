export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-green-600 uppercase tracking-wide mb-2">
              O projektu
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Zakaj Podjetno?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Why */}
            <div className="bg-slate-50 rounded-2xl p-6 md:p-8">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Zgodbe, ki navdihujejo
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Po vsej Sloveniji delujejo podjetniki, katerih izjemne zgodbe
                mnogokrat niso našle prostora v medijih. Ti zaposlujejo lokalno
                in prispevajo k skupnosti. Od najprepoznavnejših podjetniških
                imen pa vse do tistih, za katere boste slišali prvič. Podjetno!
              </p>
            </div>

            {/* Where */}
            <div className="bg-slate-50 rounded-2xl p-6 md:p-8">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Široka distribucija
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Zgodbe objavljamo na sedmih lokalnih portalih medijske hiše Moji
                mediji, na TV IDEA ter prek naših družbenih omrežij na LinkedInu
                in Facebooku. Tako dosežemo lokalne skupnosti po vsej Sloveniji.
              </p>
            </div>
          </div>

          {/* Kako izbiramo zgodbe */}
          <div className="mt-12 bg-slate-50 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
              Kako izbiramo zgodbe
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 mb-1">Vpliv na okolje / rast / inovacije</h4>
                <p className="text-sm text-slate-600">Iščemo podjetja z merljivim vplivom</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 mb-1">Človeška zgodba (ne PR)</h4>
                <p className="text-sm text-slate-600">Pristne zgodbe, ne promocijski materiali</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 mb-1">Preverjena dejstva</h4>
                <p className="text-sm text-slate-600">Vse informacije preverimo</p>
              </div>
            </div>

            {/* CTA gumb */}
            <div className="mt-8 text-center">
              <a
                href="mailto:info@mojimediji.si?subject=Predlog%20podjetne%20zgodbe"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors gap-2"
              >
                Predlagaj podjetno zgodbo
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
