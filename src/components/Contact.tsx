import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <article>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to bring your ideas to life?
            </h2>
            <p className="text-lg text-purple-100 mb-8">
              I'm currently available for freelance work. Let's build something
              amazing together.
            </p>
            <Link
              href={"/contact"}
              className="inline-block px-8 py-4 bg-white text-purple-600 font-medium rounded-lg hover:bg-gray-100 transform transition-all duration-300 hover:-translate-y-1"
            >
              Get in Touch
            </Link>
          </article>
        </AnimatedSection>
      </div>
    </section>
  );
}
