import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-[100] text-gray-300 blue-back p-7'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-1'>
                <div className='pb-8 pl-4 text-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#2d3ace]'>About the Company</p>
                </div>
                
            </div>
            
            <div className="max-w-[850px] w-full grid grid-cols-1 gap-5 px-4">
                <div>
                    <p className='text-justify'>
                    Credence Micro-credit is a legally registered indigenous micro lending institution licensed by Bank of Ghana BoG under the Non-Banking Financial Institution Act NBFI, ACT 2008(Act 774) to undertake micro credit services to the Ghanaian public. Its head office is located at East Legon, Accra. 
                    </p>
                </div>
                
                <div>
                    <p className='text-justify'>
                        Credence started humble operations in 2017 and has evolved as the most preferred, reliable and credible micro lending institution in Ghana. Our products are customer-tailored and centered with excellent customer care. Our clients are our most important asset and we treat them as such. Technology has been our driving force in delivering an outstanding customer service to our cherished customers. 
                    </p>
                </div>
                
                <div>
                    <p className='text-justify'>
                    At Credence, we seek to consolidate on our brand as the most preferred and credible in the micro credit industry in Ghana. Credence has the most amazing, resilient, astute and outstanding team of professionals who bring tremendous industry knowledge from broad array of disciplines. Creativity and innovation have been our hall mark. 
                    </p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About