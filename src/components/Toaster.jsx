"use client";

import { Toaster as HotToaster } from "react-hot-toast";

export function Toaster() {
  return (
    <HotToaster
      position="top-center"
      toastOptions={{
        duration: 4000,
        style: {
          background: "#0f172a",
          color: "#f8fafc",
          borderRadius: "12px",
        },
        success: {
          iconTheme: { primary: "#22c55e", secondary: "#f8fafc" },
        },
        error: {
          iconTheme: { primary: "#ef4444", secondary: "#f8fafc" },
        },
      }}
    />
  );
}
