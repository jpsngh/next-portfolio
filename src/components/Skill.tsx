import React from 'react'
import { motion } from "framer-motion"


type Props = {
    directionLeft?:boolean;
    prof?:string;
    image?:string
}

const Skill = ({directionLeft,image,prof}: Props) => {
  return (
    <div className='text-gray-500 group relative flex cursor-pointer'>
        <motion.img 
        initial={{
            x:directionLeft ? -100 : 100,
            opacity:0
         }}
         transition={{duration:1}}
         whileInView={{opacity:1,x:0}}
        src={image}
        
        className="rounded w-24 h-24 p-2  filter group-hover:blur duration-100 transition ease-in-out"
        

        >
   
        </motion.img>
        <div className='absolute opacity-0 group-hover:opacity-80 transition:duration-300 ease-in-out group-hover'>
        <div className=' flex items-center justify-center h-full my-5 mx-3'>
            <p className='text-3xl font-bold text-gray-500'>{prof}</p>
        </div>
        </div>
        </div>
  )
}

export default Skill