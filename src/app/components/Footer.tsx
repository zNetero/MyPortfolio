import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Instale: npm install react-icons

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 border-t border-gray-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 mb-4 md:mb-0">
          © {new Date().getFullYear()} Giordano Bruno. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="https://github.com/zNetero/zNetero" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/giordano-bruno-desenvolvedor" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}