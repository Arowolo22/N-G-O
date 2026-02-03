/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Motion } from "@/components/Motion";
import { Button } from "@/components/Button";

export default function AboutPage() {
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
              About Arowolo NGO
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Compassion with structure. Safety with urgency.
            </h1>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Arowolo NGO exists to protect vulnerable adults from abuse,
              neglect, and hardship. We work fast in crises—and we stay present
              long enough for recovery to become real.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-[2.25rem] bg-white/70 ring-1 ring-black/10 shadow-sm"
            >
              <div className="relative aspect-[16/12]">
                <Image                  
                src="/ceo-img.jpg"
                  alt="Founder of Arowolo NGO"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs font-semibold text-white/85">
                    Founder
                  </div>
                  <div className="mt-1 text-2xl font-extrabold tracking-tight text-white">
                    Arowolo (Founder)
                  </div>
                  <div className="mt-1 text-sm text-white/80">
                    “Nobody should feel disposable. We respond with dignity.”
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-6">
              <div className="rounded-3xl bg-white/70 ring-1 ring-black/10 shadow-sm p-6">
                <div className="text-base font-extrabold tracking-tight text-slate-950">
                  Our Vision
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  A society where every vulnerable adult is safe, protected, and
                  treated with dignity—regardless of age, disability, poverty,
                  or circumstance.
                </p>
              </div>
              <div className="rounded-3xl bg-white/70 ring-1 ring-black/10 shadow-sm p-6">
                <div className="text-base font-extrabold tracking-tight text-slate-950">
                  Our Mission
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  We protect vulnerable adults from abuse, neglect, and hardship
                  through emergency response, safe shelter, advocacy, and
                  practical recovery support.
                </p>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-slate-950 to-slate-900 text-white ring-1 ring-black/10 shadow-lg p-6">
                <div className="text-base font-extrabold tracking-tight">
                  Join the movement
                </div>
                <p className="mt-2 text-sm leading-7 text-white/80">
                  Donate to save lives today, or volunteer to expand our reach
                  and respond faster.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Button href="/donate" variant="primary" className="h-12">
                    Donate Now
                  </Button>
                  <Button href="/contact" variant="ghost" className="h-12">
                    Volunteer
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Motion>
  );
}
