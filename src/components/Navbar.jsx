import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)



    return (
        <nav className={`absolute w-full px-6 sm:px-12 lg:px-32 ${isOpen ? 'bg-stone-100 h-screen flex flex-col gap-10' : 'bg-transparent'}`}>
            <div className=" flex w-full py-6 justify-between">
                <div className="nav-logo text-gray-700 mr-10">
                    <span className='font-martel font-bold text-2xl'>Judico</span>
                </div>
                <div className="nav-menu items-center hidden md:flex">
                    <ul className='flex gap-8 text-gray-500'>
                        <li className="nav-item transition duration-500 after:bg-gray-500 after:h-1 after:w-0 after:block hover:after:w-full">
                            <a href="#">Home</a>
                        </li>
                        <li className="nav-item transition duration-500 after:bg-gray-500 after:h-1 after:w-0 after:block hover:after:w-full">
                            <a href="#">Product</a>
                        </li>
                        <li className="nav-item transition duration-500 after:bg-gray-500 after:h-1 after:w-0 after:block hover:after:w-full">
                            <a href="#">Pricing</a>
                        </li>
                        <li className="nav-item transition duration-500 after:bg-gray-500 after:h-1 after:w-0 after:block hover:after:w-full">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="nav-btn text-gray-500 text-4xl block md:hidden">
                    {isOpen ? <AiOutlineClose /> : <BiMenuAltRight />}
                </button>
            </div>
            <div className={`collapsed-menu flex-col items-center ${isOpen ? 'flex' : 'hidden'}`}>
                <ul className='flex text-xl gap-8 text-gray-500 flex-col justify-center h-full'>
                    <li className="nav-item transition duration-500 after:bg-gray-500 after:h-1 after:w-0 after:block hover:after:w-full">
                        <a href="#">Home</a>
                    </li>
                    <li className="nav-item transition duration-500 after:bg-gray-500 after:h-1 after:w-0 after:block hover:after:w-full">
                        <a href="#">Product</a>
                    </li>
                    <li className="nav-item transition duration-500 after:bg-gray-500 after:h-1 after:w-0 after:block hover:after:w-full">
                        <a href="#">Pricing</a>
                    </li>
                    <li className="nav-item transition duration-500 after:bg-gray-500 after:h-1 after:w-0 after:block hover:after:w-full">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
