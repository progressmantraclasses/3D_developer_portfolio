import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  videocall,
  burnout,
  foodgrant,
  Face,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Managing Director & Educator",
    company_name: "Progress Mantra Classes (PMC)",
    icon: starbucks,  // Replace with an appropriate icon
    iconBg: "#383E56",
    date: "2021 - 2023",
    points: [
      "Founded and managed a coaching institute to provide quality education.",
      "Designed curriculum, taught programming, and mentored students.",
      "Led operations, marketing, and student engagement initiatives.",
      "Built a strong student community through interactive learning sessions.",
    ],
  },
  {
    title: "Operational Head",
    company_name: "Startup Sphere Society",
    icon: meta,  // Replace with an appropriate icon
    iconBg: "#E6DEDD",
    date: "2024 - 2025",
    points: [
      "Managed startup community operations and events.",
      "Guided aspiring entrepreneurs on product development and business strategies.",
      "Organized hackathons, networking events, and mentorship programs.",
      "Collaborated with tech experts and industry leaders for knowledge-sharing sessions.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Freelance & Startup Collaborations",
    icon: shopify,  // Replace with an appropriate icon
    iconBg: "#E6DEDD",
    date: "2025 - Present",
    points: [
      "Developed and deployed multiple full-stack web applications using MERN.",
      "Worked on real-time chat applications, OCR tools, and telehealth platforms.",
      "Optimized database performance with PostgreSQL and MySQL.",
      "Implemented secure authentication and cloud deployment solutions.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Crowd Safety Management",
    description:
      "An AI-powered platform for real-time crowd monitoring, security alerts, and emergency management using computer vision and predictive analytics.",
    tags: [
      { name: "MERN", color: "blue-text-gradient" },
      { name: "Machine Learning", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://safecrowd.vercel.app/",
  },
  {
    name: "Anonymously Group Chat",
    description:
      "A real-time anonymous chat platform where users can communicate securely without revealing their identity, ensuring privacy and data security.",
    tags: [
      { name: "mern", color: "blue-text-gradient" },
      { name: "Sochet io", color: "green-text-gradient" },
      { name: "JWT", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://unknown-chats.web.app/",
  },
  {
    name: "Progress Mantra Classes",
    description:
      "An online education platform providing high-quality courses, study materials, and live classes for students, focusing on skill development and competitive exams.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://shivam-13.netlify.app/",
  },
  {
    name: "Anonymous Video Call & Chat",
    description:
      "A secure video calling and chat platform that allows users to communicate anonymously with encrypted messaging and real-time connectivity.",
    tags: [
      { name: "MERN", color: "blue-text-gradient" },
      { name: "Webrtc", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    image: videocall,
    source_code_link: "https://vitalsyncs.web.app/",
  },
  {
    name: "Burnout Buddy",
    description:
      "A mental health tracker that provides AI-driven stress management tips, mood tracking, and personalized well-being strategies for mobile users.",
    tags: [
      { name: "React native", color: "blue-text-gradient" },
      { name: "Mern", color: "green-text-gradient" },
      { name: "Mongodb", color: "pink-text-gradient" },
    ],
    image: burnout,
    source_code_link: "https://burnoutbuddy.vercel.app/",
  },
  {
    name: "Food Waste Management",
    description:
      "A MERN-based platform that connects restaurants, event organizers, and NGOs to redistribute excess food, reducing waste and helping communities.",
    tags: [
      { name: "Mern", color: "blue-text-gradient" },
      { name: "Tailwind", color: "green-text-gradient" },
      { name: "Postgresql", color: "pink-text-gradient" },
    ],
    image: foodgrant,
    source_code_link: "https://foodgrant.vercel.app/",
  },
  {
    name: "Face Expression Detection",
    description:
      "An AI-powered facial recognition tool that detects and analyzes emotions using deep learning to enhance user experience and mental health insights.",
    tags: [
      { name: "Tensorflow", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],
    image: Face,
    source_code_link: "https://faceexpresssions.web.app/",
  },
];



export { services, technologies, experiences, testimonials, projects };

