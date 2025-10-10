import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';
import type { Skill } from '../types';
import { useAnimationObserver } from './hooks/useAnimationObserver';

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
    const [cardRef, isVisible] = useAnimationObserver<HTMLDivElement>({ threshold: 0.1 });

    return (
        <div 
            ref={cardRef}
            style={{ animationDelay: `${index * 100}ms` }}
            className={`bg-white dark:bg-dark-card p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 flex flex-col justify-between initial-hidden ${isVisible ? 'animate-slide-up' : ''}`}
        >
            <div>
                <div className="flex items-center mb-4">
                    <div className="text-accent w-8 h-8 mr-4">{skill.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <div 
                        className={`bg-accent h-2.5 rounded-full ${isVisible ? 'animate-progress-bar' : ''}`}
                        style={{ '--progress-width': `${skill.level}%`, animationDelay: `${index * 100 + 200}ms` } as React.CSSProperties}
                    ></div>
                </div>
            </div>
            <p className="text-right text-sm mt-2 text-gray-500 dark:text-dark-text-secondary">{skill.level}% Proficient</p>
        </div>
    );
};

const Skills: React.FC = () => {
    const categories: Skill['category'][] = ['Cloud', 'Frontend', 'Backend', 'Blockchain', 'Tools & OS'];
    return (
        <Section id="skills" title="My Skills">
            <div className="space-y-12">
                {categories.map(category => (
                    <div key={category}>
                        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-dark-text">{category}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {SKILLS.filter(s => s.category === category).map((skill, index) => (
                                <SkillCard key={skill.name} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
