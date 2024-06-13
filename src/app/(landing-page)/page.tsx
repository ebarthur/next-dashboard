'use client';

import Image from 'next/image';
import { Lamp } from '@/components/ui/lamp';
import { ThemeToggle } from '@/components/ui/theme-toggler';

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <h1 className="max-w-lg text-center text-6xl font-bold">
          Welcome to <a href="https://nextjs.org">Next.js! </a>
        </h1>
      </div>
    </main>
  );
}
