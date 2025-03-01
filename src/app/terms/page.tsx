"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import AnimatedSection from "@/components/AnimatedSection"
import { Home } from "lucide-react"

export default function TermsOfService() {
  const [darkMode, setDarkMode] = useState(false)

  // Check for dark mode preference
  useEffect(() => {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    setDarkMode(isDarkMode)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-lg p-8 w-full h-full">
        <div className="grid md:grid-cols-[1fr_3fr] gap-8">
          <div className="text-center md:text-left">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-purple-600">TERMS OF SERVICE</h2>
              <p className="text-gray-600 mt-2 bg-purple-100 p-2 rounded-lg inline-block">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <div className="mt-8">
              <Link
                  href="/"
                  className="text-purple-600 hover:text-purple-700 font-medium flex items-center justify-center md:justify-start"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </div>
            </AnimatedSection>
          </div>

          <div className="terms-content">
            <AnimatedSection>
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">1. Introduction</h3>
                  <p className="text-gray-700">
                    Welcome to my portfolio website. By accessing this website, you agree to be bound by these Terms of
                    Service, all applicable laws and regulations, and agree that you are responsible for compliance with
                    any applicable local laws.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">2. Use License</h3>
                  <p className="text-gray-700 mb-3">
                    Permission is granted to temporarily view the materials on my portfolio website for personal,
                    non-commercial use only. This is the grant of a license, not a transfer of title, and under this
                    license you may not:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose</li>
                    <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">3. Disclaimer</h3>
                  <p className="text-gray-700">
                    The materials on my portfolio website are provided on an 'as is' basis. I make no warranties,
                    expressed or implied, and hereby disclaim and negate all other warranties including, without
                    limitation, implied warranties or conditions of merchantability, fitness for a particular purpose,
                    or non-infringement of intellectual property or other violation of rights.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">4. Limitations</h3>
                  <p className="text-gray-700">
                    In no event shall I or my suppliers be liable for any damages (including, without limitation,
                    damages for loss of data or profit, or due to business interruption) arising out of the use or
                    inability to use the materials on my portfolio website, even if I or an authorized representative
                    has been notified orally or in writing of the possibility of such damage.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">5. Revisions and Errata</h3>
                  <p className="text-gray-700">
                    The materials appearing on my portfolio website could include technical, typographical, or
                    photographic errors. I do not warrant that any of the materials on the website are accurate,
                    complete or current. I may make changes to the materials contained on the website at any time
                    without notice.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">6. Links</h3>
                  <p className="text-gray-700">
                    I have not reviewed all of the sites linked to my portfolio website and am not responsible for the
                    contents of any such linked site. The inclusion of any link does not imply endorsement by me of the
                    site. Use of any such linked website is at the user's own risk.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">7. Modifications</h3>
                  <p className="text-gray-700">
                    I may revise these terms of service for my portfolio website at any time without notice. By using
                    this website you are agreeing to be bound by the then current version of these terms of service.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">8. Contact Information</h3>
                  <p className="text-gray-700">
                    If you have any questions about these Terms of Service, please contact me at{" "}
                    <a href="mailto:muhammadtayyabmt0@gmail.com" className="text-blue-500 hover:underline">
                      muhammadtayyabmt0.net@gmail.com
                    </a>
                    .
                  </p>
                </section>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  )
}
