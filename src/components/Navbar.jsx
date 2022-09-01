import React, { useState } from 'react';
import {FaBars, FaTimes, FaLinkedin, FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import Logo from '../assets/logo.png';
import {Link} from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav) 
  return (
    <div className='z-10 fixed w-full h-[60px] flex justify-between items-center px-4 section-about text-gray-300'>
        <a href='https://www.credencemicrocredit.com/web/'>
            <img src={Logo} alt="Logo" style={{ width: '80px', opacity: '0.6' }} />
        </a>

        {/* menu */}
        <ul className='md:flex mx-auto'>
            <li>
                <Link to='home' smooth={true} duration={500}>
                <div className='flex'>
                    <span className='blue-back sm:text-3xl blinking tracking-wide'> STRICTLY BY INVITATION 
                    </span>

                </div>
                </Link>
            </li>
            
        </ul>
        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {nav ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile menu */}
        
        <ul className={nav ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center blue-back' : 'hidden'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='activities' smooth={true} duration={500}>
                    Activities
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                    About Us
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='products' smooth={true} duration={500}>
                    Products
                </Link>
            </li>
        </ul>
        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[145px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a href='https://www.facebook.com/credencemicrocreditgh/' className='flex justify-between items-center w-full text-gray-300'>
                        Facebook <FaFacebook size={20}/>
                    </a>
                </li>
                <li className='w-[145px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-400'>
                    <a href='https://twitter.com/Microcredence' className='flex justify-between items-center w-full text-gray-300'>
                        Twitter <FaTwitter size={30}/>
                    </a>
                </li>
                <li className='w-[145px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a href='https://www.linkedin.com/company/credence-microcr-editgh/' className='flex justify-between items-center w-full text-gray-300'>
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[145px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ed1a1a]'>
                    <a href='https://www.instagram.com/credencemicrocredit/' className='flex justify-between items-center w-full text-gray-300'>
                        Instagram <FaInstagram size={30}/>
                    </a>
                </li>
                <li className='w-[145px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a70505]'>
                    <a href='info@credencemicrocredit.com' className='flex justify-between items-center w-full text-gray-300'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar