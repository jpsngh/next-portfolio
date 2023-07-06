import React from 'react'
import { motion } from "framer-motion"
type Props = {}

const About = (props: Props) => {
  return (
    <div className='flex flex-col  relative h-screen text-center  max-w-7xl 
    px-10 justify-center mx-auto items-center bg-gray-50 rounded-lg sm:h-fit'>
        
        <h2 className=' my-10 md:block hidden  top-20 uppercase tracking-[15px] text-gray-500 text-2xl' >   About</h2>
         
        <motion.img className=' rounded border md:h-[350px] md:w-[350px] h-[150px] w-[150px] m-3'

            initial ={{
                x:100,
                
                
            
            }}
            animate={{
                x:-10,
                y:-10,
                opacity:0
            }}
            transition={{duration:1.2}}
            whileInView={{x:0,y:1,opacity:1}}
            viewport={{once:false}}
            src="./jpdp.jpg" >
            
            </motion.img>
         
            <div className=" ">
                <h4 className="text-xl  text-gray-400 tracking-wider uppercase">
                    Here is little
                    <span className='text-xl text-gray-400 tracking-wider uppercase '> Background</span>
                </h4>
                <p className='text-sm text-gray-600 m-5  '>As a highly motivated and skilled Web Developer, I have  years of industry and academic experience in developing and implementing user-friendly websites and web applications using a range of programming languages such as HTML, CSS, JavaScript, React, Node.js, and databases including MongoDB and MySQL.With a Bachelor  degree in Computer Science and a Diploma in Project Management, I am also proficient in project management methodologies and deployment tools such as GIT, Gitlab, Linux, Jira, and Redux. My combination of technical skills and project management expertise enables me to effectively translate business requirements into efficient and high-performing code.
</p>
                
            </div>
        </div>
        
  )
}

export default About