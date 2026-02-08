"use client";
import Link from "next/link";
import { ToggleTheme } from "../darkmode-icon";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import MobileNav from "./header.mobile";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const hasPrintedToConsole = useRef<boolean>(false);

  useEffect(() => {
    if (window) {
      if (!hasPrintedToConsole.current) {
        hasPrintedToConsole.current = true;
        (function axaiBanner() {
          console.log(
            "%cWelcome to\n",
            "color:#ffffff; font-size:14px; font-family:monospace;"
          );

          console.log(
            "%c                  _   _     \n" +
              "%c   __ ___  ____ _(_) ( )___ \n" +
              "%c  / _` \\ \\/ / _` | | |// __|\n" +
              "%c | (_| |>  < (_| | |   \\__ \\\n" +
              "%c  \\__,_/_/\\_\\__,_|_|   |___/\n" +
              "%c                              \n",
            "color:#ff6b6b; font-size:14px; font-family:monospace;",
            "color:#ff6b6b; font-size:14px; font-family:monospace;",
            "color:#ff6b6b; font-size:14px; font-family:monospace;",
            "color:#ff6b6b; font-size:14px; font-family:monospace;",
            "color:#ff6b6b; font-size:14px; font-family:monospace;",
            "color:#ff6b6b; font-size:14px; font-family:monospace;"
          );

          console.log(
            "%cportfolio",
            "color:#ffffff; font-size:14px; font-family:monospace;"
          );
        })();
      }
    }
  }, []);

  return (
    <>
      <header className="flex fixed z-20 top-0 justify-between items-center w-full p-5 sm:p-6 backdrop-blur-sm">
        <nav className="flex items-center">
          <Link
            href="/"
            className="z-50 rounded-full size-10 sm:size-12 mr-1 sm:mr-6 items-center flex justify-center"
            title="axai"
          >
            <img
              src="/main.jpg"
              alt="axai"
              className="rounded-full"
              width={48}
              height={48}
            />
          </Link>
          <Link
            href="/changelog"
            className={cn(buttonVariants({ variant: "link" }), "max-sm:hidden")}
          >
            changelog
          </Link>
          <Link
            href="/blog"
            className={cn(buttonVariants({ variant: "link" }), "max-sm:hidden")}
          >
            blog
          </Link>
        </nav>
        <div className="flex items-center gap-0 sm:gap-0.5">
          <ToggleTheme
            className={cn(buttonVariants({ variant: "link" }), "z-20")}
          />
          <div className={cn("sm:hidden block")}>
            <MobileNav showNav={showNav} setShowNav={setShowNav} />
          </div>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "link" }), "max-sm:hidden")}
          >
            get in touch
          </Link>
        </div>
      </header>
      <div className="h-24 pointer-events-none" />
    </>
  );
}
