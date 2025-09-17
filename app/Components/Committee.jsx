import React from 'react'

const Committee = () => {
  const members = [
    { role: "Student Co-ordinator", name: "Mr. Simon Leo Alexander" },
    { role: "Student Co-ordinator", name: "Mr. Nirvan M" },
    { role: "Chief Coordinator & SPOC", name: "Dr. Kumar B I D" },
    { role: "IIC Convener", name: "Dr. Pratibhadevi T" },
    { role: "Dean Academic", name: "Dr. Rajeshwar Kadadevaramath" },
    { role: "Principal", name: "Dr. Santosh M. Muranal" },
  ];

  return (
    <div className="w-full bg-black py-0 flex justify-center items-center">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {members.map((m, idx) => (
          <div key={idx} className="flex flex-col justify-center items-center">
            <span className="font-semibold text-sm text-purple-400">{m.role}</span>
            <span className="text-base text-white mt-1">{m.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Committee