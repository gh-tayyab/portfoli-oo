'use client';

import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce App",
    description: "E-commerce website with products, secure payments, and fast delivery.",
    image: "/websites/website0.png",
    technologies: ["React", "Next.js", "Tailwind"],
    demoLink: "https://e-smartstore.vercel.app/",
    codeLink: "https://github.com/gh-tayyab/e-smart",
  },
  {
    id: 2,
    title: "FlexForce Gymnasium",
    description: "Gym website with classes, memberships, trainers, and tracking.",
    image: "/websites/website1.jpg",
    technologies: ["React", "Next.js", "Tailwind"],
    demoLink: "https://flexforce-gymnasium.vercel.app/",
    codeLink: "https://github.com/gh-tayyab/FlexForce",
  },
  {
    id: 3,
    title: "Gallery Album",
    description: "Gallery album website showcasing images, categories, and sharing.",
    image: "/websites/website2.png",
    technologies: ["React", "Next.js", "Tailwind"],
    demoLink: "https://gallery-album-two.vercel.app/",
    codeLink: "https://github.com/gh-tayyab/gallery-album",
  }
];

export default function FeaturedProjectsClient() {
  const projectsRef = useRef(null);

  return (
    <section ref={projectsRef} className="py-20 px-4 bg-gray-50 dark:bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work. These projects showcase my skills and approach to solving complex problems.
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <AnimatedSection
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Project Card */}
              <article className="flex flex-col h-full">
                
                {/* Image Section */}
                <div className="relative h-48 w-full border-b border-gray-100 dark:border-gray-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies Used */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Footer */}
                <footer className="p-6 flex gap-4">
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    View Demo
                  </Link>
                  <Link
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Source Code
                  </Link>
                </footer>

              </article>
            </AnimatedSection>
          ))}
        </div>

        {/* View More Button */}
        <AnimatedSection className="text-center mt-12">
          <Link href="/projects">
            <span className="inline-block px-8 py-3 border border-purple-500 text-purple-600 dark:text-purple-400 font-medium rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition">
              View All Projects
            </span>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
