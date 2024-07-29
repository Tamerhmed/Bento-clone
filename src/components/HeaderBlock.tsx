import React from 'react';
import Block from './Block';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function HeaderBlock() {
  return (
    <Block className='col-span-12 row-span-2 md:col-span-6'>
      <img
        src='https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=john'
        alt='avatar'
        className='mb-4 size-14 rounded-full'
      />
      <h1 className='mb-12 text-4xl font-medium leading-tight'>
        Hi, I&apos;m Tamer.{' '}
        <span className='text-zinc-400'>
          I build cool websites like this one
        </span>
      </h1>
      <Link
        href={'#'}
        className='flex items-center gap-1 text-red-300 hover:underline'
      >
        Contact me <FiArrowRight />
      </Link>
    </Block>
  );
}
