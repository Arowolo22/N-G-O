import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { DonateWidget } from "@/components/DonateWidget";
import { getCaseById } from "@/lib/cases";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { CaseDetailClient } from "@/app/cases/[id]/CaseDetailClient";

export default async function CaseDetailPage({ params }) {
  const { id } = await params;
  const c = getCaseById(id);
  if (!c) return notFound();

  return <CaseDetailClient c={c} />;
}


