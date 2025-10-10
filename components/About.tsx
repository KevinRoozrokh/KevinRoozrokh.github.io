import React from 'react';
import Section from './Section';
import { useAnimationObserver } from './hooks/useAnimationObserver';


const About: React.FC = () => {
    const [imgRef, isImgVisible] = useAnimationObserver<HTMLImageElement>({ threshold: 0.1 });
    const [statsRef, areStatsVisible] = useAnimationObserver<HTMLDivElement>({ threshold: 0.1 });

    return (
        <Section id="about" title="About Me">
            <div className="grid grid-cols-1 gap-12 items-start text-center md:text-left md:grid-cols-1 md:justify-items-center">
                <div className="md:col-span-3 max-w-3xl">
                    <p className="mb-4">
                        I’m Kevin Roozrokh, a passionate Full-Stack Software Engineer with 20+ years of experience building scalable web and blockchain applications. My journey into tech began with a fascination for how a few lines of code could make a MySpace page come to life. Today, I channel that passion into building high-quality software, system designs and patents that solves real-world problems.
                    </p>
                    <p className="mb-4">
                        Specializing in Typescript, Javascript, React, and AI-driven solutions, I’ve developed a wide range of projects, from a ChatGPT clone with DALL-E integration to no-code ERC-20 token minters. I thrive in remote environments, leveraging tools like NoteBookLM, Git, Slack, and Jira to deliver high-impact solutions and foster effective collaboration.
                    </p>
                    <p className="mb-8">
                         As a dedicated remote professional, I believe clear communication and a proactive mindset are key to successful teamwork. When I'm not coding, I enjoy exploring new technologies, contributing to open-source, and mentoring aspiring developers.
                    </p>
                    <div ref={statsRef} className={`initial-hidden ${areStatsVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '300ms' }}>
                        <div className="w-full rounded-lg bg-white dark:bg-dark-card p-6 shadow-md border border-gray-200 dark:border-gray-700/50">
                            <div className="flex items-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-accent mr-3">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                                <h3 className="font-bold text-lg text-gray-900 dark:text-dark-text">Kevin Roozrokh's GitHub Stats</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 font-mono text-sm">
                                <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700/50 py-2">
                                    <span className="text-gray-500 dark:text-dark-text-secondary">Total Stars Earned:</span>
                                    <span className="font-bold text-gray-800 dark:text-dark-text">1.2k</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700/50 py-2">
                                    <span className="text-gray-500 dark:text-dark-text-secondary">Commits (This Year):</span>
                                    <span className="font-bold text-gray-800 dark:text-dark-text">500+</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700/50 py-2">
                                    <span className="text-gray-500 dark:text-dark-text-secondary">Total PRs:</span>
                                    <span className="font-bold text-gray-800 dark:text-dark-text">212</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700/50 py-2">
                                    <span className="text-gray-500 dark:text-dark-text-secondary">Total Issues:</span>
                                    <span className="font-bold text-gray-800 dark:text-dark-text">88</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700/50 py-2">
                                    <span className="text-gray-500 dark:text-dark-text-secondary">Contributed to:</span>
                                    <span className="font-bold text-gray-800 dark:text-dark-text">25 Repos</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700/50 py-2">
                                    <span className="text-gray-500 dark:text-dark-text-secondary">GitHub Rank:</span>
                                    <span className="font-bold text-accent text-lg">A+</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white dark:bg-dark-card p-4 rounded-lg shadow-md text-center">
                                <p className="text-3xl font-bold text-accent">356</p>
                                <p className="text-sm text-gray-600 dark:text-dark-text-secondary mt-1">Total Commits for Clients</p>
                            </div>
                            <div className="bg-white dark:bg-dark-card p-4 rounded-lg shadow-md text-center">
                                <p className="text-3xl font-bold text-accent">18</p>
                                <p className="text-sm text-gray-600 dark:text-dark-text-secondary mt-1">Open Source Contributions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;