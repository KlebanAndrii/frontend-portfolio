import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Projects from "@/components/projects/Projects";
import Practical from "@/components/practical/Practical";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-neutral-100 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <div
        className="pointer-events-none fixed inset-0 opacity-10 dark:opacity-20"
        aria-hidden="true"
      >
        <div className="h-full w-full bg-[url('/images/square.svg')] bg-no-repeat bg-center"></div>
      </div>
      <Header />
      <main role="main">
        <Hero />
        <About />
        <Projects />
        <Practical />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
