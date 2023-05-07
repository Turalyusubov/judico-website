import React from 'react'
import World from '../assets/world.png'
import Employee from '../assets/employee.jpg'

export default function Contact() {
    return (
        <div className='relative'>
            <div className="flex h-[100vh] justify-between cover bg-gray-700 w-full px-6 sm:px-12 lg:px-32 py-20">
                <div className="w-5/12">
                    <h3 className='text-4xl mb-4 text-white font-bold font-martel'>We Have Branches All Over The World</h3>
                    <p className='text-white text-sm'>The gradual accumulation of information about atomic and
                        small-scale behaviour during the first quarter of the 20th
                        century, which gave some indications about how small things
                        do behave, produced an increasing confusion which was
                        Heisenberg, and Born.</p>
                </div>
                <div className="w-1/2 flex justify-end items-start">
                    <img className='w-3/4 object-contain' src={World} alt="world" />
                </div>
            </div>
            <div class="w-full absolute top-1/3 flex px-6 sm:px-12 lg:px-32 py-20 shadow-xl">
                <img className='w-1/3 object-cover' src={Employee} alt="employee" />
                <form class="bg-white w-full shadow-md px-8 pt-6 pb-8 mb-4">
                    <h3 className='font-bold text-gray-700 text-4xl font-martel mb-8'>Request A Free Consultation</h3>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Name*
                        </label>
                        <input class="placeholder:font-montserrat placeholder:text-sm bg-gray-50 appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Full Name" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Email*
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="example@gmail.com" />
                    </div>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Really long option that will likely overlap the chevron</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Really long option that will likely overlap the chevron</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </form>
            </div>
            <div className="contact-bottom bg-gray-50 w-full px-6 sm:px-12 lg:px-32 py-20">

            </div>
        </div>
    )
}
