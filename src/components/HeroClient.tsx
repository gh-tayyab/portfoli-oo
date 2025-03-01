"use client";

import Link from "next/link";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import { useRef } from "react";

export default function HeroClient() {
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-32 md:py-0 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0 z-10">
          <AnimatedText
            delay={100}
            className="text-sm md:text-base font-medium uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2"
          >
            Agentic AI Engineer & Next.js Developer
          </AnimatedText>

          <AnimatedText
            delay={300}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4"
          >
            Building{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              AI-driven
            </span>{" "}
            dynamic interfaces
          </AnimatedText>

          <AnimatedText
            delay={500}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl"
          >
            I'm a full-stack developer specializing in building and designing
            AI-driven, scalable web experiences. Currently focused on creating
            intelligent, accessible, and user-centric products.
          </AnimatedText>

          <AnimatedText delay={700} className="flex flex-col sm:flex-row gap-4">
            <Link href={"/projects"}>
              <button
                onClick={scrollToProjects}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg hover:opacity-90 transform transition-all duration-300 hover:-translate-y-1"
              >
                View My Work
              </button>
            </Link>

            <Link href="/contact">
              <span className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transform transition-all duration-300 hover:-translate-y-1 text-center">
                Contact Me
              </span>
            </Link>
          </AnimatedText>
        </div>

        {/* Hero Image */}
        <div className="relative z-10 flex items-center justify-center w-full md:w-1/2">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg transform rotate-3 opacity-20 dark:opacity-30"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl flex items-center justify-center p-4">
              <Image
                src="/images/logo.png"
                alt="Hero Image"
                width={350}
                height={350}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-300 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
    </section>
  );
}
