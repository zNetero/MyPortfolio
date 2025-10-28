import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-900 bg-opacity-80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
        Giordano Bruno
        </Link>
        
        <div className="hidden md:flex space-x-6 text-lg">
          <Link href="#about" className="hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="#projects" className="hover:text-blue-400 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}