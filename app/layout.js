import './globals.css';
import { LangProvider } from '@/lib/LangContext';

export const metadata = {
  title: 'Vigilix — Attack Surface Management',
  description: 'Know your attack surface before hackers do.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}