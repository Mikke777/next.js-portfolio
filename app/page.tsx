import About from "@/components/About";
import Hero from "@/components/Hero";
import { ModeToggle } from "@/components/ModeToggle";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome, FaBeer } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-background flex
    justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">

        <FloatingNav navItems={[
          {name: "home", link: "/", icon: <FaHome />},
          {name: "about", link: "#about", icon: <FaBeer />},

        ]} />
        <Hero />
        <ModeToggle />
        <About />
      </div>


    </main>
  );
}
