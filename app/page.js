"use client"
import Image from 'next/image'
import Link from 'next/link'
import Intro from './component/Intro'
import Page from './Portfolio/page'
import Skills from './component/skills'

export default function Home() {
  return (
    <>
      
        <Intro/>
      <Page/>
      <Skills/>
      
            </>
            )
}
