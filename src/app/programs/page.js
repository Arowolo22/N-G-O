"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Motion } from "@/components/Motion";
import { Button } from "@/components/Button";
import { Ambulance, Home, Scale, HeartPulse, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PROGRAMS } from "@/data/programs";

function ProgramCard({ icon: Icon, title, desc, slug }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link 
        href={`/programs/${slug}`}
        className="group block rounded-3xl bg-white/70 ring-1 ring-black/10 shadow-sm p-6 transition-all hover:bg-white hover:shadow-md hover:ring-brand/30"
      >
        <div className="flex items-start gap-3">
          <span className="inline-flex h-11 w-22 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-white shadow-md shadow-sky-500/10 group-hover:scale-105 transition-transform">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <div className="text-base font-extrabold tracking-tight text-slate-950 flex items-center gap-2">
              {title}
              <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand" />
            </div>
            <div className="mt-2 text-sm leading-7 text-slate-700">{desc}</div>
          </div>
        </div>
      </Link>
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
            {PROGRAMS.map((program) => (
              <ProgramCard
                key={program.slug}
                slug={program.slug}
                icon={program.icon}
                title={program.title}
                desc={program.desc}
              />
            ))}
          </div>
        </Container>
      </section>
    </Motion>
  );
}


