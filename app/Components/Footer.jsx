"use client";
import { useState } from "react";

export const Footer = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data.message || "Something went wrong.");
      }
    } catch (err) {
      setStatus("Server error. Try again later.");
    }
  };

  return (
    <footer
    id="contact"
    className="bg-black text-white py-10 px-6 md:px-24">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-[#9B59B6] mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-[#1c1c1c] border border-[#9B59B6] text-white"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-[#1c1c1c] border border-[#9B59B6] text-white"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded bg-[#1c1c1c] border border-[#9B59B6] text-white"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="bg-[#9B59B6] px-6 py-2 rounded font-semibold text-black hover:bg-purple-600 transition"
            >
              Send Message
            </button>
            <p className="text-sm text-gray-400 mt-2">{status}</p>
          </form>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Info</h3>
          <p>Email: simon28.2004@gmail.com</p>
          <p>Phone: +91 7892391803 / +91 9620907945</p>
          <p>Location: Amruta Institute of Engineering and Management Sciences Bidadi, Bengaluru</p>
        </div>
      </div>
      <div className="text-center mt-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Techno-Quest. All rights reserved.
      </div>
    </footer>
  );
};
