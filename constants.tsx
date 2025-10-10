import React from 'react';
import type { Project, Skill, Experience, BlogArticle } from './types';
import { ReactIcon, NodeIcon, TailwindIcon, AWSIcon, DockerIcon, PythonIcon, VueIcon, ExpressIcon, SQLIcon, NoSQLIcon, CICDIcon, MLIcon, GoogleCloudIcon, FirebaseIcon, VSCodeIcon, TypeScriptIcon, PHPIcon, SolidityIcon, EthereumIcon, MetaMaskIcon, GraphQLIcon, ToolIcon } from './components/icons/TechIcons';

export const SKILLS: Skill[] = [
  // Cloud
  { name: 'AWS', level: 75, category: 'Cloud', icon: <AWSIcon /> },
  { name: 'Google Cloud', level: 70, category: 'Cloud', icon: <GoogleCloudIcon /> },
  { name: 'Firebase', level: 85, category: 'Cloud', icon: <FirebaseIcon /> },
  { name: 'Firestore', level: 85, category: 'Cloud', icon: <FirebaseIcon /> },
  // Frontend
  { name: 'React.js', level: 90, category: 'Frontend', icon: <ReactIcon /> },
  { name: 'React Native', level: 85, category: 'Frontend', icon: <ReactIcon /> },
  { name: 'JavaScript', level: 95, category: 'Frontend', icon: <ToolIcon /> },
  { name: 'TypeScript', level: 85, category: 'Frontend', icon: <TypeScriptIcon /> },
  { name: 'HTML5', level: 95, category: 'Frontend', icon: <ToolIcon /> },
  { name: 'CSS3', level: 95, category: 'Frontend', icon: <TailwindIcon /> },
  { name: 'Expo', level: 80, category: 'Frontend', icon: <ToolIcon /> },
  // Backend
  { name: 'Node.js', level: 85, category: 'Backend', icon: <NodeIcon /> },
  { name: 'Express.js', level: 85, category: 'Backend', icon: <ExpressIcon /> },
  { name: 'NoSQL', level: 75, category: 'Backend', icon: <NoSQLIcon /> },
  { name: 'GraphQL', level: 70, category: 'Backend', icon: <GraphQLIcon /> },
  { name: 'PHP', level: 70, category: 'Backend', icon: <PHPIcon /> },
  { name: 'MERN Stack', level: 90, category: 'Backend', icon: <ReactIcon /> },
  { name: 'LAMP Stack', level: 70, category: 'Backend', icon: <PHPIcon /> },
  // Blockchain
  { name: 'Solidity', level: 80, category: 'Blockchain', icon: <SolidityIcon /> },
  { name: 'Ethereum', level: 80, category: 'Blockchain', icon: <EthereumIcon /> },
  { name: 'Ethers.js', level: 75, category: 'Blockchain', icon: <ToolIcon /> },
  { name: 'Remix IDE', level: 85, category: 'Blockchain', icon: <ToolIcon /> },
  { name: 'Ganache', level: 75, category: 'Blockchain', icon: <ToolIcon /> },
  { name: 'Truffle', level: 70, category: 'Blockchain', icon: <ToolIcon /> },
  { name: 'MetaMask', level: 90, category: 'Blockchain', icon: <MetaMaskIcon /> },
  // Tools & OS
  { name: 'VS Code', level: 95, category: 'Tools & OS', icon: <VSCodeIcon /> },
  { name: 'Kali', level: 65, category: 'Tools & OS', icon: <ToolIcon /> },
  { name: 'Ubuntu', level: 75, category: 'Tools & OS', icon: <ToolIcon /> },
  { name: 'Mac OS X', level: 90, category: 'Tools & OS', icon: <ToolIcon /> },
  { name: 'Windows', level: 90, category: 'Tools & OS', icon: <ToolIcon /> },
  { name: 'Oracle VM', level: 70, category: 'Tools & OS', icon: <ToolIcon /> },
];


export const PROJECTS: Project[] = [
  {
    title: 'DesktopCommander MCP Server',
    description: 'Developed an AI-powered server with a RAG knowledge base, enabling advanced conversational capabilities using OpenAI’s ChatGPT GPTs. Supports 100+ concurrent users.',
    tags: ['OpenAI API', 'RAG', 'Node.js'],
  image: '/images/github-banner-16-9.jpg',
    repoUrl: 'https://github.com/kevinroozrokh/desktopcommander',
    category: 'AI',
  },
  {
    title: 'Patent Prodigy AI GPT',
    description: 'Built an AI GPT for drafting provisional utility patents, streamlining legal document creation with high accuracy.',
    tags: ['OpenAI API', 'Node.js'],
  image: '/images/openai-icon.png',
    repoUrl: 'https://github.com/kevinroozrokh/patent-prodigy',
    category: 'AI',
  },
  {
    title: 'Legal Eagle AI GPT',
    description: 'Created an AI GPT for legal analysis, integrating natural language processing for contract review and compliance.',
    tags: ['OpenAI API', 'Node.js', 'NLP'],
  image: '/images/github-banner-16-9.jpg',
    repoUrl: 'https://github.com/kevinroozrokh/legal-eagle',
    category: 'AI',
  },
  {
    title: 'AI Engineer Bank AI GPT',
    description: 'Developed an AI-driven banking assistant, automating financial queries and transaction analysis.',
    tags: ['OpenAI API', 'Node.js', 'FinTech'],
  image: '/images/coinbase.jpg',
    repoUrl: 'https://github.com/kevinroozrokh/ai-engineer-bank',
    category: 'AI',
  },
  {
    title: 'Straw Hat AI',
    description: 'Coded an AI conversational app using DesktopCommander AI Agents, Anthropic Claude, and DALL-E for text and image generation.',
    tags: ['OpenAI API', 'DALL-E', 'Anthropic Claude'],
  image: '/images/google-cloud-platform.png',
    repoUrl: 'https://github.com/kevinroozrokh/straw-hat-ai',
    category: 'AI',
  },
  {
    title: 'ChatGPT Clone (React App)',
    description: 'Built a ChatGPT clone with integrated DALL-E image generation, featuring a unified chat and image interface. Processed 1,000+ user queries with 99% uptime.',
    tags: ['React', 'Node.js', 'OpenAI API', 'Firebase'],
  image: '/images/ChatGPT-OpenAI.jpg',
    repoUrl: 'https://github.com/kevinroozrokh/chatgpt-clone',
    category: 'AI',
  },
  {
    title: 'MinerMint (Token Minter)',
    description: 'Developed a no-code ERC-20 and ERC-721 token minter, simplifying blockchain token creation for non-developers.',
    tags: ['JavaScript', 'Solidity', 'Ethereum', 'Ethers.js'],
  image: '/images/miner-token.png',
    repoUrl: 'https://github.com/kevinroozrokh/minermint',
    category: 'Blockchain',
  },
  {
    title: 'Global Legal Ledger',
    description: 'Designed a blockchain-based legal ledger for transparent contract management and verification.',
    tags: ['Solidity', 'Ethereum', 'React'],
  image: '/images/ethereum.jpg',
    repoUrl: 'https://github.com/kevinroozrokh/global-legal-ledger',
    category: 'Blockchain',
  },
  {
    title: 'Robinhood Clone',
    description: 'Created a stock trading app UI with real-time data integration using FinnHub API and Firebase for data management.',
    tags: ['React', 'Material UI', 'FinnHub API', 'Firebase'],
  image: '/images/Robinhood.png',
    repoUrl: 'https://github.com/kevinroozrokh/robinhood-clone',
    category: 'Web',
  },
  {
    title: 'Amazon Clone',
    description: 'Built an e-commerce platform with payment processing and social logins, reducing checkout time by 30%.',
    tags: ['React', 'Context API', 'Stripe API', 'Firebase'],
  image: '/images/amazon.jpg',
    repoUrl: 'https://github.com/kevinroozrokh/amazon-clone',
    category: 'Web',
  },
  {
    title: 'Twitter Clone',
    description: 'Developed a Twitter-like social media app with tweet and image upload functionality using Firebase for backend services.',
    tags: ['React', 'Material UI', 'Firebase'],
  image: '/images/twitter.jpg',
    repoUrl: 'https://github.com/kevinroozrokh/twitter-clone',
    category: 'Web',
  },
  {
    title: 'Covid-19 Tracker',
    description: 'Built a global Covid-19 tracker with interactive maps using Leaflet.js and real-time data from public APIs.',
    tags: ['JavaScript', 'Leaflet.js', 'Firebase'],
  image: '/images/covid-tracker.jpg',
    repoUrl: 'https://github.com/kevinroozrokh/covid-tracker',
    category: 'Web',
  },
  {
    title: 'Spotify Clone',
    description: 'Created a music streaming app UI with Spotify API integration for playback and social logins for user authentication.',
    tags: ['React', 'Spotify API', 'Material UI'],
  image: '/images/spotify.jpg',
    repoUrl: 'https://github.com/kevinroozrokh/spotify-clone',
    category: 'Web',
  },
  {
    title: 'Signal Clone',
    description: 'Developed a secure messaging app with one-step social logins using React Native for cross-platform deployment.',
    tags: ['React Native', 'Firebase', 'Social Logins'],
  image: '/images/signal.jpg',
    repoUrl: 'https://github.com/kevinroozrokh/signal-clone',
    category: 'Mobile',
  },
  {
    title: 'Patent Prodigy Patent Filing',
    description: 'Authored and filed a provisional utility patent for an AI-based patent drafting tool, showcasing legal-tech innovation.',
    tags: ['LegalTech', 'Intellectual Property'],
  image: '/images/solidity.jpg',
    repoUrl: 'https://github.com/kevinroozrokh/patent-prodigy-patent',
    category: 'AI',
  },
   {
    title: 'Social Genius Patent Filing',
    description: 'Created and filed a provisional patent for a social media AI tool designed to enhance user engagement through predictive analytics.',
    tags: ['AI', 'Social Media', 'Intellectual Property'],
  image: '/images/solidity.jpg',
    repoUrl: 'https://github.com/kevinroozrokh/social-genius-patent',
    category: 'AI',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Senior Full-Stack Engineer',
    company: 'Innovatech Solutions (Remote)',
    period: 'Jan 2021 - Present',
    description: [
      'Led the development of a multi-tenant SaaS platform, reducing page load times by 40% through performance optimization.',
      'Designed and implemented a microservices architecture using Node.js and Docker, improving system scalability and resilience.',
      'Mentored junior engineers on best practices for remote collaboration, code quality, and agile methodologies.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'DataStream Corp.',
    period: 'Jun 2018 - Dec 2020',
    description: [
      'Developed and maintained client-side features for a high-traffic web application using React and Redux.',
      'Built and consumed RESTful APIs, contributing to a 20% increase in data processing efficiency.',
      'Collaborated with UX/UI designers to create responsive and accessible user interfaces.',
    ],
  },
  {
    role: 'Junior Web Developer',
    company: 'Creative Web Agency',
    period: 'Jul 2016 - May 2018',
    description: [
      'Built custom WordPress themes and plugins for a variety of clients.',
      'Translated design mockups into pixel-perfect, responsive websites using HTML, CSS, and JavaScript.',
      'Gained foundational experience in version control with Git and project management with Jira.',
    ],
  },
];


export const BLOG_ARTICLES: BlogArticle[] = [
  {
    title: 'Mastering Asynchronous Communication for Remote Teams',
    excerpt: 'Discover the tools and workflows that top remote teams use to stay productive and aligned without constant meetings.',
    imageUrl: 'https://picsum.photos/seed/blog1/400/300',
    link: '#',
  },
  {
    title: 'Building Scalable APIs with Node.js and Microservices',
    excerpt: 'A deep dive into designing a resilient backend architecture that can handle growth and complexity with ease.',
    imageUrl: 'https://picsum.photos/seed/blog2/400/300',
    link: '#',
  },
  {
    title: 'The Rise of AI in Software Development',
    excerpt: 'Exploring how AI-powered tools are changing the game for developers, from code generation to automated testing.',
    imageUrl: 'https://picsum.photos/seed/blog3/400/300',
    link: '#',
  },
];
