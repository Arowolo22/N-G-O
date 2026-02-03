import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { DonateWidget } from "@/components/DonateWidget";
import { getCaseById } from "@/lib/cases";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { CaseDetailClient } from "@/app/cases/[id]/CaseDetailClient";

export default function CaseDetailPage({ params }) {
  const c = getCaseById(params?.id);
  if (!c) return notFound();

  return <CaseDetailClient c={c} />;
}


