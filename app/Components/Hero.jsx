import bg from "../assets/bg.jpg";
import sihlogo from "../assets/sihlogo.webp"
import Image from "next/image";
import logo1 from "../assets/logo1.jpg"
import logo8 from "../assets/logo8.jpg"
import MoE from "../assets/MoE.jpg"
import MOEE from "../assets/MOEE.svg"


export default function Hero() {
  return (
    <>
      <div
        id="hero"
        className="h-screen bg-cover bg-center relative text-center text-white px-4"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4 font-oswald">
          <div className="flex gap-4">
            <Image src={logo1} alt="SIH Logo" className="w-32 h-12 rounded-xl md:w-32 md:h-28 mb-4" />
            <Image src={MoE} alt="SIH Logo" className="w-32 h-12 rounded-xl md:w-48 md:h-28 mb-4" />
              <Image src={sihlogo} alt="SIH Logo" className="w-32 h-12 rounded-xl md:w-48 md:h-28 mb-4" />
              <Image src={MOEE} alt="SIH Logo" className="bg-white w-36 h-12 rounded-xl md:w-52 md:h-28 mb-4" />
            <Image src={logo8} alt="SIH Logo" className="w-32 h-12 rounded-xl md:w-48  md:h-28 mb-4" />
          </div>
          <h2 className="text-xl md:text-4xl">AMRUTA INSTITUTE OF ENGINEERING AND MANAGEMENT SCIENCES</h2>
          <h3 className="text-lg md:text-4xl text-[#9B59B6]">DEPARTMENT OF INFORMATION SCIENCE AND ENGINEERING</h3>
          <h3 className="text-lg md:text-4xl">SMART INDIAN HACKATHON IN ASSOCIATION WITH  TECH TITANS</h3>
          <h3 className="text-lg md:text-4xl text-[#9B59B6]">PRESENTS YOU</h3>
          <h1 className="text-4xl md:text-6xl font-bold">
            AIEMS 
            <span className="text-[#9B59B6]"> TECHNO</span>-QUEST 3.O
          </h1>
        </div>
      </div>
    </>
  );
}
