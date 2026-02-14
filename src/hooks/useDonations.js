"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "arowolo_donations_history_v1";

function safeParse(json) {
  try {
    const v = JSON.parse(json);
    if (!Array.isArray(v)) return [];
    return v;
  } catch {
    return [];
  }
}

function readStore() {
  if (typeof window === "undefined") return [];
  return safeParse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");
}

function writeStore(store) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

const CUSTOM_SYNC_EVENT = "AROWOLO_DONATION_ADDED";

export function useDonations() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(readStore());
    
    const onSync = () => {
      setHistory(readStore());
    };

    const onStorage = (e) => {
      if (e.key === STORAGE_KEY) onSync();
    };

    window.addEventListener("storage", onStorage);
    window.addEventListener(CUSTOM_SYNC_EVENT, onSync);
    
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(CUSTOM_SYNC_EVENT, onSync);
    };
  }, []);

  const getTotalFor = useCallback(
    (caseId) => {
      return history
        .filter((d) => d.caseId === caseId)
        .reduce((acc, d) => acc + (Number(d.amount) || 0), 0);
    },
    [history],
  );

  const addDonation = useCallback((caseId, amount, name) => {
    const amt = Number(amount ?? 0);
    if (!caseId || !Number.isFinite(amt) || amt <= 0) return;

    const current = readStore();
    const newDonation = {
      id: crypto.randomUUID(),
      caseId,
      amount: amt,
      name: name || "Anonymous",
      timestamp: Date.now(),
    };
    const next = [newDonation, ...current];
    writeStore(next);
    setHistory(next);

    // Sync other hook instances in the same window
    window.dispatchEvent(new CustomEvent(CUSTOM_SYNC_EVENT));
  }, []);

  const recentDonations = useMemo(() => history, [history]);

  return { recentDonations, getTotalFor, addDonation };
}


