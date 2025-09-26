import Navbar from "./Components/Navbar";
import bg from "./assets/bg.jpg";
import { About } from "./Components/About";
import Hero from "./Components/Hero";
import { ProblemStatements } from "./Components/ProblemStatements";
import { Prizes } from "./Components/Prizes";
import { Footer } from "./Components/Footer";
import LogoSection from "./Components/LogoSection";
import Committee from "./Components/Committee";
import RulesSection from "./Components/RulesSection";
import QualifiedTeams from "./Components/QualifiedTeams";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoSection />
      <About />
      <Committee />
      <QualifiedTeams />
      <ProblemStatements />
      <RulesSection />
      <Prizes />
      <Footer />
    </>
  );
}
