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

              <div className="p-6 sm:p-8">
                <h2 className="text-lg font-extrabold tracking-tight text-slate-950">
                  What’s happening
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-700">{c.problem}</p>

                <div className="mt-6 rounded-3xl bg-slate-900/5 ring-1 ring-black/10 p-5">
                  <div className="text-sm font-bold text-slate-950">
                    How your donation helps
                  </div>
                  <ul className="mt-3 grid gap-2 text-sm text-slate-700">
                    <li>• Immediate safety planning and transport</li>
                    <li>• Shelter, food, and essential supplies</li>
                    <li>• Medical support, referrals, and follow‑up</li>
                    <li>• Advocacy and case management</li>
                  </ul>
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


