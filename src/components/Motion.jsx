"use client";

import { MotionConfig } from "framer-motion";

// Simple wrapper that applies global motion settings without LazyMotion.
// This avoids the “motion inside LazyMotion” strict-mode warning.
export function Motion({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

