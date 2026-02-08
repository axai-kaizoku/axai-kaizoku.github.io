import Link from "next/link";
import { Button } from "@/components/ui/button";

export const CtaSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-secondary/40">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-balance">
          Ready to Join <span className="text-primary">EXE Clan</span>?
        </h2>
        <p className="text-xs text-muted-foreground mb-6 text-white">
          Get in touch or drop a message on our Discord
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/contact">
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
            >
              Contact
            </Button>
          </Link>
          <Button
            size="sm"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto bg-transparent"
          >
            Discord
          </Button>
        </div>
      </div>
    </section>
  );
};
