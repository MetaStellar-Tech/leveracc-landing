"use client";

import Link from "next/link";
import { Github, Twitter, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px]">
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
            <span className="font-bold text-lg bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              L
            </span>
          </div>
        </div>
        <span className="font-bold text-xl tracking-tight">LeverAcc</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        <Link href="#" className="hover:text-primary transition-colors">
          Docs
        </Link>
        <Link href="#" className="hover:text-primary transition-colors">
          Twitter
        </Link>
        <Link href="#" className="hover:text-primary transition-colors">
          Github
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="hidden md:flex rounded-full border-white/10 hover:bg-white/5"
        >
          Launch APP
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-6 h-6" />
        </Button>
      </div>
    </nav>
  );
}
