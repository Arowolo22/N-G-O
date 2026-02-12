/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { Motion } from "@/components/Motion";
import { Button } from "@/components/Button";
import { PhoneCall, ShieldAlert, HeartHandshake, LifeBuoy } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function GetHelpPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

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
              Experiencing a persistent cough? Don't wait.
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Get tested today — TB is curable.
            </h1>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              If you have been coughing for more than 2 weeks, have night sweats, 
              or unexplained weight loss, we can help you get a free test and treatment.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-white/70 ring-1 ring-black/10 shadow-sm p-6 lg:col-span-2">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-11 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-white shadow-md shadow-sky-500/10">
                  <PhoneCall className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-base font-extrabold tracking-tight text-slate-950">
                    Talk to a Health Worker
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    Call any time for confidential advice. If you are worried about symptoms 
                    or stigma, we are here to listen and guide you.
                  </p>
                  <div className="mt-4 rounded-2xl bg-slate-900/5 ring-1 ring-black/10 px-4 py-3">
                    <div className="mt-1 text-xl font-extrabold tracking-tight text-slate-950">
                      +234 905 350 0170
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <Button href="tel:+2348000000000" variant="dark" className="h-12">
                      Call now
                    </Button>
                    <Button href="/contact" variant="subtle" className="h-12">
                      Send a message
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
                    Common TB Symptoms
                  </div>
                  <ul className="mt-3 grid gap-2 text-sm text-white/80">
                    <li>• Coughing for 2+ weeks</li>
                    <li>• Chest pain or coughing up blood</li>
                    <li>• Night sweats and fever</li>
                    <li>• Unexplained weight loss</li>
                  </ul>
                </div>
              </div>
              <div className="mt-5 rounded-2xl bg-white/10 ring-1 ring-white/10 px-4 py-3 text-sm text-white/80">
                Early detection saves lives. Testing is free and confidential.
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
            <div className="rounded-3xl bg-white/70 ring-1 ring-black/10 shadow-sm p-6">
              <div className="text-base font-extrabold tracking-tight text-slate-950">
                Request a Free Screening
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Fill this form if you or a loved one needs testing or support. 
                We will contact you to arrange a visit or appointment.
              </p>

              <form
                className="mt-5 grid gap-3"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setError("");
                  setLoading(true);
                  try {
                    const res = await fetch("/api/get-help", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        name,
                        phone,
                        location,
                        message,
                      }),
                    });
                    const data = await res.json().catch(() => ({}));
                    if (!res.ok) {
                      const msg = data.error || "Something went wrong. Please try again or call the hotline.";
                      setError(msg);
                      toast.error(msg);
                      return;
                    }
                    setSent(true);
                    setName("");
                    setPhone("");
                    setLocation("");
                    setMessage("");
                    toast.success("Request sent. We'll respond as soon as possible.");
                  } catch (err) {
                    const msg = "Failed to send. Please try again or call the hotline.";
                    setError(msg);
                    toast.error(msg);
                  } finally {
                    setLoading(false);
                  }
                }}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-11 rounded-2xl bg-white/80 px-4 text-sm text-black ring-1 focus:outline-none focus:ring-2 ring-black/10"
                  />
                  <input
                    required
                    placeholder="Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-11 rounded-2xl bg-white/80 px-4 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 text-black"
                  />
                </div>
                <input
                  placeholder="Your location (city / area)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="h-11 rounded-2xl bg-white/80 px-4 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 text-black"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your symptoms or what help you need..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-2xl bg-white/80 px-4 py-3 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 text-black"
                />
                {error && (
                  <div className="rounded-2xl bg-red-50 text-red-800 ring-1 ring-red-200 px-4 py-3 text-sm">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="h-12 rounded-2xl bg-slate-950 text-white font-extrabold hover:bg-slate-900 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Request Call Back"}
                </button>
              </form>
            </div>

            <div className="rounded-3xl bg-white/70 ring-1 ring-black/10 shadow-sm p-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-11 w-22 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-white shadow-md shadow-sky-500/10">
                  <HeartHandshake className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-base font-extrabold tracking-tight text-slate-950">
                    Free & Confidential
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    We provide X-rays, geneXpert testing, and a full course of medication 
                    at no cost to you. We also offer nutritional support to help you recover.
                  </p>
                  <div className="mt-5 grid gap-2 text-sm text-slate-700">
                    <div className="rounded-2xl bg-slate-900/5 ring-1 ring-black/10 px-4 py-3">
                      <span className="font-semibold text-slate-950">
                        Privacy First:
                      </span>{" "}
                      Your diagnosis is private. We work discreetly to protect you from stigma.
                    </div>
                    <div className="rounded-2xl bg-slate-900/5 ring-1 ring-black/10 px-4 py-3">
                      <span className="font-semibold text-slate-950">
                        Support Network:
                      </span>{" "}
                      You are not alone. Our joyful hearts club connects survivors.
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


