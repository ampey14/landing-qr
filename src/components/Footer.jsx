import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-[50] text-gray-300 section-about'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            
            
            <div className="w-full pt-7">
                <div class="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                <div className='text-xl py-3'>
                  Contact Us: 024 - 442 - 7440 <span className='hidden sm:text-white m-4'> | </span> info@credencemicrocredit.com
                </div>
                <a class="text-white" href="https://sell.digistoreafrica.com/">© 2022 Powered by Digistore Africa</a>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default About