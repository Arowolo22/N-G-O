"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Motion } from "@/components/Motion";
import { Button } from "@/components/Button";
import { ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { PROGRAMS } from "@/data/programs";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ProgramDetailPage({ params }) {
  const { slug } = use(params);
  const program = PROGRAMS.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  const Icon = program.icon;

  return (
    <Motion>
      <section className="py-12 sm:py-20">
        <Container>
          <Link 
            href="/programs"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Programs
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-white shadow-lg shadow-sky-500/10 mb-6">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                {program.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-700 font-medium">
                {program.desc}
              </p>
              
              <div className="mt-8 space-y-6 text-base leading-7 text-slate-600 whitespace-pre-line">
                {program.about}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/donate" variant="primary" className="h-12 px-8">
                  Support this Program
                </Button>
                
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/10 group bg-slate-100"
            >
              {program.image ? (
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200">
                  <Icon className="h-20 w-20 text-slate-300 opacity-50" />
                </div>
              )}
              
              {/* Premium Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem]" />
            </motion.div>
          </div>
        </Container>
      </section>
    </Motion>
  );
}
