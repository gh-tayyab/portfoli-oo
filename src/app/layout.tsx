import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Initialize the Inter font
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Define props interface
interface RootLayoutProps {
  children: React.ReactNode; // Explicitly type children
}

export const metadata = {
  title: 'Muhammad Tayyab - Agentic AI Engineer & Next.js Developer',
  description: 'Portfolio of Muhammad Tayyab, an AI Engineer and Full-Stack Developer specializing in Next.js, AI-driven automation, and scalable web solutions.',
  keywords: ['Agentic AI', 'AI Engineer', 'Next.js Developer', 'Full-Stack Development', 'LangChain', 'CrewAI', 'GraphQL', 'Web Development', 'JavaScript', 'TypeScript', 'Docker', 'Tailwind CSS', 'AWS', 'GitHub', 'PostgreSQL', 'MongoDB'],
  authors: [{ name: 'Muhammad Tayyab' }],
  creator: 'Muhammad Tayyab',
  publisher: 'Muhammad Tayyab',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfoli-oo.vercel.app',
    siteName: 'Muhammad Tayyab - AI Engineer & Developer',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Tayyab - AI Engineer & Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@mtayyab_00',
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen flex flex-col transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="pt-16">{children}</div>
            <Footer />
          </div>
      </body>
    </html>
  );
}
