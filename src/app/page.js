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
import { ArrowRight, HeartHandshake, PhoneCall, ShieldCheck } from "lucide-react";

export default function Home() {
  return <HomeClient />;
}

function SoftCard({ icon, title, children }) {
  const Icon = icon;
  return (
    <div className="rounded-3xl bg-white/70 ring-1 ring-black/10 shadow-sm p-6">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-teal-500 text-white shadow-md shadow-sky-500/10">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <div className="text-base font-extrabold tracking-tight text-slate-950">
            {title}
          </div>
          <div className="mt-1 text-sm leading-6 text-slate-700">{children}</div>
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
              src="/nigeria-women-ngo.jpg"
              alt="Care and support for vulnerable adults"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-white/0" />
          </div>

          <Container className="relative py-16 sm:py-20 lg:py-28">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-900 ring-1 ring-black/10"
              >
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Safety · Dignity · Urgent Support
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
              >
                Saving Vulnerable Adults with compassion and urgency.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                className="mt-5 text-lg leading-8 text-white/85"
              >
                <span className="font-semibold text-white">
                  “We protect vulnerable adults from abuse, neglect, and hardship.”
                </span>{" "}
                We provide emergency response, safe shelter, advocacy, and ongoing
                care—so no one is left to suffer in silence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Button href="/donate" variant="primary" className="h-12">
                  <HeartHandshake className="h-4 w-4" aria-hidden="true" />
                  Donate Now
                </Button>
                <Button href="/contact" variant="ghost" className="h-12">
                  Volunteer
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-10 rounded-3xl bg-white/10 ring-1 ring-white/15 backdrop-blur p-5"
              >
                <div className="grid gap-5 sm:grid-cols-3">
                  <div>
                    <div className="text-3xl font-extrabold tracking-tight text-white">
                      <AnimatedCounter value={500} suffix="+" />
                    </div>
                    <div className="mt-1 text-sm text-white/80">
                      Adults supported
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold tracking-tight text-white">
                      <AnimatedCounter value={48} suffix="h" />
                    </div>
                    <div className="mt-1 text-sm text-white/80">
                      Emergency response window
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold tracking-tight text-white">
                      <AnimatedCounter value={120} suffix="+" />
                    </div>
                    <div className="mt-1 text-sm text-white/80">
                      Active volunteers
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
                icon={PhoneCall}
                title="Need help now?"
              >
                If you or someone you know is in immediate danger, call our hotline
                and get urgent support and safety guidance.
                <div className="mt-3">
                  <Link
                    href="/get-help"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950"
                  >
                    Get Help <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </SoftCard>
              <SoftCard icon={ShieldCheck} title="Safe, dignified support">
                We center consent, privacy, and dignity—connecting survivors to
                shelter, medical care, and advocacy, with case-by-case follow‑up.
              </SoftCard>
              <SoftCard icon={HeartHandshake} title="Your action saves lives">
                Donations fund urgent care. Volunteers expand our reach. Every
                action signals: “You are not alone.”
              </SoftCard>
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-16">
          <Container>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                  People needing urgent support
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Each case below represents a real, urgent need. Donate to fund a
                  specific problem and track the progress instantly.
                </p>
              </div>
              <Button href="/cases" variant="subtle">
                View all cases <ArrowRight className="h-4 w-4" />
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
            <div className="rounded-[2.25rem] bg-gradient-to-br from-slate-950 to-slate-900 text-white ring-1 ring-black/10 shadow-xl shadow-slate-900/10 overflow-hidden">
              <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                    Support that feels safe, calm, and immediate.
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/80">
                    Our programs focus on emergency response, safe shelter, and
                    practical recovery support—so vulnerable adults can regain
                    stability with dignity.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button href="/programs" variant="ghost" className="h-12">
                      Explore Programs <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button href="/donate" variant="primary" className="h-12">
                      Donate Now
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/10 ring-1 ring-white/10 p-5">
                    <div className="text-sm font-bold">Shelter & Support</div>
                    <div className="mt-2 text-sm text-white/80">
                      Short‑term safe housing, essentials, and case management.
                    </div>
                  </div>
                  <div className="rounded-3xl bg-white/10 ring-1 ring-white/10 p-5">
                    <div className="text-sm font-bold">Emergency Response</div>
                    <div className="mt-2 text-sm text-white/80">
                      Rapid crisis support, transport, and safety planning.
                    </div>
                  </div>
                  <div className="rounded-3xl bg-white/10 ring-1 ring-white/10 p-5">
                    <div className="text-sm font-bold">Advocacy & Legal Aid</div>
                    <div className="mt-2 text-sm text-white/80">
                      Protecting rights and coordinating protective services.
                    </div>
                  </div>
                  <div className="rounded-3xl bg-white/10 ring-1 ring-white/10 p-5">
                    <div className="text-sm font-bold">Recovery Support</div>
                    <div className="mt-2 text-sm text-white/80">
                      Follow‑ups, referrals, and practical stability support.
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
