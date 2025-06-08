import Navbar from "./Components/Navbar";
import bg from "./assets/bg.jpg";
import { About } from "./Components/About";
import Hero from "./Components/Hero";
import { ProblemStatements } from "./Components/ProblemStatements";
import { Prizes } from "./Components/Prizes";
import { Footer } from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ProblemStatements />
      <Prizes />
      <Footer />
    </>
  );
}
