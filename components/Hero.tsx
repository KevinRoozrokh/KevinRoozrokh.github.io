import React, { useState, useEffect, useRef } from 'react';

interface HeroProps {
    onNavigate: (id: string) => void;
}

const TAGLINES = [
    "Full-Stack Software Engineer",
    "AI & Blockchain Specialist",
    "Building Scalable Web Solutions"
];

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
    const [taglineIndex, setTaglineIndex] = useState(0);
    const [typedTagline, setTypedTagline] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        const currentTagline = TAGLINES[taglineIndex];
        const typingSpeed = isDeleting ? 75 : 150;

        const handleTyping = () => {
            if (isDeleting) {
                setTypedTagline(currentTagline.substring(0, typedTagline.length - 1));
            } else {
                setTypedTagline(currentTagline.substring(0, typedTagline.length + 1));
            }

            if (!isDeleting && typedTagline === currentTagline) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && typedTagline === '') {
                setIsDeleting(false);
                setTaglineIndex((prevIndex) => (prevIndex + 1) % TAGLINES.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [typedTagline, isDeleting, taglineIndex]);

        return (
                <section id="hero" className="min-h-[30vh] flex flex-col justify-center items-start">
                        <div className="max-w-3xl">
                <p 
                  className="text-accent font-mono text-lg mb-4 initial-hidden animate-fade-in"
                  style={{ animationDelay: '100ms' }}
                >
                  <br></br><br></br>
                </p>
                <h1 
                  className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-dark-text initial-hidden animate-fade-in"
                  style={{ animationDelay: '200ms' }}
                >
                    Kevin Roozrokh
                </h1>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-600 dark:text-dark-text-secondary mt-2 h-30 initial-hidden animate-fade-in"
                    style={{ animationDelay: '300ms' }}
                >
                   {typedTagline}<span className="animate-pulse">|</span>
                </h2>
                <p 
                                    className="mt-4 text-base max-w-xl initial-hidden animate-fade-in"
                                    style={{ animationDelay: '300ms' }}
                >
                    I'm a software engineer specializing in building exceptional digital experiences with a focus on AI and Blockchain solutions. Currently, I’m focused on building accessible, human-centered products and leading high-performing remote teams.
                </p>
                <div 
                                    className="mt-8 initial-hidden animate-scale-in"
                                    style={{ animationDelay: '350ms' }}
                >
                    <button 
                        onClick={() => onNavigate('projects')}
                        className="px-8 py-4 border border-accent text-accent rounded-md font-mono hover:bg-accent/10 transition-all duration-300 animate-pulse-glow">
                        View Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
