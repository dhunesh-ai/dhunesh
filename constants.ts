import { Skill, Project } from './types';

// --- 1. ICON CONSTANTS (Clean URLs) ---

const EXCEL_ICON_SVG = "https://cdn.worldvectorlogo.com/logos/microsoft-excel-2013.svg";
const PPT_ICON_SVG = "https://cdn.worldvectorlogo.com/logos/microsoft-powerpoint-2013.svg";
// Updated Word Link (More reliable)
// Microsoft Word (Stable Wikipedia Link - No special characters)
// Ideally, use this one:
//const WORD_ICON_SVG = "https://cdn.worldvectorlogo.com/logos/microsoft-word-2013.svg";

const SQL_ICON_SVG = "https://cdn.worldvectorlogo.com/logos/sqlite.svg";
const POSTGRESQL_ICON_SVG = "https://cdn.worldvectorlogo.com/logos/postgresql.svg";

const PANDAS_ICON_SVG = "https://cdn.worldvectorlogo.com/logos/pandas.svg";
const NUMPY_ICON_SVG = "https://cdn.worldvectorlogo.com/logos/numpy-1.svg";
const MATPLOTLIB_ICON_SVG = "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg";

const VSCODE_ICON_SVG = "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg";
const PYCHARM_ICON_SVG = "https://cdn.worldvectorlogo.com/logos/pycharm.svg";
const TABLEAU_ICON_SVG = "https://cdn.worldvectorlogo.com/logos/tableau-software.svg";


// --- 2. TECH STACK ARRAY ---

export const TECH_STACK = [
  { name: 'Python', slug: 'python' },
  { name: 'R', slug: 'r' },
  // Fixed: Added customIcon
  { name: 'SQL', slug: 'sqlite', customIcon: SQL_ICON_SVG }, 
  { name: 'Pandas', slug: 'pandas', customIcon: PANDAS_ICON_SVG },
  { name: 'NumPy', slug: 'numpy', customIcon: NUMPY_ICON_SVG },
  { name: 'Matplotlib', slug: 'matplotlib', customIcon: MATPLOTLIB_ICON_SVG },
  // Fixed: Added customIcon
  { name: 'PostgreSQL', slug: 'postgresql', customIcon: POSTGRESQL_ICON_SVG }, 
  { name: 'VS Code', slug: 'visualstudiocode', customIcon: VSCODE_ICON_SVG },
  { name: 'PyCharm', slug: 'pycharm', customIcon: PYCHARM_ICON_SVG },
  { name: 'Excel', slug: 'microsoftexcel', customIcon: EXCEL_ICON_SVG },
  { name: 'PowerPoint', slug: 'microsoftpowerpoint', customIcon: PPT_ICON_SVG },
  //{ name: 'Word', slug: 'microsoftword', customIcon: WORD_ICON_SVG },
  { name: 'Tableau', slug: 'tableau', customIcon: TABLEAU_ICON_SVG },
  { name: 'GitHub', slug: 'github' },
  { name: 'Git', slug: 'git' }
];

// --- 3. SKILLS & EXPERIENCE ---

export const SKILLS: Skill[] = [
  { name: 'Problem-Solving', level: 85, icon: 'Puzzle' },
  { name: 'Machine Learning', level: 92, icon: 'Cpu' },
  { name: 'Deep Learning', level: 78, icon: 'Brain' },
  { name: 'Data Visualization', level: 95, icon: 'BarChart' },
  { name: 'Statistical Analysis', level: 88, icon: 'Sigma' },
  { name: 'Cloud Computing', level: 75, icon: 'Cloud' },
];

export const EDUCATION = [
  {
    institution: 'Saveetha University',
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    date: '2023 — 2027',
    description: "I'm currently Pursuing my studies in Saveetha School of Engineering.",
    location: 'Chennai, India'
  },
  {
    institution: 'R V Matriculation Higher Secondary School',
    degree: 'Higher Secondary Education',
    date: '2010 — 2023',
    description: 'Completed schooling (1st - 12th) with focus on science (Biology) and mathematics.',
    location: 'Tamil Nadu, India'
  }
];

export const EXPERIENCE = [
  {
    company: 'Extech Digital',
    role: 'Data Science Intern',
    date: 'July 2025 — September 2025',
    description: 'Completed a 3-month internship focused on end-to-end data workflows. Applied machine learning techniques to develop models for actionable insights, handled data cleaning, feature engineering, and predictive modeling using Python and Pandas. Earned a verified certificate validated via Wipro DICE ID.',
    highlights: ['Python', 'Pandas', 'Predictive Modeling', 'Feature Engineering', 'Wipro DICE ID']
  }
];

export const CERTIFICATIONS = [
  {
    title: 'Oracle Database SQL Certified Specialist',
    issuer: 'Oracle University',
    date: 'October 26, 2024',
    credentialId: '100876428OCSSQL12C',
    viewUrl: 'img/SQL.pdf'
  },
  {
    title: 'Oracle Certified Professional: Java SE 11 Developer',
    issuer: 'Oracle University',
    date: 'December 30, 2024',
    credentialId: '100876428OCPJSE11',
    viewUrl: 'img/JAVA.pdf'
  },
  {
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft and LinkedIn',
    date: 'December 22, 2024',
    credentialId: '756385a0b0e9bd01d4b7b42a4148c85458de00b3ccbb770ae166166011c37ff0',
    viewUrl: 'img/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn (1).pdf'
  },
  {
    title: 'Management Information System',
    issuer: 'NPTEL (IIT Kharagpur)',
    date: 'Jul-Oct 2025',
    credentialId: 'NPTEL25MG133S1162301121',
    score: '71% (Elite)',
    viewUrl: 'img/Management Information System (1).pdf'
  },
  {
    title: 'Ethical Hacking',
    issuer: 'NPTEL (IIT Kharagpur)',
    date: 'Jul-Oct 2025',
    credentialId: 'NPTEL25CS142S1062300882',
    score: '60% (Elite)',
    viewUrl: 'img/Ethical Hacking (1).pdf'
  }
];

export const PROJECTS: Project[] = [
 {
    id: '1',
    title: 'NexVue Autonomous Vision',
    description: 'A real-time hazard detection system using computer vision to interpret road signs, detect obstacles, and assess driver safety risks in milliseconds.',
    tags: ['Computer Vision', 'Autonomous Systems', 'Deep Learning'],
    metrics: [
      { label: 'Precision', value: '98.2%' },
      { label: 'Latency', value: '18ms' }
    ],
    githubUrl: 'https://github.com/dhunesh-2005/NexVue',
    demoUrl: 'https://cvapp-rust.vercel.app/'
  },
 {
    id: '2',
    title: 'Visualization of Energy Consumption Patterns for Sustainable Resource Management',
    description: 'An interactive analytics dashboard tracking hourly load patterns, temperature correlations, and daily trends to identify inefficiencies and optimize energy usage.',
    tags: ['Data Visualization', 'Energy Analytics', 'Sustainability'],
    metrics: [
      { label: 'Data Points', value: '8,760+' }, // Represents hourly data for a full year
      { label: 'Variables', value: '5' }         // Temp, Time, Load, Day, Date
    ],
    githubUrl: '#', // Add your actual GitHub link here
    demoUrl: 'https://public.tableau.com/app/profile/dhunesh.v/viz/DHVF1/Dashboard1'    // Add your Tableau/Live link here if you have one
  },
  /*{
    id: '3',
    title: 'Cancer Cell Segmentation',
    description: 'Computer vision project utilizing U-Net architecture for high-precision medical image segmentation in histopathology.',
    tags: ['CV', 'Healthcare', 'U-Net'],
    metrics: [
      { label: 'Dice Score', value: '0.91' },
      { label: 'Parameters', value: '31M' }
    ],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: '4',
    title: 'Global Supply Graph',
    description: 'Network analysis tool mapping global trade routes to identify bottleneck risks using graph theory (Neo4j).',
    tags: ['Graph Theory', 'Logistics', 'Neo4j'],
    metrics: [
      { label: 'Nodes', value: '1.2M' },
      { label: 'Edges', value: '5.8M' }
    ],
    githubUrl: '#'
  }*/
];