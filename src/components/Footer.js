import React from 'react'
import { ImGithub } from 'react-icons/im'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaHome,
} from 'react-icons/fa';

import { MdLocationOn } from 'react-icons/md';
import { BsPersonFill, BsPaypal } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
            <div className='flex flex-col gap-7'>
                <img className='w-32' src='https://i.pinimg.com/originals/ef/26/a5/ef26a537b4d4dbe811306ae225989999.jpg' alt=''/>
                <p className='text-white text-sm tracking-wide'>&copy; ReactBD.com</p>
                <img className='w-16' src='https://www.visa.ro/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg' alt=''/>
                <div className='flex gap-5 text-lg text-gray-400'>
                  <ImGithub className='hover:text-white duration-300 cursor-pointer'/>
                  <FaFacebookF className='hover:text-white duration-300 cursor-pointer'/>
                  <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
                  <FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
                </div>
            </div>
            <div>
                 <h2 className='text-2xl font-semibold text-white mb-4'>Locate us</h2>
                <div className='text-base flex flex-col gap-2'>
                    <p>Oradea,Bihor,Romania</p>
                    <p>Mobile: 1234 3456789</p>
                    <p>Phone: 0012 01234567</p>
                    <p>e-mail: bazar@gmail.com</p>
                </div>
            </div>
            <div>
              <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
              <div className='flex flex-col gap-2 text-base'>
                  <p className='flex items-center gap-3 hover:text-white duration-center cursor-pointer'>
                  <span className='text-lg'>< BsPersonFill /></span>My account</p>
                  <p className='flex items-center gap-3 hover:text-white duration-center cursor-pointer'>
                  <span className='text-lg'>< BsPaypal /></span>Checkout</p>
                  <p className='flex items-center gap-3 hover:text-white duration-center cursor-pointer'>
                  <span className='text-lg'>< FaHome /></span>Order tracking</p>
                  <p className='flex items-center gap-3 hover:text-white duration-center cursor-pointer'>
                  <span className='text-lg'>< MdLocationOn /></span>Help & Support</p>
              </div>  
            </div>
            <div className='flex flex-col justify-center'>
              <input className='bg-transparent border px-4 py-2 text-sm' placeholder='' type='text'/>
              <button className='text-sm border text-white border-t-0 hover:bg-gray-900
              active:bg-white active:text-black'>
                Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Footer