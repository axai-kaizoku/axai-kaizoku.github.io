export const GamesSection = () => {
  return (
    <section id="games" className="py-16 px-4 md:px-8 bg-secondary/30 -mx-10">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-balance">
          What We Play
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-secondary border-border overflow-hidden hover:border-primary transition-colors">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-primary">BGMI</h3>
              <p className="text-xs text-muted-foreground mb-3">
                Battle Royale • Ranked • Tournaments
              </p>
              <p className="text-xs text-muted-foreground">
                Primary competitive platform
              </p>
            </div>
          </div>

          <div className="bg-secondary border-border overflow-hidden hover:border-primary transition-colors">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-primary">
                GTA Series
              </h3>
              <p className="text-xs text-muted-foreground mb-3">
                GTA V • GTA SA • Vice City
              </p>
              <p className="text-xs text-muted-foreground">
                Story & Multiplayer
              </p>
            </div>
          </div>

          <div className="bg-secondary border-border overflow-hidden hover:border-primary transition-colors">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-primary">
                Competitive
              </h3>
              <p className="text-xs text-muted-foreground mb-3">
                CS:GO • Watch Dogs 2
              </p>
              <p className="text-xs text-muted-foreground">
                Skill-based gaming
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
