"use client";

import React, { useState } from "react";
import Link from "next/link";

const categories = [
  {
    title: "🔹 Problem Statements for SIH-2026",
    problems: [
      {
        title: "Smart Community Health Monitoring and Early Warning System for Water-Borne Diseases in Rural Northeast India",
        description:
        "MedTech / BioTech / HealthTech  SIH id = SIH25001",
      },
      {
        title: "Smart Tourist Safety Monitoring & Incident Response System using Al, Geo-Fencing, and Blockchain-based Digital ID",
        description:
          "Travel & Tourism SIH id = 	SIH25002",
      },
      {
        title: "Low-Cost smart transportation solution for Agri produce from remote farms to nearest motorable road in NER Region",
        description:
          "Transportation & Logistics SIH id = SIH25003",
      },
      {
        title: "lmage based breed recognition for cattle and buffaloes of India",
        description:
          "Agriculture, FoodTech & Rural Development SIH id = SIH25004",
      },
      {
        title: "lmage based Animal Type Classification for cattle and buffaloes",
        description:
          "Agriculture, FoodTech & Rural Development SIH id = SIH25005",
      },
      {
        title: "Development of a Digital Farm Management Portal for lmplementing Biosecurity ileasures in Pig and Poultry Farms",
        description:
          "Agriculture, FoodTech & Rural Development SIH id = SIH25006",
      },
      {
        title: "Development of a Digital Farm Management Portal for Monitoring aximum Residue Limits (MRL) and Antimicrobial Usage (AMU) in Livestock",
        description:
          "Agriculture, FoodTech & Rural Development SIH id = SIH25007",
      },
      {
        title: "Disaster Preparedness and Response Education System for Schools and Colleges",
        description:
          "Disaster Management SIH id = SIH25008",
      },
      {
        title: "Gamified Environmental Education Platform for Schools and Colleges",
        description:
          "Smart Education SIH id = SIH25009",
      },
      {
        title: "Smart Crop Advisory System for Small and Marginal Farmers",
        description:
          "Agriculture, FoodTech & Rural Development SIH id = SIH25010",
      },
    ],
  },
];

export const ProblemStatements = () => {
  const [openIndex, setOpenIndex] = useState({ category: null, problem: null });

  const toggle = (catIdx, probIdx) => {
    const isOpen =
      openIndex.category === catIdx && openIndex.problem === probIdx;
    setOpenIndex(isOpen ? { category: null, problem: null } : { category: catIdx, problem: probIdx });
  };

  return (
    <section id="problems" className="bg-black text-white py-20 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#9B59B6] mb-10 text-center">
          Problem Statements
        </h2>

        {categories.map((category, catIdx) => (
          <div key={catIdx} className="mb-10">
            <h3 className="text-2xl font-semibold text-[#9B59B6] mb-4">
              {category.title}
            </h3>

            <div className="space-y-4">
              {category.problems.map((problem, probIdx) => (
                <div
                  key={probIdx}
                  className="border border-[#9B59B6] rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center p-4 text-left bg-[#1A1A1A] hover:bg-[#2D2D2D] transition-colors"
                    onClick={() => toggle(catIdx, probIdx)}
                  >
                    <span className="font-medium">{problem.title}</span>
                    <span className="text-[#9B59B6]">
                      {openIndex.category === catIdx &&
                      openIndex.problem === probIdx
                        ? "−"
                        : "+"}
                    </span>
                  </button>
                  {openIndex.category === catIdx &&
                    openIndex.problem === probIdx && (
                      <div className="bg-[#111] text-gray-300 p-4 text-sm">
                        {problem.description}
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <button className="p-3 bg-[#9B59B6] rounded-lg flex justify-center items-center">
          <a href="https://sih.gov.in/sih2025PS">Click here for more problem statements</a></button>
      </div>
    </section>
  );
};
