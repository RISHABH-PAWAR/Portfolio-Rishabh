export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects & Skill", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Full-stack developer with hands-on experience building scalable web applications using MERN/Next.js. Strong in designing RESTful APIs, managing databases ,Familiar with cloud deployment using Vercel, Render, and foundational AWS services.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "University Library Management System with industry-standard practices; from rate-limiting, DDoS protection, caching, optimizations, multi-media uploads, complex db queries, and advanced error handling to automated workflows with custom notifications.",
    description: "Currently Working On",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Prescripto",
    des: "Prescripto is a comprehensive web application built with the MERN stack designed to facilitate easy online doctor appointment booking and management. The system empowers patients, doctors, and administrators with distinct roles and capabilities to streamline healthcare appointments, earnings tracking, and platform administration.",
    img: "/prescripto.png",
    iconLists: ["/express.jpg","/re.svg", "/mongodb.webp", "/tail.svg", "/cloudnary.webp", "/c.svg","/jwt.webp"],
    link: "https://github.com/RISHABH-PAWAR/Prescripto",
  },
  {
    id: 2,
    title: "Resume Builder",
    des: "Resume Builder(AI-powered) is a web application built with the MERN stack that allows users to create professional resumes using different customizable templates. The project integrates an AI-enhanced feature to improve and enrich resume content, making it more impactful and tailored to specific job requirements.",
    img: "/resume-builder.png",
    iconLists: ["/express.jpg","/re.svg", "/mongodb.webp", "/openai.jpg", "/cloudnary.webp", "/c.svg","/jwt.webp"],
    link: "https://github.com/RISHABH-PAWAR/Resume-Builder",
  },
  {
    id: 3,
    title: "Insider Jobs",
    des: "Built a full-stack job portal using the MERN stack,Clerk,Cloudinary, Sentry. Designed RESTful APIs for job postings, applications, and role-based access, with MongoDB handling scalable data storage. Integrated Cloudinary for efficient resume and image uploads, and Sentry for real-time error tracking and production monitoring. Deployed the application with a focus on performance, security, and maintainability, simulating real-world hiring workflows.",
    img: "/job-portal.png",
    iconLists: ["/re.svg", "/tail.svg", "/santry.png", "/cloudnary.webp", "/c.svg","/jwt.webp"],
    link: "https://github.com/RISHABH-PAWAR/job-portal",
  },
  {
    id: 4,
    title: "BookWise",
    des: " University Library Management System with industry-standard practices; from rate-limiting, DDoS protection, caching, optimizations, multi-media uploads, complex db queries, and advanced error handling to automated workflows with custom notifications.",
    img: "/current-project.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: undefined,
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Rishabh was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Devansh",
    title: "Software Developer",
    image:"/pro1.png",

  },
  {
    quote:
      "Rishabh brings energy, precision, and creativity to every project. He’s responsive, professional, and clearly passionate about his work. The results speak for themselves polished, effective, and exactly what we envisioned.",
    name: "Abhinav Singh",
    title: "SDE@Infosis",
    image:"/pro2.jpg",
  },
  {
    quote:
      "From start to finish, Rishabh demonstrated remarkable dedication and skill. He is proactive, reliable, and consistently produces work of exceptional quality. Anyone looking for a highly capable and dependable developer will benefit greatly from working with him.",
    name: "Bharat Pawar",
    title: "Developer@TCS",
    image:"/pro3.jpg",
  },
  {
    quote:
      "Rishabh’s expertise and creativity made a huge difference in our project. He approaches every challenge with a solutions-oriented mindset and ensures the end result is both functional and visually impressive. Truly a developer who goes above and beyond.",
    name: "Ujjwal Sharma",
    title: "SDE@HCL",
    image:"/pro4.jpg",
  },
  {
    quote:
      "Working with Rishabh was a game-changer. He approaches development with a rare mix of creativity and precision, transforming ideas into smooth, high-performing solutions. His dedication makes the whole process effortless and inspiring",
    name: "Ayush Garg",
    title: "SDE",
    image:"/pro5.jpg"
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Web Developer (JIL Information Technology Ltd-Intern)",
    desc: "Built 10+ RESTful APIs for job search, filtering, and application submission functionalities, improving user experience and reducing page load time by 25% through code optimization and caching strategies.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer (Brain Mentors Pvt. Ltd-Intern)",
    desc: "Led development of Team Management System with centralized communication, task tracking, and ML-powered resource allocation using MERN stack, collaborating with cross-functional team of 3+ developers and designers.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Dev Project",
    desc: "Developed a full-stack Project Management Dashboard as a freelance project using Next.js and Tailwind CSS with Material UI Data Grid for advanced data visualization. Implemented Redux Toolkit and RTK Query for efficient state management and API handling. Built a scalable backend using Node.js and Express with PostgreSQL managed via Prisma ORM. Integrated AWS Lambda for serverless execution and AWS Cognito for secure authentication. Focused on performance, scalability, and clean architecture throughout the application.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/RISHABH-PAWAR",
  },
  {
    id: 2,
    img: "leetcode1.png",
    link:"https://leetcode.com/u/Rishabhpawar/",
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/rishabh-pawar-04192b263/",
  },
];
