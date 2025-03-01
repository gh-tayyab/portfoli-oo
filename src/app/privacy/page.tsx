'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { Home } from 'lucide-react';

export default function PrivacyPolicy() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDarkMode);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-lg p-8 w-full h-full">
        <div className="grid md:grid-cols-[1fr_3fr] gap-8">
          <div className="text-center md:text-left">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-purple-600">PRIVACY POLICY</h2>
              <p className="text-gray-600 mt-2 bg-purple-100 p-2 rounded-lg inline-block">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <div className="mt-8 space-y-2">
              <Link
                  href="/"
                  className="text-purple-600 hover:text-purple-700 font-medium flex items-center justify-center md:justify-start"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
                <Link 
                  href="/terms" 
                  className="text-purple-600 hover:text-purple-700 font-medium flex items-center justify-center md:justify-start pl-6"
                >
                  View Terms of Service
                </Link>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="privacy-content">
            <AnimatedSection>
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">1. Information We Collect</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      We collect information that you voluntarily provide when using our portfolio website, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Contact information (name, email address)</li>
                      <li>Messages and communications you send us</li>
                      <li>Usage data and analytics</li>
                    </ul>
                  </div>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">2. How We Use Your Information</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>We use the collected information for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>To respond to your inquiries and messages</li>
                      <li>To improve our website and user experience</li>
                      <li>To send you updates about our services (with your consent)</li>
                      <li>To comply with legal obligations</li>
                    </ul>
                  </div>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">3. Cookies and Tracking</h3>
                  <p className="text-gray-700">
                    Our website uses cookies and similar tracking technologies to enhance your browsing experience. These technologies help us understand how visitors use our site and allow us to remember your preferences.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">4. Data Security</h3>
                  <p className="text-gray-700">
                    We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">5. Third-Party Services</h3>
                  <p className="text-gray-700">
                    We may use third-party services that collect, monitor, and analyze data to improve our website's functionality. These third-party service providers have their own privacy policies addressing how they handle user information.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">6. Your Rights</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Access your personal data</li>
                      <li>Correct inaccurate personal data</li>
                      <li>Request deletion of your personal data</li>
                      <li>Object to processing of your personal data</li>
                      <li>Request restriction of processing</li>
                      <li>Data portability</li>
                    </ul>
                  </div>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">7. Children's Privacy</h3>
                  <p className="text-gray-700">
                    Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">8. Changes to Privacy Policy</h3>
                  <p className="text-gray-700">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </section>
                
                <section>
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">9. Contact Us</h3>
                  <p className="text-gray-700">
                    If you have any questions about this Privacy Policy, please contact us at{' '}
                    <a href="mailto:muhammadtayyabmt0@gmail.com" className="text-blue-500 hover:underline">
                      muhammadtayyabmt0@gmail.com
                    </a>
                  </p>
                </section>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
