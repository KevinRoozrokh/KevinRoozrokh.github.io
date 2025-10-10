import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-white dark:bg-dark-bg py-6 text-center text-gray-500 dark:text-dark-text-secondary border-t border-gray-200 dark:border-gray-800">
            <div className="relative container mx-auto px-6">
                <p className="font-mono text-sm">
                    &copy; {currentYear} Kevin Roozrokh. All Rights Reserved.
                </p>
                <p className="text-xs mt-2">
                    Designed & Built by Kevin Roozrokh
                </p>
                <button 
                    onClick={scrollToTop}
                    className="absolute -top-12 right-6 md:right-12 lg:right-24 p-3 bg-accent text-dark-bg rounded-full shadow-lg hover:bg-accent-hover transform hover:scale-110 transition-all duration-300 focus:outline-none"
                    aria-label="Back to top"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            </div>
        </footer>
    );
};

export default Footer;