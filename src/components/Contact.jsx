import React from 'react'
import World from '../assets/world.png'
import Employee from '../assets/employee.jpg'

export default function Contact() {
    return (
        <div className='relative flex flex-col items-center'>
            <div className="flex gap-12 lg:gap-0 items-center lg:items-start flex-col lg:flex-row lg:h-[100vh] lg:justify-between cover bg-gray-700 w-full px-6 sm:px-12 lg:px-32 py-20">
                <div className="lg:w-3/5 lg:w-5/12">
                    <h3 className='text-4xl mb-4 text-white font-bold font-martel'>We Have Branches All Over The World</h3>
                    <p className='text-white text-sm'>The gradual accumulation of information about atomic and
                        small-scale behaviour during the first quarter of the 20th
                        century, which gave some indications about how small things
                        do behave, produced an increasing confusion which was
                        Heisenberg, and Born.</p>
                </div>
                <div className="lg:w-1/2 flex justify-end items-start">
                    <img className='lg:w-3/4 object-contain' src={World} alt="world" />
                </div>
            </div>
            <div className="lg:w-3/5 lg:mt-12 lg:absolute lg:top-1/3 flex flex-col lg:flex-row">
                <img className='lg:w-1/3 object-cover shadow-md' src={Employee} alt="employee" />
                <form className="bg-white h-full w-full shadow-md p-10">
                    <h3 className='font-bold text-gray-700 text-4xl font-martel mb-8'>Request A Free Consultation</h3>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name*
                        </label>
                        <input className="h-12 placeholder:font-montserrat placeholder:text-sm bg-gray-50 appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Full Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email*
                        </label>
                        <input className="h-12 placeholder:font-montserrat placeholder:text-sm bg-gray-50 appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="example@gmail.com" />
                    </div>
                    <div class="relative mb-4">
                        <span className="block text-gray-700 text-sm font-bold mb-2">Department*</span>
                        <select className="h-12 font-montserrat text-sm text-gray-400 bg-gray-50 appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option>Employment and Labor</option>
                            <option>Criminal Defense</option>
                            <option>Business</option>
                        </select>
                    </div>
                    <div className="relative mb-8">
                        <span className="block text-gray-700 text-sm font-bold mb-2">Time*</span>
                        <select className="h-12 font-montserrat text-sm text-gray-400 bg-gray-50 appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option>11:00 avaiable</option>
                            <option>14:00 avaiable</option>
                            <option>16:00 avaiable</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 top-1/2">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                    <button className='bg-[#784F33] text-white w-full h-12 text-center text-sm font-bold rounded'>Book Appointment</button>
                </form>
            </div>
            <div className="contact-bottom lg:h-[40vh] bg-gray-50 w-full px-6 sm:px-12 lg:px-32 py-10 lg:py-20">

            </div>
        </div>
    )
}
