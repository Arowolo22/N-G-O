/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Motion } from "@/components/Motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CaseCard } from "@/components/CaseCard";
import { CASES } from "@/lib/cases";
import { ArrowRight, HeartHandshake, Activity, Users, ShieldCheck, Stethoscope } from "lucide-react";

export default function Home() {
  return <HomeClient />;
}

function SoftCard({ icon, title, children }) {
  const Icon = icon;
  return (
    <div className="rounded-3xl bg-white/70 ring-1 ring-black/10 shadow-sm p-6">
      <div className="flex flex-col items-start gap-4">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-white shadow-md shadow-brand/10">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <div className="text-lg font-extrabold tracking-tight text-slate-950">
            {title}
          </div>
          <div className="mt-2 text-sm leading-6 text-slate-700">{children}</div>
        </div>
      </div>
    </div>
  );
}

function HomeClient() {
  const featured = CASES.filter((c) => c.id !== "ngo-general").slice(0, 3);

  return (
    <Motion>
      <div className="relative overflow-hidden">
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="/tuber-hero.jpg"
              alt="Medical support for TB patients"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-white/0" />
          </div>

          <Container className="relative py-16 sm:py-20 lg:py-28">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex  items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-black ring-1 ring-black/10"
              >
                <Activity className="h-4 w-4" aria-hidden="true" />
                Testing · Treatment · Cure
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
              >
                Ending Tuberculosis, <br /> One Life at a Time.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                className="mt-5 text-lg leading-8 text-white/90"
              >
                <span className="font-semibold text-white">
                  “We are dedicated to a TB-free future.”
                </span>{" "}
                Arowolo Health Foundation provides free screening, medical treatment, and nutritional support to the most vulnerable communities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Button href="/donate" variant="primary" className="h-12 bg-brand hover:bg-brand/90 text-white border-none">
                  <HeartHandshake className="h-4 w-4" aria-hidden="true" />
                  Donate to Save Lives
                </Button>
                <Button href="/contact" variant="ghost" className="h-12 text-white hover:bg-white/10 ring-white/30">
                  Get Screened
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-10 rounded-3xl bg-black/30 ring-1 ring-white/15 backdrop-blur-md p-5"
              >
                <div className="grid grid-cols-3 gap-2 text-sm sm:gap-8">
                  <div>
                    <div className="text-3xl font-extrabold tracking-tight text-white">
                      <AnimatedCounter value={1200} suffix="+" />
                    </div>
                    <div className="mt-1 text-sm text-white/80">
                      Patients Screened
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold tracking-tight text-white">
                      <AnimatedCounter value={450} suffix="+" />
                    </div>
                    <div className="mt-1 text-sm text-white/80">
                      Active Treatments
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold tracking-tight text-white">
                      <AnimatedCounter value={98} suffix="%" />
                    </div>
                    <div className="mt-1 text-sm text-white/80">
                      Treatment Success
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        <section className="relative mt-15 pb-14 sm:pb-16">
          <Container>
            <div className="grid gap-6 lg:grid-cols-3">
              <SoftCard
                icon={Stethoscope}
                title="Early Detection"
                
              >
                We bring mobile X-ray and GeneXpert testing units directly to remote and underserved communities to catch TB early.
                <div className="mt-3">
                  <Link
                    href="/get-help"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
                  >
                    Request Screening <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </SoftCard>
              <SoftCard icon={Activity} title="Complete Treatment">
                We supervise and support patients through the full 6-month DOTS regimen, ensuring they take every dose to achieve a full cure.
              </SoftCard>
              <SoftCard icon={Users} title="Community Awareness">
                Our volunteers educate families about prevention, reducing stigma and ensuring that symptoms are recognized immediately.
              </SoftCard>
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-16">
          <Container>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                  Support Our TB Elimination Projects
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Every donation directly funds medication, nutritional packs, and screening drives. Choose a cause below to make an impact.
                </p>
              </div>
              <Button href="/cases" variant="subtle">
                View all projects <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {featured.map((c) => (
                <CaseCard key={c.id} c={c} />
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-16">
          <Container>
            <div className="rounded-[2.25rem] bg-gradient-to-br from-slate-900 to-slate-800 text-white ring-1 ring-black/10 shadow-xl shadow-slate-900/10 overflow-hidden">
              <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                    A World Free of Tuberculosis.
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/80">
                    With your help, we can identify hidden cases, prevent transmission, and save lives. Join Arowolo Health Foundation today.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button href="/programs" variant="ghost" className="h-12">
                      Our Strategy <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button href="/donate" variant="primary" className="h-12 bg-white text-slate-900 hover:bg-white/90">
                      Donate Now
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/10 ring-1 ring-white/10 p-5">
                    <div className="text-sm font-bold text-brand-2">DOTS Strategy</div>
                    <div className="mt-2 text-sm text-white/80">
                      Directly Observed Treatment, Short-course (DOTS) is the global standard we strictly follow.
                    </div>
                  </div>
                  <div className="rounded-3xl bg-white/10 ring-1 ring-white/10 p-5">
                    <div className="text-sm font-bold text-accent">Nutrition & Care</div>
                    <div className="mt-2 text-sm text-white/80">
                      Providing high-protein food to ensure the medication is effective and patients recover strength.
                    </div>
                  </div>
                  <div className="rounded-3xl bg-white/10 ring-1 ring-white/10 p-5">
                    <div className="text-sm font-bold text-sky-400">Patient Recovery</div>
                    <div className="mt-2 text-sm text-white/80">
                      Monitoring progress until the patient is certified TB-free by a medical doctor.
                    </div>
                  </div>
                  <div className="rounded-3xl bg-white/10 ring-1 ring-white/10 p-5">
                    <div className="text-sm font-bold text-teal-400">Prevention</div>
                    <div className="mt-2 text-sm text-white/80">
                      Contact tracing and preventive therapy for family members of active patients.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </Motion>
  );
}
