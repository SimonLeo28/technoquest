"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selectedProblem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit formData to backend
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert("You will recieve an email to register your team in a few minutes.");
      setFormData({ name: "", email: "", selectedProblem: "" });
    }
  };

  return (
    <section className="bg-black text-white h-screen flex justify-center items-center px-6 py-16" id="register">
      <div className="max-w-3xl mx-auto bg-[#1a1a1a] rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-[#9B59B6] mb-6">Register for Techno-Quest</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Team Leader Email"
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white"
            required
          />

          <input
            type="selectedProblem"
            name="selectedProblem"
            value={formData.selectedProblem}
            onChange={handleChange}
            placeholder="Enter the selected problem statement"
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white"
            required
          />

          {/* <select
            name="selectedProblem"
            value={formData.selectedProblem}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white"
            required
          >
            <option value="" disabled>Select a Problem Statement</option
            {/* AI & Machine Learning *
            <optgroup label="AI & Machine Learning">
              <option>AI-Powered Mental Health Assistant</option>
              <option>Fake News Detector</option>
              <option>Personalized Learning Tutor</option>
              <option>AI Resume Screener</option>
              <option>AI-based Sign Language Interpreter</option>
            </optgroup>

            {/* Data Science / Analytics *
            <optgroup label="Data Science / Analytics">
              <option>Campus Energy Consumption Dashboard</option>
              <option>Public Transport Optimization Model</option>
              <option>Placement Prediction System</option>
              <option>E-commerce Product Trend Analyzer</option>
              <option>Student Dropout Risk Detector</option>
            </optgroup>
            {/* Full Stack / Web & App Development *
            <optgroup label="Full Stack / Web & App Development">
              <option>Smart Complaint Management Portal</option>
              <option>Crowdsourced College Notes Repository</option>
              <option>Eco-Marketplace Platform</option>
              <option>Local Events Discovery Platform</option>
              <option>Lost and Found Portal</option>
            </optgroup>

            {/* No-Code / Low-Code Projects *
            <optgroup label="No-Code / Low-Code Projects">
              <option>Student Portfolio Builder</option>
              <option>Automated Internship Tracker</option>
              <option>Digital Voting Platform</option>
              <option>No-Code Feedback System</option>
              <option>College Inventory Manager</option>
            </optgroup>

            {/* Event Management *
            <optgroup label="Event Management">
              <option>Smart Event Registration System</option>
              <option>Live Event Polling App</option>
              <option>Event Resource Scheduler</option>
              <option>Automated Certificate Generator</option>
            </optgroup>
          </select> */}

          <button
            type="submit"
            className="bg-[#9B59B6] hover:bg-purple-700 transition px-6 py-3 rounded-lg text-black font-semibold"
          >
            Submit Registration
          </button>
          <Link href="/">
          <button
            className="bg-[#9B59B6] ml-3 hover:bg-purple-700 transition px-6 py-3 rounded-lg text-black font-semibold"
          >
            Back
          </button>
          </Link>
        </form>
      </div>
    </section>
  );
}
