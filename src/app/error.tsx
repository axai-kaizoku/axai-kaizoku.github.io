"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error() {
  return (
    <section className="h-[87dvh] flex items-center flex-col justify-center gap-4 w-full">
      <h1 className="text-6xl font-bold text-center">Oops</h1>
      <p className="text-center">Unknown error occured !</p>
      <Button asChild variant={"secondary"}>
        <Link href={"/contact"}>Contact</Link>
      </Button>
    </section>
  );
}
