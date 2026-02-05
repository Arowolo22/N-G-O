"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ShieldAlert, Sparkles, CreditCard, Repeat, Lock } from "lucide-react";
import { useDonations } from "@/hooks/useDonations";
import { useAuth } from "@/contexts/AuthContext";
import { formatNGN } from "@/lib/money";
import { ProgressBar } from "@/components/ProgressBar";
import { Button } from "@/components/Button";

const preset = [5000, 10000, 25000, 50000];

export function DonateWidget({ caseItem }) {
  const router = useRouter();
  const { user } = useAuth();
  const { getTotalFor, addDonation } = useDonations();
  const raised = getTotalFor(caseItem.id);

  const [frequency, setFrequency] = useState("one_time"); // or monthly
  const [method, setMethod] = useState("demo"); // demo | stripe | paystack (UI only for now)
  const [amount, setAmount] = useState(10000);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const pct = useMemo(() => {
    if (!caseItem.goalAmount) return 0;
    return Math.min(100, (raised / caseItem.goalAmount) * 100);
  }, [caseItem.goalAmount, raised]);

  async function onDonate(e) {
    e.preventDefault();
    setError("");

    if (!user) {
      router.push("/login?redirect=/donate");
      return;
    }

    const amt = Number(amount);
    if (!Number.isFinite(amt) || amt <= 0) {
      setError("Enter a valid donation amount.");
      return;
    }

    setBusy(true);
    try {
      if (method !== "demo") {
        setError(
          "Payment integration is coming soon. For now, please use Demo to simulate a donation.",
        );
        return;
      }

      // Frontend-only demo donation: persist to localStorage and update UI instantly.
      addDonation(caseItem.id, amt);
      router.refresh?.();
    } catch (err) {
      setError(err?.message || "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  // Show login prompt if user is not logged in
  if (!user) {
    return (
      <div className="rounded-3xl bg-white/70 ring-1 ring-black/10 shadow-sm p-6">
        <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-900/5 ring-1 ring-black/10">
            <Lock className="h-8 w-8 text-slate-700" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold tracking-tight text-slate-950">
              Sign in to donate
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              You need to create an account or sign in before you can make a
              donation.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row w-full sm:w-auto">
            <Button href="/signup" variant="primary" className="h-12">
              Sign Up
            </Button>
            <Button href="/login" variant="subtle" className="h-12">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white/70 ring-1 ring-black/10 shadow-sm p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-bold text-slate-950">Donation progress</div>
          <div className="mt-2">
            <ProgressBar value={raised} max={caseItem.goalAmount} />
          </div>
          <div className="mt-2 text-sm text-slate-700">
            <span className="font-semibold text-slate-950">{formatNGN(raised)}</span>{" "}
            raised · Goal {formatNGN(caseItem.goalAmount)} ·{" "}
            <span className="font-semibold text-slate-950">
              {Math.round(pct)}%
            </span>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-900/5 px-3 py-2 text-xs font-semibold text-slate-800 ring-1 ring-black/10">
          <Sparkles className="h-4 w-4" aria-hidden="true" /> Secure giving
        </div>
      </div>

      <form onSubmit={onDonate} className="mt-6 space-y-4">
        <div className="grid gap-7 sm:grid-cols-2">
          <label className="grid gap-1">
            <span className="text-xs font-semibold text-slate-700">Full name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="h-11 rounded-2xl bg-white/80 px-4 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 text-black"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-xs font-semibold text-slate-700">Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="h-11 rounded-2xl bg-white/80 px-4 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 text-black"
            />
          </label>
        </div>

        <div className="grid gap-3">
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/70 ring-1 ring-black/10 p-3">
              <div className="text-xs font-semibold text-slate-700">Frequency</div>
               <div className="mt-2 grid grid-cols-2 gap-2"> 
                 <button
                  type="button"
                  onClick={() => setFrequency("one_time")}
                  className={`h-10 rounded-xl text-sm font-semibold ring-1 transition ${
                    frequency === "one_time"
                      ? "bg-slate-950 text-white ring-black/10"
                      : "bg-white/70 text-slate-900 ring-black/10 hover:bg-white"
                  }`}
                >
                  <CreditCard className="mr-1 inline h-4 w-4" />
                  One‑time
                </button> 
                <button
                  type="button"
                  onClick={() => setFrequency("monthly")}
                  className={`h-10 rounded-xl text-sm font-semibold ring-1 transition ${
                    frequency === "monthly"
                      ? "bg-slate-950 text-white ring-black/10"
                      : "bg-white/70 text-slate-900 ring-black/10 hover:bg-white"
                  }`}
                >
                  <Repeat className="mr-1 inline h-4 w-4" />
                  Monthly
                </button> 
              </div>
            </div>
            <div className="rounded-2xl bg-white/70 ring-1 ring-black/10 p-3">
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs font-semibold text-slate-700">Payment</div>
                
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
               
                <button
                  type="button"
                  onClick={() => setMethod("stripe")}
                  className={`h-10 rounded-xl text-sm font-semibold ring-1 transition ${
                    method === "stripe"
                      ? "bg-slate-950 text-white ring-black/10"
                      : "bg-white/50 text-slate-500 ring-black/10"
                  }`}
                  aria-disabled="true"
                  title="Stripe integration coming soon"
                >
                  Stripe
                </button>
                <button
                  type="button"
                  onClick={() => setMethod("paystack")}
                  className={`h-10 rounded-xl text-sm font-semibold ring-1 transition ${
                    method === "paystack"
                      ? "bg-black text-white ring-black/10"
                      : "bg-white/50 text-slate-500 ring-black/10"
                  }`}
                  aria-disabled="true"
                  title="Paystack integration coming soon"
                >
                  Paystack
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/70 ring-1 ring-black/10 p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="text-xs font-semibold text-slate-700">Amount (NGN)</div>
             
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {preset.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setAmount(p)}
                  className={`h-10 rounded-xl text-sm font-semibold ring-1 transition ${
                    amount === p
                      ? "bg-slate-950 text-white ring-black/10"
                      : "bg-white/70 text-slate-900 ring-black/10 hover:bg-white"
                  }`}
                >
                  {formatNGN(p)}
                </button>
              ))}
            </div>

            <div className="mt-3 grid gap-1">
              <input
                value={String(amount)}
                onChange={(e) => setAmount(e.target.value)}
                inputMode="numeric"
                className="h-11 rounded-2xl bg-white/80 px-4 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 text-black"
              />
              <div className="text-xs text-slate-600">
                Your gift supports safety, medical care, shelter, and advocacy.
              </div>
            </div>
          </div>

          <label className="grid gap-1">
            <span className="text-xs font-semibold text-black">
              Optional message
            </span>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              placeholder="Leave an encouragement or note (optional)"
              className="rounded-2xl bg-white/80 px-4 py-3 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
            />
          </label>

          {error ? (
            <div className="rounded-2xl bg-red-50 text-red-800 ring-1 ring-red-200 px-4 py-3 text-sm flex items-start gap-2">
              <ShieldAlert className="mt-0.5 h-4 w-4" />
              <div>{error}</div>
            </div>
          ) : null}

          <button
            type="submit"
            disabled={busy}
            className="h-12 w-full rounded-2xl bg-slate-950 text-white font-extrabold shadow-lg hover:bg-slate-900 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {busy ? "Processing…" : `Donate ${formatNGN(amount)} now`}
          </button>

          
        </div>
      </form>
    </div>
  );
}


