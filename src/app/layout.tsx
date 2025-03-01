import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/app/ThemeProvider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen flex flex-col transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ThemeProvider> {/* Wrap your application in ThemeProvider */}
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="pt-16">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
