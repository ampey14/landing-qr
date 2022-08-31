import React from 'react';
import BannerImg from '../assets/banner_img.png'

const Home = () => {
  return (
    <div name='home' className='w-full h-[70] bg-[#0a053f] pt-10'>
        <img className='cover' src={BannerImg} alt="BannerImg" />
    </div>
  )
}

export default Home