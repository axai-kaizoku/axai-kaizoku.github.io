"use client";
import { Swords } from "lucide-react";
import { lazy, Suspense } from "react";
import { BluredBadge } from "@/components/ui/blured-badge";
import { AboutSection } from "./_components/about-section";
import { CtaSection } from "./_components/cta-section";
import { GamesSection } from "./_components/games-section";
import { SquadSection } from "./_components/squad-section";

const HyperSpeed = lazy(() => import("@/components/hyper-speed"));

export default function Page() {
  return (
    <div className="h-full w-full bg-[hsl(0_0%_3.9%)] relative">
      <div className="absolute flex flex-col gap-4 mt-24 lg:mt-44 justify-start items-start md:items-center w-full h-[90vh] z-20 pointer-events-none">
        <BluredBadge className="bg-slate-50/10 flex gap-2 items-center text-white">
          <Swords strokeWidth={1.1} size={20} /> Gaming Community
        </BluredBadge>
        <h1 className="text-5xl md:text-7xl font-bold text-balance">
          <span className="text-slate-50">Welcome to </span>
          <span className="text-slate-50">EXE Clan</span>
        </h1>
        <p className="text-sm text-slate-50">
          Click & hold to see the real magic of hyperspeed!
        </p>
        <div className="flex items-center gap-4">
          <BluredBadge className="bg-slate-50">Get Started</BluredBadge>
          <BluredBadge className="text-white">Learn more</BluredBadge>
        </div>
      </div>

      <Suspense>
        <div
          style={{
            height: "90vh",
            margin: "0 -2rem -2rem",
            position: "relative",
            top: 0,
            zIndex: 10,
          }}
        >
          <HyperSpeed
            effectOptions={{
              distortion: "turbulentDistortion",
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 3,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [12, 80],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 526344,
                islandColor: 657930,
                background: 0,
                shoulderLines: 1250072,
                brokenLines: 1250072,
                leftCars: [14177983, 6770850, 12732332],
                rightCars: [242627, 941733, 3294549],
                sticks: 242627,
              },
            }}
          />
        </div>
      </Suspense>

      <AboutSection />

      <GamesSection />

      <SquadSection />

      <CtaSection />
    </div>
  );
}
