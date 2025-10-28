"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const res = await fetch("https://formspree.io/f/mkgpjkbp", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        setFeedback("Message sent successfully. I will get back to you soon.");
        form.reset();
      } else {
        setStatus("error");
        setFeedback("There was an error sending your message. Please try again later.");
      }
    } catch (_) {
      setStatus("error");
      setFeedback("There was an error sending your message. Please try again later.");
    }
  }
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-4xl font-bold text-center mb-12">Let's Talk!</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="hidden" name="_subject" value="New contact from portfolio" />
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows={5} 
              required
              className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          {status !== "idle" && feedback && (
            <p className={status === "success" ? "text-green-400" : "text-red-400"} aria-live="polite">
              {feedback}
            </p>
          )}
          <div className="text-center">
            <button 
              type="submit"
              disabled={status === "submitting"}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all text-lg"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}