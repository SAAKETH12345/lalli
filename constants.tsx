import React from 'react';
import type { SkillCategory, Project, ExperienceItem } from './types';

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'C' },
      { name: 'C++' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Node.js' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'VS Code' },
      { name: 'Figma' },
      { name: 'Canva' },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Team Collaboration' },
      { name: 'Problem-Solving' },
      { name: 'Public Speaking' },
      { name: 'Adaptability' },
      { name: 'Time Management' },
    ],
  },
];


export const PROJECTS_DATA: Project[] = [
  {
    title: 'Interactive Task Manager',
    description: [
      'Developed a full web application that allows users to create, track, and manage tasks in real-time.',
      'Designed and built a responsive user interface using HTML, resulting in a 100% mobile-friendly experience.'
    ],
    tags: ['HTML', 'Web Application', 'Responsive Design'],
    imageUrl: 'https://images.unsplash.com/photo-1547480053-7d174f67b557?q=80&w=800&auto=format&fit=crop',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Modern Calculator App',
    description: [
      'A sleek, modern calculator with a reactive UI built using JavaScript.',
      'Features a theme switcher for light and dark modes, providing a personalized user experience.',
      'Includes support for keyboard input and a history of recent calculations.'
    ],
    tags: ['JavaScript', 'CSS', 'UI/UX', 'Web App'],
    imageUrl: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=800&auto=format&fit=crop',
    liveUrl: '#',
    sourceUrl: '#',
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
    {
    role: 'B.Tech in Computer Science & Engineering',
    company: 'Sreenidhi Institute of Science & Technology',
    period: 'Expected Graduation: Aug 2029',
    description: [
      'Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Web Development.',
    ],
  },
  {
    role: 'School Captain',
    company: 'Leadership & Responsibility',
    period: 'School Tenure',
    description: [
      'Served as a School Captain, demonstrating strong leadership and responsibility in a key student-led role.',
    ],
  },
   {
    role: 'Public Speaker',
    company: 'Communication Skills',
    period: 'Achievement',
    description: [
      'Honed public speaking and communication skills through presentations to audiences of over 100 people.',
    ],
  },
    {
    role: 'Hindi Language Proficiency',
    company: 'Dakshin Bharat Hindi Prachar Sabha',
    period: 'Certification',
    description: [
      'Achieved a degree equivalent certificate, demonstrating a commitment to advanced learning and cultural proficiency.',
    ],
  },
];

export const GITHUB_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <title>GitHub</title>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export const LINKEDIN_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <title>LinkedIn</title>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const EMAIL_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <title>Email</title>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export const EXTERNAL_LINK_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <title>External Link</title>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);