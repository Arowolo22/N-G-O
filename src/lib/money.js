export function formatNGN(amount) {
  const n = Number(amount ?? 0);
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(n);
}

export function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}


