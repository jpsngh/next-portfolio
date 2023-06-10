import React from 'react'
import { SocialIcon } from 'react-social-icons';
type Props = {}

function Foot({}: Props) {
  return (
    <div className=' flex flex-row items-center p-5 max-w-7xl  justify-evenly mx-auto bg-white w-screen rounded-md'>
        
         
        <div className='flex flex-row items-center p-1'>
   

   
   <SocialIcon url="https://linkedin.com/in/jpsngh" fgColor='blue' bgColor='transparent' />
   <SocialIcon url="https://github.com/jpsngh" fgColor='black' bgColor='transparent' />
 
   <SocialIcon url="https://jpportfolioapp.netlify.app" label="Our portfolio" fgColor='green'  bgColor='transparent'/>
   <SocialIcon url="https://twitter.com/thejusticeprime" fgColor='black' bgColor='transparent' /> 
   </div>
   
   <div className='flex flex-row items-center p-1 gap-2 text-black' > 
       <h4>jpatdesk@gmail.com</h4>
       <h4>+16479799596 </h4>

  
        </div>
       
    </div>
  )
}

export default Foot