import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Header = () => {
    const productData = useSelector((state) => state.bazar.productData)
    const userInfo = useSelector((state) => state.bazar.userInfo)
    console.log(userInfo)
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50'>
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
            <Link to='/'>
            <div>
                <img className='w-28' src='https://i.pinimg.com/originals/ef/26/a5/ef26a537b4d4dbe811306ae225989999.jpg'  alt=''/>
            </div>
            </Link>
            <div className='flex items-center gap-8'>
                <ul className='flex items-center gap-8'>
                    <li className='text-base text-black font-bold hover:text-orange-900
                     hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
                    <li className='text-base text-black font-bold hover:text-orange-900
                     hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
                    <li className='text-base text-black font-bold hover:text-orange-900
                     hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
                    <li className='text-base text-black font-bold hover:text-orange-900
                     hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
                    <li className='text-base text-black font-bold hover:text-orange-900
                     hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
                </ul>
                <Link to='/cart'>
                    <div className='relative'>
                        <img className='w-8 rounded-md' src='https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-vector-shopping-bag-icon-png-image_927105.jpg' alt=''/>
                        <span className='absolute w-6 top-2 left-1 text-sm flex items-center justify-center font-semibold'>
                            {productData.length}</span>
                    </div>
                </Link>    
                <Link to='login'>
                    <img 
                    className='w-8 h-8 rounded-full' 
                    src={userInfo ? userInfo.image : 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='' />
                </Link>
                {
                    userInfo && <p
                     className='text-base font-semibold underline underline-offset-2'>{userInfo.name}</p>
                }    
            </div>
        </div>
    </div>
  )
}

export default Header