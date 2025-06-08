"use client";

import React, { useState } from "react";

const categories = [
  {
    title: "🔹 AI & Machine Learning",
    problems: [
      {
        title: "AI-Powered Mental Health Assistant",
        description:
          "Build an AI chatbot that detects signs of stress, anxiety, or depression from user conversations and provides resources or emergency contact info.",
      },
      {
        title: "Fake News Detector",
        description:
          "Create an ML model that classifies news articles or social media posts as real or fake using NLP techniques.",
      },
      {
        title: "Personalized Learning Tutor",
        description:
          "Develop an AI model that analyzes student performance data and provides personalized learning content or assessments.",
      },
      {
        title: "AI Resume Screener",
        description:
          "Design a tool that parses resumes and shortlists candidates based on job descriptions using semantic analysis.",
      },
      {
        title: "AI-based Sign Language Interpreter",
        description:
          "Use computer vision to translate sign language gestures into text/speech in real-time.",
      },
    ],
  },
  {
    title: "🔹 Data Science / Analytics",
    problems: [
      {
        title: "Campus Energy Consumption Dashboard",
        description:
          "Analyze real or simulated data of electricity/water usage from campus buildings and provide usage trends, anomaly detection, and reduction suggestions.",
      },
      {
        title: "Public Transport Optimization Model",
        description:
          "Use public transport or traffic data to optimize bus routes or suggest changes to reduce travel time and cost.",
      },
      {
        title: "Placement Prediction System",
        description:
          "Analyze historical placement data to predict the probability of students getting placed based on CGPA, skills, projects, etc.",
      },
      {
        title: "E-commerce Product Trend Analyzer",
        description:
          "Build a dashboard that predicts product demand trends using past sales, reviews, and search popularity.",
      },
      {
        title: "Student Dropout Risk Detector",
        description:
          "Identify students at risk of dropping out using academic, attendance, and socio-economic factors.",
      },
    ],
  },
  {
    title: "🔹 Full Stack / Web & App Development",
    problems: [
      {
        title: "Smart Complaint Management Portal",
        description:
          "Build a system for students/faculty to raise campus issues (e.g., WiFi, electricity, maintenance), assign to departments, and track resolutions.",
      },
      {
        title: "Crowdsourced College Notes Repository",
        description:
          "A full-stack app where students can upload, rate, and download study materials categorized by subject, year, and college.",
      },
      {
        title: "Eco-Marketplace Platform",
        description:
          "Create a web app for selling/exchanging second-hand books, electronics, and bicycles on campus.",
      },
      {
        title: "Local Events Discovery Platform",
        description:
          "Design a platform that aggregates local or inter-college events, workshops, and fests, with RSVP and social sharing features.",
      },
      {
        title: "Lost and Found Portal",
        description:
          "Build a simple web/mobile app to report and find lost items within campus, with image upload and item-matching feature.",
      },
    ],
  },
  {
    title: "🔹 No-Code / Low-Code Projects",
    problems: [
      {
        title: "Student Portfolio Builder (No-Code Tool)",
        description:
          "Using tools like Webflow or Bubble, build a drag-and-drop portfolio builder specifically for students to showcase resumes, projects, and achievements.",
      },
      {
        title: "Automated Internship Tracker",
        description:
          "Design a no-code workflow using platforms like Airtable + Zapier/Make for managing internship applications, deadlines, and follow-ups.",
      },
      {
        title: "Digital Voting Platform",
        description:
          "Create a no-code voting system (e.g., for student elections or polls) using tools like Glide or Adalo with real-time results.",
      },
      {
        title: "No-Code Feedback System",
        description:
          "Develop a feedback form system with dashboards using tools like Jotform + Google Sheets + Google Data Studio.",
      },
      {
        title: "College Inventory Manager",
        description:
          "Build an inventory system to manage lab equipment, hostel items, or sports gear using Airtable or Notion.",
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
      </div>
    </section>
  );
};
