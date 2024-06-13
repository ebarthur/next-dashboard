"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/icons";

function Navbar() {
  return (
    <nav className="w-screen h-[7vh] fixed top-0 bg-transparent dark:bg-[#0c0a09]">
      <div className="max-w-screen-xl mx-auto h-full p-5 flex justify-between items-center">
        {/*<Logo />*/}
        <div className=" pt-2 text-neutral-500 hover:text-black pointer-events-auto flex items-center gap-4">
          <Link
            className="flex items-center gap-2 font-semibold"
            href="/"
          >
            <Logo />
            <span className="">ACME</span>
          </Link>
          <Link href={"/dashboard"}>
            <div className="border-b-2 dark:text-white">Dashboard</div>

          </Link>
        </div>
        <div className="flex items-center pt-2 gap-5">
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