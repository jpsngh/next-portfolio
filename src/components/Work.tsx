import React from 'react'
import Card from './Card'
import {motion} from 'framer-motion'
import {ExperienceList} from "./ProjectList"
type Props = {}

const Work = (props: Props) => {
  return (
    <div className='h-screen sm:h-fit bg-white mx-auto max-w-7xl   items-center flex flex-col  my-5 text-left md:flex-row  justify-center  relative overflow-hidden  '>
        <div className=' top-24 flex '> 
        <h2 className=' mx-5 my-5  tracking-wider uppercase  md:tracking-[15px] text-gray-500 text-2xl' > Work Experience and Education </h2>
        </div>
        <div className=' w-full flex  items-center space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory m-5 scrollbar-thin scrollbar-track-white scrollbar-thumb-black'> 
       {ExperienceList.map((experience)=>{
            return <Card key={experience.title}  title={experience.title} image={experience.image} 
             desc={experience.description}
             list= {experience.list}
             year={experience.year}
             inst = {experience.institution}
            
            ></Card>
       })}
        </div>
        
        </div>
  )
}

export default Work