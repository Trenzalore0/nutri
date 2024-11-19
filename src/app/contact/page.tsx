import React from 'react';
import Link from 'next/link';
import localFont from 'next/font/local';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato '
}

const contactLinks = [
  { name: 'Whatsapp', href: 'https://api.whatsapp.com/message/WPT3NM525OOHB1?autoload=1&app_absent=0' },
  { name: 'Instagram', href: 'https://www.instagram.com/nutri.vivianemonteiro/' }
];

const font = localFont({
  src: '../fonts/BrittanySignature/BrittanySignature.ttf',
  weight: "100 900",
});

const paymentList = [
  { index: 0, item: 'PIX' },
  { index: 1, item: 'Dinheiro' },
  { index: 2, item: 'Cartão' }
];

const citiesList = [
  { index: 0, item: 'Venturosa' },
  { index: 1, item: 'Arcoverde' },
  { index: 2, item: 'Pedra' }
];

export default function Contact() {
  return (
    <div className='flex justify-center'>
      <div>
        <div className='flex justify-center mb-2'>
          <Image
            src='/profile.jpg'
            alt='Profile Picture'
            width={200}
            height={200}
            loading='lazy'
            className='border-2 border-[#061e41] rounded-full p-2'
          />
        </div>
        <h1 className={`${font.className} text-4xl text-center font-bold text-[#061e41] mb-2`}>
          Viviane Monteiro
        </h1>
        <div>
          <h2 className='text-center font-semibold'>
            Formas de pagamento
          </h2>

          <ol className='list-disc pl-6'>
            {
              paymentList.map(payment => {
                return (
                  <li key={payment.index}>
                    {payment.item}
                  </li>
                );
              })
            }
          </ol>

        </div>
        <div>
          <h2 className='text-center font-semibold'>
            ATENDIMENTO ONLINE E PRESENCIAL:
          </h2>

          <ol className="list-image-[url('/location-pin.png')] pl-6" >
            {
              citiesList.map(city => {
                return (
                  <li
                    key={city.index}
                  >
                    {city.item}
                  </li>
                );
              })
            }
          </ol>

          Venha fazer parte do time!
        </div>
        <div className='flex flex-col mt-4'>

          {contactLinks.map(contactLink => {
            return (
              <Link
                href={contactLink.href}
                key={contactLink.name}
                className='p-2 m-2 border border-[#061e41] rounded hover:underline text-center'
                target='_blank'
              >
                {contactLink.name}
              </Link>
            );
          })}

        </div>
      </div>
    </div>
  );
}
