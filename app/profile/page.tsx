"use client";

import React from "react";
import { supabase, type Provider, type Review } from "@/lib/supabase";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button, CheckShieldIcon } from "@/components/ui";
import { ChevronRight, BadgeCheck, Calendar, MessageSquare, ShieldCheck, Shield, MapPin, Zap, Award, Star, ChevronDown, ArrowRight, CheckCircle2, Lock, Headphones, Clock } from "lucide-react";

export default function ProfilePage() {
  const [provider, setProvider] = useState<Provider | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    (async () => {
      const { data: providerData } = await supabase
        .from("providers")
        .select("*")
        .eq("name", "Elena Rostova")
        .single();
      setProvider(providerData);
      if (providerData?.id) {
        const { data: reviewData } = await supabase
          .from("reviews")
          .select("*")
          .eq("provider_id", providerData.id);
        setReviews(reviewData ?? []);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface font-sans flex flex-col antialiased">
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
      <main className="flex-1 pt-20">
        <div className="w-full max-w-[1280px] mx-auto px-margin py-8">
{/* Breadcrumb */}
<nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-on-surface-variant mb-6">
  <a href="#" className="hover:text-primary transition-colors">Home</a>
  <ChevronRight className="w-3.5 h-3.5 text-outline" />
  <a href="#" className="hover:text-primary transition-colors">Services</a>
  <ChevronRight className="w-3.5 h-3.5 text-outline" />
  <a href="#" className="hover:text-primary transition-colors">HVAC &amp; Climate</a>
  <ChevronRight className="w-3.5 h-3.5 text-outline" />
  <a href="#" className="hover:text-primary transition-colors">Austin Results</a>
  <ChevronRight className="w-3.5 h-3.5 text-outline" />
  <span className="font-semibold text-on-surface">Elena Rostova</span>
</nav>

{/* Profile Hero */}
<section className="bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-sm">
  <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
    <div className="flex items-start gap-5">
      <div className="relative shrink-0">
        <div className="w-40 h-40 rounded-2xl overflow-hidden bg-surface-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={provider?.image_url ?? "https://lh3.googleusercontent.com/aida-public/AB6AXuBzezTLQhzSSJ_uiZtw_6iESAJNLtnzNzpjbAetpm1fQfC-2Jz6rBN32AnPNMTZRFkkm9RJeB8uOY8atrxvmMHJ8U2ummO2As0s_WLPAOLcdA9ZEVbtTFsb0SXqXpwKwSW0_XdZl8ndQIkXCBoFrno_37doIcLxva9vGr9Yos4UhkPZvzM0h7QTq5X67EZa8yKxSsF3tj8ozNP9_ebQgX0uEXNe8f9qUQcT7DnU7H1_vwmyorfOYS5crg"} alt={provider?.name ?? "Elena Rostova"} className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white shadow-sm">
          <BadgeCheck className="w-6 h-6" />
        </div>
      </div>
      <div className="min-w-0">
        <h1 className="text-4xl font-bold text-[#0F172A]">{provider?.name ?? "Elena Rostova"}</h1>
        <p className="text-lg text-on-surface-variant mt-1">{provider?.trade ?? "Master HVAC Specialist"} · {provider?.company ?? "Rostova Climate Care"}</p>
        <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-on-surface-variant">
          <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-secondary" /> {provider?.license ?? "TX Master License #TACLA0189"}</span>
          <span className="text-outline">·</span>
          <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-secondary" /> Serving {provider?.location ?? "Central & West Austin, TX"}</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 mt-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low text-sm text-on-surface"><Zap className="w-3.5 h-3.5 text-secondary" /> Energy Star Partner</span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low text-sm text-on-surface"><Award className="w-3.5 h-3.5 text-secondary" /> Top Pro 2025</span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low text-sm text-on-surface"><BadgeCheck className="w-3.5 h-3.5 text-secondary" /> Identity Verified</span>
        </div>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between w-full lg:w-auto gap-4 shrink-0 pt-4 lg:pt-0">
      <div className="lg:text-right">
        <div className="flex items-center lg:justify-end gap-1.5">
          <Star className="w-7 h-7 text-secondary fill-secondary" />
          <span className="text-3xl font-extrabold text-on-surface">{provider?.rating ?? 4.99}</span>
        </div>
        <p className="text-sm text-on-surface-variant mt-0.5">{provider?.review_count ?? 420} verified client reviews · 8 years on ServiceHub</p>
      </div>
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <Button variant="secondary" size="md" href="/book" leftIcon={<Calendar className="w-4 h-4" />}>Book Instant</Button>
        <Button variant="outline" size="md" leftIcon={<MessageSquare className="w-4 h-4" />}>Message Provider</Button>
      </div>
    </div>
  </div>
</section>

{/* Two-Column Body */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
  {/* Left Column */}
  <div className="lg:col-span-8 flex flex-col space-y-6">

    {/* About */}
    <section className="bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-sm">
      <span className="text-label-caps uppercase text-secondary font-bold tracking-wider block mb-1">ABOUT</span>
      <h2 className="text-headline-md text-on-surface mb-4">Trusted HVAC specialist for Austin&apos;s historic and luxury architecture.</h2>
      <div className="text-body-md text-on-surface-variant space-y-4 leading-relaxed"><p>{provider?.bio ?? ""}</p></div>
      <div className="mt-6 pt-4">
        <span className="text-label-caps text-on-surface-variant uppercase tracking-wider block mb-2">Core Capabilities &amp; Specialties</span>
        <div className="flex flex-wrap gap-2">
          <span className="px-3.5 py-1.5 rounded-full bg-surface-container-low text-label-md text-on-surface">Heat Pumps &amp; Inverters</span>
          <span className="px-3.5 py-1.5 rounded-full bg-surface-container-low text-label-md text-on-surface">Ductless Mini-Splits</span>
          <span className="px-3.5 py-1.5 rounded-full bg-surface-container-low text-label-md text-on-surface">Multi-Zoned Airflow</span>
          <span className="px-3.5 py-1.5 rounded-full bg-surface-container-low text-label-md text-on-surface">Emergency System Triage</span>
          <span className="px-3.5 py-1.5 rounded-full bg-surface-container-low text-label-md text-on-surface">Historic Craftsman Retrofits</span>
          <span className="px-3.5 py-1.5 rounded-full bg-surface-container-low text-label-md text-on-surface">Acoustic Vibration Isolation</span>
        </div>
      </div>
    </section>

    {/* Credentials */}
    <section className="bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-sm">
      <span className="text-label-caps uppercase text-secondary font-bold tracking-wider block mb-1">CREDENTIALS &amp; TRUST</span>
      <h2 className="text-headline-md text-on-surface mb-4">Verified licenses, liability coverage, and audit scores.</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low/70">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 text-secondary"><ShieldCheck className="w-5 h-5" /></div>
          <div><p className="text-headline-sm font-semibold text-on-surface leading-snug">State Licensed Master</p><p className="text-body-sm text-on-surface-variant mt-0.5">TX Master Class A · #TACLA0189</p></div>
        </div>
        <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low/70">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 text-secondary"><Shield className="w-5 h-5" /></div>
          <div><p className="text-headline-sm font-semibold text-on-surface leading-snug">Fully Insured ($2,000,000)</p><p className="text-body-sm text-on-surface-variant mt-0.5">Commercial Liability &amp; Workers&apos; Comp</p></div>
        </div>
        <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low/70">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 text-secondary"><BadgeCheck className="w-5 h-5" /></div>
          <div><p className="text-headline-sm font-semibold text-on-surface leading-snug">Background Checked</p><p className="text-body-sm text-on-surface-variant mt-0.5">Annual Austin Bureau verification passed</p></div>
        </div>
        <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low/70">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 text-secondary"><Zap className="w-5 h-5" /></div>
          <div><p className="text-headline-sm font-semibold text-on-surface leading-snug">Energy Star Partner</p><p className="text-body-sm text-on-surface-variant mt-0.5">Certified SEER2 clean installer since 2019</p></div>
        </div>
        <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low/70">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 text-secondary"><Award className="w-5 h-5" /></div>
          <div><p className="text-headline-sm font-semibold text-on-surface leading-snug">Top Pro 2025</p><p className="text-body-sm text-on-surface-variant mt-0.5">Top 1% contractor reliability in Austin</p></div>
        </div>
        <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low/70">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 text-secondary"><Clock className="w-5 h-5" /></div>
          <div><p className="text-headline-sm font-semibold text-on-surface leading-snug">Rapid Response Window</p><p className="text-body-sm text-on-surface-variant mt-0.5">Average dispatch callback in 12 minutes</p></div>
        </div>
      </div>
    </section>

    {/* Portfolio */}
    <section className="bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-sm">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div>
          <span className="text-label-caps uppercase text-secondary font-bold tracking-wider block mb-1">PORTFOLIO &amp; RECENT WORK</span>
          <h2 className="text-headline-md text-on-surface">Documented architectural climate commissions.</h2>
        </div>
        <a className="hidden sm:inline-flex items-center gap-1 text-label-lg text-secondary font-semibold hover:text-secondary/80 transition-colors" href="#">View all 18 projects <ArrowRight className="w-4 h-4" /></a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-surface-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgcpTp5W7kDn0cfgBZ9o2HZLybE0dd7oRb3m7r3xKizvboLhW44W0Qf-8XN4Ka-4kBZ2jUHwfeNj8A9inlLbZsQuGx4KtUspjjBHRgBHUnPBdr7Ya0nBVH8300bzKHZ6c-BprLDVZaaerYuwvr6IRJnfnjJqCQFGlgkvj6NHBotoeU6ETzqJr-DvFkktvLPnRdWsR2QJi0RgB0Y49qLtzYTUpUN8I4B3adySh7A2JrGkcyZ4NCikvgXQ" alt="Heat Pump Inverter Diagnostics" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface text-label-md font-semibold">Heat Pump Inverter Diagnostics</span>
            <span className="text-on-primary text-body-sm">Westlake</span>
          </div>
        </div>
        <div className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-surface-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc3AkkU_qdTjUqi7LeNvU7IMxEwk85IJjoUhcJ_CDqA8MEYKQ12j7xuSeKLdfwSUpa_xQAF1G7R9Eo0Xi91TIcuXvHy50iRiz4e0EqKpkBMcbgkyB-qLG6PwtqIgf4vykrbH3qPw3EHWFjIx2DWUc-H96sSiMHm-pPMuXwUUaLAeYLQLjnhY5BW3z2Dk7v9yOEEj7DHlrgZCY6EIhv5AzmLkKSvorjEhRGz5fwNv2cmbxtcMWc9-882w" alt="Historic Craftsman Zoning" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface text-label-md font-semibold">Historic Craftsman Zoning</span>
            <span className="text-on-primary text-body-sm">Clarksville</span>
          </div>
        </div>
        <div className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-surface-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgbkK1L5MMnQt5g9VTxmKdH8JIM6dZh7yAYDlPcgaC1sdCZ-XqEHGyXJ6NMgmJ-1GaFZjj_-S_1syXc6FSqx0WeTtSF9__cr_3_db_ed8SXuqyN1pe9EkyebDV6oqx0pv37V7bNlRxbi4oz3alnoi6dHrrQq0auMwMO-ZS7luCq6SDqDX_u0sc9DFD8PHI7stSrt3NPsiPBjhvTGpzh52iFUxHFHdllRxquJZjK7-8HAiVRoDr3Hzz5Q" alt="Smart Comfort Commissioning" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface text-label-md font-semibold">Smart Comfort Commissioning</span>
            <span className="text-on-primary text-body-sm">Hyde Park</span>
          </div>
        </div>
        <div className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-surface-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF1Ne7Oh0nKIwrWMbHCyGkY-fg56-YEmvmSP5rTN4rUP9EzcBNufAHo1FSnUbXQ755SFMvP0nuzuaQ4qTS6l1zBYY6TeRVt0-M3Ob7HXgBg2-UlWL6ZduoVQBj-xoZNYY99dioC4XBdvgCm82LdzIRHCz8cDkQbM0NSs9wKo3T1t5jZJrf-Md5sblDmbffTvN-NY1fINxe7JswkQ_HCkCZYD7iWIPTEry9zDxTmUKNw_zAlOs-XdGnCw" alt="Acoustic Sealed Plenum Retrofit" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface text-label-md font-semibold">Acoustic Sealed Plenum Retrofit</span>
            <span className="text-on-primary text-body-sm">Rollingwood</span>
          </div>
        </div>
      </div>
      <a className="sm:hidden mt-4 inline-flex items-center gap-1 text-label-lg text-secondary font-semibold" href="#">View all 18 completed projects <ArrowRight className="w-4 h-4" /></a>
    </section>

    {/* Reviews */}
    <section className="bg-surface-container-lowest rounded-2xl p-6 lg:p-8 shadow-sm">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div>
          <span className="text-label-caps uppercase text-secondary font-bold tracking-wider block mb-1">REVIEWS &amp; TESTIMONIALS</span>
          <h2 className="text-headline-md text-on-surface">Verified Client Feedback</h2>
        </div>
        <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface text-label-md cursor-pointer hover:bg-surface-container transition-colors">
          <span>Sort: Most Recent</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl bg-surface-container-low/60 mb-6">
        <div className="text-center md:text-left shrink-0">
          <div className="flex items-center justify-center md:justify-start gap-1.5">
            <span className="text-3xl font-extrabold text-on-surface leading-none">{provider?.rating ?? 4.99}</span>
            <Star className="w-8 h-8 text-secondary fill-secondary" />
          </div>
          <p className="text-body-sm text-on-surface-variant mt-1.5">Based on {provider?.review_count ?? 420} verified client jobs</p>
          <div className="flex items-center justify-center md:justify-start gap-1 mt-2 text-secondary">
            <BadgeCheck className="w-4 h-4" />
            <span className="text-label-md font-semibold text-on-surface">100% Verified Service</span>
          </div>
        </div>
        <div className="flex-1 w-full space-y-2">
          <div className="flex items-center gap-2 text-label-md text-on-surface-variant">
            <span className="w-7 text-right">5 ★</span>
            <div className="flex-1 h-2 rounded-full bg-surface-container overflow-hidden"><div className="h-full bg-secondary rounded-full" style={{ width: "96%" }} /></div>
            <span className="w-9 font-semibold text-on-surface text-right">96%</span>
          </div>
          <div className="flex items-center gap-2 text-label-md text-on-surface-variant">
            <span className="w-7 text-right">4 ★</span>
            <div className="flex-1 h-2 rounded-full bg-surface-container overflow-hidden"><div className="h-full bg-secondary rounded-full" style={{ width: "3%" }} /></div>
            <span className="w-9 font-semibold text-on-surface text-right">3%</span>
          </div>
          <div className="flex items-center gap-2 text-label-md text-on-surface-variant">
            <span className="w-7 text-right">3 ★</span>
            <div className="flex-1 h-2 rounded-full bg-surface-container overflow-hidden"><div className="h-full bg-secondary rounded-full" style={{ width: "1%" }} /></div>
            <span className="w-9 font-semibold text-on-surface text-right">1%</span>
          </div>
          <div className="flex items-center gap-2 text-label-md text-on-surface-variant">
            <span className="w-7 text-right">2 ★</span>
            <div className="flex-1 h-2 rounded-full bg-surface-container overflow-hidden"><div className="h-full bg-secondary rounded-full" style={{ width: "0%" }} /></div>
            <span className="w-9 text-right text-outline">0%</span>
          </div>
          <div className="flex items-center gap-2 text-label-md text-on-surface-variant">
            <span className="w-7 text-right">1 ★</span>
            <div className="flex-1 h-2 rounded-full bg-surface-container overflow-hidden"><div className="h-full bg-secondary rounded-full" style={{ width: "0%" }} /></div>
            <span className="w-9 text-right text-outline">0%</span>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {(reviews ?? []).map((review: Review) => (
          <article key={review.id} className="p-6 rounded-xl bg-surface-container-low/40">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-headline-sm font-semibold text-on-surface">{review.author_name}</span>
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  <span className="text-label-md text-secondary">Verified Project</span>
                </div>
                <span className="text-body-sm text-on-surface-variant">{new Date(review.created_at).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</span>
              </div>
              <div className="flex items-center text-secondary">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary" />
                ))}
              </div>
            </div>
            <p className="text-body-md text-on-surface-variant leading-relaxed">&ldquo;{review.content}&rdquo;</p>
          </article>
        ))}
      </div>      <button className="w-full py-3.5 mt-6 rounded-xl bg-surface-container-low text-on-surface text-label-lg font-semibold hover:bg-surface-container transition-colors">Load 10 More Verified Reviews</button>
    </section>
  </div>


  {/* Sidebar */}
  <aside className="lg:col-span-4 sticky top-24 space-y-6">
    {/* Booking Panel */}
    <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-label-caps uppercase text-on-surface font-bold tracking-wider">BOOK COMMISSION</span>
        <span className="inline-flex items-center gap-1 bg-secondary/10 text-secondary text-label-md px-2.5 py-0.5 rounded-full font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          ~12 min reply
        </span>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-extrabold text-on-surface tracking-tight">From ${provider?.hourly_rate ?? 95}</span>
        <span className="text-body-sm text-on-surface-variant">/ hour</span>
      </div>
      <p className="text-body-sm text-on-surface-variant mt-0.5">Free comprehensive on-site quote · Zero callout charge</p>
      <form className="space-y-3 mt-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-label-caps uppercase text-on-surface-variant mb-1">Service Type</label>
          <div className="relative">
            <select className="w-full h-11 px-3.5 rounded-lg bg-surface-container-low text-body-md text-on-surface appearance-none focus:outline-none focus:bg-surface-container cursor-pointer">
              <option>Diagnostic &amp; Repair Dispatch</option>
              <option>Heat Pump Inverter Retrofit</option>
              <option>Historic Home Multi-Zone Air</option>
              <option>Pre-Summer Efficiency Tuning</option>
              <option>Emergency Thermal Triage</option>
            </select>
            <ChevronDown className="w-4 h-4 text-on-surface-variant absolute right-3 top-3.5 pointer-events-none" />
          </div>
        </div>
        <div>
          <label className="block text-label-caps uppercase text-on-surface-variant mb-1">Preferred Date</label>
          <input className="w-full h-11 px-3.5 rounded-lg bg-surface-container-low text-body-md text-on-surface focus:outline-none focus:bg-surface-container" type="date" defaultValue="2026-04-20" />
        </div>
        <div>
          <label className="block text-label-caps uppercase text-on-surface-variant mb-1">Contact Phone</label>
          <input className="w-full h-11 px-3.5 rounded-lg bg-surface-container-low text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container" placeholder="(512) 000-0000" type="tel" />
        </div>
        <div className="pt-2 space-y-2">
          <Button variant="secondary" size="lg" href="/book" fullWidth rightIcon={<ArrowRight className="w-4 h-4" />}>Book Instant Dispatch</Button>
          <Button variant="outline" size="md" fullWidth>Request Written Estimate</Button>
        </div>
      </form>
      <div className="mt-6 pt-4 space-y-2">
        <div className="flex items-center gap-2 text-body-sm text-on-surface-variant">
          <ShieldCheck className="w-4 h-4 text-secondary" />
          <span>Texas Master Verified · $2M Insured</span>
        </div>
        <div className="flex items-center gap-2 text-body-sm text-on-surface-variant">
          <Lock className="w-4 h-4 text-secondary" />
          <span>Protected Stripe Escrow Payment</span>
        </div>
        <div className="flex items-center gap-2 text-body-sm text-on-surface-variant">
          <Shield className="w-4 h-4 text-secondary" />
          <span>Backed by $50,000 ServiceHub Guarantee</span>
        </div>
      </div>
      <p className="text-[12px] text-center text-on-surface-variant mt-4">Funds are held securely in escrow and released only after you sign off on completed work.</p>
    </div>
    {/* Concierge */}
    <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shrink-0">
          <Headphones className="w-5 h-5" />
        </div>
        <div>
          <p className="text-headline-sm font-semibold text-on-surface">Need advice on system sizing?</p>
          <p className="text-body-sm text-on-surface-variant mt-0.5">ServiceHub trade engineers are on standby to review architectural blueprints and quotes.</p>
          <a className="inline-flex items-center gap-1 text-label-md text-secondary font-semibold mt-2 hover:underline" href="#">Chat with an HVAC Advisor <ArrowRight className="w-3.5 h-3.5" /></a>
        </div>
      </div>
    </div>
  </aside>
</div>

{/* Similar Providers */}
<section className="mt-8 mb-6">
  <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-6">
    <div>
      <span className="text-label-caps uppercase text-secondary font-bold tracking-wider block mb-1">SIMILAR PROVIDERS IN AUSTIN</span>
      <h2 className="text-headline-md text-on-surface">More Certified HVAC Specialists</h2>
    </div>
    <a className="inline-flex items-center gap-1 text-label-lg text-secondary hover:text-secondary/80 font-semibold transition-colors" href="#">View all 342 Austin HVAC pros <ArrowRight className="w-4 h-4" /></a>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
    <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <img className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl1Pr1ctWXTNJ7VN9NjN7TL7bDGJDonHzlA6fRDbO3hm1G77sdY6J_I42nTfnmHlsho4wRwldlWkQB5QjrDkK6UyFIWq2SJOVl84Ck8hBS9UlukpOYgEnsfq_s35xwHBQ_Q1RC7tKdLI0GWUA2bB6tRI5E2NEpAuxuvH-HWaBSZf9EdPPZ76mvtY4_XKPdtDQy06OGMRw-w0862FvZMWJQunZQyv7p8wjriKQgytQ1d-_FGNYVGVlvTg" alt="David Chen" />
          <div className="min-w-0">
            <div className="flex items-center gap-1">
              <span className="text-headline-sm font-semibold text-on-surface truncate">David Chen</span>
              <BadgeCheck className="w-4 h-4 text-secondary" />
            </div>
            <p className="text-body-sm text-on-surface-variant truncate">Austin Apex Climate Solutions</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-body-sm text-on-surface-variant mb-3">
          <div className="flex items-center gap-1 text-on-surface font-semibold">
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span>4.96</span>
          </div>
          <span>(310 reviews)</span>
          <span>&bull;</span>
          <span>North & Central</span>
        </div>
        <div className="flex flex-wrap gap-1 mb-4">
          <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface text-[11px]">Commercial & Res</span>
          <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface text-[11px]">24/7 Dispatch</span>
          <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface text-[11px]">HEPA Filtration</span>
        </div>
      </div>
      <div className="border-t border-gray-200 my-4 w-full"></div>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-headline-sm font-bold text-on-surface">From $89</span>
          <span className="text-body-sm text-on-surface-variant">/hr</span>
        </div>
        <a className="px-4 h-9 inline-flex items-center justify-center rounded-lg bg-surface-container-low text-on-surface text-label-md hover:bg-surface-container transition-colors" href="#">View Profile</a>
      </div>
    </div>
    <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <img className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3TEozBBQPioEJ1WUUw2aN2lkgTxX-D8OCvU0CpMcr751lq0o7xmDLlm8dRg7QPoucjoT32EKMphOh3AKGRa5D2KoomEn0vf9mzYrNayMUoQEDDOlMOZjGHOcf434LYbRO-l81hsGSanrAf6DSdMWPb-YBahEXmUNkde6O-7Et10Rh6C191HvsK-oqqkaf_fB-CohbNrIb0DTJNWHZZ4tFcxnFM6tvfJl3W2BliqhEcxrfBJsIwXd9w" alt="Sarah Jenkins" />
          <div className="min-w-0">
            <div className="flex items-center gap-1">
              <span className="text-headline-sm font-semibold text-on-surface truncate">Sarah Jenkins</span>
              <BadgeCheck className="w-4 h-4 text-secondary" />
            </div>
            <p className="text-body-sm text-on-surface-variant truncate">Travis County Thermal Pros</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-body-sm text-on-surface-variant mb-3">
          <div className="flex items-center gap-1 text-on-surface font-semibold">
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span>4.98</span>
          </div>
          <span>(195 reviews)</span>
          <span>&bull;</span>
          <span>South Austin & Oak Hill</span>
        </div>
        <div className="flex flex-wrap gap-1 mb-4">
          <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface text-[11px]">Carrier Certified</span>
          <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface text-[11px]">Eco Refrigerants</span>
          <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface text-[11px]">Same-Day Fix</span>
        </div>
      </div>
      <div className="border-t border-gray-200 my-4 w-full"></div>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-headline-sm font-bold text-on-surface">From $105</span>
          <span className="text-body-sm text-on-surface-variant">/hr</span>
        </div>
        <a className="px-4 h-9 inline-flex items-center justify-center rounded-lg bg-surface-container-low text-on-surface text-label-md hover:bg-surface-container transition-colors" href="#">View Profile</a>
      </div>
    </div>
    <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <img className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4mA3S2dIoXpwEL-0NBAsmNlNSZmO_hXjGKYyTMz0CyS7L79owjYZo498YbutMtb1oySGG6OvJmP_4zhSSBfgfaLy4EV-QF2Cl58UmTswkbBsAphHw9iA4AoKsi4XaFIg-TwpkLqpddR2pVA5m5q2laIWRj43MlR53K-kYUN-yR8MJQsAAbOtCq53_tc3ZXGfwurhHDFUE9ulG5Lxt_uSB1QMw7O2okxI-atBFx_X1O7YDoKI0jkMWmw" alt="Carlos Mendez" />
          <div className="min-w-0">
            <div className="flex items-center gap-1">
              <span className="text-headline-sm font-semibold text-on-surface truncate">Carlos Mendez</span>
              <BadgeCheck className="w-4 h-4 text-secondary" />
            </div>
            <p className="text-body-sm text-on-surface-variant truncate">Barton Springs Air & Heat</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-body-sm text-on-surface-variant mb-3">
          <div className="flex items-center gap-1 text-on-surface font-semibold">
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span>4.94</span>
          </div>
          <span>(260 reviews)</span>
          <span>&bull;</span>
          <span>Downtown & Clarksville</span>
        </div>
        <div className="flex flex-wrap gap-1 mb-4">
          <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface text-[11px]">Dual Master Lic</span>
          <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface text-[11px]">Smart Ecobee</span>
          <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface text-[11px]">Zoned Ducts</span>
        </div>
      </div>
      <div className="border-t border-gray-200 my-4 w-full"></div>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-headline-sm font-bold text-on-surface">From $90</span>
          <span className="text-body-sm text-on-surface-variant">/hr</span>
        </div>
        <a className="px-4 h-9 inline-flex items-center justify-center rounded-lg bg-surface-container-low text-on-surface text-label-md hover:bg-surface-container transition-colors" href="#">View Profile</a>
      </div>
    </div>
  </div>
</section>



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
