"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProgressBar } from "@/components/ProgressBar";
import { formatNGN } from "@/lib/money";
import { useDonations } from "@/hooks/useDonations";

export function CaseCard({ c }) {
  const { getTotalFor } = useDonations();
  const raised = getTotalFor(c.id);

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-3xl bg-white/70 ring-1 ring-black/10 shadow-sm hover:shadow-md transition"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={c.image}
          alt={`${c.name} — ${c.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 ring-1 ring-black/10">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Active Case
          </div>
          <h3 className="mt-2 text-lg font-extrabold tracking-tight text-white">
            {c.name}
            {c.age ? <span className="text-white/80"> · {c.age}</span> : null}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-white/85">{c.title}</p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between text-sm">
          <div className="font-semibold text-slate-900">
            {formatNGN(raised)} <span className="text-slate-600">raised</span>
          </div>
          <div className="text-slate-600">Goal {formatNGN(c.goalAmount)}</div>
        </div>
        <div className="mt-3">
          <ProgressBar value={raised} max={c.goalAmount} />
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <Link
            href={`/cases/${c.id}`}
            className="text-sm font-semibold text-slate-900 hover:text-slate-950"
          >
            View details →
          </Link>
          <Link
            href={`/donate?case=${encodeURIComponent(c.id)}`}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-2 py-2 text-sm font-semibold shadow-sm hover:bg-slate-950 transition"
          >
            Fund this case
          </Link>
        </div>
      </div>
    </motion.article>
  );
}


