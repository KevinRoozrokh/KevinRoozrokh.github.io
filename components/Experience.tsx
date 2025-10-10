import React from 'react';
import Section from './Section';
import type { Experience as ExperienceType } from '../types';
import { useAnimationObserver } from './hooks/useAnimationObserver';

// Formal, concise experience entries derived from the user's resume.
const LOCAL_EXPERIENCES: ExperienceType[] = [
  {
    role: 'Principal Engineer · AI Consultant · Founder',
    company: 'Straw Hat AI · Remote',
    period: '2024 – Present',
    description: [
      'Founded and lead a distributed AI engineering team delivering production-grade AI solutions for legal, healthcare, and security domains.',
      'Designed and shipped a proprietary legal AI platform that reduced typical patent drafting cost and turnaround time dramatically (consumer-facing and enterprise integrations).',
      'Collaborated with Google Cloud partners to author and diagram a novel AI cybersecurity patent for agent-level threat mitigation.',
      'Trained LLMs with RAG pipelines and vector databases to accelerate patent drafting workflows and USPTO submission processes.'
    ]
  },
  {
    role: 'Chief Technology Officer (Contract)',
    company: 'MitigatePros LLC · Denver, CO (Remote)',
    period: '2023 – 2024',
    description: [
      'Co‑founded and scaled a disaster remediation and recovery service from inception to a $5M valuation within one year.',
      'Architected an AI-driven fleet and asset tracking system that improved operational efficiency by ~50%.',
      'Developed a proprietary Legal AI claims negotiation system that increased per-claim margins by over 30%.'
    ]
  },
  {
    role: 'Chief Technology Officer (Contract)',
    company: 'Vanguard Healthcare Solutions · Dallas, TX',
    period: '2022 – 2023',
    description: [
      'Engineered a HIPAA-compliant EMR on Google Cloud serving 1,200+ patients and 150+ providers.',
      'Delivered AI-driven diagnostic and record automation tools to streamline clinical workflows and improve outcomes.',
      'Led a cross-functional engineering organization (25+ engineers) and made technical executive decisions for large-scale deployments.'
    ]
  },
  {
    role: 'Software Engineering Manager · Founder',
    company: 'Bitcoin Mining Corporation · Dallas, TX',
    period: '2016 – 2022',
    description: [
      'Founded and operated high-efficiency mining facilities, negotiating and managing up to 100MW energy contracts.',
      'Directed engineering teams (100+ personnel) building blockchain infrastructure, smart contracts, and associated tooling.',
      'Delivered full-stack solutions using JavaScript, React, Python and Solidity, and deployed services to Google Cloud and Firebase.'
    ]
  },
  {
    role: 'Software Engineering Manager · Apex Systems Consultant',
    company: 'Robert W. Baird & Co. · McLean, VA',
    period: '2013 – 2016',
    description: [
      'Led 12 teams (60 engineers) through a large-scale infrastructure modernization and hybrid cloud migration across 58 offices.',
      'Oversaw deployment of servers, networking, and endpoints in a secure banking environment, delivering a 3× productivity improvement post-migration.'
    ]
  },
  {
    role: 'Senior Software Engineer · Spherion Consultant',
    company: 'The World Bank · Washington, DC',
    period: '2008 – 2013',
    description: [
      'Developed intranet applications and provided DevSecOps administration across Linux and Windows environments.',
      'Implemented secure web interfaces using HTML, CSS, JavaScript and PHP to support global stakeholders.'
    ]
  },
  {
    role: 'Software Engineer · Spherion Consultant',
    company: 'International Monetary Fund · Washington, DC',
    period: '2004 – 2008',
    description: [
      'Developed intranet systems and provided LAMP-stack backend support.',
      'Delivered reliable internal tools and supported ongoing operations for global teams.'
    ]
  }
];

const ExperienceItem: React.FC<{ exp: ExperienceType, index: number }> = ({ exp, index }) => {
    const [itemRef, isVisible] = useAnimationObserver<HTMLDivElement>({ threshold: 0.2 });

    const isEven = index % 2 === 0;
    const animationClass = isEven ? 'animate-slide-in-left' : 'animate-slide-in-right';

    return (
        <div 
            ref={itemRef} 
            className={`md:grid md:grid-cols-2 md:gap-x-12 items-start relative initial-hidden ${isVisible ? animationClass : ''}`}
        >
            <div className={`md:flex ${isEven ? 'md:justify-end md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}`}>
                <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text">{exp.role}</h3>
                    <p className="text-accent font-semibold">{exp.company}</p>
                    <p className="text-sm font-mono text-gray-500 dark:text-dark-text-secondary">{exp.period}</p>
                </div>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full ring-8 ring-white dark:ring-dark-bg hidden md:block mt-1"></div>

            <div className={`p-6 bg-white dark:bg-dark-card rounded-lg shadow-md md:col-start-${isEven ? '2' : '1'} md:row-start-1`}>
                <ul className="list-disc list-inside space-y-2">
                    {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700 hidden md:block"></div>

        <div className="space-y-12 md:space-y-0 md:flex md:flex-col md:gap-y-12">
          {LOCAL_EXPERIENCES.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} index={index} />
          ))}
        </div>
        <div className="text-center mt-16">
            <a href="/kevin-roozrokh-resume.pdf" download
                className="px-8 py-4 border border-accent text-accent rounded-md font-mono hover:bg-accent/10 transition-colors duration-300">
                Download Resume
            </a>
        </div>
      </div>
    </Section>
  );
};

export default Experience;