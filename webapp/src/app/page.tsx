import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Predictive Automation",
    description:
      "Launch data-driven workflows that automatically respond to customer behavior in real time.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        role="img"
        aria-hidden="true"
        className="h-10 w-10 text-sky-500"
      >
        <defs>
          <linearGradient id="autoGradient" x1="0" x2="1" y1="1" y2="0">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.75" />
            <stop offset="1" stopColor="currentColor" />
          </linearGradient>
        </defs>
        <rect
          width="46"
          height="30"
          x="1"
          y="9"
          rx="6"
          fill="none"
          stroke="url(#autoGradient)"
          strokeWidth="3"
        />
        <path
          d="M12 20h8l2 4h12"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="36" cy="24" r="3.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Unified Customer View",
    description:
      "Merge product, marketing, and support data into a single profile with zero engineering lift.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        role="img"
        aria-hidden="true"
        className="h-10 w-10 text-purple-500"
      >
        <circle
          cx="16"
          cy="17"
          r="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle
          cx="32"
          cy="19"
          r="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle
          cx="24"
          cy="31"
          r="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle cx="24" cy="24" r="4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Conversion Intelligence",
    description:
      "Surface the next best action for every lead with AI scoring that learns from outcomes.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        role="img"
        aria-hidden="true"
        className="h-10 w-10 text-emerald-500"
      >
        <path
          d="M6 36c6-8 12-13 18-15s12-1 18 3"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M36 18v10h10"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="11" cy="34" r="3" fill="currentColor" />
        <circle cx="24" cy="21" r="3" fill="currentColor" />
        <circle cx="36" cy="33" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Team Collaboration",
    description:
      "Assign ownership, track playbook completion, and collaborate without leaving the dashboard.",
    icon: (
      <svg
        viewBox="0 0 48 48"
        role="img"
        aria-hidden="true"
        className="h-10 w-10 text-amber-500"
      >
        <rect
          x="6"
          y="8"
          width="36"
          height="26"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M12 18h24"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M18 26h12"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="16" cy="34" r="4" fill="currentColor" />
        <circle cx="32" cy="34" r="4" fill="currentColor" />
      </svg>
    ),
  },
];

const visuals = [
  {
    src: "/visual-dashboard.svg",
    alt: "Analytics dashboard",
    title: "Command Center",
    description:
      "Monitor pipeline velocity, campaign performance, and expansion signals in real time.",
  },
  {
    src: "/visual-touchpoints.svg",
    alt: "Automation sequences",
    title: "Journeys that adapt",
    description:
      "Drag-and-drop sequences that personalize outreach across email, in-app, and SMS.",
  },
  {
    src: "/visual-mobile.svg",
    alt: "Mobile companion app",
    title: "Always in sync",
    description:
      "Stay aligned on the go with instant alerts, lead notes, and voice-to-text logging.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="px-6 py-6 sm:px-10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          >
            <Image
              src="/logo-mark.svg"
              alt="NexPulse logo"
              width={32}
              height={32}
              priority
            />
            NexPulse
          </Link>
          <div className="hidden items-center gap-8 text-sm font-medium text-neutral-200 md:flex">
            <Link href="#features" className="transition hover:text-white">
              Features
            </Link>
            <Link href="#visuals" className="transition hover:text-white">
              Product Tour
            </Link>
            <Link href="#pricing" className="transition hover:text-white">
              Pricing
            </Link>
            <Link href="#resources" className="transition hover:text-white">
              Resources
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="hidden rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-neutral-200 transition hover:border-white/40 hover:text-white md:inline-block"
            >
              Log In
            </Link>
            <Link
              href="#cta"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-neutral-900 shadow-lg shadow-white/20 transition hover:bg-neutral-200"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      <main className="px-6 pb-24 sm:px-10">
        <section className="mx-auto grid max-w-6xl gap-16 rounded-3xl bg-gradient-to-b from-white/[0.04] via-white/[0.03] to-transparent px-8 py-24 shadow-[0_80px_120px_-60px_rgba(15,118,110,0.35)] sm:px-12 md:grid-cols-[1fr_420px] md:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/90">
              AI Revenue Co-Pilot
            </div>
            <h1 className="text-balance text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Close more deals with insight-driven customer journeys.
            </h1>
            <p className="max-w-xl text-pretty text-lg text-neutral-300 sm:text-xl">
              NexPulse connects your CRM, product usage, and marketing stack to
              orchestrate personal outreach that converts. Automate playbooks,
              surface revenue signals, and boost your team&apos;s win rate.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#cta"
                className="inline-flex items-center gap-3 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-300"
              >
                Start Free Trial
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link
                href="#visuals"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
              >
                Watch Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M8 5.14v13.72L19 12 8 5.14Z" />
                </svg>
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                  <span className="text-lg font-semibold">92%</span>
                </span>
                Faster conversions within 30 days
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sky-200">
                  <span className="text-lg font-semibold">24/7</span>
                </span>
                AI assistant support included
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-emerald-400/40 via-sky-400/40 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-neutral-900/60 shadow-[0_40px_90px_-60px_rgba(14,165,233,0.85)] backdrop-blur">
              <Image
                src="/hero-visual.svg"
                alt="Revenue intelligence overview"
                width={900}
                height={650}
                priority
                className="h-full w-full"
              />
            </div>
          </div>
        </section>

        <section
          id="features"
          className="mx-auto mt-32 max-w-6xl space-y-12 text-neutral-200"
        >
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200/80">
              Why teams switch
            </span>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              Everything you need to convert revenue signals into action.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div className="absolute inset-x-0 top-0 h-1 opacity-0 transition group-hover:opacity-100">
                  <div className="h-full bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-400" />
                </div>
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base text-neutral-300">
                  {feature.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition group-hover:translate-x-1">
                  Explore playbook
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12h12m0 0-5-5m5 5-5 5"
                    />
                  </svg>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="pricing"
          className="mx-auto mt-32 max-w-6xl space-y-12 text-neutral-200"
        >
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200/80">
              Simple pricing
            </span>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              Pick a plan that scales with your revenue team.
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                name: "Launch",
                price: "$89",
                cadence: "per month",
                highlights: [
                  "Up to 3 workspaces",
                  "Unlimited playbooks",
                  "Core integrations",
                  "Email & in-app journeys",
                ],
                featured: false,
              },
              {
                name: "Growth",
                price: "$249",
                cadence: "per month",
                highlights: [
                  "Usage intelligence AI",
                  "360° customer timelines",
                  "SMS automation add-on",
                  "Dedicated success manager",
                ],
                featured: true,
              },
              {
                name: "Scale",
                price: "Let's talk",
                cadence: "custom pricing",
                highlights: [
                  "Enterprise governance",
                  "SSO & audit trails",
                  "Advanced analytics",
                  "Priority 24/7 support",
                ],
                featured: false,
              },
            ].map((plan) => (
              <article
                key={plan.name}
                className={`relative overflow-hidden rounded-3xl border ${
                  plan.featured
                    ? "border-emerald-400/40 bg-white/[0.08] shadow-[0_40px_100px_-60px_rgba(16,185,129,0.8)]"
                    : "border-white/10 bg-white/[0.03]"
                } p-8 transition duration-300 hover:border-white/20`}
              >
                {plan.featured && (
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-400" />
                )}
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <div className="mt-6 flex items-baseline gap-2 text-white">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm text-neutral-400">{plan.cadence}</span>
                </div>
                <ul className="mt-8 space-y-3 text-sm text-neutral-300">
                  {plan.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-semibold text-emerald-200">
                        ✓
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#cta"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                    plan.featured
                      ? "bg-emerald-400 text-neutral-950 hover:bg-emerald-300"
                      : "border border-white/20 text-white hover:border-white/40"
                  }`}
                >
                  {plan.featured ? "Start scaling" : "Talk to sales"}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section
          id="visuals"
          className="mx-auto mt-32 max-w-6xl space-y-12 text-neutral-200"
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="space-y-6">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200/80">
                Visual workspace
              </span>
              <h2 className="text-4xl font-semibold text-white sm:text-5xl">
                Designed for clarity, engineered for speed.
              </h2>
              <p className="text-lg text-neutral-300">
                Every module is crafted to shorten ramp time and keep teams in
                flow. Swap between high-level dashboards and granular journeys
                without overwhelming your reps.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="text-3xl font-bold text-white">+38%</div>
                  <div className="mt-2 text-sm text-neutral-400">
                    Increase in qualified pipeline sourced from automations.
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="text-3xl font-bold text-white">12 hrs</div>
                  <div className="mt-2 text-sm text-neutral-400">
                    Average weekly time saved per growth operator.
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {visuals.map((visual) => (
                <figure
                  key={visual.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent p-6"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-black/60">
                    <Image
                      src={visual.src}
                      alt={visual.alt}
                      width={640}
                      height={420}
                      className="w-full"
                    />
                  </div>
                  <figcaption className="mt-6 space-y-2">
                    <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200/60">
                      {visual.title}
                    </div>
                    <p className="text-sm text-neutral-300">
                      {visual.description}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="cta"
          className="mx-auto mt-32 max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-16 sm:px-12"
        >
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div className="space-y-6">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200/80">
                Launch in minutes
              </span>
              <h2 className="text-4xl font-semibold text-white sm:text-5xl">
                Plug into your stack and start orchestrating revenue moments.
              </h2>
              <p className="text-lg text-neutral-300">
                Connect Salesforce, HubSpot, Stripe, and 40+ integrations.
                NexPulse syncs historical data instantly so you can deploy
                intelligent journeys on day one.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200">
                    ✓
                  </span>
                  SOC 2 Type II compliant
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/10 text-sky-200">
                    ✓
                  </span>
                  White-glove onboarding
                </div>
              </div>
            </div>
            <form className="rounded-3xl border border-white/10 bg-black/60 p-8 shadow-[0_30px_80px_-40px_rgba(6,182,212,0.55)] backdrop-blur">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="work-email"
                    className="text-sm font-semibold text-neutral-300"
                  >
                    Work email
                  </label>
                  <input
                    id="work-email"
                    type="email"
                    placeholder="you@company.com"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="team-size"
                    className="text-sm font-semibold text-neutral-300"
                  >
                    Team size
                  </label>
                  <select
                    id="team-size"
                    className="mt-2 w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
                    defaultValue="10-50"
                  >
                    <option value="1-10" className="text-neutral-900">
                      1-10 people
                    </option>
                    <option value="10-50" className="text-neutral-900">
                      10-50 people
                    </option>
                    <option value="50-250" className="text-neutral-900">
                      50-250 people
                    </option>
                    <option value="250+" className="text-neutral-900">
                      250+ people
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="goal"
                    className="text-sm font-semibold text-neutral-300"
                  >
                    Primary goal
                  </label>
                  <textarea
                    id="goal"
                    rows={3}
                    placeholder="Tell us what success looks like for you..."
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-300"
                >
                  Book a strategy session
                </button>
                <p className="text-xs text-neutral-500">
                  We respond within 24 hours. No credit card required.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer
        id="resources"
        className="border-t border-white/5 px-6 py-12 text-sm text-neutral-400 sm:px-10"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-mark.svg"
              alt="NexPulse logo"
              width={28}
              height={28}
            />
            <div>
              <div className="text-base font-semibold text-white">NexPulse</div>
              <div className="text-xs text-neutral-500">
                Intelligent revenue orchestration platform.
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="#" className="transition hover:text-white">
              Product Updates
            </Link>
            <Link href="#" className="transition hover:text-white">
              Security
            </Link>
            <Link href="#" className="transition hover:text-white">
              Integrations
            </Link>
            <Link href="#" className="transition hover:text-white">
              Support
            </Link>
          </div>
          <div className="text-xs text-neutral-500">
            © {new Date().getFullYear()} NexPulse Labs. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
