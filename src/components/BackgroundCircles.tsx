import React from 'react'
import { motion } from "framer-motion"
type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
  
    <motion.div
    initial={{ opacity: 0, }}
    animate={{  scale: [1,2,2,3,1],opacity: [0.1,0.2,0.3,0.3,1.0], }}
    transition={{duration: 3.5}}
   className='relative flex flex-row items-center'
  >
    
    <div className='relative flex justify-center items-center'>
    
        <div className=' absolute border border-red-200 rounded-full h-[200px] mt-52 w-[200px] opacity-50 animate-ping'></div>
        <div className=' absolute border border-green-200 rounded-full h-[350px] mt-52 w-[350px]   animate-ping'></div>
        <div className=' absolute border border-blue-200 rounded-full h-[200px] mt-52 w-[300px]   animate-pulse '></div>
        <div className='border absolute border-orange-300 rounded-full h-[400px] mt-52 w-[600px] opacity-20  animate-pulse '></div>
        <div className='border absolute border-black-300 rounded-full h-[600px] mt-52 w-[800px]  animate-pulse '></div>
    
        
    </div>
    </motion.div>

  )
}

export default BackgroundCircles