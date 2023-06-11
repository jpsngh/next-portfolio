import React from 'react'
import { SkillList } from './SkillList'
import {motion} from 'framer-motion'
import Skill from './Skill'
type Props = {}

const Skills = (props: Props) => {
  return (
    <div
     className='h-screen  bg-slate-100 mx-auto max-w-7xl rounded  items-center flex flex-col  my-5 text-left md:flex-row  justify-center  relative overflow-hidden  '>
      <h3 className='absolute top-24 uppercase
       tracking-[15px] text-gray-600 text-2xl sm:hidden'> Skills  </h3> 
       <h3 className= 'text-gray-600 absolute top-32 sm:hidden'> Hover over a skill for proficiency </h3> 
       <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-5 mx-5 my-5 '>
       {SkillList.map((skill)=>{
        return <Skill key={skill.id}  directionLeft={skill.direction} image={skill.image} prof={skill.prof}></Skill>
       })}

       </div>

</div>  )
}

export default Skills