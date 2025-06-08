import bg from "../assets/bg.jpg";


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
          <h2 className="text-xl md:text-4xl">AMRUTA INSTITUTE OF ENGINEERING AND MANAGEMENT SCIENCES</h2>
          <h3 className="text-lg md:text-4xl text-[#9B59B6]">DEPARTMENT OF INFORMATION SCIENCE AND ENGINEERING</h3>
          <h3 className="text-lg md:text-4xl">TECH TITANS</h3>
          <h3 className="text-lg md:text-4xl text-[#9B59B6]">PRESENTS YOU</h3>
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-[#9B59B6]">TECHNO</span>-QUEST 3.O
          </h1>
        </div>
      </div>
    </>
  );
}
