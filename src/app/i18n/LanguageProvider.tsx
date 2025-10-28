"use client";
import React, { createContext, useContext, useMemo, useState } from "react";

type Lang = "en" | "pt";

type Dict = Record<string, Record<Lang, string>>;

const dict: Dict = {
  nav_about: { en: "About", pt: "Sobre" },
  nav_projects: { en: "Projects", pt: "Projetos" },
  nav_skills: { en: "Skills", pt: "Skills" },
  nav_contact: { en: "Contact", pt: "Contato" },

  hero_title_prefix: { en: "Hi, I am", pt: "Olá, eu sou" },
  hero_subtitle: { en: "Computer Science Student | Backend Developer", pt: "Estudante de Ciência da Computação | Desenvolvedor Backend" },
  hero_btn_projects: { en: "My Projects", pt: "Meus Projetos" },
  hero_btn_cv: { en: "Download CV", pt: "Baixar CV" },

  about_title: { en: "About Me", pt: "Sobre Mim" },
  about_p1: { en: "I'm a Software Developer, passionate about solving problems and building efficient solutions", pt: "Sou um Desenvolvedor de Software, apaixonado por resolver problemas e construir soluções eficientes" },
  about_p2: { en: "I specialize in backend technologies like TypeScript, Node.js, and PHP, and I am always looking for the next opportunity to learn and build.", pt: "Especializado em tecnologias de backend como TypeScript, Node.js e PHP, estou sempre buscando aprender e construir mais." },

  projects_title: { en: "Projects", pt: "Projetos" },
  projects_github: { en: "GitHub", pt: "GitHub" },
  projects_live: { en: "Live Demo", pt: "Demo" },

  skills_title: { en: "My Skills", pt: "Minhas Skills" },
  skills_frontend: { en: "Frontend Development", pt: "Desenvolvimento Frontend" },
  skills_backend: { en: "Backend Development", pt: "Desenvolvimento Backend" },

  contact_title: { en: "Let's Talk!", pt: "Vamos Conversar!" },
  contact_name: { en: "Name", pt: "Nome" },
  contact_email: { en: "Email", pt: "Email" },
  contact_message: { en: "Message", pt: "Mensagem" },
  contact_send: { en: "Send Message", pt: "Enviar Mensagem" },
  contact_sending: { en: "Sending...", pt: "Enviando..." },
  contact_success: { en: "Message sent successfully. I will get back to you soon.", pt: "Mensagem enviada com sucesso. Retornarei em breve." },
  contact_error: { en: "There was an error sending your message. Please try again later.", pt: "Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde." },

  footer_rights: { en: "All rights reserved.", pt: "Todos os direitos reservados." },
  lang_toggle: { en: "PT", pt: "EN" },
};

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: (key: keyof typeof dict) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const value = useMemo<LanguageContextType>(() => ({
    lang,
    setLang,
    toggleLang: () => setLang((prev) => (prev === "en" ? "pt" : "en")),
    t: (key) => dict[key][lang],
  }), [lang]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}


