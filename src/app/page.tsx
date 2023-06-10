"use client"
import type { NextPage } from 'next'
import Head from 'next/head'
import { motion } from "framer-motion"
import Header from '../components/Header'
import Intro from '../components/Intro'
import About from '../components/About'
import Work from '../components/Work'
import Skills from '../components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Foot from '@/components/Foot'
 const Home : NextPage=()=>{
  return (
    <div className=" bg-slate-900 snap-y  snap-mandatory overflow-scroll scrollbar-thin z=0">
    <Head> <title> JP Portfolio</title></Head>
    <motion.div
    initial={{ y:-500,opacity: 0, scale: 0.5 }}
    animate={{y:0, opacity: 1, scale: 1 }}
    transition={{duration:0.1}}
   className='flex flex-row items-center'
  >
<Header></Header>

  </motion.div>
<section className='snap-center'> <Intro></Intro></section>
<section id="about" className='snap-center'> <About></About></section>
<section id="experience" className='snap-center'> <Work></Work></section>
<section id="skills" className='snap-center'> <Skills></Skills></section>
<section id="projects" className='snap-center'> <Projects></Projects></section>
<section id="contact" className='snap-center'> <Contact></Contact></section> 
<section id="footer" className='snap-center'> <Foot></Foot></section> 


    
    </div>
  )
}
export default Home