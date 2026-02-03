"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Motion } from "@/components/Motion";
import { DonateWidget } from "@/components/DonateWidget";
import { CaseCard } from "@/components/CaseCard";
import { CASES, getCaseById } from "@/lib/cases";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DonatePage() {
  const sp = useSearchParams();
  const caseIdFromQuery = sp?.get("case");

  const [selected, setSelected] = useState(
    () => getCaseById(caseIdFromQuery) ?? getCaseById("ngo-general") ?? CASES[0],
  );

  const choices = useMemo(() => CASES, []);

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
              Donate
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Give now. Keep someone safe today.
            </h1>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Choose a specific case, or support our General Fund to keep emergency
              response ready.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
            <div className="rounded-3xl bg-white/70 ring-1 ring-black/10 shadow-sm p-6">
              <div className="text-sm font-bold text-slate-950">Choose a fund</div>
              <p className="mt-2 text-sm text-slate-700">
                You can donate to a particular problem (person) and track progress.
              </p>

              <label className="mt-4 grid gap-1">
                <span className="text-xs font-semibold text-slate-700">Fund</span>
                <select
                  value={selected?.id}
                  onChange={(e) => setSelected(getCaseById(e.target.value))}
                  className="h-11 rounded-2xl bg-white/80 px-4 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 text-black"
                >
                  {choices.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} — {c.title}
                    </option>
                  ))}
                </select>
              </label>

              <div className="mt-5">
                <DonateWidget caseItem={selected} />
              </div>
            </div>

            <div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-slate-950">
                    Active cases
                  </div>
                  <div className="mt-1 text-sm text-slate-700">
                    Want to fund a particular person? Pick a case below.
                  </div>
                </div>
                <Link
                  href="/cases"
                  className="text-sm font-semibold text-slate-900 hover:text-slate-950 inline-flex items-center gap-2"
                >
                  View all <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                {CASES.filter((c) => c.id !== "ngo-general")
                  .slice(0, 4)
                  .map((c) => (
                    <CaseCard key={c.id} c={c} />
                  ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Motion>
  );
}


