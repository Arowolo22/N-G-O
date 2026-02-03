import Link from "next/link";
import { Container } from "@/components/Container";
import { HeartHandshake, PhoneCall, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white/60">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-extrabold tracking-tight text-slate-950">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 text-white shadow-md shadow-sky-500/10">
                <HeartHandshake className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>Arowolo NGO</span>
            </div>
            <p className="text-sm leading-6 text-slate-700">
              We protect vulnerable adults from abuse, neglect, and hardship —
              restoring safety, dignity, and urgent support.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="text-sm font-bold text-slate-950">Explore</div>
              <div className="grid gap-2 text-sm text-slate-700">
                <Link href="/about" className="hover:text-slate-950">
                  About Us
                </Link>
                <Link href="/programs" className="hover:text-slate-950">
                  Programs
                </Link>
                <Link href="/cases" className="hover:text-slate-950">
                  Cases
                </Link>
                <Link href="/get-help" className="hover:text-slate-950">
                  Get Help
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-sm font-bold text-slate-950">Take Action</div>
              <div className="grid gap-2 text-sm text-slate-700">
                <Link href="/donate" className="hover:text-slate-950">
                  Donate
                </Link>
                <Link href="/contact" className="hover:text-slate-950">
                  Volunteer
                </Link>
                <Link href="/login" className="hover:text-slate-950">
                  Login
                </Link>
                <Link href="/signup" className="hover:text-slate-950">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-bold text-slate-950">Contact</div>
            <div className="grid gap-3 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-slate-900" />
                <span>
                  13 Peacecourt Estate Lokogoma,<br />
                    Abuja 
                  
                </span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-slate-900" />
                <span>Emergency Hotline: +234 905 350 0170</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-900" />
                <span>arowolovisuals@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-black/10 pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Arowolo NGO. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <Link href="/privacy" className="hover:text-slate-950">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-950">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}


