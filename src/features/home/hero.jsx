/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import H1 from '@/ui/heading/h1';
import P from '@/ui/heading/p';
import OutlineButton from '@/ui/buttons/buttonOutline';

export default function Hero() {
  const [scrollState, setScrollState] = useState(0);

  useEffect(() => {
    setScrollState(2);
  },[scrollState]);

  return (
    <section className="container flex flex-col mx-auto items-center md:flex-row justify-center py-10 md:p-5 px-5">
      <div className="flex flex-col mx-auto justify-center max-w-md md:max-w-2xl md:mr-12">
        <H1>Welcome to Imprint</H1>
        <div className="mt-4">
          <P>
          We aim to enhance urban planning through remote sensing for monitoring sidewalk 
          accessibility challenges faced by abled individuals.
          </P>
        </div>
        <div className="mt-5 flex">
          <div className="mr-5">
            <OutlineButton><Link href="/contribute">Contribute</Link></OutlineButton>
          </div>
          <OutlineButton><Link href="/about">Learn More</Link></OutlineButton>
        </div>
      </div>
      <div className="flex pt-12">
        <div className={`md:ml-6 duration-100 ease-in ${scrollState < 1 ? 'opacity-0' : 'opacity-100'}`}>
          <div style={{ position: 'relative', height: '450px', width: '300px' }}>
            <Image
              src="/images/home/hero1.jpg"
              fill
              style={{ objectFit: 'cover' }}
              alt="Sidewalk in Manila 1"
            />
          </div>
        </div>
        <div className={`mt-12 -ml-12 duration-500 ease-in ${scrollState < 1 ? 'opacity-0' : 'opacity-100'}`}>
          <div style={{ position: 'relative', height: '450px', width: '300px' }} className="shadow-xl">
            <Image
              src="/images/home/hero2.jpg"
              fill
              style={{ objectFit: 'cover' }}
              alt="Sidewalk in Manila 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
