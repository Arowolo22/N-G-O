/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Motion } from "@/components/Motion";
import { Button } from "@/components/Button";
import { ArrowLeft, Quote, Heart, Target, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function FounderPage() {
  return (
    <Motion>
      <section className="py-12 sm:py-16">
        <Container>
          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to About
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-100 ring-1 ring-black/10 shadow-2xl"
            >
              <Image
                src="/founder.jpg"
                alt="Arowolo - Founder of Arowolo Health Foundation"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-xs font-semibold text-brand ring-1 ring-brand/20">
                Founder & Visionary
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                Meet Arowolo
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-700 font-medium">
                "Emmanuel Arowolo is a graduate of Adeleke University with a strong passion for 
                humanitarian service. He is the founder of a nonprofit initiative dedicated to 
                supporting people living with tuberculosis, focusing on awareness, care support, 
                and practical assistance for affected individuals and families. His goal is to
                 ensure that those battling tuberculosis are not only treated medically but also 
                 supported socially and emotionally within their communities.."
              </p>

              <div className="mt-12 p-8 rounded-3xl bg-slate-50 ring-1 ring-black/5 relative">
                <Quote className="absolute top-3 left-3 h-8 w-8 text-slate-200" />
                <p className="text-slate-700 italic leading-7 relative z-10 pl-4">
                  Every case we find is a life saved and a family protected. 
                  This isn't just work for us; it's a calling to serve humanity where it hurts most.
                </p>
                <div className="mt-4 pl-4 text-sm font-bold text-slate-900">— Arowolo</div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact" variant="dark" className="h-12 px-8">
                  Partner with the Vision
                </Button>
                <Button href="/donate" variant="subtle" className="h-12 px-8">
                  Support our Mission
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </Motion>
  );
}
