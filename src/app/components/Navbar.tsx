"use client";
import Link from 'next/link';
import { useLanguage } from '../i18n/LanguageProvider';

export default function Navbar() {
  const { t, toggleLang } = useLanguage();
  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-900 bg-opacity-80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
        Giordano Bruno
        </Link>
        
        <div className="hidden md:flex space-x-6 text-lg items-center">
          <Link href="#about" className="hover:text-blue-400 hover:underline underline-offset-8 decoration-blue-400 transition-colors">
            {t('nav_about')}
          </Link>
          <Link href="#projects" className="hover:text-blue-400 hover:underline underline-offset-8 decoration-blue-400 transition-colors">
            {t('nav_projects')}
          </Link>
          <Link href="#skills" className="hover:text-blue-400 hover:underline underline-offset-8 decoration-blue-400 transition-colors">
            {t('nav_skills')}
          </Link>
          <Link href="#contact" className="hover:text-blue-400 hover:underline underline-offset-8 decoration-blue-400 transition-colors">
            {t('nav_contact')}
          </Link>
          <button onClick={toggleLang} className="ml-4 text-sm px-3 py-1 rounded border border-gray-600 text-gray-200 hover:bg-gray-800 transition-colors">
            {t('lang_toggle')}
          </button>
        </div>
      </div>
    </nav>
  );
}