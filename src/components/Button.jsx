import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const variants = {
  primary:
    "bg-gradient-to-r from-sky-500 to-teal-500 text-white shadow-lg shadow-sky-500/15 hover:brightness-105 active:scale-[0.99]",
  ghost:
    "bg-white/70 text-slate-900 ring-1 ring-black/10 shadow-sm hover:bg-white active:scale-[0.99]",
  dark: "bg-slate-900 text-white shadow-md hover:bg-slate-950 active:scale-[0.99]",
  subtle:
    "bg-slate-900/5 text-slate-900 ring-1 ring-black/10 hover:bg-slate-900/10 active:scale-[0.99]",
};

export function Button({
  href,
  onClick,
  type,
  variant = "primary",
  className = "",
  children,
}) {
  const cls = `${base} ${variants[variant] ?? variants.primary} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}


