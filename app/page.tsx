import React from "react";
import { supabase, type Provider } from "@/lib/supabase";
import Link from "next/link";
import {
  Button,
  Chip,
  SectionHeader,
  ProviderCard,
  MetricBlock,
  CheckShieldIcon,
  StarIcon,
} from "@/components/ui";

export default async function HomePage() {
  const { data: topProviders } = await supabase
    .from("providers")
    .select("*")
    .order("rating", { ascending: false })
    .limit(3);

  return (
    <div className="min-h-screen bg-background text-on-surface font-sans flex flex-col antialiased">
      {/* =====================================================================
          1. HEADER
          Fixed top, white background, 80px height (h-20).
          fixed top-0 w-full h-20 bg-white z-50 flex justify-between items-center px-6
          Left: Logo + Location pill. Center: Nav pills. Right: "Post a Job" + Avatar.
      ====================================================================== */}
      <header className="fixed top-0 left-0 w-full h-20 bg-white z-50 border-b border-border shadow-sm flex justify-between items-center px-6">
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
          {/* Left: Brand Logo + Location Pill */}
          <div className="flex items-center gap-5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                <CheckShieldIcon className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">
                Service<span className="text-secondary">Hub</span>
              </span>
            </Link>

            {/* Location Selector Pill */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-surface-container-low border border-border rounded-full text-sm text-primary cursor-pointer hover:bg-surface-container transition-colors">
              <div className="w-4 h-4 text-secondary shrink-0 flex items-center justify-center">
                <svg
                  className="w-full h-full"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-xs font-semibold text-primary">
                Austin, TX
              </span>
              <div className="w-3.5 h-3.5 text-neutral shrink-0 flex items-center justify-center">
                <svg
                  className="w-full h-full"
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Center: Navigation Pills */}
          <nav className="hidden md:flex items-center gap-1 p-1 bg-surface-container-low rounded-full border border-border/70">
            <Link
              href="/search"
              className="px-4 py-1.5 rounded-full text-xs font-semibold bg-primary text-white shadow-sm transition-colors"
            >
              Find Pros
            </Link>
            <a
              href="#services"
              className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#guarantee"
              className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral hover:text-primary transition-colors"
            >
              Guarantee
            </a>
            <a
              href="#contractors"
              className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral hover:text-primary transition-colors"
            >
              For Contractors
            </a>
          </nav>

          {/* Right: "Post a Job" CTA + Sign In + Profile Avatar */}
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Post a Job
            </Button>
            <a
              href="#signin"
              className="hidden lg:inline-block text-xs font-medium text-neutral hover:text-primary transition-colors"
            >
              Sign In
            </a>
            <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-border shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC87MUeOG3rDMkfqFupZ_gaZbBgBieLgWNT3KPF0hhjErKDdUdK9KisALnYwOa6nEdZ6_BKLurTaUxcP4qUlJDElzg2pjJZvQqtWp_0_pC_7VrsoSY02qRgfArbjmrs3Ao4ABQeDYAjKGcYsPozky6Pm074G4LZ6Nl3wlxDoHbXBaLb-VoiVHQQs6MR-poZoWNfaeAflDS0yx4m_ProJj42hkoEQ88jBxsC3l3hH-BVpfG3eD2CFaqsjg"
                alt="User Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container with 80px Top Padding for Fixed Header */}
      <main className="flex-1 pt-20">
        {/* =====================================================================
            2. HERO SECTION
            Split 7/5 layout.
            Left: Badge, H1 (display-hero), subtext, Search bar, Triage chips.
            Right: Large editorial image with rounded corners (w-full h-auto object-cover rounded-2xl).
            Floating badges: absolute positioned with w-48 and normal text sizes (text-sm/xs).
        ====================================================================== */}
        <section className="max-w-7xl mx-auto px-6 pt-10 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column (7 cols): Typography, Search, Triage */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Verified Network Badge */}
              <div className="mb-4">
                <Chip variant="verified">
                  Austin Verified Residential Network
                </Chip>
              </div>

              {/* H1 Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] lg:leading-[60px] font-bold text-primary tracking-tight max-w-xl">
                Find vetted local pros for any project.
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg text-neutral mt-4 max-w-lg leading-relaxed">
                Austin&apos;s trusted trade specialists, backed by guaranteed
                workmanship, verified licensure, and upfront pricing.
              </p>

              {/* Search Bar Module */}
              <div className="mt-8 p-2 rounded-xl bg-white border border-border shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <div className="flex items-center gap-2.5 px-3 py-2 flex-1">
                  <div className="w-5 h-5 text-neutral shrink-0 flex items-center justify-center">
                    <svg
                      className="w-full h-full"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Try 'HVAC repair', 'Master Electrician', 'Water leak'..."
                    className="w-full bg-transparent text-sm text-primary placeholder-neutral/70 focus:outline-none"
                  />
                </div>

                <div className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-surface-container-low rounded-lg text-primary cursor-pointer hover:bg-surface-container transition-colors">
                  <div className="w-4 h-4 text-secondary shrink-0 flex items-center justify-center">
                    <svg
                      className="w-full h-full"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold whitespace-nowrap">
                    Austin, TX 78701
                  </span>
                </div>

                <Button
                  variant="secondary"
                  size="md"
                  href="/search"
                  className="sm:w-auto w-full shrink-0"
                >
                  Search Pros
                </Button>
              </div>

              {/* Emergency Triage Chips */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral mr-1">
                  Urgent Dispatch:
                </span>
                <a
                  href="#triage"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-border hover:bg-surface-container-low text-primary text-xs font-semibold transition-colors shadow-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-error shrink-0" />
                  <span>Water Leak</span>
                  <span className="text-neutral font-normal">&lt;30m</span>
                </a>
                <a
                  href="#triage"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-border hover:bg-surface-container-low text-primary text-xs font-semibold transition-colors shadow-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                  <span>AC Outage</span>
                  <span className="text-neutral font-normal">Priority</span>
                </a>
                <a
                  href="#triage"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-border hover:bg-surface-container-low text-primary text-xs font-semibold transition-colors shadow-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>Electrical</span>
                  <span className="text-neutral font-normal">Standby</span>
                </a>
              </div>
            </div>

            {/* Right Column (5 cols): Large Editorial Image with Floating Badges */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKV6X1FyN1xFqXHN2W61rITPke8hvUxOPX0Pxtio5S_S86VvnlLeXsmfTp7X2Zu9WSZZ5YgvNYSkDQpahi8MCw6e2Wer1qbvVMQDjc0dSNQ8Svm7eu6l_7BNEcaQf1VxGl1KkhEC4-_HeO2P9avZ8vTaWUEH24SGfr_UTPodNrMklU9ujE8AenSv2DtrHqdKJzt_6xcCFNxhc0xYU-jNw1T17MpSaRy4lSbKJ9_UfwciqeSt6qxi7h7A"
                  alt="Professional contractor consultation"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>

              {/* Floating Shield Badge: Absolute, w-48, normal text-sm/xs */}
              <div className="absolute -bottom-4 left-4 bg-white p-3 rounded-xl shadow-lg border border-border flex items-center gap-2.5 w-48 z-10">
                <div className="w-6 h-6 text-secondary shrink-0 flex items-center justify-center">
                  <CheckShieldIcon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary leading-tight">
                    100% Verified
                  </p>
                  <p className="text-xs text-neutral">
                    Austin Licensed &amp; Bonded
                  </p>
                </div>
              </div>

              {/* Floating Star Badge: Absolute, w-auto, normal text-sm/xs */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md border border-border flex items-center gap-1.5 z-10">
                <div className="w-4 h-4 text-amber-500 shrink-0 flex items-center justify-center">
                  <StarIcon className="w-4 h-4 text-amber-500" />
                </div>
                <span className="text-sm font-bold text-primary">
                  4.96
                </span>
                <span className="text-xs text-neutral">
                  (8.4k reviews)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            3. TRUST STRIP
            Full width, pale teal background.
            "$2,500 Workmanship Guarantee" + 3 trust points.
        ====================================================================== */}
        <section
          id="guarantee"
          className="w-full bg-[#86F2E4]/20 border-y border-[#86F2E4]/40 py-4 px-6 my-6 shadow-sm"
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Left: Guarantee Shield */}
            <div className="flex items-center gap-2.5 shrink-0">
              <div className="w-6 h-6 text-secondary shrink-0 flex items-center justify-center">
                <CheckShieldIcon className="w-6 h-6 text-secondary" />
              </div>
              <span className="text-base sm:text-lg font-bold text-primary tracking-tight">
                $2,500 Workmanship Guarantee
              </span>
            </div>

            {/* Center: 3 Trust Points */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs sm:text-sm text-neutral text-center font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                100% Criminal Background Checked
              </span>
              <span className="hidden md:inline text-neutral/40">•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                Licensed &amp; Verified Insurance ($2M+)
              </span>
              <span className="hidden md:inline text-neutral/40">•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                Transparent Upfront Escrow Pricing
              </span>
            </div>

            {/* Right: Policy Link */}
            <div className="shrink-0">
              <a
                href="#guarantee-guidelines"
                className="text-xs font-semibold text-secondary hover:text-[#0B7C72] inline-flex items-center gap-1 transition-colors"
              >
                <span>Read Policy Guidelines</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================================
            4. POPULAR SERVICES
            <SectionHeader> + 4-column grid of cards.
        ====================================================================== */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-12">
          <SectionHeader
            label="Architectural & Trade Guild"
            title="Popular Services"
            action={
              <a
                href="#all-services"
                className="text-sm font-semibold text-secondary hover:text-[#0B7C72] inline-flex items-center gap-1 transition-colors"
              >
                <span>View All 18 Services</span>
                <span>&rarr;</span>
              </a>
            }
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Card 1: Climate & HVAC */}
            <a
              href="#service-hvac"
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 min-h-[280px] flex flex-col justify-end p-6 border border-border"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVDUji-p8WR02vyLoNJyZIUR7xCYLueyylGRzu21mE1Nm1c8B2jkPvqnrZFyyckZejP-fqRocdlTa5VKetlYLmoXqmKltAsqqaV2VMfqSzJMQ8ZYT9CvwHHEwNuQL_xrPEb76qlEwDaO63M2EzK5YbB6FGILuDQlquNUP5pvAoiASVvAVjF2YVDEp6n9ecPQaTLEunoF1SwM-mjEbzRlYPbbhx5JgtXAuNM84ucjqb9A0WMPKpzqcQew')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
              <div className="relative z-10 flex flex-col text-white">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary text-white text-xs font-semibold self-start mb-2 shadow-sm">
                  31 Pros Active
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Climate &amp; HVAC
                </h3>
                <p className="text-xs text-slate-200 mt-1 line-clamp-2">
                  Heat pump calibration, ductless cooling, and urgent summer diagnostics.
                </p>
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-secondary-fixed font-semibold text-xs">
                  <span>Rates from $89</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </div>
              </div>
            </a>

            {/* Card 2: Master Electrical */}
            <a
              href="#service-electrical"
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-border transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center mb-5 group-hover:bg-tertiary transition-colors">
                  <div className="w-6 h-6 text-tertiary group-hover:text-white shrink-0 flex items-center justify-center">
                    <svg
                      className="w-full h-full"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <span className="inline-block px-2 py-0.5 rounded bg-surface-container-low text-neutral text-[11px] font-bold uppercase mb-2">
                  42 Licensed Pros
                </span>
                <h3 className="text-lg font-bold text-primary">
                  Master Electrical
                </h3>
                <p className="text-xs text-neutral mt-2 leading-relaxed">
                  Whole-home rewiring, modern panel upgrades, EV chargers, and architectural lighting.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-semibold text-secondary">
                  Same-Day Dispatch
                </span>
                <span className="text-neutral group-hover:text-secondary group-hover:translate-x-1 transition-all">
                  &rarr;
                </span>
              </div>
            </a>

            {/* Card 3: Precision Plumbing */}
            <a
              href="#service-plumbing"
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-border transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary transition-colors">
                  <div className="w-6 h-6 text-secondary group-hover:text-white shrink-0 flex items-center justify-center">
                    <svg
                      className="w-full h-full"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                </div>
                <span className="inline-block px-2 py-0.5 rounded bg-surface-container-low text-neutral text-[11px] font-bold uppercase mb-2">
                  58 Licensed Pros
                </span>
                <h3 className="text-lg font-bold text-primary">
                  Precision Plumbing
                </h3>
                <p className="text-xs text-neutral mt-2 leading-relaxed">
                  Acoustic leak detection, tankless water heater retrofits, repiping, and sewer scopes.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-semibold text-secondary">
                  Emergency Triage
                </span>
                <span className="text-neutral group-hover:text-secondary group-hover:translate-x-1 transition-all">
                  &rarr;
                </span>
              </div>
            </a>

            {/* Card 4: Roofing & Structure */}
            <a
              href="#service-roofing"
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-border transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                  <div className="w-6 h-6 text-primary group-hover:text-white shrink-0 flex items-center justify-center">
                    <svg
                      className="w-full h-full"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                </div>
                <span className="inline-block px-2 py-0.5 rounded bg-surface-container-low text-neutral text-[11px] font-bold uppercase mb-2">
                  24 Certified Pros
                </span>
                <h3 className="text-lg font-bold text-primary">
                  Roofing &amp; Framing
                </h3>
                <p className="text-xs text-neutral mt-2 leading-relaxed">
                  Storm damage reports, architectural standing seam metal, tile preservation, and decking.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-semibold text-secondary">
                  Drone Inspection
                </span>
                <span className="text-neutral group-hover:text-secondary group-hover:translate-x-1 transition-all">
                  &rarr;
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* =====================================================================
            5. CREDIBILITY BAND
            Dark navy bg-[#0F172A].
            Left: "Not sure what went wrong?" + scan/describe buttons.
            Right: 2x2 grid of <MetricBlock> components.
        ====================================================================== */}
        <section className="w-full bg-[#0F172A] text-white py-16 px-6 my-10 shadow-xl">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column (6 cols): Diagnostics & Triage */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-secondary/20 text-[#89F5E7] mb-4">
                  <span className="text-[11px] uppercase tracking-wider font-bold">
                    Smart Diagnostics &amp; Triage
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] lg:leading-[48px] font-bold text-white tracking-tight">
                  Not sure what went wrong?
                </h2>
                <p className="text-sm sm:text-base text-slate-300 mt-4 max-w-lg leading-relaxed">
                  Describe the sound, upload a photo of the leak, or tell us what is tripping
                  your panel. Our algorithmic trade dispatch matches the certified specialist
                  in under 2 minutes.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button variant="secondary" size="lg">
                    Scan Issue (Photo Upload)
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white"
                  >
                    Describe Problem
                  </Button>
                </div>

                <div className="mt-6 flex items-center gap-2 text-slate-400 text-xs">
                  <div className="w-4 h-4 text-[#89F5E7] shrink-0 flex items-center justify-center">
                    <svg
                      className="w-full h-full"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>
                    All uploads remain strictly confidential and encrypted under ServiceHub Escrow.
                  </span>
                </div>
              </div>

              {/* Right Column (6 cols): 2x2 Grid of <MetricBlock> */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <MetricBlock
                    value="14,200+"
                    label="Verified Repairs Completed"
                    description="Zero open unresolved claims across Austin metropolitan areas."
                  />
                  <MetricBlock
                    value="4.95 / 5"
                    label="Average Homeowner Rating"
                    description="Audited independently across 8,400+ verified reviews."
                  />
                  <MetricBlock
                    value="< 8 min"
                    label="Specialist Response Time"
                    description="Direct cell and dispatch link established instantly upon booking."
                  />
                  <MetricBlock
                    value="$2,500"
                    label="Bonded Guarantee Included"
                    description="Performance warranty backed on every qualified booking."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            6. TOP RATED PROS
            <SectionHeader> + 3-column grid of <ProviderCard> components.
            Elena Rostova, Mark O'Connell, and Marcus Vance.
        ====================================================================== */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <SectionHeader
            label="Direct Contractor Roster"
            title="Top Rated Pros on Standby"
            description="Verified Austin trade specialists holding real-time availability today"
            action={
              <div className="flex items-center gap-1.5 p-1 bg-surface-container-low rounded-full">
                <Chip variant="filter" selected={true}>
                  All Trades
                </Chip>
                <Chip variant="filter" selected={false}>
                  Electricians
                </Chip>
                <Chip variant="filter" selected={false}>
                  Plumbers
                </Chip>
                <Chip variant="filter" selected={false}>
                  HVAC
                </Chip>
              </div>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {(topProviders ?? []).map((provider: Provider) => (
              <ProviderCard
                key={provider.id}
                name={provider.name}
                trade={`${provider.company} • ${provider.trade}`}
                rating={provider.rating}
                reviewCount={provider.review_count}
                startingPrice={`From $${provider.hourly_rate}/hr`}
                reviewQuote={provider.bio ?? ""}
                imageUrl={provider.image_url}
                bookText="Book Instant"
              />
            ))}
          </div>        </section>

        {/* =====================================================================
            7. EDITORIAL CLOSING
            Split 6/6 layout.
            Left: Interior image + stamp.
            Right: Heading + text + buttons.
        ====================================================================== */}
        <section className="max-w-7xl mx-auto px-6 pt-8 pb-16">
          <div className="bg-surface-container-low rounded-3xl p-8 lg:p-12 border border-border shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column (6 cols): Reassuring Editorial Interior Image */}
              <div className="lg:col-span-6 relative">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-surface-container">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFfzKiQwsG-6BBjHqHlBzb1xFbvQYDvJcnn7Hz-tjcjJEp1TP-l7x6rIn-fkKFizyU3Q4-Ni1P0BuwKRSjFid3Dg6-v-1IdW1qkY5_v9qmEvOv6XnX0P4sX3iQpR9rkLhu1wY37L72r3FPtP-PrUuUVXnCI0EskwLpIqOqYDMrDdUOHZUBv-P6LBU8HCzLEWh9Ai-cyTqab8MmOHqbCKGIrxV4SV7Hzj9DokHvqImCq4jYLy3CWlTdWA"
                    alt="Serene craftsman interior"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Stamp */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-border flex items-center gap-2.5">
                  <div className="w-5 h-5 text-secondary shrink-0 flex items-center justify-center">
                    <CheckShieldIcon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary">
                      Certified Safe Home
                    </p>
                    <p className="text-[11px] text-neutral">
                      Performance Escrow Protected
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column (6 cols): Editorial Copy & Conversion Anchor */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-secondary block mb-1">
                  Peace of Mind Guaranteed
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[38px] lg:leading-[46px] font-bold text-primary tracking-tight">
                  Home care with zero guesswork.
                </h2>
                <p className="text-sm sm:text-base text-neutral mt-4 leading-relaxed">
                  From emergency midnight pipe bursts to scheduled seasonal heat pump
                  maintenance, every single service booked through ServiceHub is backed by
                  strictly vetted trade certifications, clear fixed pricing, and our ironclad
                  $2,500 workmanship promise.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Button variant="primary" size="lg">
                    Explore All Home Services
                  </Button>
                  <a
                    id="contractors"
                    href="#join-contractor"
                    className="text-xs sm:text-sm font-semibold text-secondary hover:text-[#0B7C72] transition-colors inline-flex items-center justify-center gap-1"
                  >
                    <span>Are you a licensed contractor? Join the network</span>
                    <span>&rarr;</span>
                  </a>
                </div>

                {/* Bottom Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-border flex items-center gap-6 text-neutral text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 text-secondary shrink-0 flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <span>Stripe Escrow Payments</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 text-secondary shrink-0 flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <span>TDLR License Monitored</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================================
          8. FOOTER
          Dark band + white footer links.
          All footer icons must be w-5 h-5.
      ====================================================================== */}
      <footer className="w-full bg-white border-t border-border mt-12">
        {/* Top Dark Guarantee Callout Band */}
        <div className="bg-[#0F172A] text-white py-10 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0 text-white">
                <div className="w-5 h-5 text-white shrink-0 flex items-center justify-center">
                  <CheckShieldIcon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <p className="text-base sm:text-lg font-bold text-white">
                  The ServiceHub $50,000 Guarantee
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                  Every verified pro is insured, screened, and backed by our complete performance protection.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 shrink-0">
              <div className="text-right hidden sm:block">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Average Response
                </span>
                <span className="text-lg font-bold text-[#89F5E7]">
                  Under 8 Mins
                </span>
              </div>
              <Button variant="secondary" size="md">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Multi-Column Links Section */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
            {/* Column 1: Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-sm">
                  SH
                </div>
                <span className="text-lg font-bold text-primary tracking-tight">
                  Service<span className="text-secondary">Hub</span>
                </span>
              </div>
              <p className="text-xs text-neutral max-w-xs leading-relaxed">
                The verified marketplace connecting discerning homeowners with premier licensed
                architectural, trade, and general contractors.
              </p>
              <div className="flex items-center gap-2 pt-1 text-primary text-xs font-semibold">
                <div className="w-5 h-5 text-secondary shrink-0 flex items-center justify-center">
                  <CheckShieldIcon className="w-5 h-5 text-secondary" />
                </div>
                <span>Austin Licensed &amp; Accredited</span>
              </div>
            </div>

            {/* Column 2: Popular Trades */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-neutral mb-4">
                Popular Trades
              </p>
              <ul className="space-y-2.5 text-xs text-neutral">
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Electrical Engineering &amp; Rewiring
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Master Plumbing &amp; Hydronics
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Custom Architectural Cabinetry
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    HVAC &amp; Climate Optimization
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Structural Framing &amp; Roofing
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Major Metro Markets */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-neutral mb-4">
                Major Metro Markets
              </p>
              <ul className="space-y-2.5 text-xs text-neutral">
                <li>
                  <a href="#market-austin" className="hover:text-primary transition-colors">
                    Austin &amp; Westlake, TX
                  </a>
                </li>
                <li>
                  <a href="#market-dfw" className="hover:text-primary transition-colors">
                    Dallas - Fort Worth, TX
                  </a>
                </li>
                <li>
                  <a href="#market-houston" className="hover:text-primary transition-colors">
                    Houston Heights &amp; River Oaks, TX
                  </a>
                </li>
                <li>
                  <a href="#market-sa" className="hover:text-primary transition-colors">
                    San Antonio &amp; Hill Country, TX
                  </a>
                </li>
                <li>
                  <a href="#market-denver" className="hover:text-primary transition-colors">
                    Denver &amp; Boulder, CO
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Company & Trust */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-neutral mb-4">
                Company &amp; Trust
              </p>
              <ul className="space-y-2.5 text-xs text-neutral">
                <li>
                  <a href="#guarantee" className="hover:text-primary transition-colors">
                    $50K Trust &amp; Quality Guarantee
                  </a>
                </li>
                <li>
                  <a href="#contractors" className="hover:text-primary transition-colors">
                    Pro Contractor Certification
                  </a>
                </li>
                <li>
                  <a href="#escrow" className="hover:text-primary transition-colors">
                    Transparent Escrow Payments
                  </a>
                </li>
                <li>
                  <a href="#guidelines" className="hover:text-primary transition-colors">
                    Job Posting Guidelines
                  </a>
                </li>
                <li>
                  <a href="#signin" className="hover:text-primary transition-colors">
                    Contractor Portal Login
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Sub-footer: Copyright & Legal */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral">
            <p>© 2026 ServiceHub Technologies Inc. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#licensing" className="hover:text-primary transition-colors">
                Licensing Information
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
