import React from "react";
import { Button, DenseProviderCard, CheckShieldIcon } from "@/components/ui";
import { ChevronRight, ChevronUp, ChevronDown, Star, ShieldCheck, BadgeCheck, FilterX, MapPin, X, Search } from "lucide-react";

const providers = [
  {
    name: "Elena Rostova",
    trade: "Rostova Climate Care · Master HVAC #TACLA0189",
    rating: 4.99,
    reviewCount: 420,
    location: "Central & West Austin",
    quote:
      "Diagnosed our dual heat pump compressor failure immediately and completed repairs same afternoon.",
    tags: ["Heat Pumps", "Ductless Mini-Splits", "Emergency Triage"],
    rate: "$95/hr",
    reply: "~12 min reply",
    portraitUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBzezTLQhzSSJ_uiZtw_6iESAJNLtnzNzpjbAetpm1fQfC-2Jz6rBN32AnPNMTZRFkkm9RJeB8uOY8atrxvmMHJ8U2ummO2As0s_WLPAOLcdA9ZEVbtTFsb0SXqXpwKwSW0_XdZl8ndQIkXCBoFrno_37doIcLxva9vGr9Yos4UhkPZvzM0h7QTq5X67EZa8yKxSsF3tj8ozNP9_ebQgX0uEXNe8f9qUQcT7DnU7H1_vwmyorfOYS5crg",
  },
  {
    name: "Austin Apex Climate Solutions",
    trade: "David Chen · Energy Auditor & Class A Contractor",
    rating: 4.96,
    reviewCount: 310,
    location: "North & Central Austin",
    quote:
      "Calculated airflow dynamics and lowered our energy bill by 35% with smart zoned dampening.",
    tags: ["Commercial & Res", "24/7 Dispatch", "Air Filtration"],
    rate: "$89/hr",
    reply: "~9 min reply",
    portraitUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAX65OI9ky5BNxA08kUC5UTflkvUiVrzHu9ri3nWcRo9_wR3GmzYuQwhzCynKjjA8T38ACXXL_gLz4ZGTUE9eoDy7c6fpENJ5ITGZlD1s7UiQtrEXeHO7ZqERjbJH9meBKmolgpiPo5v0ScJ2OK9lOu9u7ruiVsABlTzRXGNfuFoxUljEUD5bdJeEJZL3kb874q-obFd4054LxoMjKaaC7VK2ymvQdRuMpKH0-LS877Wj42rQiGQQaPdA",
  },
  {
    name: "Travis County Thermal Pros",
    trade: "Sarah Jenkins · Master Hydronics & HVAC Lead",
    rating: 4.98,
    reviewCount: 195,
    location: "South Austin & Oak Hill",
    quote:
      "Replaced blown condenser coils during a 105° heatwave on a Sunday without upcharging.",
    tags: ["Carrier Certified", "Eco Refrigerants", "Same-Day Fix"],
    rate: "$105/hr",
    reply: "~15 min reply",
    portraitUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTF-enUJkKd0URMQBD-HLV8f4QqfIjNt80PI2nLR_R9Gg3QOmMWzTmrMMfnbAjEfKdbFSqka79Pk9RYTsuUb6cppdH0NC12FAsV-KLDmxRZ_wZONTmTbFtWNULPgnA92RyXzkK1AwXnowBsYhUDr_aQcra0xmsKtxfUbaHRqFN3TvxYAd1YtMXiWikcS7k_LpQBlDPSFPMykBDzn_V8ol4lmDYltFx5SyYPhwwCVzvv6xfF7JM-PX0pQ",
  },
  {
    name: "Barton Springs Air & Heating",
    trade: "Carlos Mendez · Dual Licensed Master Electrician & HVAC",
    rating: 4.94,
    reviewCount: 260,
    location: "Downtown & Clarksville",
    quote:
      "Flawlessly retrofitted multi-zone smart climate control into our 1920s historic bungalow.",
    tags: ["Smart Controls", "Zoned Systems", "Historic Homes"],
    rate: "$90/hr",
    reply: "~7 min reply",
    portraitUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMNrtT4WwoE0fzQUMZiETP5RcmyXqFe1Ze-BzDdQ2vXXX7oZdFtasuLTFYfhVmvj4QxSz1yVAjcPBm9vqXcTw0paN6i5NBHSUx3kHLzFFJSO6WqEW4ZQc7IXS55_t3DzJFYwHEYddLp4AZ9EzjNYk3ohAxX3fGd5_ud_PEWwcDm4Gxj9lTEI9Io1kDhcIbukuOQisBoef0wWlzvV2JEEz7-J5h-UwYv_8X235CinKht0gbTTpQTohYww",
  },
  {
    name: "Lone Star Precision Cooling",
    trade: "Marcus Vance Team · Factory Certified Trane Specialist",
    rating: 4.95,
    reviewCount: 180,
    location: "East Austin & Mueller",
    quote:
      "Pinned down an elusive micro-leak in the attic evaporator coil that two other companies missed.",
    tags: ["A/C Tune-Up", "Coil Replacement", "Leak Detection"],
    rate: "$85/hr",
    reply: "~10 min reply",
    portraitUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBEPDuiETmV07QJS0bbUKAzqjQV_HJV1npVa6wd_EVpI3XcwEotGKGxa5h7neNvTx_ILs_1JO6975_uBtRKVFoGOcdeODCreSynLlE0cyv2MWHp40Z26PSaN_zEp6_kycx4mKv-_P4pYUDtVYqmGayy5n0G6JliR9mf1_QpG_yJDjm-8zD4S6L0pNlDe3pJ_rmosTna0yaqkaXCS-te5YQN-56dz8l41yWm3gNFKMuwii0sH4hfIv-BFQ",
  },
  {
    name: "Green Valley Climate Guild",
    trade: "Rachel Vance · Geothermal & High-Efficiency Fellow",
    rating: 4.97,
    reviewCount: 142,
    location: "Westlake & Rollingwood",
    quote:
      "Superb craftsmanship on our ultra-quiet inverter installation. Cleanest wiring job I have seen.",
    tags: ["Energy Star Pro", "Geothermal", "Air Scrubber Plus"],
    rate: "$110/hr",
    reply: "~14 min reply",
    portraitUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWG9BDlWUL1gaWAicce5wRIBpy2M1yWKwQP9BH9JpE3aNIfbakGJMyAPR4M_JAMBZuzZV9XUv7slUdbMXy1mK3EPf7-s79fZtDcb0XttbgXDY9qrCnYL6VtHHrF4XgtdzAvMaoysa7K0s_HPCyWFp3RlVZTOjiAiG52_Efsnw2ACvYxB2LPTGER4OjcJbXg0DD7j0udMQEI7sQDVb0o9-UTXPQuX2BRiBBIxhTvSZL2Cyjxp92ovEQNg",
  },
];

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-sans flex flex-col antialiased">
      {/* Header (copied exactly from homepage) */}
      <header className="fixed top-0 left-0 w-full h-20 bg-white z-50 border-b border-border shadow-sm flex justify-between items-center px-6">
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
          {/* Left: Brand Logo + Location Pill */}
          <div className="flex items-center gap-5">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                <CheckShieldIcon className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">
                Service<span className="text-secondary">Hub</span>
              </span>
            </a>
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
            <a
              href="#"
              className="px-4 py-1.5 rounded-full text-xs font-semibold bg-primary text-white shadow-sm transition-colors"
            >
              Find Pros
            </a>
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
            <Button variant="outline" size="sm">Post a Job</Button>
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

      <main className="flex-1 pt-20">
        <div className="max-w-[1280px] w-full mx-auto px-10 pb-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-gray-500 mb-4">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <a href="#" className="hover:text-primary transition-colors">Services</a>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <a href="#" className="hover:text-primary transition-colors">HVAC &amp; Climate</a>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="font-semibold text-gray-900">Results</span>
          </nav>

          {/* Page Header Zone */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-tight">
                HVAC Repair in Austin, TX
              </h1>
              <p className="text-body-md text-on-surface-variant mt-2">
                128 verified specialists available today, backed by the
                ServiceHub $50,000 guarantee.
              </p>
            </div>
            <div className="flex flex-col sm:items-end gap-2 shrink-0">
              <div className="flex items-center gap-1 bg-surface-container-lowest p-1 rounded-xl shadow-sm">
                <div className="flex items-center gap-1 px-2">
                  <Search className="w-4 h-4 text-on-surface-variant" />
                  <input
                    aria-label="Search term"
                    className="bg-transparent text-on-surface font-body-md focus:outline-none w-48 sm:w-56"
                    type="text"
                    defaultValue="HVAC repair"
                  />
                </div>
                <Button variant="secondary" size="sm">Update Search</Button>
              </div>
              <div className="flex items-center gap-1 text-secondary font-label-md cursor-pointer hover:underline pr-1">
                <MapPin className="w-4 h-4 text-teal-600 inline mr-1" />
                <span>Austin, TX 78701 · Change location</span>
              </div>
            </div>
          </div>

          {/* Two-Column Body Grid */}
          <div className="grid grid-cols-12 gap-6 items-start pt-2">
            {/* Left Filter Sidebar */}
            <aside className="col-span-12 lg:col-span-3 sticky top-24 space-y-6">
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm space-y-6">
                {/* Category */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-on-surface-variant font-label-md uppercase tracking-wider">
                    <span>Category</span>
                    <ChevronUp className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 pt-1">
                    <label className="flex items-center justify-between cursor-pointer py-1 px-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                        <span className="font-semibold">HVAC &amp; Climate</span>
                      </span>
                      <span className="text-on-surface-variant text-[11px]">
                        128
                      </span>
                    </label>
                    <label className="flex items-center justify-between cursor-pointer py-1 px-1.5 rounded-lg hover:bg-surface-container-low/50 text-on-surface-variant font-label-md transition-colors">
                      <span>Electrical</span>
                      <span className="text-[11px]">94</span>
                    </label>
                    <label className="flex items-center justify-between cursor-pointer py-1 px-1.5 rounded-lg hover:bg-surface-container-low/50 text-on-surface-variant font-label-md transition-colors">
                      <span>Plumbing</span>
                      <span className="text-[11px]">82</span>
                    </label>
                    <label className="flex items-center justify-between cursor-pointer py-1 px-1.5 rounded-lg hover:bg-surface-container-low/50 text-on-surface-variant font-label-md transition-colors">
                      <span>Roofing &amp; Framing</span>
                      <span className="text-[11px]">46</span>
                    </label>
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-2">
                  <div className="text-on-surface-variant font-label-md uppercase tracking-wider">
                    Price Range
                  </div>
                  <div className="pt-2 px-1">
                <div className="relative w-full h-[1.5px] bg-surface rounded-full overflow-hidden">
                  <div className="absolute left-1/4 right-1/4 h-full bg-[#0D9488]" />
                </div>
                <input
                  type="range"
                  min={0}
                  max={500}
                  className="w-full accent-[#0D9488] mt-2 h-1"
                />
                    <div className="flex items-center justify-between mt-2 text-on-surface font-label-md">
                      <span className="bg-surface-container-low px-2 py-0.5 rounded-lg">
                        $50/hr
                      </span>
                      <span className="text-on-surface-variant font-normal">to</span>
                      <span className="bg-surface-container-low px-2 py-0.5 rounded-lg">
                        $200+/hr
                      </span>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="space-y-2">
                  <div className="text-on-surface-variant font-label-md uppercase tracking-wider">
                    Availability
                  </div>
                  <div className="space-y-1 pt-1">
                    {[
                      ["Same-day service", 24, true],
                      ["Within 48 hours", 68, false],
                      ["This week", 112, false],
                    ].map(([label, count, checked]) => (
                      <label
                        key={String(label)}
                        className="flex items-center justify-between cursor-pointer text-on-surface font-body-sm text-body-sm py-0.5"
                      >
                        <span className="flex items-center gap-1">
                          <input
                            type="checkbox"
                            defaultChecked={checked as boolean}
                            className="w-4 h-4 rounded text-secondary accent-secondary focus:ring-0 cursor-pointer"
                          />
                          <span>{label}</span>
                        </span>
                        <span className="text-on-surface-variant text-[11px] font-mono">
                          {count}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className="space-y-2">
                  <div className="text-on-surface-variant font-label-md uppercase tracking-wider">
                    Rating
                  </div>
                  <div className="space-y-1 pt-1">
                    {[
                      ["4.5 & up", 84, true],
                      ["4.0 & up", 120, false],
                      ["3.0 & up", 128, false],
                    ].map(([label, count, checked]) => (
                      <label
                        key={String(label)}
                        className="flex items-center justify-between cursor-pointer text-on-surface font-body-sm text-body-sm py-0.5"
                      >
                        <span className="flex items-center gap-1">
                          <input
                            type="checkbox"
                            defaultChecked={checked as boolean}
                            className="w-4 h-4 rounded text-secondary accent-secondary focus:ring-0 cursor-pointer"
                          />
                          <span className="flex items-center gap-0.5">
                            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                            <span className="font-medium">{label}</span>
                          </span>
                        </span>
                        <span className="text-on-surface-variant text-[11px] font-mono">
                          {count}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Verification */}
                <div className="space-y-2">
                  <div className="text-on-surface-variant font-label-md uppercase tracking-wider">
                    Verification
                  </div>
                  <div className="space-y-1 pt-1">
                    {[
                      ["verified", "State Licensed", 128, true],
                      ["shield", "Insured ($2M+)", 114, true],
                      ["badge", "Background Checked", 128, false],
                    ].map(([icon, label, count, checked]) => (
                      <label
                        key={String(label)}
                        className="flex items-center justify-between cursor-pointer text-on-surface font-body-sm text-body-sm py-0.5"
                      >
                        <span className="flex items-center gap-1">
                          <input
                            type="checkbox"
                            defaultChecked={checked as boolean}
                            className="w-4 h-4 rounded text-secondary accent-secondary focus:ring-0 cursor-pointer"
                          />
                          <span className="flex items-center gap-1">
                            {(() => {
                              const Ic = icon === "badge" ? BadgeCheck : ShieldCheck;
                              return <Ic className="w-4 h-4 text-teal-600" />;
                            })()}
                            <span>{label}</span>
                          </span>
                        </span>
                        <span className="text-on-surface-variant text-[11px] font-mono">
                          {count}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Response Time */}
                <div className="space-y-2">
                  <div className="text-on-surface-variant font-label-md uppercase tracking-wider">
                    Response Time
                  </div>
                  <div className="space-y-1 pt-1">
                    {[
                      ["Under 15 minutes", true],
                      ["Under 1 hour", false],
                      ["Any response time", false],
                    ].map(([label, checked]) => (
                      <label
                        key={String(label)}
                        className={`flex items-center gap-1 cursor-pointer text-sm ${checked ? "text-on-surface" : "text-on-surface-variant"}`}
                      >
                        <input
                          type="radio"
                          name="resp"
                          defaultChecked={checked as boolean}
                          className="w-3.5 h-3.5 text-secondary accent-secondary cursor-pointer"
                        />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  className="w-full pt-2 text-secondary font-label-md font-semibold hover:underline text-center cursor-pointer transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            </aside>

            {/* Right Results Zone */}
            <main className="col-span-12 lg:col-span-9 space-y-6">
              {/* Top Utility Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-surface-container-lowest p-4 rounded-xl shadow-sm">
                <div className="text-body-md text-on-surface-variant">
                  Showing{" "}
                  <span className="font-bold text-on-surface">128</span> of 342 HVAC
                  professionals in Austin
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    Sort by:
                  </span>
                  <button className="bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors">
                    Recommended
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Active Filter Chips */}
              <div className="flex flex-wrap items-center gap-2">
                {["Trade: HVAC", "Same-day Service", "4.5+ Rating", "Licensed & Insured"].map(
                  (f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-1.5 bg-secondary-container/40 text-on-secondary-container px-3 py-1 rounded-full font-label-md text-label-md"
                    >
                      {f}
                      <X className="w-3 h-3 cursor-pointer" />
                    </span>
                  )
                )}
                <button className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md px-2 py-1 transition-colors">
                  Clear all
                </button>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {providers.map((p) => (
                  <DenseProviderCard
                    key={p.name}
                    name={p.name}
                    trade={p.trade}
                    rating={p.rating}
                    reviewCount={p.reviewCount}
                    portraitUrl={p.portraitUrl}
                    quote={p.quote}
                    rate={p.rate}
                    tags={p.tags}
                    viewProfileText="Profile"
                    bookText="Book Instant"
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="space-y-2 pt-6 text-center">
                <p className="text-body-sm text-on-surface-variant">
                  You&apos;ve seen{" "}
                  <span className="font-semibold text-on-surface">6</span> of 128 verified
                  Austin specialists
                </p>
                <button className="w-full py-3.5 bg-surface-container-lowest hover:bg-surface-container-low text-on-surface font-label-lg font-semibold rounded-xl shadow-sm transition-colors">
                  Load More Results
                </button>
              </div>

              {/* Alternate Empty State */}
              <div className="pt-10 pb-10">
                <div className="flex items-center justify-center gap-4 my-6">
                  <span className="h-[1px] flex-1 bg-surface-container" />
                  <span className="font-label-md font-semibold text-on-surface-variant uppercase tracking-widest">
                    Empty state — no results match (alternate preview)
                  </span>
                  <span className="h-[1px] flex-1 bg-surface-container" />
                </div>
                <div className="max-w-2xl mx-auto p-10 bg-surface-container-lowest rounded-xl text-center shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-surface-container-low text-on-surface-variant flex items-center justify-center mx-auto mb-4 shadow-inner">
                    <FilterX className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                  </div>
                  <h2 className="text-headline-sm font-bold text-on-surface">
                    No HVAC pros match these filters
                  </h2>
                  <p className="text-body-md text-on-surface-variant mt-2 max-w-md mx-auto">
                    We couldn&apos;t find any verified specialists in Austin matching all
                    selected criteria. Try removing some filters or expanding your response
                    time.
                  </p>
                  <div className="flex items-center justify-center gap-4 pt-6">
                    <Button variant="secondary" size="md">
                      Clear all filters
                    </Button>
                    <button className="text-label-lg text-on-surface hover:text-secondary transition-colors px-4 py-2.5">
                      Adjust your search
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* Closing Trust Band (full-bleed deep dark) - removed per request */}
      </main>

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