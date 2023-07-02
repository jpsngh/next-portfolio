import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import { motion } from "framer-motion"
type Props = {}

function Intro({}: Props) {
    const [text,count] = useTypewriter({
        words:[
            "Hi , My name is Jaganpreet Singh",
            "I am in love with react and javascript ecosystem",
            "Learning Dev Ops and Cloud Infrastructure ",
            "< Full Stack developer />",
            "Apart from coding, I love Soccer,Philosophy and Nutrition"

        ],
        loop: true,
        delaySpeed:2000,
    })
  return (
   
    
    <div className='bg-slate-100 max-w-7xl  text-center overflow-hidden flex flex-col justify-center items-center my-5 min-h-[600px] space-y-8  mx-auto'>
        <BackgroundCircles></BackgroundCircles>
     <img className='rounded-full relative  h-32 w-32' src="https://scontent.fyyz1-2.fna.fbcdn.net/v/t1.6435-9/31138123_1652144704901838_5576495067935277056_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a4a2d7&_nc_ohc=360AFgOfPyYAX_rGIF_&_nc_ht=scontent.fyyz1-2.fna&oh=00_AfBgdGspihjB_Vq26YHsCL7W1wxWrakM6wRBRP-keCAMEw&oe=64A2EAAC" alt="hi"></img>
     <div> 
        <h2 className='text-sm uppercase p-5 text-gray-400 pb-4 tracking-[15px]'>Software Developer</h2>  
        <h1 className='p-5 text-3xl text-black'> <span className='m-5'>{text}</span>
     <Cursor cursorColor='gray'  cursorBlinking={false}></Cursor></h1> </div>
     <div className='m-5 p-5  md:flex-row xl:flex-row justify-center gap-5 z-0'>
        <Link href="#about">  <button className='intro-button'> About </button></Link>
       <Link href="#skills"> 
        <button className='intro-button'> Skills </button>
        </Link>
        <Link href="#experience"> 
        <button className='intro-button'> Experience </button>
        </Link>
        <Link href="#projects"> 
        <button className='intro-button'> Projects </button>
        </Link>
        <Link href="#contact"> 
        <button className='intro-button'> Contact  </button>
        </Link>
     </div>
  

    
    </div>
   

  )
}

export default Intro