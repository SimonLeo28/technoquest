import React from "react";
import { Trophy, Award, ScrollText } from "lucide-react";

export const Prizes = () => {
  return (
    <section id="prizes" className="bg-black text-white py-20 px-6 md:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#9B59B6] mb-12">
          Prizes & Awards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Winner Prize */}
          <div className="bg-[#1c1c1c] border border-[#9B59B6] rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <Trophy size={48} className="text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-white">1st Place</h3>
            <p className="text-lg text-gray-300">
              🏆 Cash Prize: <span className="text-green-400 font-bold">₹2000</span>  
            </p>
            <p className="text-sm text-gray-400 mt-1">+ Certificate of Appreciation</p>
          </div>

          {/* Runner Up Prize */}
          <div className="bg-[#1c1c1c] border border-[#9B59B6] rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <Award size={48} className="text-sky-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-white">2nd Place</h3>
            <p className="text-lg text-gray-300">
              🥈 Cash Prize: <span className="text-green-400 font-bold">₹1500</span>  
            </p>
            <p className="text-sm text-gray-400 mt-1">+ Certificate of Appreciation</p>
          </div>

          {/* Participation */}
          <div className="bg-[#1c1c1c] border border-[#9B59B6] rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <ScrollText size={48} className="text-[#9B59B6] mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-white">All Participants</h3>
            <p className="text-lg text-gray-300">🎓 Certificate of Participation</p>
            <p className="text-sm text-gray-400 mt-1">for every registered participant</p>
          </div>
        </div>

        <p className="mt-12 text-gray-400 text-sm md:text-base">
          Recognition, rewards, and a chance to showcase your talent — <span className="text-[#9B59B6] font-medium">Techno-Quest 3.O</span> believes in appreciating every spark of innovation.
        </p>
      </div>
    </section>
  );
};
