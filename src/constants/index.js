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
    name: "Crowd safety management",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://safecrowd.vercel.app/",
  },
  {
    name: "Anamously group Chat",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://unknown-chats.web.app/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://shivam-13.netlify.app/",
  },
{
  name: "anamously videocall & chat",
  description:
    "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  tags: [
    {
      name: "nextjs",
      color: "blue-text-gradient",
    },
    {
      name: "supabase",
      color: "green-text-gradient",
    },
    {
      name: "css",
      color: "pink-text-gradient",
    },
  ],
  image: videocall,
  source_code_link: "https://vitalsyncs.web.app/",
},
{
  name: "Burnout Buddy",
  description:
    "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  tags: [
    {
      name: "nextjs",
      color: "blue-text-gradient",
    },
    {
      name: "supabase",
      color: "green-text-gradient",
    },
    {
      name: "css",
      color: "pink-text-gradient",
    },
  ],
  image: burnout,
  source_code_link: "https://burnoutbuddy.vercel.app/",
},
{
  name: "Food waste management",
  description:
    "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  tags: [
    {
      name: "nextjs",
      color: "blue-text-gradient",
    },
    {
      name: "supabase",
      color: "green-text-gradient",
    },
    {
      name: "css",
      color: "pink-text-gradient",
    },
  ],
  image: foodgrant,
  source_code_link: "https://foodgrant.vercel.app/",
},
{
  name: "Face Expression detection",
  description:
    "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  tags: [
    {
      name: "nextjs",
      color: "blue-text-gradient",
    },
    {
      name: "supabase",
      color: "green-text-gradient",
    },
    {
      name: "css",
      color: "pink-text-gradient",
    },
  ],
  image: Face,
  source_code_link: "https://faceexpresssions.web.app/",
},
];


export { services, technologies, experiences, testimonials, projects };

