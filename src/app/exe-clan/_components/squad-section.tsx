export const SquadSection = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-balance text-slate-100">
          The Squad
        </h2>
        <div className="grid md:grid-cols-3 gap-3">
          {[
            { role: "Shot Caller" },
            { role: "Support Player" },
            { role: "Combat Lead" },
            { role: "Tactical Mind" },
            { role: "Utility Expert" },
            { role: "Meta Master" },
          ].map((member, i) => (
            <div
              key={member.role}
              className="bg-secondary border-border p-4 hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs font-bold">
                    {i + 1}
                  </span>
                </div>
                <p className="text-xs font-semibold text-foreground">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
