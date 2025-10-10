import React from 'react';

export interface Skill {
  name: string;
  level: number;
  category: 'Cloud' | 'Frontend' | 'Backend' | 'Blockchain' | 'Tools & OS';
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  repoUrl: string;
  category: 'AI' | 'Blockchain' | 'Web' | 'Mobile';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface BlogArticle {
  title: string;
  excerpt: string;
  imageUrl: string;
  link: string;
}
