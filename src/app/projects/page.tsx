'use client';
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce App",
    description:
      "E-commerce website with products, secure payments, and fast delivery.",
    image: "/websites/website0.png",
    alt: "E-Commerce App website",
    technologies: ["React", "Next.js", "Tailwind"],
    demoLink: "https://e-smartstore.vercel.app/",
    codeLink: "https://github.com/gh-tayyab/e-smart",
  },
  {
    id: 2,
    title: "FlexForce Gymnasium",
    description:
      "Gym website with classes, memberships, trainers, and tracking.",
    image: "/websites/website1.JPG",
    alt: "FlexForce Gymnasium website",
    technologies: ["React", "Next.js", "Tailwind"],
    demoLink: "https://flexforce-gymnasium.vercel.app/",
    codeLink: "https://github.com/gh-tayyab/FlexForce",
  },
  {
    id: 3,
    title: "Gallery Album",
    description:
      "Gallery album website showcasing images, categories, and sharing.",
    image: "/websites/website2.png",
    alt: "Gallery Album website",
    technologies: ["React", "Next.js", "Tailwind"],
    demoLink: "https://gallery-album-two.vercel.app/",
    codeLink: "https://github.com/gh-tayyab/gallery-album",
  },
  {
    id: 4,
    title: "Panaverse Dao",
    description:
      "Panaversity website offering courses, certifications, and career growth.",
    image: "/websites/website3.png",
    alt: "Panaverse Dao website",
    technologies: ["React", "Next.js", "Tailwind"],
    demoLink: "https://panaverse-dao-cloneweb3.vercel.app/",
    codeLink: "https://github.com/gh-tayyab/Panaverse-Dao",
  },
  {
    id: 5,
    title: "Seaside Escape Getaways",
    description:
      "Seaside Escape Getaways: Relaxing vacations by the ocean.",
    image: "/websites/website4.JPG",
    alt: "Seaside Escape Getaways website",
    technologies: ["React", "Next.js", "Tailwind"],
    demoLink: "https://seaside-escape-gateways.vercel.app/",
    codeLink: "https://github.com/gh-tayyab/Seaside-Escape-Gateways",
  },
  {
    id: 6,
    title: "Praroz Finance",
    description:
      "Fast, flexible financing for B2B, B2C & SaaS, with data analytics to boost revenue.",
    image: "/websites/website5.JPG",
    alt: "Praroz Finance website",
    technologies: ["React", "Next.js", "Tailwind"],
    demoLink: "https://praroz.vercel.app/",
    codeLink: "https://github.com/gh-tayyab/PraRoz-Website",
  },
  {
    id: 7,
    title: "E-Shop Haven",
    description:
      "Exclusive high-quality fashion at the best prices! Shop top trends with us.",
    image: "/websites/website6.png",
    alt: "E-Shop Haven website",
    technologies: ["React", "Next.js", "Tailwind"],
    demoLink: "https://e-shophaven.vercel.app/",
    codeLink: "https://github.com/gh-tayyab/E-Commerce",
  },
];

export default function Projects() {
  const projectsRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={projectsRef}
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900/30"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Featured Projects
          </h2>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <AnimatedSection
              key={project.id}
              as="article"
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <figure className="relative h-48 w-full border-b border-gray-100 dark:border-gray-700">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.alt}`}
                  fill
                  className="object-cover"
                />
              </figure>

              {/* Project Details */}
              <div className="p-6">
                <header>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                </header>

                {/* Tech Stack */}
                <ul className="flex flex-wrap gap-2 mb-6" aria-label="Technologies used">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {/* Project Links */}
                <footer className="flex gap-4">
                  <a
                    href={project.demoLink}
                    className="text-purple-600 dark:text-purple-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View demo of ${project.title}`}
                  >
                    View Demo
                  </a>
                  <a
                    href={project.codeLink}
                    className="text-gray-600 dark:text-gray-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View source code of ${project.title}`}
                  >
                    Source Code
                  </a>
                </footer>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
