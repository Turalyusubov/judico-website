import React from 'react'
import Doc from '../assets/doc.svg'
import Scales from '../assets/scales.svg'
import Hammer from '../assets/hammer.svg'

export default function Features() {
    const features = [
        {
            id: 1,
            title: 'Frauds or Mislead',
            img: 'doc'
        },
        {
            id: 2,
            title: 'Bailes & Warrants',
            img: 'scales'
        },
        {
            id: 3,
            title: 'Federal Drug Crimes',
            img: 'hammer'
        },
        {
            id: 4,
            title: 'Traffic Related Crimes',
            img: 'scales'
        },
        {
            id: 5,
            title: 'Family Law',
            img: 'hammer'
        },
        {
            id: 6,
            title: 'Business Law',
            img: 'scales'
        },
    ]

    const imgUrl = (img) => {
        switch (img) {
            case 'doc':
                return Doc;
            case 'scales':
                return Scales;
            case 'hammer':
                return Hammer;
            default:
                console.log('no')
        }
    }

    return (
        <div id='features' className='w-full px-6 sm:px-12 lg:px-32 py-20'>
            <div className="sm:w-4/6 md:w-3/5 xl:w-2/5">
                <h2 className='font-bold mb-4 text-gray-700 text-4xl font-martel'>Every Client Matters</h2>
                <p className='text-gray-400 text-sm'>Problems trying to resolve the conflict between
                    the two major realms of Classical physics: Newtonian mechanics </p>

            </div>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 w-full my-10'>
                {features.map(feature => (
                    <div className='flex border border-gray-200 p-4 shadow rounded-sm items-center gap-4 w-full bg-gray-50' key={feature.id}>
                        <img className='bg-cyan-800 rounded-full p-4' src={imgUrl(feature.img)} alt="" />
                        <p className='font-bold text-gray-500'>{feature.title}</p>
                    </div>
                ))}
            </div>
            <div className="flex-col px-6 sm:px-0 sm:flex-row font-open-sans btns flex gap-4 sm:gap-2 mx-auto sm:mx-0">
                <button className='bg-cyan-800 rounded-full px-8 border-2 border-cyan-800 py-3 font-bold text-white text-sm'>Get Quote Now</button>
                <button className='bg-transparent rounded-full px-8 border-2 border-cyan-800 py-3 font-bold text-cyan-800 text-sm'>Learn More</button>
            </div>
        </div>

    )
}
