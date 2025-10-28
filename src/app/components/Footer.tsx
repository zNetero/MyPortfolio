"use client";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; 
import { useLanguage } from '../i18n/LanguageProvider';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-8 bg-gray-900 border-t border-gray-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 mb-4 md:mb-0">
          © {new Date().getFullYear()} Giordano Bruno. {t('footer_rights')}
        </p>
        <div className="flex space-x-6">
          <a href="https://github.com/zNetero/zNetero" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:-translate-y-0.5">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/giordano-bruno-desenvolvedor" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:-translate-y-0.5">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/giordano_brun" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:-translate-y-0.5">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}