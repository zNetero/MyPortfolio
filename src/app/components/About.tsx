import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/Foto-1-100.jpg"
              alt="Your Photo"
              width={300}
              height={300}
              className="rounded-full object-cover shadow-lg"
            />
          </div>
          
          <div>
            <p className="text-lg text-gray-300 mb-4">
              I'm a Software Developer, passionate about solving 
              problems and building efficient solutions
            </p>
            <p className="text-lg text-gray-300">
              I specialize in backend technologies like <strong>TypeScript, Node.js, and PHP</strong>, and I am always looking for the next opportunity to learn and build.
              I'm always learning and seeking new challenges to grow as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}