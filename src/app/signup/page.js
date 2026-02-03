"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Motion } from "@/components/Motion";
import { Container } from "@/components/Container";
import { Sparkles } from "lucide-react";
import { useState } from "react";

export default function SignupPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Motion>
      <section className="py-10 sm:py-14">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[2.25rem] bg-white/70 ring-1 ring-black/10 shadow-sm p-7 sm:p-9 order-2 lg:order-1"
            >
              <div className="text-sm font-bold text-slate-950">Sign Up</div>
              <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">
                Create your account
              </h1>
              <p className="mt-2 text-sm text-slate-700">
                Join Arowolo NGO to donate, volunteer, and get updates on impact.
              </p>

              <form
                className="mt-6 grid gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-1">
                    <span className="text-xs font-semibold text-slate-700">
                      First name
                    </span>
                    <input
                      required
                      placeholder="First name"
                      className="h-11 rounded-2xl bg-white/80 px-4 text-sm ring-1 text-black  focus:ring-2` ring-black/10 focus:outline-none focus:ring-2"
                    />
                  </label>
                  <label className="grid gap-1">
                    <span className="text-xs font-semibold text-slate-700">
                      Last name
                    </span>
                    <input
                      required
                      placeholder="Last name"
                      className="h-11 rounded-2xl bg-white/80 px-4 text-sm ring-1 text-black  ring-black/10 focus:outline-none focus:ring-2"
                    />
                  </label>
                </div>
                <label className="grid gap-1">
                  <span className="text-xs font-semibold text-slate-700">Email</span>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="h-11 rounded-2xl bg-white/80 px-4 text-sm ring-1 text-black  ring-black/10 focus:outline-none focus:ring-2"
                  />
                </label>
                <label className="grid gap-1">
                  <span className="text-xs font-semibold text-slate-700">
                    Password
                  </span>
                  <input
                    required
                    type="password"
                    placeholder="Create a password"
                    className="h-11 rounded-2xl bg-white/80 px-4 text-sm ring-1 text-black ring-black/10 focus:outline-none focus:ring-2  "
                  />
                </label>
                <label className="grid gap-1">
                  <span className="text-xs font-semibold text-slate-700">
                    Confirm password
                  </span>
                  <input
                    required
                    type="password"
                    placeholder="Confirm password"
                    className="h-11 rounded-2xl bg-white/80 px-4 text-sm ring-1 text-black  ring-black/10 focus:outline-none focus:ring-2"
                  />
                </label>

                <button className="mt-2 h-12 rounded-2xl  bg-black text-white font-extrabold shadow-lg  hover:brightness-105 transition">
                  Create account
                </button>

                {submitted ? (
                  <div className="rounded-2xl bg-emerald-50 text-emerald-900 ring-1 ring-emerald-200 px-4 py-3 text-sm">
                    Demo signup submitted. Add real authentication when ready.
                  </div>
                ) : null}

                <div className="mt-2 text-sm text-slate-700">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-semibold text-slate-950 hover:underline"
                  >
                    Login
                  </Link>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="relative overflow-hidden rounded-[2.25rem] ring-1 ring-black/10 shadow-lg shadow-slate-900/10 min-h-[320px] order-1 lg:order-2"
            >
              <Image
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1600&q=80"
                alt="Hope and support"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/60" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-900 ring-1 ring-black/10">
                  <Sparkles className="h-4 w-4" />
                  Be part of the change
                </div>
                <div className="mt-3 text-3xl font-extrabold tracking-tight text-white">
                  Start today
                </div>
                <div className="mt-2 text-sm text-white/80">
                  Your support can restore dignity and safety for someone in crisis.
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </Motion>
  );
}


