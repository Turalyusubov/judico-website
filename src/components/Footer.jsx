import React from 'react'
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'

export default function Footer() {
    return (
        <div className="">
            <div className='grid gap-10 lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white w-full px-20 lg:px-32 py-20'>
                <div className="flex lg:justify-center">
                    <div className="w-2/3">
                        <h5 className='font-martel font-bold text-xl text-gray-700 mb-4'>Get In Touch</h5>
                        <p className='text-sm text-gray-500 mb-4'>the quick fox jumps over the lazy dog</p>
                        <div className="flex gap-2 text-2xl">
                            <a className='text-blue-700 hover:text-blue-900 transition furation-300' href="#">
                                <AiFillFacebook />
                            </a>
                            <a className='text-rose-600 hover:text-rose-800 transition furation-300' href="#">
                                <AiOutlineInstagram />
                            </a>
                            <a className='text-sky-500 hover:text-sky-700 transition furation-300' href="#">
                                <AiOutlineTwitter />
                            </a>
                            <a className='text-red-600 hover:text-red-800 transition furation-300' href="#">
                                <AiFillYoutube />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex lg:justify-center">
                    <div className="">
                        <h5 className='font-martel font-bold text-xl text-gray-700 mb-4'>Company info</h5>
                        <div className="flex flex-col gap-2 text-gray-400 text-sm font-[600]">
                            <a className='hover:text-gray-500 transition duration-300' href="#">About Us</a>
                            <a className='hover:text-gray-500 transition duration-300' href="#">Carrier</a>
                            <a className='hover:text-gray-500 transition duration-300' href="#">We are hiring</a>
                            <a className='hover:text-gray-500 transition duration-300' href="#">Blog</a>
                        </div>
                    </div>
                </div>
                <div className="flex lg:justify-center">
                    <div className="">
                        <h5 className='font-martel font-bold text-xl text-gray-700 mb-4'>Features</h5>
                        <div className="flex flex-col gap-2 text-gray-400 text-sm font-[600]">
                            <a className='hover:text-gray-500 transition duration-300' href="#">Business Marketing</a>
                            <a className='hover:text-gray-500 transition duration-300' href="#">User Analytic</a>
                            <a className='hover:text-gray-500 transition duration-300' href="#">Live Chat</a>
                            <a className='hover:text-gray-500 transition duration-300' href="#">Unlimited Support</a>
                        </div>
                    </div>
                </div>
                <div className="flex lg:justify-center">
                    <div className="">
                        <h5 className='font-martel font-bold text-xl text-gray-700 mb-4'>Resources</h5>
                        <div className="flex flex-col gap-2 text-gray-400 text-sm font-[600]">
                            <a className='hover:text-gray-500 transition duration-300' href="#">IOS & Android</a>
                            <a className='hover:text-gray-500 transition duration-300' href="#">Watch a Demo</a>
                            <a className='hover:text-gray-500 transition duration-300' href="#">Customers</a>
                            <a className='hover:text-gray-500 transition duration-300' href="#">API</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-6 sm:px-12 lg:px-32 py-4 bg-cyan-800 text-cyan-50 text-center">
                <p>Made by <a className='text-white font-[500] hover:underline' href="https://github.com/Turalyusubov">Tural Yusubov</a></p>
            </div>
        </div>

    )
}
