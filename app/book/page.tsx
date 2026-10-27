"use client";

import React from "react";
import { Button, CheckShieldIcon } from "@/components/ui";
import Link from "next/link";
import { ChevronRight, Lock, Check, Calendar, Clock, Star, ShieldCheck, CreditCard, User, Mail, MapPin, CheckCircle2, ArrowLeft, ArrowRight, Wrench } from "lucide-react";

export default function BookPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-sans flex flex-col antialiased">
      <header className="fixed top-0 left-0 w-full h-20 bg-white z-50 border-b border-border shadow-sm flex justify-between items-center px-6">
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                <CheckShieldIcon className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">
                Service<span className="text-secondary">Hub</span>
              </span>
            </Link>
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-surface-container-low border border-border rounded-full text-sm text-primary cursor-pointer hover:bg-surface-container transition-colors">
              <div className="w-4 h-4 text-secondary shrink-0 flex items-center justify-center">
                <svg className="w-full h-full" width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-primary">Austin, TX</span>
              <div className="w-3.5 h-3.5 text-neutral shrink-0 flex items-center justify-center">
                <svg className="w-full h-full" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-1 p-1 bg-surface-container-low rounded-full border border-border/70">
            <Link href="/search" className="px-4 py-1.5 rounded-full text-xs font-semibold bg-primary text-white shadow-sm transition-colors">Find Pros</Link>
            <a href="#services" className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral hover:text-primary transition-colors">Services</a>
            <a href="#guarantee" className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral hover:text-primary transition-colors">Guarantee</a>
            <a href="#contractors" className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral hover:text-primary transition-colors">For Contractors</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">Post a Job</Button>
            <a href="#signin" className="hidden lg:inline-block text-xs font-medium text-neutral hover:text-primary transition-colors">Sign In</a>
            <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-border shrink-0">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC87MUeOG3rDMkfqFupZ_gaZbBgBieLgWNT3KPF0hhjErKDdUdK9KisALnYwOa6nEdZ6_BKLurTaUxcP4qUlJDElzg2pjJZvQqtWp_0_pC_7VrsoSY02qRgfArbjmrs3Ao4ABQeDYAjKGcYsPozky6Pm074G4LZ6Nl3wlxDoHbXBaLb-VoiVHQQs6MR-poZoWNfaeAflDS0yx4m_ProJj42hkoEQ88jBxsC3l3hH-BVpfG3eD2CFaqsjg" alt="User Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 pt-20">
        <div className="w-full max-w-[1280px] mx-auto px-margin py-8">
          <nav className="flex items-center gap-2 text-sm text-neutral mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services/hvac" className="hover:text-primary transition-colors">HVAC &amp; Climate</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/profile" className="hover:text-primary transition-colors">Elena Rostova</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="font-semibold text-primary">Book</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-bold tracking-wider text-secondary uppercase mb-1">SECURE BOOKING</p>
              <h1 className="text-3xl font-bold text-primary">Book Elena Rostova</h1>
              <p className="text-body-md text-neutral mt-1">Master HVAC Specialist · TX License #TACLA0189</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral">
              <Lock className="w-4 h-4 text-secondary" />
              <span>Stripe escrow protected · $50,000 guarantee</span>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-8 space-y-6">
              {/* Progress Indicator */}
              <div className="bg-white border border-border rounded-2xl p-6">
                <div className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-secondary text-white flex items-center justify-center"><Check className="w-5 h-5" /></div>
                    <span className="text-xs mt-2 text-secondary font-semibold">Service</span>
                  </div>
                  <div className="flex-1 h-0.5 bg-secondary mx-3"></div>
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-secondary text-white flex items-center justify-center font-semibold">2</div>
                    <span className="text-xs mt-2 text-secondary font-semibold">Schedule</span>
                  </div>
                  <div className="flex-1 h-0.5 bg-border mx-3"></div>
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-surface-container-high text-neutral flex items-center justify-center font-semibold">3</div>
                    <span className="text-xs mt-2 text-neutral font-medium">Details</span>
                  </div>
                  <div className="flex-1 h-0.5 bg-border mx-3"></div>
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-surface-container-high text-neutral flex items-center justify-center font-semibold">4</div>
                    <span className="text-xs mt-2 text-neutral font-medium">Confirm</span>
                  </div>
                </div>
              </div>

              {/* Step 1 Completed */}
              <div className="bg-surface-container-low border border-border rounded-2xl p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-0.5">STEP 1 COMPLETED</p>
                    <p className="text-base font-semibold text-primary">Diagnostic Dispatch</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Change</Button>
              </div>

              {/* Step 2 Active */}
              <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                <h2 className="text-headline-sm font-bold text-primary mb-5">Pick a date and time</h2>
                <div className="grid grid-cols-7 gap-2 mb-6">
                  {[
                    { day: "Mon", date: "21", label: "3 SLOTS" },
                    { day: "Tue", date: "22", label: "5 SLOTS" },
                    { day: "Wed", date: "23", label: "FULL" },
                    { day: "Thu", date: "24", label: "2 SLOTS" },
                    { day: "Fri", date: "25", label: "CLOSED" },
                    { day: "Sat", date: "26", label: "FULL" },
                    { day: "Sun", date: "27", label: "CLOSED" },
                  ].map((d) => {
                    const selected = d.day === "Tue";
                    return (
                      <button key={d.day + d.date} className={`flex flex-col items-center justify-center py-2.5 rounded-xl border text-sm font-semibold transition-colors ${selected ? "bg-secondary text-white border-secondary" : "bg-white text-primary border-border hover:border-secondary"}`}>
                        <span className="text-xs font-medium">{d.day}</span>
                        <span className="text-base">{d.date}</span>
                        <span className={`text-[10px] mt-1 ${selected ? "text-white/80" : "text-neutral"}`}>{d.label}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="space-y-4 mb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral mb-2">Morning</p>
                    <div className="grid grid-cols-3 gap-3">
                      {["8:00 AM", "9:30 AM", "11:00 AM"].map((slot) => (
                        <button key={slot} className="py-2.5 rounded-lg border text-sm font-semibold transition-colors bg-white text-primary border-border hover:border-secondary">
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral mb-2">Afternoon</p>
                    <div className="grid grid-cols-3 gap-3">
                      <button className="py-2.5 rounded-lg border text-sm font-semibold transition-colors bg-surface-container-low text-neutral border-border cursor-not-allowed flex flex-col items-center">
                        1:00 PM
                        <span className="text-[10px] font-medium text-neutral">Booked</span>
                      </button>
                      <button className="py-2.5 rounded-lg border text-sm font-semibold transition-colors bg-secondary text-white border-secondary flex flex-col items-center">
                        <span className="flex items-center gap-1">2:30 PM <Check className="w-4 h-4" /></span>
                        <span className="text-[10px] font-medium text-white/80">Selected</span>
                      </button>
                      <button className="py-2.5 rounded-lg border text-sm font-semibold transition-colors bg-white text-primary border-border hover:border-secondary">
                        4:00 PM
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-neutral bg-surface-container-low rounded-lg p-3 mb-6">
                  <Clock className="w-4 h-4 text-secondary" />
                  <span>2-hour window guarantee</span>
                </div>
                <div className="flex justify-end gap-3">
                  <Button variant="outline" size="md"><ArrowLeft className="w-4 h-4 mr-1" /> Back</Button>
                  <Button variant="primary" size="md">Continue to Details <ArrowRight className="w-4 h-4 ml-1" /></Button>
                </div>
              </div>
              {/* Step 3 Details */}
              <div className="bg-white border border-border rounded-2xl p-6">
                <h3 className="text-headline-sm font-bold text-primary mb-5">Your details &amp; payment method</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-xs font-semibold text-neutral mb-1.5">Full Name</label>
                    <input type="text" placeholder="Full Name" className="w-full px-3 py-2.5 rounded-lg border-0 bg-surface-container-low text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral mb-1.5">Email</label>
                    <input type="email" placeholder="Email" className="w-full px-3 py-2.5 rounded-lg border-0 bg-surface-container-low text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral mb-1.5">Phone</label>
                    <input type="tel" placeholder="Phone" className="w-full px-3 py-2.5 rounded-lg border-0 bg-surface-container-low text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral mb-1.5">Address</label>
                    <input type="text" placeholder="Address" className="w-full px-3 py-2.5 rounded-lg border-0 bg-surface-container-low text-sm" />
                  </div>
                </div>
                <div className="border-t border-border pt-5">
                  <p className="text-sm font-semibold text-primary mb-3">Payment method</p>
                  <div className="bg-surface-container-low rounded-xl px-4 py-3 flex items-center gap-3 mb-4">
                    <CreditCard className="w-5 h-5 text-neutral" />
                    <span className="flex-1 text-sm text-primary tracking-widest">•••• •••• •••• 4242</span>
                    <span className="text-xs font-bold text-blue-600 bg-white px-2 py-1 rounded">VISA</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral mb-1.5">Expiry</label>
                      <input type="text" value="08/28" readOnly className="w-full px-3 py-2.5 rounded-lg border-0 bg-surface-container-low text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral mb-1.5">CVC</label>
                      <input type="text" value="•••" readOnly className="w-full px-3 py-2.5 rounded-lg border-0 bg-surface-container-low text-sm" />
                    </div>
                  </div>
                </div>
                <div className="mt-6 border border-dashed border-border rounded-xl p-4 bg-surface-container-low/50">
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral mb-3">FIELD STATES (FOR DESIGN REVIEW)</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input type="email" value="jane@example.com" readOnly className="w-full px-3 py-2.5 rounded-lg border border-emerald-500 bg-white text-sm" />
                      <p className="text-xs font-semibold text-emerald-600 mt-1">✓ VALID</p>
                    </div>
                    <div>
                      <input type="tel" value="123" readOnly className="w-full px-3 py-2.5 rounded-lg border border-red-500 bg-white text-sm" />
                      <p className="text-xs font-semibold text-red-600 mt-1">⚠ ERROR</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Step 4 Review */}
              <div className="bg-white border border-border rounded-2xl p-6">
                <h3 className="text-headline-sm font-bold text-primary mb-5">Review and confirm</h3>
                <div className="bg-surface-container-low rounded-xl p-4 space-y-2 text-sm mb-5">
                  <div className="flex items-center gap-2"><Wrench className="w-4 h-4 text-neutral" /><span className="text-neutral">Service</span><span className="ml-auto font-semibold text-primary">Diagnostic Dispatch</span></div>
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-neutral" /><span className="text-neutral">Date</span><span className="ml-auto font-semibold text-primary">Tue, Nov 22</span></div>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-neutral" /><span className="text-neutral">Address</span><span className="ml-auto font-semibold text-primary">123 Main St, Austin, TX</span></div>
                  <div className="flex items-center gap-2"><User className="w-4 h-4 text-neutral" /><span className="text-neutral">Provider</span><span className="ml-auto font-semibold text-primary">Elena Rostova</span></div>
                  <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-neutral" /><span className="text-neutral">Contact</span><span className="ml-auto font-semibold text-primary">you@email.com</span></div>
                </div>
                <div className="bg-surface-container-low rounded-xl p-4 space-y-2 text-sm mb-5">
                  <div className="flex justify-between"><span className="text-neutral">Service</span><span className="font-semibold text-primary">$95.00</span></div>
                  <div className="flex justify-between"><span className="text-neutral">Reserve</span><span className="font-semibold text-primary">$50.00</span></div>
                  <div className="flex justify-between font-bold border-t border-border pt-2"><span className="text-primary">Total</span><span className="text-primary">$145.00</span></div>
                </div>
                <div className="bg-secondary/10 border border-secondary rounded-xl p-4 flex items-center justify-between mb-5">
                  <span className="font-bold text-secondary">All-in today: $145.00</span>
                  <ShieldCheck className="w-5 h-5 text-secondary" />
                </div>
                <label className="flex items-center gap-2 text-sm text-neutral mb-5">
                  <input type="checkbox" className="accent-secondary w-4 h-4 rounded border-border" />
                  I agree to the terms and conditions
                </label>
                <Button variant="primary" size="lg" fullWidth leftIcon={<Lock className="w-5 h-5" />} rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Confirm &amp; Pay $145.00
                </Button>
              </div>

              {/* Confirmation Preview */}
              <div className="bg-white border border-emerald-200 rounded-2xl p-6 text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral mb-4">CONFIRMATION STATE — AFTER SUCCESSFUL BOOKING (ALTERNATE PREVIEW)</p>
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-1">Booking confirmed</h3>
                <p className="text-sm text-neutral mb-5">Your booking with Elena Rostova is confirmed.</p>
                <div className="flex justify-center gap-3">
                  <Button variant="outline" size="sm">View booking details</Button>
                  <Button variant="primary" size="sm">Add to calendar</Button>
                </div>
              </div>
            </div>
            <aside className="col-span-4 sticky top-24 space-y-6">
              <div className="bg-white border border-border rounded-2xl p-5 flex items-center gap-4">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzezTLQhzSSJ_uiZtw_6iESAJNLtnzNzpjbAetpm1fQfC-2Jz6rBN32AnPNMTZRFkkm9RJeB8uOY8atrxvmMHJ8U2ummO2As0s_WLPAOLcdA9ZEVbtTFsb0SXqXpwKwSW0_XdZl8ndQIkXCBoFrno_37doIcLxva9vGr9Yos4UhkPZvzM0h7QTq5X67EZa8yKxSsF3tj8ozNP9_ebQgX0uEXNe8f9qUQcT7DnU7H1_vwmyorfOYS5crg" className="w-14 h-14 rounded-xl object-cover" alt="Elena Rostova" />
                <div>
                  <p className="font-bold text-primary">Elena Rostova</p>
                  <p className="text-xs text-neutral">Rostova Climate Care</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-semibold text-primary">4.99</span>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-border rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral mb-4">YOUR BOOKING</p>
                <div className="space-y-2">
                  {[
                    ["Service", "Diagnostic & Repair Dispatch"],
                    ["Date", "Tue, Nov 12"],
                    ["Time", "2:30 PM"],
                    ["Address", "123 Main St, Austin, TX"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between items-center bg-surface-container-low rounded-lg px-3 py-2 text-sm">
                      <span className="text-neutral">{k}</span>
                      <span className="font-semibold text-primary text-right">{v}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 border-t border-border pt-4 space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-neutral">Service</span><span className="font-semibold">$95.00</span></div>
                  <div className="flex justify-between"><span className="text-neutral">Reserve</span><span className="font-semibold">$50.00</span></div>
                  <div className="flex justify-between font-bold text-base"><span>Total</span><span>$145.00</span></div>
                </div>
              </div>
              <div className="bg-white border border-border rounded-2xl p-5">
                <ul className="space-y-3 text-sm">
                  {["Licensed & Insured", "Stripe Escrow", "$50,000 Guarantee"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-primary font-medium">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
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
