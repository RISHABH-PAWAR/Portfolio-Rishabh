"use client";

import React from "react";

import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <>

    <h1 
        className="text-center font-bold tracking-tight">
        <span
        className="block text-sm md:text-base uppercase text-neutral-400 mb-2">
          What I Bring to the Table
        </span>
        <span className="text-3xl md:text-5xl lg:text-6xl text-purple">
        Skills & Expertise
        </span>
        </h1>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
  {[
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Java", "Python"],
    },
    {
      title: "Frontend Technologies",
      skills: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "React.js",
        "Redux",
        "Next.js",
        "React Native",
      ],
    },
    {
      title: "Backend Technologies",
      skills: ["Node.js", "Express.js", "RESTful APIs", "EJS"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Pinecone (Vector DB)"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (Basics)", "Vercel", "Render"],
    },
    {
      title: "AI / GenAI",
      skills: ["Generative AI", "LLMs", "RAG"],
    },
    {
      title: "Tools & Concepts",
      skills: ["Git", "GitHub", "VS Code", "System Design (Basics)"],
    },
  ].map((category, idx) => (
    <div
      key={idx}
      className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-6 hover:border-purple/50 transition"
    >
      <h3 className="text-lg font-semibold text-purple mb-4">
        {category.title}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <li
            key={i}
            className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>



    <section id="testimonials" className="py-20">
      <h1 className="heading">
       Kind words from <span className="text-purple">peers and collaborators</span>

      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

      </div>
    </section>
    </>
  );
};

export default Clients;
