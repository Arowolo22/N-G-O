"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Motion } from "@/components/Motion";
import { Button } from "@/components/Button";
import { Ambulance, Home, Scale, HeartPulse, ArrowRight } from "lucide-react";

function ProgramCard({ icon: Icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl bg-white/70 ring-1 ring-black/10 shadow-sm p-6"
    >
      <div className="flex items-start gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-teal-500 text-white shadow-md shadow-sky-500/10">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <div className="text-base font-extrabold tracking-tight text-slate-950">
            {title}
          </div>
          <div className="mt-2 text-sm leading-7 text-slate-700">{desc}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProgramsPage() {
  return (
    <Motion>
      <section className="py-12 sm:py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-slate-900 ring-1 ring-black/10">
              What we do
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Programs built around safety, dignity, and urgent support.
            </h1>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Our services are designed for real-life emergencies—fast response,
              protection, and practical recovery.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/donate" variant="primary" className="h-12">
                Donate Now
              </Button>
              <Button href="/cases" variant="subtle" className="h-12">
                View active cases <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <ProgramCard
              icon={Home}
              title="Shelter & Support"
              desc="Short‑term shelter, essentials, and case management to protect survivors in crisis and stabilize their situation."
            />
            <ProgramCard
              icon={Ambulance}
              title="Emergency Response"
              desc="Rapid crisis support, safe transport, and coordinated response when minutes matter."
            />
            <ProgramCard
              icon={Scale}
              title="Advocacy & Legal Aid"
              desc="Rights protection, legal referrals, and advocacy to prevent further harm and ensure accountability."
            />
            <ProgramCard
              icon={HeartPulse}
              title="Health & Recovery Support"
              desc="Medical referrals, rehabilitation support, and follow‑ups to help survivors regain stability and dignity."
            />
          </div>
        </Container>
      </section>
    </Motion>
  );
}


