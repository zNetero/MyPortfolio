"use client";
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();
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
        setFeedback(t('contact_success'));
        form.reset();
      } else {
        setStatus("error");
        setFeedback(t('contact_error'));
      }
    } catch (_) {
      setStatus("error");
      setFeedback(t('contact_error'));
    }
  }
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-indigo-950 to-slate-900">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-4xl font-bold text-center mb-12 glow-title">{t('contact_title')}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="hidden" name="_subject" value="New contact from portfolio" />
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-2">{t('contact_name')}</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2">{t('contact_email')}</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-2">{t('contact_message')}</label>
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
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg text-lg"
            >
              {status === "submitting" ? t('contact_sending') : t('contact_send')}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}