import React from 'react';
import BannerImg from '../assets/banner_img.png'

const Home = () => {
  return (
    <div>
      <div name='home' className='w-full mx-auto allblue-back pt-9'>
          <img className='w-full sm:h-screen' src={BannerImg} alt="BannerImg" style={{opacity: 0.8}}/>
      </div>
      

    </div>
    
  )
}

export default Home