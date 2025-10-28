import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center text-center"
    >
      <div className="max-w-2xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I am <span className="text-blue-400">Giordano Bruno</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Computer Science Student | Backend Developer
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg"
          >
            My Projects
          </a>
          <a
            href="/RESUME-GIORDANO.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg"
          >
            Download CV
          </a>
        </div>
        <div className="flex justify-center mt-6 space-x-6 text-gray-400">
          <a href="https://github.com/zNetero/zNetero" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-transform hover:scale-110" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/giordano-bruno-desenvolvedor" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-transform hover:scale-110" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/giordano_brun" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-transform hover:scale-110" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}