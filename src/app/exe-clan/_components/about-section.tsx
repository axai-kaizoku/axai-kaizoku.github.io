import { Button } from "@/components/ui/button";
import Link from "next/link";

export const AboutSection = () => {
  return (
    <section className="py-16 px-4 mt-10 md:px-8 max-w-6xl mx-auto w-full">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-white">
            <span className="text-white">EXE Clan</span> — Competitive Gaming
            Squad
          </h2>
          <p className="text-sm text-muted-foreground mb-3">
            <span className="font-semibold">10+ Elite Players</span> competing
            across mobile and PC. Built for{" "}
            <span className="text-primary font-semibold">dominance</span>.
          </p>
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            Ranked matches • Tournaments • Skill development • Community focused
          </p>
          <div className="flex gap-3">
            <Link href="#games">
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Games
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="sm"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-secondary p-4 border-border">
            <div className="text-3xl font-bold text-primary mb-1">10+</div>
            <p className="text-xs text-muted-foreground">Members</p>
          </div>
          <div className="bg-secondary p-4 border-border">
            <div className="text-3xl font-bold text-primary mb-1">100K+</div>
            <p className="text-xs text-muted-foreground">Hours</p>
          </div>
          <div className="bg-secondary p-4 border-border">
            <div className="text-3xl font-bold text-primary mb-1">6</div>
            <p className="text-xs text-muted-foreground">Titles</p>
          </div>
          <div className="bg-secondary p-4 border-border">
            <div className="text-3xl font-bold mb-1 text-white">✓</div>
            <p className="text-xs text-muted-foreground">Always Grinding</p>
          </div>
        </div>
      </div>
    </section>
  );
};
