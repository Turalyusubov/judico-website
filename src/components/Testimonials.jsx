import React from 'react'
import Person1 from '../assets/person1.jpeg'
import Person2 from '../assets/person2.jpeg'
import Person3 from '../assets/person3.jpeg'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'


export default function Testimonials() {
    return (
        <div className='flex flex-col justify-center bg-cyan-800 w-full px-6 sm:px-12 lg:px-32 py-20 flex flex-col items-center'>
            <div className="sm:w-4/6 md:w-3/5 xl:w-2/5 text-center text-white mb-20">
                <h2 className='font-bold mb-4 text-4xl font-martel'>What Clients Say</h2>
                <p className='text-sm'>Problems trying to resolve the conflict between the two major realms
                    of Classical physics: Newtonian mechanics  </p>
            </div>
            <div className="grid flex flex-col items-center justify-center grid-cols-1 lg:grid-cols-3 w-full gap-20 lg:gap-8">
                <div className="bg-white shadow-lg rounded-xl relative w-full px-8 py-8 lg:px-10 xl:px-16">
                    <img className='absolute shadow-lg w-28 rounded-full -top-14 left-10' src={Person1} alt="person" />
                    <div className="mt-10">
                        <h4 className='font-bold font-martel text-gray-700 text-2xl'>Regina Miles</h4>
                        <p className='text-sm text-gray-500 font-bold'>Designer</p>
                        <div className="flex text-yellow-500 my-3 border-b-2 border-stone-200 pb-3">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p className='text-gray-500 text-sm'>This proved to be impossible using the traditional
                            concepts of space and time. Einstein developed a
                            new view of time first and then space. This proved
                            to be impossible using the traditional concepts of
                            space and time. Einstein developed a new view
                            of time first and then space.</p>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-xl relative w-full px-8 py-8 lg:px-10 xl:px-16">
                    <img className='absolute shadow-lg w-28 rounded-full -top-14 left-10' src={Person2} alt="person" />
                    <div className="mt-10">
                        <h4 className='font-bold font-martel text-gray-700 text-2xl'>Regina Miles</h4>
                        <p className='text-sm text-gray-500 font-bold'>Designer</p>
                        <div className="flex text-yellow-500 my-3 border-b-2 border-stone-200 pb-3">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p className='text-gray-500 text-sm'>This proved to be impossible using the traditional
                            concepts of space and time. Einstein developed a
                            new view of time first and then space. This proved
                            to be impossible using the traditional concepts of
                            space and time. Einstein developed a new view
                            of time first and then space.</p>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-xl relative w-full px-8 py-8 lg:px-10 xl:px-16">
                    <img className='absolute shadow-lg w-28 rounded-full -top-14 left-10' src={Person3} alt="person" />
                    <div className="mt-10">
                        <h4 className='font-bold font-martel text-gray-700 text-2xl'>Regina Miles</h4>
                        <p className='text-sm text-gray-500 font-bold'>Designer</p>
                        <div className="flex text-yellow-500 my-3 border-b-2 border-stone-200 pb-3">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p className='text-gray-500 text-sm'>This proved to be impossible using the traditional
                            concepts of space and time. Einstein developed a
                            new view of time first and then space. This proved
                            to be impossible using the traditional concepts of
                            space and time. Einstein developed a new view
                            of time first and then space.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
