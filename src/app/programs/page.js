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
        <span className="inline-flex h-11 w-22 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-white shadow-md shadow-sky-500/10">
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
              Our Programs
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Comprehensive care: From detection to cure.
            </h1>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Our interventions are designed to close the gap in TB services—bringing 
              diagnostics and treatment directly to the people who need them most.
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
              icon={Ambulance}
              title="Mobile X-Ray & Screening"
              desc="We bring geneXpert testing and digital X-ray units directly to rural communities to detect TB cases early and prevent transmission."
            />
            <ProgramCard
              icon={HeartPulse}
              title="DOTS Treatment Support"
              desc="Our community health workers supervise medication intake (Directly Observed Treatment) to ensure every patient completes their 6-month course."
            />
            <ProgramCard
              icon={Home}
              title="Nutrition & Food Security"
              desc="TB medication requires a strong immune system. We provide weekly protein-rich food parcels to patients who cannot afford proper meals."
            />
            <ProgramCard
              icon={Scale}
              title="Community Advocacy"
              desc="We train local volunteers to combat stigma, educate families on prevention, and encourage those with symptoms to get tested without fear."
            />
          </div>
        </Container>
      </section>
    </Motion>
  );
}


