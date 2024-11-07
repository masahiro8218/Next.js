'use client';
 
import React from 'react';
import Container from './Container';
import logo1 from '../public/1.svg';
import logo2 from '../public/2.svg';
import logo3 from '../public/3.svg';
import logo4 from '../public/4.svg';
import logo5 from '../public/5.svg';
import logo6 from '../public/6.svg';
import logo7 from '../public/7.svg';
import logo8 from '../public/8.svg';
import Image from 'next/image';
import FadeIn, { FadeInStagger } from './FadeIn';
 
const clients = [
  ['1', logo1],
  ['2', logo2],
  ['3', logo3],
  ['4', logo4],
  ['5', logo5],
  ['6', logo6],
  ['7', logo7],
  ['8', logo8],
];
 
function Client() {
  return (
    <div className="mt-24 rounded-[50px] bg-gray-950 py-20">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center text-white text-sm font-semibold tracking-wider">
            こちらの企業も導入しています
          </h2>
          <div className="h-px flex-auto bg-neutral-700"></div>
        </FadeIn>
 
        <FadeInStagger faster>
          <ul className="mt-10 grid grid-cols-2 gap-x-8 lg:grid-cols-4 gap-10">
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
}
 
export default Client;