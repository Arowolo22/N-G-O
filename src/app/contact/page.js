"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Motion } from "@/components/Motion";
import { Button } from "@/components/Button";
import { Mail, MapPin, PhoneCall, Instagram, Facebook, Twitter } from "lucide-react";

export default function ContactPage() {
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
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-slate-900 ring-1 ring-black/10">
              Contact
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Reach us — for volunteering, partnerships, or urgent support.
            </h1>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              We respond as quickly as possible. If you’re in immediate danger,
              call emergency services.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:items-start">
            <div className="rounded-3xl bg-white/70 ring-1 ring-black/10 shadow-sm p-6 lg:col-span-2">
              <div className="text-base font-extrabold tracking-tight text-slate-950">
                Send a message
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Tell us what you need (support, volunteering, partnership). For
                urgent cases, include your safe contact details.
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
                    placeholder="Full name"
                    className="h-11 rounded-2xl bg-white/80 px-4 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 text-black"
                  />
                  <input
                    required
                    placeholder="Email"
                    className="h-11 rounded-2xl bg-white/80 px-4 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 text-black"
                  />
                </div>
                <input
                  placeholder="Phone (optional)"
                  className="h-11 rounded-2xl bg-white/80 px-4 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 text-black"
                />
                <textarea
                  required
                  rows={5}
                  placeholder="Your message"
                  className="rounded-2xl bg-white/80 px-4 py-3 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 text-black"
                />
                <Button type="submit" variant="dark" className="h-12 w-full">
                  Send message
                </Button>
                {sent ? (
                  <div className="rounded-2xl bg-emerald-50 text-emerald-900 ring-1 ring-emerald-200 px-4 py-3 text-sm">
                    Message sent. We’ll get back to you soon.
                  </div>
                ) : null}
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl bg-white/70 ring-1 ring-black/10 shadow-sm p-6">
                <div className="text-sm font-bold text-slate-950">Address</div>
                <div className="mt-3 flex items-start gap-2 text-sm text-slate-700">
                  <MapPin className="mt-0.5 h-4 w-4 text-slate-900" />
                  <span>
                    13 Peacecourt Estate Lokogoma,<br />
                    Abuja
                  </span>
                </div>
                <div className="mt-4 text-sm font-bold text-slate-950">Phone</div>
                <div className="mt-2 flex items-center gap-2 text-sm text-slate-700">
                  <PhoneCall className="h-4 w-4 text-slate-900" />
                  <span>+234 905 350 0170</span>
                </div>
                <div className="mt-4 text-sm font-bold text-slate-950">Email</div>
                <div className="mt-2 flex items-center gap-2 text-sm text-slate-700">
                  <Mail className="h-4 w-4 text-slate-900" />
                  <span>arowolovisuals@gmail.com</span>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl bg-white/70 ring-1 ring-black/10 shadow-sm">
                <div className="p-4 text-sm font-bold text-slate-950">
                  Map
                </div>
                <iframe
                  title="Arowolo NGO map"
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Lagos%20Nigeria&output=embed"
                />
              </div>

              <div className="rounded-3xl bg-white/70 ring-1 ring-black/10 shadow-sm p-6">
                <div className="text-sm font-bold text-slate-950">You can also reach us here</div>
                <div className="mt-3 flex items-center gap-3 text-slate-700">
                  <a
                    href="#"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900/5 ring-1 ring-black/10 hover:bg-slate-900/10"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900/5 ring-1 ring-black/10 hover:bg-slate-900/10"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900/5 ring-1 ring-black/10 hover:bg-slate-900/10"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
                <div className="mt-3 text-xs text-slate-600">
                 
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Motion>
  );
}


