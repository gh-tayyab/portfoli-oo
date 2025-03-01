import ContactForm from "./FormClient";
import AnimatedSection from "@/components/AnimatedSection";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-lg p-8 w-full h-full flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-purple-600">CONTACT US</h2>
              <p className="text-gray-600 mt-2">
                Or reach out manually to{" "}
                <a href="mailto:muhammadtayyabmt0@gmail.com" className="text-blue-500">
                  muhammadtayyabmt0@gmail.com
                </a>
              </p>
              <p className="mt-6 text-gray-700 text-lg font-medium leading-relaxed bg-purple-50 p-4 rounded-lg">
                I would love if you reached out to me, even if it's just to say <span className="text-purple-600 font-bold">Hey!</span>.
                Don't hesitate! Drop me a line, and I'll get back to you ASAP!
              </p>
            </AnimatedSection>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
