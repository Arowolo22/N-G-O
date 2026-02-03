"use client";

import { animate, useInView, useMotionValue } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

function formatNumber(n) {
  return new Intl.NumberFormat(undefined).format(Math.round(n));
}

export function AnimatedCounter({ value, suffix = "", duration = 1.2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  const target = useMemo(() => Number(value ?? 0), [value]);

  useEffect(() => {
    const unsub = mv.on("change", (v) => setDisplay(formatNumber(v)));
    return () => unsub();
  }, [mv]);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [duration, inView, mv, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}


