"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <section className="h-[87dvh] flex items-center flex-col justify-center gap-4 w-full">
      <h1 className="text-6xl font-bold text-center">404</h1>
      <p className="text-center">Page not found</p>
      <Button asChild variant={"secondary"}>
        <Link href={"/contact"}>Contact</Link>
      </Button>
    </section>
  )
}
