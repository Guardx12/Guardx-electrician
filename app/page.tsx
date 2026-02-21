
import Image from "next/image";

const services = [
  { title: "Emergency Fault Finding", desc: "Trips, burning smells, sockets not working — rapid diagnostics and safe repairs." },
  { title: "Consumer Unit Upgrades", desc: "Modern RCBO boards installed and tested with certification (demo)." },
  { title: "Lighting & Rewires", desc: "Indoor/outdoor lighting, partial rewires, and clean cable routing." },
  { title: "EV Charger Install", desc: "Home EV charger installs with neat trunking and clear handover." },
  { title: "EICR Safety Reports", desc: "Landlord and homeowner electrical inspections (demo)." },
  { title: "Smart Home & Data", desc: "Ring, smart switches, Wi‑Fi access points and tidy network runs." },
];

const areas = ["Brighton", "Worthing", "Hove", "Chichester", "Littlehampton", "Horsham"];

const trust = [
  { k: "Response", v: "Same‑day slots" },
  { k: "Rating", v: "5.0 (demo)" },
  { k: "Guarantee", v: "Workmanship covered" },
  { k: "Certified", v: "Tested & labelled" },
];

const reviews = [
  { title: "Customer Review", body: "Explained the issue clearly, fixed it quickly, and left everything tidy." },
  { title: "Customer Review", body: "Professional install and clean finish — great communication throughout." },
  { title: "Customer Review", body: "On time, polite, and thorough. Would use again for future work." },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
      {children}
    </span>
  );
}

function StarRow() {
  return (
    <div className="flex items-center gap-1 text-volt-300" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M10 15.27l-5.18 3.06 1.64-5.81L1.5 8.97l6-.48L10 3l2.5 5.49 6 .48-4.96 3.55 1.64 5.81z" />
        </svg>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-graphite text-white">
        <div className="container flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/80">
            24/7 emergency cover • NICEIC‑style certification (demo) • Fully insured (demo)
          </p>
          <div className="flex items-center gap-3 text-sm">
            <a href="#" className="text-white/90 hover:text-white">← Back to examples</a>
            <span className="hidden text-white/25 sm:inline">|</span>
            <a href="tel:+447000000000" className="font-semibold hover:underline">Call: 07000 000000</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-crimson-600 text-white shadow-soft">
              <span className="text-lg font-black">RE</span>
            </div>
            <div className="leading-tight">
              <p className="font-extrabold tracking-tight text-slate-900">Redline Electrical Co.</p>
              <p className="text-xs text-slate-500">Domestic • Commercial • EV chargers</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#work" className="hover:text-slate-900">Our work</a>
            <a href="#areas" className="hover:text-slate-900">Areas</a>
            <a href="#reviews" className="hover:text-slate-900">Reviews</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#quote"
              className="hidden rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 sm:inline-flex"
            >
              Get a quote
            </a>
            <a
              href="tel:+447000000000"
              className="inline-flex rounded-xl bg-crimson-600 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-crimson-700"
            >
              Call now
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-graphite">
        <div className="absolute inset-0">
          <Image src="/images/hero.jpg" alt="Electrician themed hero background" fill priority className="object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/80 to-graphite/30" />
        </div>

        <div className="relative">
          <div className="container py-14 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2">
                  <Pill><span className="inline-flex h-2 w-2 rounded-full bg-volt-300" />Same‑day availability</Pill>
                  <Pill><StarRow /><span className="text-white/90">5.0 demo rating</span></Pill>
                  <Pill>Clear, fixed quotes</Pill>
                </div>

                <h1 className="mt-6 text-balance text-4xl font-black tracking-tight text-white sm:text-5xl">
                  Electricians who turn up, test properly, and finish neatly.
                </h1>
                <p className="mt-5 max-w-2xl text-pretty text-lg text-white/80">
                  Fault finding, consumer unit upgrades, EV chargers, lighting and EICR safety checks — delivered with clean workmanship and clear communication.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#quote" className="inline-flex items-center justify-center rounded-2xl bg-crimson-600 px-6 py-3 text-base font-bold text-white shadow-glow hover:bg-crimson-700">
                    Get a fixed quote
                  </a>
                  <a href="#services" className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white hover:bg-white/10">
                    See services
                  </a>
                </div>

                <div className="mt-10 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:grid-cols-4">
                  {trust.map((t) => (
                    <div key={t.k} className="rounded-2xl bg-white/5 p-4">
                      <p className="text-sm font-semibold text-white">{t.k}</p>
                      <p className="text-sm text-white/70">{t.v}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div id="quote" className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-soft">
                  <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-crimson-100 blur-2xl" />
                  <div className="absolute -left-20 -bottom-24 h-56 w-56 rounded-full bg-volt-100 blur-2xl" />
                  <p className="relative text-sm font-semibold text-crimson-700">Fast callback</p>
                  <h2 className="relative mt-2 text-2xl font-black tracking-tight text-slate-900">What do you need help with?</h2>

                  <div className="relative mt-5 grid gap-3">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-sm font-semibold text-slate-900">Emergency fault</p>
                      <p className="text-sm text-slate-600">Trips, sparks, burning smell, sockets down</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-sm font-semibold text-slate-900">Upgrade / install</p>
                      <p className="text-sm text-slate-600">Consumer unit, lighting, EV chargers</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-sm font-semibold text-slate-900">Safety report</p>
                      <p className="text-sm text-slate-600">EICR checks for landlords & homeowners (demo)</p>
                    </div>
                  </div>

                  <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
                    <a href="tel:+447000000000" className="inline-flex items-center justify-center rounded-2xl bg-graphite px-5 py-3 text-sm font-bold text-white hover:bg-black">
                      Call now
                    </a>
                    <a href="#services" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-900 hover:bg-slate-50">
                      View services
                    </a>
                  </div>

                  <p className="relative mt-4 text-xs text-slate-500">Demo website: buttons are placeholders. No forms collect data.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold text-crimson-700">How it works</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Clear process. Safe outcomes.</h2>
              <p className="mt-3 text-slate-600">We keep everything simple: diagnose, quote, complete, certify (demo), and leave the area tidy.</p>
            </div>
            <div className="lg:col-span-7">
              <ol className="grid gap-4 sm:grid-cols-2">
                {[
                  ["1", "Quick call", "Tell us what’s happening — we’ll advise next steps."],
                  ["2", "Fixed quote", "Transparent pricing before any work starts."],
                  ["3", "Safe repair", "Test, repair/replace, and verify the fix."],
                  ["4", "Tidy finish", "Clean up, label where needed, and hand over."],
                ].map(([n, t, d]) => (
                  <li key={n} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-crimson-600 text-white font-black">{n}</div>
                      <p className="text-lg font-extrabold tracking-tight text-slate-900">{t}</p>
                    </div>
                    <p className="mt-3 text-slate-600">{d}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50">
        <div className="container py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold text-crimson-700">Services</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Domestic & commercial electrical</h2>
              <p className="mt-2 max-w-2xl text-slate-600">Built for busy homeowners and property managers — quick scheduling, clean work, and proper testing.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
              <span className="font-semibold">Typical jobs:</span> fault finding • upgrades • EV • lighting • EICR
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-11 w-11 rounded-2xl bg-crimson-50 ring-1 ring-crimson-100 grid place-items-center">
                    <span className="h-2.5 w-2.5 rounded-full bg-crimson-600" />
                  </div>
                  <p className="text-sm font-semibold text-slate-600">Certified work (demo)</p>
                </div>
                <h3 className="text-lg font-extrabold tracking-tight text-slate-900">{s.title}</h3>
                <p className="mt-2 text-slate-600">{s.desc}</p>
                <p className="mt-5 text-sm font-semibold text-crimson-700">Learn more →</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-white">
        <div className="container py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold text-crimson-700">Our work</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Neat installs, labelled and tested</h2>
              <p className="mt-2 max-w-2xl text-slate-600">A snapshot of common projects: consumer unit upgrades, lighting installs, and EV charger work (demo).</p>
            </div>
            <a href="#reviews" className="inline-flex w-fit items-center justify-center rounded-2xl bg-graphite px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-black">
              See reviews
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              { src: "/images/gallery-1.jpg", alt: "Consumer unit panel style image" },
              { src: "/images/gallery-2.jpg", alt: "Lighting install style image" },
              { src: "/images/gallery-3.jpg", alt: "EV charger install style image" },
            ].map((g) => (
              <div key={g.src} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <Image src={g.src} alt={g.alt} width={1200} height={800} className="h-72 w-full object-cover" />
                <div className="p-6">
                  <p className="text-sm font-semibold text-slate-900">Project quality</p>
                  <p className="mt-1 text-sm text-slate-600">Clean finish, clear labelling and safe testing.</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-3 text-xs text-slate-500">Images included for demo purposes (generated locally).</p>
        </div>
      </section>

      <section id="areas" className="bg-slate-50">
        <div className="container py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold text-crimson-700">Areas served</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Local electricians across Sussex</h2>
              <p className="mt-3 text-slate-600">Quick response times for emergency faults and planned installs.</p>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Accreditations (demo)</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["NICEIC‑style (demo)", "Part P (demo)", "Public Liability (demo)", "Workmanship Guarantee"].map((x) => (
                    <span key={x} className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">{x}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {areas.map((a) => (
                  <div key={a} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 shadow-sm">{a}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-white">
        <div className="container py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold text-crimson-700">Reviews</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Trusted workmanship</h2>
              <div className="mt-3 flex items-center gap-3">
                <StarRow />
                <p className="text-sm font-semibold text-slate-700">5.0 (demo rating)</p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
              Placeholder reviews only — no fake names.
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((r, idx) => (
              <figure key={idx} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <blockquote className="text-lg font-semibold text-slate-900">“{r.title}”</blockquote>
                <p className="mt-3 text-slate-600">{r.body}</p>
                <figcaption className="mt-6 text-sm font-semibold text-slate-700">Verified customer</figcaption>
              </figure>
            ))}
          </div>

          <details className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <summary className="cursor-pointer text-sm font-semibold text-slate-900">FAQ — do you provide certificates and reports?</summary>
            <p className="mt-3 text-sm text-slate-700">
              This is a showroom demo site. Real client work includes appropriate certification and documentation where required.
            </p>
          </details>
        </div>
      </section>

      <section className="bg-graphite">
        <div className="container py-14">
          <div className="grid gap-8 rounded-3xl bg-gradient-to-r from-crimson-700 to-crimson-500 p-10 text-white shadow-soft lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-black tracking-tight">Need an electrician this week?</h2>
              <p className="mt-2 text-white/90">Call now for urgent faults or get a fixed quote for planned work.</p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a href="tel:+447000000000" className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-black text-graphite shadow-sm hover:bg-white/90 sm:w-auto">
                Call 07000 000000
              </a>
              <p className="mt-2 text-xs text-white/80">Demo site — buttons are placeholders.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="container py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-crimson-600 text-white">
                <span className="text-lg font-black">RE</span>
              </div>
              <div>
                <p className="font-extrabold tracking-tight text-slate-900">Redline Electrical Co.</p>
                <p className="text-sm text-slate-600">Fault finding • Upgrades • EV • EICR</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <a href="#services" className="hover:text-slate-900">Services</a>
              <a href="#work" className="hover:text-slate-900">Our work</a>
              <a href="#reviews" className="hover:text-slate-900">Reviews</a>
              <a href="#quote" className="hover:text-slate-900">Quote</a>
            </div>
          </div>
          <p className="mt-6 text-xs text-slate-500">This is a GuardX showroom example website (demo). No customer data is collected.</p>
        </div>
      </footer>
    </main>
  );
}
