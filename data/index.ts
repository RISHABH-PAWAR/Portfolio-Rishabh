export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects & Skill", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
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
    title:
      "Full-stack developer with hands-on experience building scalable web applications using MERN/Next.js. Strong in REST APIs, databases, and cloud deployment (Vercel, Render, AWS basics).",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title:
      "University Library Management System with rate-limiting, DDoS protection, caching, optimized DB queries, media uploads, and automated workflows.",
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
    des:
      "MERN-based healthcare platform for doctor appointments, earnings tracking, and admin management.",
    img: "/prescripto.png",
    iconLists: [
      "/express.jpg",
      "/re.svg",
      "/mongodb.webp",
      "/tail.svg",
      "/cloudnary.webp",
      "/c.svg",
      "/jwt.webp",
    ],
    link: "https://github.com/RISHABH-PAWAR/Prescripto",
  },
  {
    id: 2,
    title: "Resume Builder",
    des:
      "AI-powered resume builder using MERN stack with OpenAI integration and customizable templates.",
    img: "/resume-builder.png",
    iconLists: [
      "/express.jpg",
      "/re.svg",
      "/mongodb.webp",
      "/openai.jpg",
      "/cloudnary.webp",
      "/c.svg",
      "/jwt.webp",
    ],
    link: "https://github.com/RISHABH-PAWAR/Resume-Builder",
  },
  {
    id: 3,
    title: "Insider Jobs",
    des:
      "Full-stack job portal with role-based access, Clerk auth, Cloudinary uploads, and Sentry monitoring.",
    img: "/job-portal.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/sentry.png",
      "/cloudnary.webp",
      "/c.svg",
      "/jwt.webp",
    ],
    link: "https://github.com/RISHABH-PAWAR/job-portal",
  },
  {
    id: 4,
    title: "BookWise",
    des:
      "Advanced library management system with performance, security, and scalability focus.",
    img: "/current-project.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: undefined,
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Rishabh was a pleasure. Professional, prompt, and deeply committed to quality.",
    name: "Devansh",
    title: "Software Developer",
    image: "/pro1.png",
  },
  {
    quote:
      "Energy, precision, and creativity. The results were polished and exactly what we envisioned.",
    name: "Abhinav Singh",
    title: "SDE @ Infosys",
    image: "/pro2.jpg",
  },
  {
    quote:
      "Proactive, reliable, and consistently high-quality work. Highly dependable developer.",
    name: "Bharat Pawar",
    title: "Developer @ TCS",
    image: "/pro3.jpg",
  },
  {
    quote:
      "Solutions-oriented mindset with strong execution. Goes above and beyond.",
    name: "Ujjwal Sharma",
    title: "SDE @ HCL",
    image: "/pro4.jpg",
  },
  {
    quote:
      "A rare mix of creativity and precision. Transforms ideas into high-performing solutions.",
    name: "Ayush Garg",
    title: "Software Engineer",
    image: "/pro5.jpg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Developer Intern — JIL Information Technology Ltd",
    desc:
      "Built 10+ RESTful APIs for job search and applications, reducing load time by 25% via caching and optimization.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer Intern — Brain Mentors Pvt. Ltd",
    desc:
      "Developed a team management system with ML-powered task allocation using MERN stack.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Full Stack Project",
    desc:
      "Built a scalable project management dashboard using Next.js, PostgreSQL, Prisma, Redux Toolkit, AWS Lambda, and Cognito.",
    className: "md:col-span-2",
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
    img: "/leetcode1.png",
    link: "https://leetcode.com/u/Rishabhpawar/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/rishabh-pawar-04192b263/",
  },
];
