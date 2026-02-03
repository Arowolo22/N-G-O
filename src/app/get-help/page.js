/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Motion } from "@/components/Motion";
import { Button } from "@/components/Button";
import { PhoneCall, ShieldAlert, HeartHandshake, LifeBuoy } from "lucide-react";
import { useState } from "react";

export default function GetHelpPage() {
  const [sent, setSent] = useState(false);

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
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-semibold text-red-800 ring-1 ring-red-200">
              <ShieldAlert className="h-4 w-4" />
              If you're in immediate danger, call emergency services now.
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Get help now — safe, confidential support.
            </h1>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              If you are a vulnerable adult experiencing abuse, neglect, or
              hardship, we can help you create a safety plan and connect you to
              urgent support.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-white/70 ring-1 ring-black/10 shadow-sm p-6 lg:col-span-2">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-teal-500 text-white shadow-md shadow-sky-500/10">
                  <PhoneCall className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-base font-extrabold tracking-tight text-slate-950">
                    Emergency hotline
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    Call any time for urgent support. If calling is unsafe,
                    complete the form below and we will respond as quickly as
                    possible.
                  </p>
                  <div className="mt-4 rounded-2xl bg-slate-900/5 ring-1 ring-black/10 px-4 py-3">
                    {/* <div className="text-sm font-semibold text-slate-700">
                      Hotline 
                    </div> */}
                    <div className="mt-1 text-xl font-extrabold tracking-tight text-slate-950">
                      +234 905 350 0170
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <Button href="tel:+2348000000000" variant="dark" className="h-12">
                      Call now
                    </Button>
                    <Button href="/contact" variant="subtle" className="h-12">
                      Contact us
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-slate-950 to-slate-900 text-white ring-1 ring-black/10 shadow-lg p-6">
              <div className="flex items-start gap-3">
                <LifeBuoy className="h-5 w-5 text-white/90" />
                <div>
                  <div className="text-base font-extrabold tracking-tight">
                    Safety tips
                  </div>
                  <ul className="mt-3 grid gap-2 text-sm text-white/80">
                    <li>• Move to a safer location if possible</li>
                    <li>• Keep important contacts accessible</li>
                    <li>• If injured, seek medical attention immediately</li>
                    <li>• Document what you can safely document</li>
                  </ul>
                </div>
              </div>
              <div className="mt-5 rounded-2xl bg-white/10 ring-1 ring-white/10 px-4 py-3 text-sm text-white/80">
                You deserve safety and dignity. We will listen without judgment.
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
            <div className="rounded-3xl bg-white/70 ring-1 ring-black/10 shadow-sm p-6">
              <div className="text-base font-extrabold tracking-tight text-slate-950">
                Request urgent help
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                This form is for urgent support requests. If someone is in
                immediate danger, call emergency services.
              </p>

              <form
                className="mt-5 grid gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    required
                    placeholder="Your name"
                    className="h-11 rounded-2xl bg-white/80 px-4 text-sm text-black ring-1  focus:outline-none focus:ring-2 ring-black/10"
                  />
                  <input
                    required
                    placeholder="Phone number"
                    className="h-11 rounded-2xl bg-white/80 px-4 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 text-black"
                  />
                </div>
                <input
                  placeholder="Your location (city / area)"
                  className="h-11 rounded-2xl bg-white/80 px-4 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 text-black"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us what is happening and what you need (safe details only)"
                  className="rounded-2xl bg-white/80 px-4 py-3 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 text-black"
                />
                <button className="h-12 rounded-2xl bg-slate-950 text-white font-extrabold hover:bg-slate-900 transition">
                  Send request
                </button>
                {sent ? (
                  <div className="rounded-2xl bg-emerald-50 text-emerald-900 ring-1 ring-emerald-200 px-4 py-3 text-sm">
                    Request received. If you are in danger, please call the hotline
                    immediately.
                  </div>
                ) : null}
              </form>
            </div>

            <div className="rounded-3xl bg-white/70 ring-1 ring-black/10 shadow-sm p-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-teal-500 text-white shadow-md shadow-sky-500/10">
                  <HeartHandshake className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-base font-extrabold tracking-tight text-slate-950">
                    Resources & support
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    We can connect you to safe shelter, medical care, legal aid,
                    and advocacy. Everything starts with a confidential
                    conversation.
                  </p>
                  <div className="mt-5 grid gap-2 text-sm text-slate-700">
                    <div className="rounded-2xl bg-slate-900/5 ring-1 ring-black/10 px-4 py-3">
                      <span className="font-semibold text-slate-950">
                        Confidentiality:
                      </span>{" "}
                      We protect your privacy and only share information when
                      necessary for safety.
                    </div>
                    <div className="rounded-2xl bg-slate-900/5 ring-1 ring-black/10 px-4 py-3">
                      <span className="font-semibold text-slate-950">
                        Consent first:
                      </span>{" "}
                      We explain options clearly and respect your decisions.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Motion>
  );
}


