import Link from 'next/link'
import React from 'react'
import Block from './Block'

export default function Footer() {
  return (
   <footer className='mt-12 col-span-12 justify-center items-center'>
    <p className='text-center text-zinc-400'>
Made with ❤️ by {" "}
<Link href={'#'} className='text-red-300'>
@TamerAhmed</Link>
    </p>
   </footer>
  )
}
