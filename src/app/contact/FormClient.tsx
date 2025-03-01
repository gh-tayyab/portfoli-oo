'use client'
import { useState } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function ContactForm() {
  const [form, setForm] = useState({ email: "", name: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await addDoc(collection(db, "messages"), {
        email: form.email,
        name: form.name,
        message: form.message,
        timestamp: new Date()
      });

      setForm({ email: "", name: "", message: "" });
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message: ", error);
      setError("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevents newline in textareas and submits the form
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
      <div className="space-y-2">
        <label className="block text-gray-700">Email address</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-gray-700">Your name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-gray-700">Your message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
          rows={4}
          required
        ></textarea>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <button
        type="submit"
        className={`w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition-all ${loading ? "opacity-50" : ""}`}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
