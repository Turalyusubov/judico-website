import React from 'react'
import Doc from '../assets/doc.svg'
import Scales from '../assets/scales.svg'
import Hammer from '../assets/hammer.svg'
import { Slide } from 'react-reveal'

export default function Features() {
    const features = [
        {
            id: 1,
            title: 'Frauds or Mislead',
            img: Doc
        },
        {
            id: 2,
            title: 'Bailes & Warrants',
            img: Scales
        },
        {
            id: 3,
            title: 'Federal Drug Crimes',
            img: Hammer
        },
        {
            id: 4,
            title: 'Traffic Related Crimes',
            img: Scales
        },
        {
            id: 5,
            title: 'Family Law',
            img: Hammer
        },
        {
            id: 6,
            title: 'Business Law',
            img: Scales
        },
    ]

    return (
        <div id='features' className='w-full px-6 sm:px-12 lg:px-32 py-20'>
            <div className="sm:w-4/6 md:w-3/5 xl:w-2/5">
                <Slide left className='w-full'>
                    <h2 className='font-bold mb-4 text-gray-700 text-4xl font-martel'>Every Client Matters</h2>
                    <p className='text-gray-400 text-sm'>Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </Slide>
            </div>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 w-full my-10'>
                <Slide left direction='right' className='w-full'>
                    {features.map(feature => (
                        <div className='cursor-pointer flex border border-gray-200 p-4 shadow rounded-sm items-center gap-4 w-full bg-gray-50' key={feature.id}>
                            <div className="rounded-full bg-cyan-800 w-[60px] h-[60px] flex items-center justify-center">
                                <img className='' src={feature.img} alt="" />
                            </div>
                            <p className='font-bold text-gray-500'>{feature.title}</p>
                        </div>
                    ))}
                </Slide>
            </div>
            <Slide right className='w-full'>
                <div className="flex-col px-6 sm:px-0 sm:flex-row font-open-sans btns flex gap-4 sm:gap-2 mx-auto sm:mx-0">
                    <button className='transition-all duration-300 hover:bg-transparent hover:text-cyan-800 bg-cyan-800 rounded-full px-8 border-2 border-cyan-800 py-3 font-bold text-white text-sm'>Get Quote Now</button>
                    <button className='transition-all duration-300 hover:bg-cyan-800 hover:text-white bg-transparent rounded-full px-8 border-2 border-cyan-800 py-3 font-bold text-cyan-800 text-sm'>Learn More</button>
                </div>
            </Slide>
        </div>

    )
}
