import AnimatedSection from "./AnimatedSection";

export default function SkillsSection() {
  return (
    <section className="py-20 px-4" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <AnimatedSection>
            <h2 
              id="skills-heading" 
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              My Skills
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I've worked with a variety of technologies and frameworks to deliver high-quality solutions.
            </p>
          </AnimatedSection>
        </header>

        {/* Skills List */}
        <ul 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center"
          aria-label="Technical skills"
        >
          {[
            { name: 'LangGraph', icon: '🧠' },
            { name: 'CrewAI', icon: '🤖' },
            { name: 'Next.js', icon: '▲' },
            { name: 'React', icon: '⚛️' },
            { name: 'Python', icon: '🐍' },
            { name: 'JavaScript', icon: '📜' },
            { name: 'TypeScript', icon: '🔷' },
            { name: 'Node.js', icon: '🟢' },
            { name: 'Docker', icon: '🐳' },
            { name: 'AWS', icon: '☁️' },
            { name: 'Tailwind CSS', icon: '🎨' },
            { name: 'CSS', icon: '🎭' },
            { name: 'HTML', icon: '📄' },
            { name: 'MongoDB', icon: '🍃' },
            { name: 'PostgreSQL', icon: '🐘' },
            { name: 'SQL', icon: '💾' },
            { name: 'Neo4j', icon: '🔗' },
            { name: 'GraphQL', icon: '⬢' },
            { name: 'Drizzle', icon: '🌦' },
            { name: 'GitHub', icon: '🐙' },
          ].map((skill, index) => (
            <li key={skill.name}>
              <AnimatedSection
                delay={index * 100}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="text-4xl mb-3" role="img" aria-hidden="true">
                  {skill.icon}
                </span>
                <h3 className="font-medium text-gray-900 dark:text-white">{skill.name}</h3>
              </AnimatedSection>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
