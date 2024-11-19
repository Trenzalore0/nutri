import { Metadata } from 'next';
import './globals.css';

import Header from '@/components/header/page';

export const metadata: Metadata = {
  title: {
    default: '',
    template: '%s - Viviane Monteiro'
  },
  description: 'Viviane Monteiro nutrição e derivados',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className='antialiased'
      >
        <div>
          <Header />
        </div>
        <div className='flex justify-center flex-col items-center'>
          <div className='max-w-4xl'>
            {children}
          </div>
        </div>
        <div>
          <footer>
            <div className='text-center'>Made with love by Trenzalore.</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
