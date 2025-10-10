import React from 'react';
import { useAnimationObserver } from './hooks/useAnimationObserver';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  const [titleRef, isVisible] = useAnimationObserver<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id={id} className="py-20 md:py-28">
      <div 
        ref={titleRef}
        className={`text-center mb-12 initial-hidden ${isVisible ? 'animate-slide-up' : ''}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-text">
          {title}
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
      </div>
      {children}
    </section>
  );
};

export default Section;