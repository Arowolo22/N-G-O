"use client";

import { useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Motion } from "@/components/Motion";
import { DonateWidget } from "@/components/DonateWidget";
import { CaseCard } from "@/components/CaseCard";
import { CASES, getCaseById } from "@/lib/cases";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { useDonations } from "@/hooks/useDonations";
import { formatNGN } from "@/lib/money";
import { Heart, User } from "lucide-react";

function DonateContent() {
  const sp = useSearchParams();
  const caseIdFromQuery = sp?.get("case");

  const [selected, setSelected] = useState(
    () => getCaseById(caseIdFromQuery) ?? getCaseById("ngo-general") ?? CASES[0],
  );

  const choices = useMemo(() => CASES, []);
  const { recentDonations } = useDonations();

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
            <div className="rounded-3xl bg-white/70 ring-1 ring-black/10 shadow-sm p-4 sm:p-6">
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
                <DonateWidget caseItem={selected} bare />
              </div>
            </div>

            <div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-slate-950">
                    Recent donations
                  </div>
                  <div className="mt-1 text-sm text-slate-700">
                    See the impact of our community in real-time.
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                  </span>
                  Live Updates
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {recentDonations.length === 0 ? (
                  <div className="rounded-3xl border-2 border-dashed border-slate-200 p-8 text-center text-sm text-slate-400">
                    No donations yet. Be the first to give!
                  </div>
                ) : (
                  recentDonations.slice(0, 8).map((d) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      key={d.id}
                      className="flex items-center gap-3 rounded-2xl bg-white/70 p-3 sm:p-4 ring-1 ring-black/5 shadow-sm"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white shrink-0">
                        <User className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-slate-950 truncate">
                          {d.name}
                        </div>
                        <div className="text-xs text-slate-500 truncate">
                          Support for {getCaseById(d.caseId)?.name}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-sm font-black text-brand">
                          +{formatNGN(d.amount)}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {new Date(d.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                      <div className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand">
                         <Heart className="h-4 w-4 fill-brand" />
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
              
              {recentDonations.length > 8 && (
                <div className="mt-4 text-center">
                  <p className="text-xs text-slate-500 font-medium">
                    + {recentDonations.length - 8} more recent contributions
                  </p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </Motion>
  );
}

export default function DonatePage() {
  return (
    <Suspense
      fallback={
        <section className="py-12 sm:py-16">
          <Container>
            <div className="h-64 animate-pulse rounded-3xl bg-white/50 ring-1 ring-black/10" />
          </Container>
        </section>
      }
    >
      <DonateContent />
    </Suspense>
  );
}
