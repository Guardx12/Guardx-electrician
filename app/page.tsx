
import Image from "next/image";

const quickLinks = [
  { href: "#work", label: "Work" },
  { href: "#solutions", label: "Solutions" },
  { href: "#compliance", label: "Compliance" },
  { href: "#areas", label: "Areas" },
  { href: "#reviews", label: "Reviews" },
];

const stats = [
  { k: "Avg response", v: "Same-day slots" },
  { k: "Testing", v: "Recorded (demo)" },
  { k: "Guarantee", v: "Workmanship covered" },
  { k: "Rating", v: "5.0 (demo)" },
];

const solutions = [
  {
    title: "Domestic fault finding",
    desc: "Trips, sparks, burning smells, sockets down — safe diagnosis with clear next steps.",
    bullets: ["Make safe & isolate", "Pinpoint the fault", "Repair/replace", "Retest & verify"],
    img: "/images/electrician/elec-3.jpg",
  },
  {
    title: "Commercial maintenance",
    desc: "Planned maintenance to reduce downtime — lighting, distribution boards, small works and compliance checks.",
    bullets: ["Scheduled visits", "Clear reporting", "Fast remedials", "Minimal disruption"],
    img: "/images/electrician/elec-1.jpg",
  },
  {
    title: "Board upgrades & tidy installs",
    desc: "Clean, organised installs with cable management and a professional finish.",
    bullets: ["Consumer unit upgrades", "Lighting circuits", "Outdoor power", "Neat trunking"],
    img: "/images/electrician/elec-2.jpg",
  },
];

const industries = [
  { title: "Homeowners", desc: "Faults, upgrades, lighting, outdoor power." },
  { title: "Landlords", desc: "EICR-style checks (demo), smoke/heat alarms." },
  { title: "Small commercial", desc: "Shops, offices, light industrial maintenance." },
  { title: "Site teams", desc: "First-fix / second-fix support and snagging." },
];

const areas = ["Brighton", "Hove", "Worthing", "Chichester", "Littlehampton", "Horsham"];

const reviews = [
  { title: "Customer Review", body: "Professional, calm, and thorough. Explained everything clearly." },
  { title: "Customer Review", body: "Tidy work and good communication — the finish looks great." },
  { title: "Customer Review", body: "Fast response and safe repair. Would use again." },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/75">
      {children}
    </span>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-1 text-ember-500" aria-label="5 star rating">
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
    <main className="min-h-screen bg-ink">
      {/* Subtle background grid */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-faint opacity-60" />

      {/* Demo bar */}
      <div className="border-b border-white/10 bg-slatey">
        <div className="container flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/70">
            Showroom demo website • One-page preview • Real client sites include full multi-page navigation
          </p>
          <div className="flex items-center gap-3 text-sm">
            <a href="#" className="text-white/70 hover:text-white">← Back to examples</a>
            <span className="hidden text-white/25 sm:inline">|</span>
            <a href="tel:+447000000000" className="font-semibold text-white hover:underline">Call 07000 000000</a>
          </div>
        </div>
      </div>

      {/* New layout: left rail + content */}
      <div className="container grid gap-8 py-8 lg:grid-cols-12">
        {/* Left rail */}
        <aside className="lg:col-span-3">
          <div className="sticky top-6 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-panel">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-ember-600 text-white shadow-ember">
                  <span className="text-sm font-black tracking-widest">RE</span>
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-extrabold tracking-wide text-white">Redline Electrical</p>
                  <p className="text-xs text-white/55">Domestic • Commercial • Landlords</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Tag>Same-day slots</Tag>
                <Tag>Testing (demo)</Tag>
                <Tag>Insured (demo)</Tag>
              </div>

              <div className="mt-5 grid gap-2">
                <a href="#quote" className="inline-flex items-center justify-center rounded-xl bg-ember-600 px-4 py-3 text-sm font-black text-white shadow-ember hover:bg-ember-700">
                  Request a quote
                </a>
                <a href="tel:+447000000000" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-black text-white hover:bg-white/10">
                  Call now
                </a>
              </div>

              <div className="mt-5 grid gap-2 text-sm text-white/70">
                {quickLinks.map((l) => (
                  <a key={l.href} href={l.href} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10">
                    <span className="font-semibold">{l.label}</span>
                    <span className="text-white/35">→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-semibold tracking-widest text-white/55">RATING</p>
              <div className="mt-2 flex items-center gap-3">
                <Stars />
                <p className="text-sm font-semibold text-white/80">5.0 (demo)</p>
              </div>
              <p className="mt-2 text-sm text-white/60">Placeholder reviews only — no fake names.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-ember-700/20 to-white/5 p-5">
              <p className="text-xs font-semibold tracking-widest text-ember-200">EMERGENCY</p>
              <p className="mt-2 text-sm font-semibold text-white">Faults made safe, fast.</p>
              <p className="mt-2 text-sm text-white/60">Trips, burning smells, sparking sockets — call for urgent help.</p>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <section className="lg:col-span-9">
          {/* Hero: mosaic + technical headline */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 shadow-panel">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <p className="text-xs font-semibold tracking-widest text-ember-200">ELECTRICAL • SAFETY • COMPLIANCE</p>
                <h1 className="mt-3 text-balance text-4xl font-black tracking-tight text-white sm:text-5xl">
                  Clean installs. Correct testing. No drama.
                </h1>
                <p className="mt-4 max-w-xl text-lg text-white/70">
                  A premium red + grey brand. This is a one-page showroom preview — real client websites include multiple pages.
                </p>

                <div id="quote" className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-extrabold text-white">Emergency fault</p>
                    <p className="mt-1 text-sm text-white/60">Trips, sparks, burning smell, sockets down</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-extrabold text-white">Planned work</p>
                    <p className="mt-1 text-sm text-white/60">Upgrades, lighting, compliance checks</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-4">
                  {stats.map((s) => (
                    <div key={s.k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs font-semibold tracking-widest text-white/55">{s.k.toUpperCase()}</p>
                      <p className="mt-1 text-sm font-bold text-white">{s.v}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "/images/electrician/elec-1.jpg",
                    "/images/electrician/elec-2.jpg",
                    "/images/electrician/elec-3.jpg",
                    "/images/electrician/elec-4.jpg",
                  ].map((src, i) => (
                    <div
                      key={src}
                      className={
                        "overflow-hidden rounded-2xl border border-white/10 bg-white/5 " +
                        (i === 0 ? "sm:row-span-2" : "")
                      }
                    >
                      <Image src={src} alt="Electrician work image" width={1200} height={800} className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Industries strip */}
          <div className="mt-8 grid gap-3 md:grid-cols-4">
            {industries.map((x) => (
              <div key={x.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-black text-white">{x.title}</p>
                <p className="mt-2 text-sm text-white/60">{x.desc}</p>
              </div>
            ))}
          </div>

          {/* Solutions: alternating rows */}
          <div id="solutions" className="mt-10 space-y-6">
            {solutions.map((s, idx) => (
              <div key={s.title} className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-panel lg:grid-cols-12 lg:items-center">
                <div className={"lg:col-span-5 " + (idx % 2 === 1 ? "lg:order-2" : "")}>
                  <div className="overflow-hidden rounded-2xl border border-white/10">
                    <Image src={s.img} alt={s.title} width={1400} height={900} className="h-72 w-full object-cover" />
                  </div>
                </div>
                <div className={"lg:col-span-7 " + (idx % 2 === 1 ? "lg:order-1" : "")}>
                  <p className="text-xs font-semibold tracking-widest text-white/55">SOLUTION</p>
                  <h2 className="mt-2 text-3xl font-black text-white">{s.title}</h2>
                  <p className="mt-3 text-white/70">{s.desc}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-ember-500" />
                        <span className="text-sm font-semibold text-white/80">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Compliance */}
          <div id="compliance" className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 shadow-panel">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-widest text-ember-200">COMPLIANCE</p>
                <h2 className="mt-2 text-3xl font-black text-white">Safety-first documentation (demo)</h2>
                <p className="mt-2 max-w-2xl text-white/70">
                  Real builds include a full site: Home, Services, Areas, Reviews, About, Contact, FAQs, etc.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
                <span className="font-semibold">Typical:</span> EICR • Part P • Testing • Labelling (demo)
              </div>
            </div>

            <div className="mt-6 grid gap-3 lg:grid-cols-3">
              {[
                ["EICR-style reports (demo)", "Clear actions & retest plan."],
                ["Part P (demo)", "Domestic work signed off correctly."],
                ["Testing (demo)", "Results recorded, circuits labelled."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-black text-white">{t}</p>
                  <p className="mt-2 text-sm text-white/60">{d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Areas */}
          <div id="areas" className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-panel">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-widest text-white/55">AREAS</p>
                <h2 className="mt-2 text-3xl font-black text-white">Covering Sussex</h2>
                <p className="mt-2 text-white/70">Local response for callouts and scheduled installs.</p>
              </div>
              <a href="tel:+447000000000" className="inline-flex items-center justify-center rounded-2xl bg-ember-600 px-5 py-3 text-sm font-black text-white shadow-ember hover:bg-ember-700">
                Call 07000 000000
              </a>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((a) => (
                <div key={a} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white/80">
                  {a}
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div id="reviews" className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-panel">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-widest text-white/55">REVIEWS</p>
                <h2 className="mt-2 text-3xl font-black text-white">Trusted workmanship</h2>
                <div className="mt-3 flex items-center gap-3">
                  <Stars />
                  <p className="text-sm font-semibold text-white/80">5.0 (demo)</p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
                Placeholder reviews only — no fake names.
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {reviews.map((r, i) => (
                <figure key={i} className="rounded-2xl border border-white/10 bg-slatey p-6">
                  <blockquote className="text-lg font-black text-white">“{r.title}”</blockquote>
                  <p className="mt-3 text-sm text-white/65">{r.body}</p>
                  <figcaption className="mt-6 text-xs font-semibold tracking-widest text-white/45">VERIFIED CUSTOMER</figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-10 rounded-3xl border border-white/10 bg-slatey p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-ember-600 text-white shadow-ember">
                  <span className="text-sm font-black tracking-widest">RE</span>
                </div>
                <div>
                  <p className="text-sm font-extrabold tracking-wide text-white">Redline Electrical</p>
                  <p className="text-xs text-white/55">Emergency • Commercial • Compliance (demo)</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-white/60">
                <a href="#solutions" className="hover:text-white">Solutions</a>
                <a href="#compliance" className="hover:text-white">Compliance</a>
                <a href="#areas" className="hover:text-white">Areas</a>
                <a href="#quote" className="hover:text-white">Quote</a>
              </div>
            </div>
            <p className="mt-6 text-xs text-white/45">This is a GuardX showroom example website (demo). No customer data is collected.</p>
          </footer>
        </section>
      </div>
    </main>
  );
}
