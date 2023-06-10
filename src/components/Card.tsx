import React from 'react'
import {motion} from 'framer-motion'
type Props = {
  name?:string,
  image?:string;
  inst?:string;
  desc?:string;
  year?:string;
  title?:string;
  list:Array<string>;
}

const Card = ({image,inst,desc,year,title,list}: Props) => {
  return (
    <article className=" h-[650px] flex rounded-xl items-center flex-col p-10 justify-evenly bg-gray-100 space-y-7 scrollbar-thin scroll-thumb-black snap-center flex-shrink-0 w-[400px] md:w-[500px] xl:w-[900px] hover:bg-slate-100 hover:animate-pulse duration-500 ">
      <motion.img 
      initial = {{
        y:-100,
        opacity:0
      }}
      transition={{duration:1.2}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' 
        src ={image}
      />
<div className='mx-10 text-black px-0 md-px-10 p-5 w-[300px] md:w-[500px]  '>
  <div>
      <h4 className='text-2xl font-light '> {title}</h4>
      <p className='font-bold text-lg mt-1 text-gray-400'>{inst} </p>
      <div className='flex space-between'>
        {year}
      </div>
      <p className='md:w-[550px] '> {desc} </p>
      <ul className='list-disc space-y-4 mt-5 md:w-[550px] text-sm'>
       {list.map((li)=>{
        return <li className='md:block hidden' key={li}> {li}</li>
       })}
      </ul>
  </div>
</div>
        
    </article>

  )
}

export default Card