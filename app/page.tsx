"use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";

const Hero = dynamic(() => import("@/components/Hero"));
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const RecentProjects = dynamic(
  () => import("@/components/RecentProjects"),
  { ssr: false }
);
const Clients = dynamic(() => import("@/components/Clients"), {
  ssr: false,
});
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});
const Approach = dynamic(() => import("@/components/Approach"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});
const FloatingNav = dynamic(
  () => import("@/components/ui/FloatingNavbar").then(m => m.FloatingNav),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col mx-auto max-w-[100vw] overflow-x-hidden sm:px-10 px-5">

      <div className="w-full max-w-7xl mx-auto overflow-x-hidden">

        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
