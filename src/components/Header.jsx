import React from 'react'
import { Slide } from 'react-awesome-reveal'

export default function Header() {
    return (
        <div className='w-full bg-cover bg-right-bottom bg-hero-pattern h-screen'>
            <div className="lg:mx-32 mx-6 sm:mx-12 h-full flex items-center">
                <div className="text-center sm:text-start sm:w-2/3 flex flex-col gap-8">
                    <Slide cascade className='w-full'>
                        <h2 className='lg:w-4/5 xl:w-3/5 sm:text-5xl font-bold md:font-extrabold lg:font-black text-3xl font-martel text-gray-700'>Help to reclaim your life and freedom </h2>
                        <p className='lg:w-3/6 font-montserrat text-gray-500'>We know how large objects will act,
                            but things on a small scale.</p>
                        <div className="flex-col sm:flex-row font-open-sans btns flex gap-4 sm:gap-2 mx-auto sm:mx-0">
                            <button className='bg-[#784F33] rounded-full px-8 border-2 border-[#784F33] py-3 font-bold text-white text-sm'>Get Quote Now</button>
                            <button className='bg-transparent rounded-full px-8 border-2 border-[#784F33] py-3 font-bold text-[#784F33] text-sm'>Learn More</button>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    )
}
