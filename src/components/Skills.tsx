import React from 'react';
import { Code, Database, Layout, Server, Smartphone, Wrench } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Layout className="w-6 h-6 text-purple-500" />,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
  },
  {
    title: 'Backend Development',
    icon: <Server className="w-6 h-6 text-green-500" />,
    skills: ['Node.js', 'Python', 'Express', 'FastAPI']
  },
  {
    title: 'Database',
    icon: <Database className="w-6 h-6 text-blue-500" />,
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase']
  },
  {
    title: 'Mobile Development',
    icon: <Smartphone className="w-6 h-6 text-yellow-500" />,
    skills: ['React Native', 'Flutter', 'iOS', 'Android']
  },
  {
    title: 'Programming Languages',
    icon: <Code className="w-6 h-6 text-red-500" />,
    skills: ['JavaScript', 'Python', 'Java', 'C++']
  },
  {
    title: 'Tools & Others',
    icon: <Wrench className="w-6 h-6 text-orange-500" />,
    skills: ['Git', 'Docker', 'AWS', 'CI/CD']
  }
];

const Skills = () => {
  return (
    <Section id="skills" title="Skills & Expertise">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="p-6 hover:bg-gray-800 transition-colors">
            <div className="flex items-center mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold text-white ml-3">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-black/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Skills;