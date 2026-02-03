"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "arowolo_donations_v1";

function safeParse(json) {
  try {
    const v = JSON.parse(json);
    if (!v || typeof v !== "object") return {};
    return v;
  } catch {
    return {};
  }
}

function readStore() {
  if (typeof window === "undefined") return {};
  return safeParse(window.localStorage.getItem(STORAGE_KEY) ?? "{}");
}

function writeStore(store) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export function useDonations() {
  const [store, setStore] = useState({});

  useEffect(() => {
    setStore(readStore());
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY) setStore(readStore());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const getTotalFor = useCallback(
    (caseId) => Number(store?.[caseId] ?? 0),
    [store],
  );

  const addDonation = useCallback((caseId, amount) => {
    const amt = Number(amount ?? 0);
    if (!caseId || !Number.isFinite(amt) || amt <= 0) return;

    const current = readStore();
    const next = { ...current, [caseId]: Number(current?.[caseId] ?? 0) + amt };
    writeStore(next);
    setStore(next);
  }, []);

  const totals = useMemo(() => store ?? {}, [store]);

  return { totals, getTotalFor, addDonation };
}


