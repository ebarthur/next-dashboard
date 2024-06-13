"use client"

import Image from "next/image";
import { Lamp } from "@/components/ui/lamp";
import { ThemeToggle } from "@/components/ui/theme-toggler";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl text-center max-w-lg font-bold">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </div>
   </main>
  );
}
