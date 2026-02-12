"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Motion } from "@/components/Motion";
import { DonateWidget } from "@/components/DonateWidget";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export function CaseDetailClient({ c }) {
  return (
    <Motion>
      <section className="py-10 sm:py-14">
        <Container>
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-950"
          >
            <ArrowLeft className="h-4 w-4" /> Back to cases
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-[2.25rem] bg-white/70 ring-1 ring-black/10 shadow-sm"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={c.image}
                  alt={`${c.name} — ${c.title}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-900 ring-1 ring-black/10">
                    <ShieldCheck className="h-4 w-4" />
                    Verified urgent case
                  </div>
                  <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    {c.name}
                    {c.age ? <span className="text-white/80"> · {c.age}</span> : null}
                  </h1>
                  <p className="mt-2 text-sm text-white/85">{c.title}</p>
                </div>
              </div>

              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_18rem]">
                <div>
                  <h2 className="text-xl font-extrabold tracking-tight text-slate-950">
                    Patient Story
                  </h2>
                  <div className="mt-4 prose prose-slate prose-sm sm:prose-base text-slate-700 whitespace-pre-line">
                    {c.story}
                  </div>

                  <div className="mt-8 rounded-3xl bg-slate-900/5 ring-1 ring-black/10 p-5">
                    <div className="text-sm font-bold text-slate-950">
                      Why this matters
                    </div>
                    <ul className="mt-3 grid gap-2 text-sm text-slate-700">
                      <li>• <strong>Immediate Impact:</strong> Your donation starts working within 24 hours.</li>
                      <li>• <strong>Verification:</strong> Every case is medically verified by our partner clinics.</li>
                      <li>• <strong>Transparency:</strong> 100% of case-specific donations go to patient care.</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Medical File Card */}
                  <div className="rounded-2xl bg-white/50 ring-1 ring-black/10 p-4">
                    <div className="flex items-center gap-2 mb-3 border-b border-black/5 pb-2">
                       <ShieldCheck className="h-4 w-4 text-brand" />
                       <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Medical File</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs text-slate-500">Diagnosis</div>
                        <div className="font-semibold text-slate-900">{c.tbType || "Tuberculosis"}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Current Stage</div>
                        <div className="inline-flex items-center gap-1.5 mt-0.5">
                           <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                            </span>
                           <div className="font-semibold text-slate-900 text-sm">{c.stage || "Active Treatment"}</div>
                        </div>
                      </div>
                      {c.age && (
                        <div>
                          <div className="text-xs text-slate-500">Age</div>
                          <div className="font-semibold text-slate-900">{c.age} years old</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Impact Card */}
                   <div className="rounded-2xl bg-brand/5 ring-1 ring-brand/10 p-4">
                      <div className="text-xs font-bold uppercase tracking-wider text-brand mb-2">Goal</div>
                      <div className="text-sm text-slate-700">
                        {c.problem}
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:sticky lg:top-24">
              <DonateWidget caseItem={c} />
            </div>
          </div>
        </Container>
      </section>
    </Motion>
  );
}


