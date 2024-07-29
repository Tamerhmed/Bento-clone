'use client';

import React from 'react';
import Block from './Block';
import HeaderBlock from './HeaderBlock';
import SocialsBlock from './SocialsBlock';
import AboutBlock from './AboutBlock';
import LocationBlock from './LocationBlock';
import EmailListBlock from './EmailListBlock';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Logo from './Logo';

export default function Bento() {
  return (
    <motion.div
    initial='initial'
    animate='animate'
    transition={{
      staggerChildren:0.2,
    }}
    className='mx-auto grid mx-w-4xl grid-flow-dense grid-cols-12 gap-4'>
      <Logo />
      <HeaderBlock />
      <SocialsBlock />
      <AboutBlock />
      <LocationBlock />
      <EmailListBlock />
      <Footer />
    </motion.div>
  );
}
