import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot, FaGithub, FaLinkedin , FaTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
          role="contentinfo"
        >
          <section className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
              <span className="flex items-center">
                <span className="mr-2" aria-hidden="true">
                  ⬢
                </span>
                DevPortfolio
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Building exceptional digital experiences with cutting-edge
              technology and design. Let's create something amazing together.
            </p>
            <nav aria-label="Social media links">
              <ul className="flex space-x-4">
                <li>
                  <Link
                    href="https://github.com/gh-tayyab"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                  >
                    <FaGithub size={28}/>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/muhammad-tayyab4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Linkedin profile"
                  >
                    <FaLinkedin size={28}/>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/mtayyab_00"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter profile"
                  >
                    <FaTwitter size={28}/>
                  </Link>
                </li>
              </ul>
            </nav>
          </section>

          <nav aria-label="Quick links">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <section aria-labelledby="contact-info">
            <h3
              id="contact-info"
              className="font-semibold text-gray-900 dark:text-white mb-4"
            >
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="flex items-center">
                  <MdEmail
                    size={28}
                    className="text-gray-600 dark:text-gray-400"
                  />
                </span>
                <Link
                  href="mailto:muhammadtayyabmt0@gmail.com"
                  className="ml-2 text-gray-600 dark:text-gray-400 hover:text-purple-500"
                >
                  muhammadtayyabmt0@gmail.com
                </Link>
              </li>

              <li className="flex items-start">
                <FaPhone
                  size={24}
                  className="text-gray-600 dark:text-gray-400"
                />
                <Link
                  href="tel:+923257248184"
                  className="ml-2 text-gray-600 dark:text-gray-400 hover:text-purple-500"
                >
                  +92 (325) 7248184
                </Link>
              </li>
              <li className="flex items-start">
                <FaLocationDot
                  size={24}
                  className="text-gray-600 dark:text-gray-400"
                />
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  123 Karachi, Sindh, Pakistan
                </span>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} DevPortfolio. All rights reserved.
          </p>
          <nav aria-label="Legal links">
            <ul className="flex justify-center space-x-6 mt-4">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-500"
                >
                  Privacy Policy{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-500"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
