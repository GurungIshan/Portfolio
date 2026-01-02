import { Github, Linkedin, Mail, Code, Computer, Database, Server, SwatchBook, ExternalLink, Dna } from 'lucide-react';
import type { StaticImageData } from 'next/image';

export const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const heroData = {
  name: 'Ishan Gurung',
  role: 'Computer Application Student',
  tagline: 'Passionate about software development, web technologies, and crafting innovative solutions.',
};

export const aboutData = {
  summary: `I am a dedicated and enthusiastic Bachelor of Computer Application (BCA) student with a strong passion for software development and problem-solving. My academic journey has equipped me with a solid foundation in both frontend and backend technologies. I am proficient in languages and frameworks such as HTML, CSS, JavaScript, React, PHP, and Java Spring Boot. My experience extends to database management with MySQL and PostgreSQL, and I have a foundational understanding of machine learning with Python. I am a proactive learner, an active participant in hackathons, and committed to contributing to impactful real-world projects. I am currently seeking internships, entry-level developer roles, and freelance opportunities to apply my skills and grow as a professional.`,
  linkedinUrl: 'https://www.linkedin.com/in/ishan-gurung-9157ab25a/'
};

export type SkillCategory = {
  name: string;
  icon: React.ComponentType<any>;
  skills: { name: string }[];
};

export const skillsData: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: SwatchBook,
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'Bootstrap' },
      { name: 'Flutter' },
      { name: 'Dart' },
    ],
  },
  {
    name: 'Backend',
    icon: Server,
    skills: [
      { name: 'PHP' },
      { name: 'Java Spring Boot' },
      { name: 'ASP.NET Web API' },
    ],
  },
  {
    name: 'Database',
    icon: Database,
    skills: [
      { name: 'MySQL' },
      { name: 'PostgreSQL' },
    ],
  },
  {
    name: 'Machine Learning',
    icon: Dna,
    skills: [
        { name: 'Python' },
    ],
  },
  {
    name: 'Tools',
    icon: Computer,
    skills: [
      { name: 'Git & GitHub' },
      { name: 'VS Code' },
      { name: 'Docker (basics)' },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  imageId: string;
};

export const projectsData: Project[] = [
  {
    title: 'RefreshCart',
    description: 'A comprehensive eCommerce website built from the ground up, featuring product listings, shopping cart functionality, and user authentication.',
    techStack: ['PHP', 'Bootstrap', 'MySQL', 'JavaScript'],
    githubUrl: '#',
    liveDemoUrl: '#',
    imageId: 'refreshcart',
  },
  {
    title: 'Traffic Congestion Level Predictor',
    description: 'A machine learning project that analyzes traffic data to predict congestion levels, helping to optimize traffic flow in urban areas.',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter Notebook'],
    githubUrl: '#',
    imageId: 'traffic-predictor',
  },
  {
    title: 'Dot Connect',
    description: 'A hackathon project focused on Sustainable Development Goals (SDGs), creating a platform to connect volunteers with community projects.',
    techStack: ['React', 'Java Spring Boot', 'PostgreSQL'],
    githubUrl: '#',
    imageId: 'dot-connect',
  },
  {
    title: 'Cardio Crush Fitness Zone',
    description: 'A dynamic website for a gym, featuring class schedules, online booking, and secure payment integration for memberships.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Payment APIs'],
    githubUrl: '#',
    liveDemoUrl: '#',
    imageId: 'cardio-crush',
  },
];

export type Experience = {
    type: 'Experience' | 'Activity' | 'Education';
    title: string;
    organization: string;
    period: string;
    description: string;
};

export const experienceData: Experience[] = [
    {
        type: 'Education',
        title: 'Bachelor of Computer Application (BCA)',
        organization: 'Kathford International College',
        period: '2021 - Present',
        description: 'Pursuing a comprehensive degree in computer applications, focusing on software development, data structures, algorithms, and web technologies.'
    },
    {
        type: 'Experience',
        title: 'Upcoming Internship',
        organization: 'TBD',
        period: 'Starts September 2025',
        description: 'Eager to apply academic knowledge and technical skills in a professional software development environment.'
    },
    {
        type: 'Activity',
        title: 'College Representative',
        organization: 'Kathford International College',
        period: 'Feb 2025 - Jan 2026',
        description: 'Serving as a representative for the student body, bridging communication between students and faculty.'
    },
    {
        type: 'Activity',
        title: 'General Member',
        organization: 'Code for Change',
        period: 'Feb 2024 - Jan 2025',
        description: 'Volunteered for a "Code for Change" event, contributing to open-source projects aimed at social good and community development.'
    },
    {
        type: 'Activity',
        title: 'Hackathon Participant & Winner',
        organization: 'Codefest 2024',
        period: '2024',
        description: 'Participated in Codefest 2024, a competitive hackathon. My team\'s project "Dot Connect" won the People\'s Choice Award.'
    },
    {
        type: 'Experience',
        title: 'Frontend Training',
        organization: 'Online Platform',
        period: 'Feb 2024',
        description: 'Completed an intensive training program covering modern frontend development practices, including React and advanced CSS techniques.'
    },
];

export const contactData = {
    email: 'ishan.gurung@example.com',
    socials: [
        { name: 'GitHub', url: '#', icon: Github },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ishan-gurung-9157ab25a/', icon: Linkedin },
    ],
};
