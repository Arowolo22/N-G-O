"use client";

import { Container } from "@/components/Container";
import { Motion } from "@/components/Motion";
import { CaseCard } from "@/components/CaseCard";
import { CASES } from "@/lib/cases";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";

export default function CasesPage() {
  const peopleCases = CASES.filter((c) => c.id !== "ngo-general");
  return (
    <Motion>
      <section className="py-12 sm:py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-slate-900 ring-1 ring-black/10">
              Active support cases
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Fund a specific problem. See the impact immediately.
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Each case has a clear goal and live donation balance (demo mode uses
              your browser storage). Choose someone to support today.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/donate" variant="primary" className="h-12">
                Donate Now
              </Button>
              <Button href="/get-help" variant="ghost" className="h-12">
                Need Help
              </Button>
            </div>
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {peopleCases.map((c) => (
              <CaseCard key={c.id} c={c} />
            ))}
          </div>
        </Container>
      </section>
    </Motion>
  );
}


