import React from "react";

const QualifiedTeams = () => {
  const teams = [
    // 1st Year
    { team: "Yashika B. and Team", leader: "Yashika B" },
    { team: "Child of Farmers", leader: "Pragnya Akki" },
    { team: "The Innovators", leader: "Thanushree C" },
    { team: "ICE", leader: "Sharan" },
    { team: "Ctrl Intelligence", leader: "Siora Kulsum" },
    { team: "Error 204: Team Not Found", leader: "Darshan" },
    { team: "Aqua Sentinel", leader: "Chaithra N" },


    // From first image
    { team: "AIML1", leader: "Dhanush" },
    { team: "Dream Team", leader: "Anjushree D." },
    { team: "Aniketh Choudigar and Team", leader: "Aniketh Choudigar" },
    { team: "Tech Buddies", leader: "Dickson Devadason" },
    { team: "Tech Builders", leader: "Adithya T.A." },
    { team: "Brain Bridge", leader: "Nisarga G" },
    { team: "Tech Girls", leader: "Shanavi C" },
    { team: "Code Crafters", leader: "Karthik Hiremath" },

    // 3rd Year
    { team: "Pixel Pirates", leader: "Aaiman Phalak" },
    { team: "Hexacore", leader: "Laxmipriya" },
    { team: "Manjula C and Team", leader: "Manjula C" },
    { team: "Digital Dynamos", leader: "Masood Khan" },
    { team: "Byte Busters", leader: "Tejaswini M" },
    { team: "Anvaya", leader: "Suman C" },
    { team: "Beta", leader: "Poorvik Hebbal V" },
    { team: "Techno Titans", leader: "Aishwarya S.S." },
    { team: "Dreams Hack", leader: "Surekha K.A." },
    { team: "Alpha", leader: "Monisha Srinivas" },
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Qualified Teams
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((t, index) => (
            <div
              key={index}
              className="bg-purple-800/40 border border-purple-600 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold">{t.team}</h3>
              <p className="text-sm mt-2 text-gray-300">
                <span className="font-medium">Leader:</span> {t.leader}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualifiedTeams;