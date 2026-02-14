"use client";

import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ShieldAlert, Sparkles, Lock } from "lucide-react";
import { useDonations } from "@/hooks/useDonations";

import { formatNGN } from "@/lib/money";
import toast from "react-hot-toast";
import { ProgressBar } from "@/components/ProgressBar";
import { Button } from "@/components/Button";

const preset = [5000, 10000, 25000, 50000];

export function DonateWidget({ caseItem, bare = false }) {
  const router = useRouter();

  const { getTotalFor, addDonation } = useDonations();
  const raised = getTotalFor(caseItem.id);


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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  async function onDonate(e) {
    e.preventDefault();
    setError("");

    const amt = Number(amount);
    if (!Number.isFinite(amt) || amt <= 0) {
      const msg = "Enter a valid donation amount.";
      setError(msg);
      toast.error(msg);
      return;
    }

    if (!email) {
      const msg = "Please enter your email address to donate.";
      setError(msg);
      toast.error(msg);
      return;
    }

    setBusy(true);
    try {
      if (typeof window.PaystackPop === "undefined") {
        throw new Error("Paystack is still loading. Please try again in a moment.");
      }

      const handler = window.PaystackPop.setup({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
        email: email,
        amount: amt * 100, // Paystack works in kobo
        currency: "NGN",
        callback: function (response) {
          // Success!
          addDonation(caseItem.id, amt, name);
          router.refresh?.();
          toast.success(`Thank you! You donated ${formatNGN(amt)} to this case.`);
          setBusy(false);
        },
        onClose: function () {
          setBusy(false);
          toast.error("Payment cancelled.");
        },
        metadata: {
          custom_fields: [
            {
              display_name: "Case Name",
              variable_name: "case_name",
              value: caseItem.name,
            },
            {
              display_name: "Donor Name",
              variable_name: "donor_name",
              value: name,
            },
          ],
        },
      });

      handler.openIframe();
    } catch (err) {
      const msg = err?.message || "Something went wrong.";
      setError(msg);
      toast.error(msg);
      setBusy(false);
    }
  }



  return (
    <div
      className={`transition-all ${
        bare
          ? ""
          : "rounded-3xl bg-white/70 ring-1 ring-black/10 shadow-sm p-4 sm:p-6"
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
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
                value={amount}
                onChange={(e) => setAmount(e.target.value.replace(/\D/g, ""))}
                inputMode="numeric"
                className="h-11 rounded-2xl bg-white/80 px-4 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 text-black"
                placeholder="0"
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
            {busy ? "Processing…" : `Donate now`}
          </button>

          
        </div>
      </form>
    </div>
  );
}


