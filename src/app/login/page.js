"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Motion } from "@/components/Motion";
import { Container } from "@/components/Container";
import { ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
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
              className="relative overflow-hidden rounded-[2.25rem] ring-1 ring-black/10 shadow-lg shadow-slate-900/10 min-h-[320px]"
            >
              <Image
                src="/img-logo.jpg"
                alt="A caring support worker"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/60" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-900 ring-1 ring-black/10">
                  <ShieldCheck className="h-4 w-4" />
                  Secure access
                </div>
                <div className="mt-3 text-3xl font-extrabold tracking-tight text-white">
                  Welcome back
                </div>
                <div className="mt-2 text-sm text-white/80">
                  Log in to manage your profile, donations, and volunteering.
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="rounded-[2.25rem] bg-white/70 ring-1 ring-black/10 shadow-sm p-7 sm:p-9"
            >
              <div className="text-sm font-bold text-slate-950">Login</div>
              <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">
                Sign in to Arowolo NGO
              </h1>
              

              <form
                className="mt-6 grid gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <label className="grid gap-1">
                  <span className="text-xs font-semibold text-slate-700">Email</span>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="h-11 rounded-2xl bg-white/80 px-4 text-sm text-black ring-1 ring-black/10 focus:outline-none focus:ring-2 "
                  />
                </label>
                <label className="grid gap-1">
                  <span className="text-xs font-semibold text-slate-700">
                    Password
                  </span>
                  <input
                    required
                    type="password"
                    placeholder="••••••••"
                    className="h-11 rounded-2xl bg-white/80 text-black px-4 text-sm ring-1  ring-black/10 focus:outline-none focus:ring-2"
                  />
                </label>

                <button className="mt-2 h-12 rounded-2xl bg-slate-950 text-white font-extrabold hover:bg-slate-900 transition">
                  Login
                </button>

                {submitted ? (
                  <div className="rounded-2xl bg-emerald-50 text-emerald-900 ring-1 ring-emerald-200 px-4 py-3 text-sm">
                    Demo login submitted. Add real authentication when ready.
                  </div>
                ) : null}

                <div className="mt-2 text-sm text-slate-700">
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    className="font-semibold text-slate-950 hover:underline"
                  >
                    Sign up
                  </Link>
                </div>
              </form>
            </motion.div>
          </div>
        </Container>
      </section>
    </Motion>
  );
}


