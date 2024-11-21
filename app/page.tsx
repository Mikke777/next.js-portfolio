// import About from "@/components/About";
// import Hero from "@/components/Hero";
// import { ModeToggle } from "@/components/ModeToggle";
// import { AppleCardsCarouselDemo } from "@/components/Project";
// import { FloatingNav } from "@/components/ui/FloatingNav";
// import { FaHome } from "react-icons/fa";
// import { FcAbout } from "react-icons/fc";
// import { GrProjects } from "react-icons/gr";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-background flex
    justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={[
          { name: "Home", link: "/", icon: <FaHome /> },
          { name: "About", link: "#about", icon: <FcAbout /> },
          { name: "Projects", link: "#AppleCardsCarouselDemo", icon: <GrProjects /> },
        ]} /> */}
        {/* <Hero /> */}
        {/* <ModeToggle /> */}
        {/* <About /> */}
        {/* <AppleCardsCarouselDemo /> */}
        <Footer />
      </div>
    </main>
  );
}
