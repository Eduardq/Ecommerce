import React, { useState } from 'react'
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi'
const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        'https://static.vecteezy.com/system/resources/previews/003/692/287/non_2x/big-sale-discount-promotion-banner-template-with-blank-product-podium-scene-graphic-free-vector.jpg',
        'https://previews.123rf.com/images/varijanta/varijanta1605/varijanta160500044/56755965-thin-line-flat-design-banner-for-sale-web-page-shopping-e-commerce-discounts-and-clearance-sale.jpg',
        'https://i.pinimg.com/originals/63/89/bc/6389bc75f8e8eaf5627c243d4e85ac5a.jpg',
        'https://i.pinimg.com/originals/94/50/ed/9450edc9e2da48e07031c79b8f725010.jpg',
    ];

    const prevSlide =() =>{
        setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev-1)
    }
    const nextSlide =() =>{
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev+1)
    }
    
    return (
        <div className='w-full h-auto overflow-x-hidden'>
            <div className='w-screen h-[650px] relative'>
                <div style={{transform:`translateX(-${currentSlide *100}vw)`}} 
                className='w-[400vw] h-full flex transition-transform duration-500'>
                    <img className='w-screen h-full object-cover'  src={data[0]} alt='' />
                    <img className='w-screen h-full object-cover' src={data[1]} alt='' />
                    <img className='w-screen h-full object-cover' src={data[2]} alt='' />
                    <img className='w-screen h-full object-cover' src={data[3]} alt='' />
                </div>
                <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
                    <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center
                    justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
                    active:bg-gray-900 duration-300'>
                        <HiArrowLeft/>
                    </div>
                    <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center
                    justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
                    active:bg-gray-900 duration-300'>
                        <HiArrowRight/>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default Banner