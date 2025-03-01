"use client";

import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";

export default function About() {
  return (
    <main className="container mx-auto px-6 py-16">
      {/* Intro / Hero Section */}
      <AnimatedSection className="mb-12 text-center">
        <h1 className="text-4xl font-bold gradient-text mb-4">About Me</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          I build AI-driven web solutions using Next.js, LangChain, and
          automation. 🚀
        </p>
      </AnimatedSection>

      {/* Main Content Section */}
      <AnimatedSection className="flex flex-col md:flex-row items-center">
        {/* Profile Image (Replace with your own) */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/logo.png"
            alt="Your Name"
            width={350}
            height={350}
            className="rounded-full shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-gray-700 dark:text-gray-300 space-y-4">
          <AnimatedText className="text-2xl font-semibold">
            My Background
          </AnimatedText>
          <p>
            My journey began with a passion for technology and automation. I
            have always been fascinated by optimizing systems and automating
            processes. Initially, I focused on web development, exploring
            front-end technologies like React. Over time, I expanded into
            full-stack development, working with Node.js, Next.js, and cloud
            services to build scalable and efficient solutions.
          </p>
          <p>
            I have developed AI-driven applications and chatbots using
            frameworks like CrewAI and LangGraph, integrating them with LLMs for
            intelligent automation. Additionally, I have built a cutting-edge
            RAG system that combines LangChain and Google Generative AI
            embeddings for advanced question-answering capabilities. With
            hands-on experience in deploying scalable web applications, I
            continuously strive to bridge the gap between AI and web development
            to create seamless user experiences.
          </p>
        </div>
      </AnimatedSection>

      {/* Skills & Experience Section */}
      <AnimatedSection className="mt-16">
        <h2 className="text-3xl font-bold mb-6 gradient-text">
          Skills &amp; Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Next.js &amp; React</li>
              <li>Node.js &amp; Express</li>
              <li>Tailwind CSS &amp; UI/UX</li>
              <li>TypeScript &amp; JavaScript</li>
              <li>Git &amp; GitHub</li>
              <li>RESTful APIs &amp; GraphQL</li>
              <li>SQL &amp; PostgreSQL</li>
              <li>MongoDB &amp; Neo4j</li>
              <li>Drizzle ORM</li>
              <li>Docker &amp; AWS</li>
              <li>LangGraph &amp; CrewAI</li>
              <li>CSS &amp; HTML</li>
            </ul>
          </div>

          {/* Work Experience */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
            <p className="mb-4">
              <strong>
                Freelance Front-End Developer & AI Enthusiast (2024 - Present)
              </strong>
              <br />
              Working as a freelancer, building modern and responsive web
              applications using React, Next.js, and Tailwind CSS. Exploring
              agentic AI and automation systems to integrate AI-powered
              solutions into web development and productivity tools.
            </p>
            <p>
              <strong>
                Front-End Developer @GetDirectHolidays (2024 Jan - 2024
                December)
              </strong>
              <br />
              Implemented responsive user interfaces using React and Tailwind
              CSS. Optimized application performance and led UI/UX improvements.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
