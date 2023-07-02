import React,{useRef, useState} from 'react'
import Modal from 'antd/es/modal/Modal';
import { ProjectList } from './ProjectList';
import { createTextChangeRange } from 'typescript';
import Link from 'next/link';
import { scroll } from 'framer-motion';

 
type Props = {}

const Projects = (props: Props) => {
   const ref:any = useRef({});

    const projects = [1,2,3,4];
    const [active, setActive] = useState(false);
    const [prop,setProp] = useState<any >();

    const handle =(project:any)=>{
       console.log(project);
        setProp(project);
        console.log(prop)
      return setActive(true)

    }


  return ( 
    
    
     <div  className='h-screen   overflow-x-scroll bg-white mx-auto max-w-7xl xl:max-w-8xl z-0 flex flex-col items-center gap-2 relative  my-5 ' >

    <h3 className='uppercase  md:block my-10
           m-2 tracking-[15px] top-20 text-gray-600 text-2xl z-20'> Projects </h3>
                        
                        <div className='flex flex-row'> 
           <div  ref={ref}
            className ='  h-full bg-white grid grid-cols md:grid-cols-3 items-center    text-black  '> 

           {ProjectList.map((project) => {
                 
              return   <div key={project.name} className='w-[400px] h-[400px] p-3  flex  flex-col items-center  justify-center gap-2 '>

               <div className='  outline-dashed p-5 flex items-center flex-col relative'> 
                  <h2 className='font-mono text-2xl'> {project.name} </h2>
                  <img  className="w-20 h-20" src={project.image} alt="image">
                  </img>
                  <p> {project.short}</p>
 
                <button className="text-gray-900 m-2 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2" onClick={(e)=>handle(project)} > View </button>
</div>
                 </div>
                
           })}
          </div>
          
<div >
          {active && <Modal
           open={active}
      
           centered
           
           onOk={() => setActive(false)}
           onCancel={() => setActive(false)}
           width={1000}
          > 
          <div className='flex flex-col items-center justify-center'> 
              <h1 className="text-2xl">{prop.name}</h1>
            <img src={prop.image} className='w-[400px] h-[300px] p-5 m-2'></img>
            <div className='flex flex-row m-2 gap-2'>
              <h2 className="mx-2 text-l "> Tech Used:</h2> 
           {prop.tech.map((teach:string)=>{
            return (
            
            <p key={teach} className='font-mono'>{teach}</p>
            )
           })}
           </div>
            <p className="font-mono p-2 m-2">{prop.desc}</p>
            <div className='flex flex-row gap-5 m-2'> 
            <a href={prop.deployed} className="focus:outline-none text-white bg-green-400 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800"> Live </a>
            <a href={prop.github} className="focus:outline-none text-white bg-purple-300 hover:bg-purple-600 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-500 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> Github </a>
            </div>
            </div>
            
            
            </Modal>}
          </div>
          </div>

        </div>

  )
}


export default Projects