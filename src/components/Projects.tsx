import React,{useRef} from 'react'
import { ProjectList } from './ProjectList';
import { createTextChangeRange } from 'typescript';
import Link from 'next/link';
import { scroll } from 'framer-motion';
 
type Props = {}

const Projects = (props: Props) => {
   const ref:any = useRef(null);
   
   
    const projects = [1,2,3,4];
 const scroll  = (scrollSet:number) => {
   ref.current.scrollLeft += scrollSet;
   console.log(ref.current.scrollLeft)
   console.log(ref.current)
 }
   
  
  
  return ( 
    
    
     <div  className='h-screen snap-center bg-white mx-auto max-w-7xl xl:max-w-8xl z-0  items-center flex flex-col relative overflow-auto my-5 ' >

    <h3 className='absolute  uppercase
           tracking-[15px] top-20 text-gray-600 text-2xl z-20'> Projects </h3>

           <div  ref={ref}
            className =' absolute w-fit md:w-[650px] flex items-center snap-center  overflow-x-scroll snap-x snap-mandatory z-0 overflow-y-hidden text-black m-5 '> 

           {ProjectList.map((project) => {
            return <div key={project.name} className='   border-gray-400 my-[120px]  w-[100%] flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center  h-[80%] my-20 '>
         
            <img className=' md:w-[30%] md:h-[30%] w-[10%] h-[10%]  m-5 '  src={project.image} alt=""></img>
            <div className="md:w-full w-[550px]  flex  flex-col items-center p-4">
                <h4 className=" text-2xl"> {project.name} </h4>
               
                <div className='flex flex-row m-2 text-lg'>
                  
                   {project.tech.map((tech)=>(<div className='flex flex-shrink-3'  key={tech}> <h4 >{tech},</h4></div>))}
                </div>
                <p className='w-screen md:w-full p-3'>{project.desc}</p>
                <div className='flex flex-row gap-3 m-2'> 
                <Link href={project.deployed}> 
                <button  className='btn primary border  border-cyan-300 rounded-lg p-3 hover:blur-sm' > Live View </button></Link>
           <Link href={project.github}> <button className='btn primary border border-cyan-300 rounded-lg p-3 hover:blur-sm ' > Github</button>
        </Link>

        </div>
        </div>   
        <div className='flex justify-between gap-8 w-full'> 
        <div>   <button className= ' border rounded-sm p-2 hidden md:block' onClick={()=>scroll(-600)}> Prev </button></div>
       <div>   <button className= ' border rounded-sm p-2 hidden md:block' onClick={()=>scroll(600)}> Next </button></div>
    
      </div>
      </div>

           })}
          </div>
    
    <div className='  absolute top-[20%] bg-slate-200 w-[800px] my-5 flex-shrink-0 md:mx-[250px] shadow-2xl left-0  '></div>
    
        </div>
  
    
    
  )
}


export default Projects