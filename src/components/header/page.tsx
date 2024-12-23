'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Pagina Inicial', href: '/' },
  { name: 'Sobre Mim', href: '/about' },
  { name: 'Contato', href: '/contact' }
]

export default function Header() {
  const pathname = usePathname();
  return (
    <header className='flex justify-center mb-2 bg-[#e3e3e3]'>
      <div className='max-w-7xl w-full flex'>

        <Link href='/' className=''>
          <Image
            src='/logo.png'
            width={200}
            height={200}
            loading='lazy'
            alt='Header Logo'
            className='-z-10'
          />
        </Link>

        <div className='flex justify-center items-center w-full '>
          <div className='flex flex-wrap items-center'>
            {navLinks.map(navLink => {
              const active = navLink.href === pathname.toString() ? 'bg-white' : '';
              return (
                <Link
                  href={navLink.href}
                  key={navLink.name}
                  className={`p-2 m-2 font-bold ${active} rounded text-[#72a68f] hover:underline hover:text-[#A8D5BA]`}
                >
                  {navLink.name}
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </header>
  );
}
