'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/icons';

function Navbar() {
  return (
    <nav className="fixed top-0 h-[7vh] w-screen bg-transparent dark:bg-[#0c0a09]">
      <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between p-5">
        {/*<Logo />*/}
        <div className="pointer-events-auto flex items-center gap-4 pt-2 text-neutral-500 hover:text-black">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <Logo />
            <span className="">ACME</span>
          </Link>
          <Link href={'/dashboard'}>
            <div className="border-b-2 dark:text-white">Dashboard</div>
          </Link>
        </div>
        <div className="flex items-center gap-5 pt-2">
          <Link href={`/sign-in`}>
            <p className="text-sm">Sign In</p>
          </Link>
          <Link href={`/sign-up`}>
            <Button className="rounded-full">Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
