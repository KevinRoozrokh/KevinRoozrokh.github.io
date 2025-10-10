import React from 'react';
import Section from './Section';
import { BLOG_ARTICLES } from '../constants';
import type { BlogArticle } from '../types';
import { useAnimationObserver } from './hooks/useAnimationObserver';

const BlogCard: React.FC<{ article: BlogArticle; index: number }> = ({ article, index }) => {
    const [cardRef, isVisible] = useAnimationObserver<HTMLDivElement>({ threshold: 0.1 });

    return (
        <div 
            ref={cardRef}
            style={{ animationDelay: `${index * 100}ms` }}
            className={`bg-white dark:bg-dark-card rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 initial-hidden ${isVisible ? 'animate-multi-stage' : ''}`}
        >
            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-dark-text mb-2">{article.title}</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">{article.excerpt}</p>
                <a href={article.link} className="font-semibold text-accent hover:text-accent-hover transition-colors duration-300">
                    Read More &rarr;
                </a>
            </div>
        </div>
    );
};

const Blog: React.FC = () => {
    return (
        <Section id="blog" title="My Writings">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_ARTICLES.map((article, index) => (
                    <BlogCard key={article.title} article={article} index={index} />
                ))}
            </div>
        </Section>
    );
};

export default Blog;