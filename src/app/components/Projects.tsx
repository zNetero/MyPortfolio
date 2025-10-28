"use client";
import Image from 'next/image';
import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageProvider';
type Project = {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
  imgUrl?: string;
};

function ProjectCard({ title, description, imgUrl, githubUrl, liveUrl }: Project) {
  const { t } = useLanguage();
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-transform duration-200 hover:scale-[1.02] hover:shadow-2xl">
      {imgUrl ? (
        <Image 
          src={imgUrl} 
          alt={title} 
          width={500} 
          height={300} 
          className="w-full h-48 object-cover" 
        />
      ) : null}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex space-x-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            {t('projects_github')}
          </a>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            {t('projects_live')}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  
  const myProjects: Project[] = [
    {
      title: 'Finance Control API',
      description: 'API built with JavaScript, Sequelize, and PostgreSQL focused on scalability and performance.',
      githubUrl: 'https://github.com/zNetero/Finance-API',
      liveUrl: '#', 
    },
    {
      title: 'Contact Control API',
      description: 'Create, list, and update contacts using Node.js, Express, and PostgreSQL.',
      githubUrl: 'https://github.com/zNetero/API-de-Contatos',
      liveUrl: '#',
    },
    {
      title: 'Love Distance',
      description: 'A full-stack app built with React, Node.js, and TypeScript to help long-distance couples stay connected.',
      githubUrl: 'https://github.com/zNetero/love-distance-site',
      liveUrl: 'https://love-distance-frontend.vercel.app/dashboard',
      imgUrl: '/image.png',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 glow-title">{t('projects_title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project) => (
            <Reveal key={project.title}>
              <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}