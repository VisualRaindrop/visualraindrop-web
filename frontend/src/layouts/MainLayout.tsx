import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { ReactNode } from "react";
import Stars from "../components/Stars";
import ShootingStars from "../components/ShootingStars";


export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[var(--bg)] overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 stars" />
          <Stars />
          <ShootingStars/>
          <div className="absolute left-[10%] top-[10%] h-[35rem] w-[35rem] rounded-full dark:bg-purple-500/20 blur-[120px]" />
          <div className="absolute right-[10%] top-[45%] h-[30rem] w-[30rem] rounded-full dark:bg-blue-500/20 blur-[120px]" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
          <main className={'pt-24 flex-1'}>
              {children}
          </main>
        <Footer />
      </div>
    </div>
  );
}