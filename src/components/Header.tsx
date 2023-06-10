"use client";
import React from 'react'
import { motion } from "framer-motion"
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';



type Props = {}

function Header({}: Props) {
  const handle = {

  }
  return (
    
    <header className=' sticky z=1 flex items-start  max-w-7xl justify-between mx-auto bg-white w-screen rounded-md'> 
    <motion.div
    initial={{ y:-500,opacity: 0, scale: 0.5 }}
    animate={{y:10, opacity: 1, scale: 1 }}
    transition={{duration: 2}}
   className='flex flex-row items-center'
  >
 
    <div className='flex flex-row items-center p-3'>
   

   
      <SocialIcon url="https://linkedin.com/in/jpsngh" fgColor='blue' bgColor='transparent' />
      <SocialIcon url="https://github.com/jpsngh" fgColor='black' bgColor='transparent' />
    
      <SocialIcon url="https://jpportfolioapp.netlify.app" label="Our portfolio" fgColor='green'  bgColor='transparent'/>
      <SocialIcon url="https://twitter.com/thejusticeprime" fgColor='black' bgColor='transparent' /> 
      </div>
      </motion.div>
   
    <div className='flex flex-row items-center p-3 ' >
    <motion.div
    initial={{ y:-500,opacity: 0, scale: 0.5 }}
    animate={{y:10, opacity: 1, scale: 1 }}
    transition={{duration: 2}}
   className='flex flex-row items-center'
  >
    
   <SocialIcon onClick={()=>    window.location.href = 'mailto:jpatdesk@gmail.com'}  className="cursor-pointer" network="email" fgColor='black' bgColor='transparent' > </SocialIcon>
    <p className='uppercase hidden text-sm  md:inline-flex text-gray-600 font-mono'>  Get in Touch</p>
  
   </motion.div>

 </div>
 
  </header> 
  )
}

export default Header