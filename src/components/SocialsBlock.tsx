import React from 'react';
import Block from './Block';
import Link from 'next/link';
import {
  SiGithub,
  SiTicktick,
  SiTiktok,
  SiTwitter,
  SiYoutube,
} from 'react-icons/si';

export default function SocialsBlock() {
  return (
    <>
      <Block
        whileHover={{
          rotate: '2.5deg',
          scale: 1.1,
        }}
        className='col-span-6 bg-red-500 md:col-span-3'
      >
        <Link
          href={'#'}
          className='grid h-full place-content-center text-3xl text-white'
        >
          <SiYoutube />
        </Link>
      </Block>
      <Block
        whileHover={{
          rotate: '-2.5deg',
          scale: 1.1,
        }}
        className='col-span-6 bg-green-600 md:col-span-3'
      >
        <Link
          href={'#'}
          className='grid h-full place-content-center text-3xl text-white'
        >
          <SiGithub />
        </Link>
      </Block>
      <Block
        whileHover={{
          rotate: '-2.5deg',
          scale: 1.1,
        }}
        className='col-span-6 bg-zinc-50 md:col-span-3'
      >
        <Link
          href={'#'}
          className='grid h-full place-content-center text-3xl text-black'
        >
          <SiTiktok />
        </Link>
      </Block>
      <Block
        whileHover={{
          rotate: '2.5deg',
          scale: 1.1,
        }}
        className='col-span-6 bg-blue-500 md:col-span-3'
      >
        <Link
          href={'#'}
          className='grid h-full place-content-center text-3xl text-white'
        >
          <SiTwitter />
        </Link>
      </Block>
    </>
  );
}
