import React from 'react';
import Section from './Section';
import { GitHubIcon, LinkedInIcon, TwitterIcon, StackOverflowIcon } from './SocialIcons';
import { useAnimationObserver } from './hooks/useAnimationObserver';

const SOCIAL_LINKS = [
    { name: 'GitHub', icon: <GitHubIcon />, url: 'https://github.com/kevinroozrokh' },
    { name: 'LinkedIn', icon: <LinkedInIcon />, url: 'https://linkedin.com/in/kevinroozrokh' },
    { name: 'Twitter', icon: <TwitterIcon />, url: 'https://x.com/kevinroozrokh' },
    { name: 'Stack Overflow', icon: <StackOverflowIcon />, url: 'https://stackoverflow.com/users/kevinroozrokh' },
];

const SocialLink: React.FC<{ link: typeof SOCIAL_LINKS[0]; index: number }> = ({ link, index }) => {
    const [ref, isVisible] = useAnimationObserver<HTMLAnchorElement>({ threshold: 0.1 });
    return (
        <a 
            ref={ref}
            href={link.url} target="_blank" rel="noopener noreferrer" 
            className={`text-gray-500 dark:text-dark-text-secondary hover:text-accent dark:hover:text-accent transform hover:scale-125 transition-all duration-300 initial-hidden ${isVisible ? 'animate-scale-in' : ''}`}
            aria-label={link.name}
            style={{ animationDelay: `${300 + index * 100}ms` }}
        >
            <div className="w-8 h-8">{link.icon}</div>
        </a>
    );
};


const Contact: React.FC = () => {
    const [pRef, pIsVisible] = useAnimationObserver<HTMLParagraphElement>({ threshold: 0.1 });
    const [buttonRef, buttonIsVisible] = useAnimationObserver<HTMLAnchorElement>({ threshold: 0.1 });

    return (
        <Section id="contact" title="Get In Touch">
            <div className="max-w-2xl mx-auto text-center">
                <p 
                    ref={pRef}
                    className={`mb-8 initial-hidden ${pIsVisible ? 'animate-multi-stage' : ''}`}
                    style={{ animationDelay: '100ms' }}
                >
                    I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open. I'll get back to you as soon as possible!
                </p>
                
                <a 
                    ref={buttonRef}
                    href="mailto:kevin@roozrokh.dev" 
                    className={`inline-block px-8 py-4 border border-accent text-accent rounded-md font-mono hover:bg-accent/10 transition-colors duration-300 text-lg initial-hidden ${buttonIsVisible ? 'animate-scale-in' : ''}`}
                    style={{ animationDelay: '200ms' }}
                >
                    Say Hello
                </a>

                <div className="mt-12 flex justify-center space-x-6">
                    {SOCIAL_LINKS.map((link, index) => (
                        <SocialLink key={link.name} link={link} index={index} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Contact;
