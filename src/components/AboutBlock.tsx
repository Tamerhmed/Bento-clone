import React from 'react'
import Block from './Block'

export default function AboutBlock() {
  return (
    <Block className='col-span-12 text-3xl leading-tight'>
      <p>
        My passion is building cool stuff.{" "}
        <span className='text-zinc-400'>
          I build primary with React, Tailwind CSS, and Framer Motion. I love this stack so much that i even built a website about it.
        </span>
      </p>
    </Block>
  )
}
