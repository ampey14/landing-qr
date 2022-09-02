import React from 'react';
import Img1 from '../assets/img1.jpeg';
import Img2 from '../assets/img2.jpeg';
import Img4 from '../assets/img4.jpeg';
import Img6 from '../assets/img6.jpg';
import Img8 from '../assets/img8.png';
import Img9 from '../assets/img9.png';
import Img10 from '../assets/img10.jpeg';




const Products = () => {
  return (
    <div name='products' className='w-full h-full text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Our Products</p>
                <p className='py-6 text-xl'>Check some of our products</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                
                {/* 1 */}
                <div class="rounded overflow-hidden shadow-lg blue-back">
                    <img class="w-full" src={Img1} alt="Mountain" />
                    <div class="px-3">
                        <div class="font-bold text-xl mb-2">Mi Loan</div>
                        <p class="text-center text-white italic lg:my-8 font-bold">
                            A loan you can call “my own”…!!
                        </p>
                        <p class="text-justify text-gray-300">
                        Mi Loan: the human nature is a complex one. Even with a very good research system, the human nature that is very dynamic cannot be comprehended in totality. Therefore, at Credence, we have developed a product that serves your need that cannot be recognized yet is pressing within you. With “Mi Loan” you can walk into the office of Credence Micro Credit and create your own loan package.
                        </p>
                    </div>
                    
            
                </div>
                {/* 2 */}
                <div class="rounded overflow-hidden shadow-lg red-back">
                    <img class="w-full" src={Img4} alt="Mountain" />
                    <div class="px-3">
                        <div class="font-bold text-xl mb-2">Credence Exe’Edu Loan</div>
                        <p class="text-center text-white italic lg:my-5  font-bold">
                            Focus on the prize, while we cater for the price..!!
                        </p>
                        <p class="text-justify text-gray-300">
                        Credence Exe’Edu Loan: When you have a full assurance of accessing funds for your higher learning program but only to be disappointed on the day of disbursement creates an unusual instability in the mind, especially, if you are pursuing academics. Credence has thought about you. Grab your Credence Exe’Edu loan now and settle that fees whilst you pay later at a little interest.
                        </p>
                    </div>
            
                </div>
                {/* 3 */}
                <div class="rounded overflow-hidden shadow-lg blue-back">
                    <img class="w-full" src={Img6} alt="Mountain" />
                    <div class="px-3">
                        <div class="font-bold text-xl mb-1">Credence “Pashew” Loan</div>
                        <p class="text-center text-white italic lg:my-8  font-bold">
                            Kill that stress before it kills you..!!
                        </p>
                        <p class="text-justify text-gray-300 lg:my-6">
                        Credence “Pashew” Loan: The unforeseen events that needs urgent attention such as your child's medical bill, a crush, and all other issues that cannot wait for a single day is no longer stressful with Credence “Pashew” Loan.                </p>
                    </div>
            
                </div>
                {/* 4 */}
                <div class="rounded overflow-hidden shadow-lg red-back">
                    <img class="w-full" src={Img10} alt="Mountain" />
                    <div class="px-3 py-4">
                        <div class="font-bold text-xl mb-2">Loans On Wheels</div>
                        <p class="text-center text-white italic lg:py-6  font-bold">
                            Twa yen keke..!!
                        </p>
                        <p class="text-justify text-gray-300">
                        Loans On Wheels: With the insurgence of traffic and high fuel cost, you do not have to pay more and go through uncertain risk to access a loan. With just a call or e-mail away, you can reach your loan application forms, submit and have your loan imbursement without having to get away from your working desk or having to endure long hour traffic.                </p>
                    </div>
            
                </div>
                {/* 5 */}
                <div class="rounded overflow-hidden shadow-lg red-back">
                    <img class="w-full" src={Img2} alt="Mountain" />
                    <div class="px-3 py-4">
                        <div class="font-bold text-xl mb-2">Credence Executive Loan</div>
                        <p class="text-center text-white italic lg:py-6  font-bold">
                            Your loan in comfort..!!
                        </p>
                        <p class="text-justify text-gray-300">
                        Credence Executive Loan: We believe in privacy; we are an institution with a higher sense of discretion. The need to have your financial need settled and at the same time protecting your image and personality is well deserving. Have yourself treated like the special person you are in an executive lounge specially prepared to make you feel like the special person you are. Discuss your loan in an exclusive premium lounge with a personalized attention. Are you an executive person, then we have got you covered.           
                        </p>
                    </div>
        
                </div>
                {/* 6 */}
                <div className='rounded grid grid-flow-row lg:max-w-[250px] lg:h-[100px] mx-auto'>
                    <img src={Img8} alt="" />
                    <br />
                    <img src={Img9} alt="" />
                    

                </div>
            </div>
        </div>
    </div>
  )
}

export default Products