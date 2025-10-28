type Skill = {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
};

type SkillGroup = {
  title: string;
  skills: Skill[];
};

import Reveal from './Reveal';

export default function Skills() {
  const groups: SkillGroup[] = [
    { 
      title: 'Frontend Development', 
      skills: [
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'TypeScript', level: 'Intermediate' },
        { name: 'React.js / Next.js', level: 'Intermediate' },
        { name: 'HTML5', level: 'Intermediate' },
        { name: 'CSS3 / Tailwind CSS', level: 'Intermediate' },
        { name: 'Git', level: 'Intermediate' },
      ] 
    },
    { 
      title: 'Backend Development', 
      skills: [
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'Express.js', level: 'Intermediate' },
        { name: 'NestJS', level: 'Intermediate' },
        { name: 'PHP', level: 'Intermediate' },
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'Sequelize', level: 'Intermediate' },
        { name: 'TypeORM', level: 'Beginner' },
        { name: 'Redis', level: 'Beginner' },
      ] 
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 glow-title">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {groups.map((group) => (
            <Reveal key={group.title} className="rounded-2xl bg-gray-800/60 p-6 shadow transition-transform duration-200 hover:scale-[1.01] hover:shadow-2xl">
              <h3 className="text-xl font-semibold mb-6 text-blue-300">{group.title}</h3>

              {group.skills.length === 0 ? (
                <p className="text-gray-400"></p>
              ) : (
                <ul className="space-y-4">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400 px-2 py-1 rounded bg-gray-700/60 border border-gray-600/40">
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


