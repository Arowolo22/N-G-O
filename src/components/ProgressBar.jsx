import { clamp } from "@/lib/money";

export function ProgressBar({ value, max }) {
  const pct = max > 0 ? clamp((Number(value ?? 0) / max) * 100, 0, 100) : 0;
  return (
    <div className="h-3 w-full overflow-hidden rounded-full bg-slate-900/10">
      <div
        className="h-full rounded-full bg-gradient-to-r from-sky-500 to-teal-500"
        style={{ width: `${pct}%` }}
        aria-label={`Progress ${Math.round(pct)}%`}
      />
    </div>
  );
}


