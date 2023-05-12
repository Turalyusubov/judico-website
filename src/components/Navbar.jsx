import React, { useEffect, useState, useRef } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    useEffect(() => {
        if (windowSize.innerWidth > 768) {
            setIsOpen(false)
        }
    }, [windowSize])

    return (
        <div className="w-full">
            <div className="nav-bg absolute top-0 left-0 w-full px-6 sm:px-12 lg:px-32 h-[80px]"></div>
            <nav className='z-50 absolute border-b-1 shadow-md w-full px-6 sm:px-12 lg:px-32 bg-transparent'>
                <div className={`flex w-full py-6 justify-between ${isOpen ? 'flex-col' : 'flex-row'}`}>
                    <div className="flex justify-between w-full">
                        <div className="nav-logo text-gray-700 mr-10">
                            <span className='font-martel font-bold text-2xl'>Judico</span>
                        </div>
                        <button onClick={() => setIsOpen(!isOpen)} className="nav-btn text-gray-700 text-4xl block md:hidden">
                            {isOpen ? <AiOutlineClose /> : <BiMenuAltRight />}
                        </button>
                    </div>
                    <div className={`nav-menu items-center md:flex ${isOpen ? 'flex block mt-6 justify-center' : 'hidden'}`}>
                        <ul className={`flex font-bold text-gray-700 ${isOpen ? 'flex-col gap-10 text-xl' : 'gap-8'}`}>
                            <li className="nav-item transition duration-500 after:bg-gray-500 after:h-1 after:w-0 after:block hover:after:w-full">
                                <a href="#features">Features</a>
                            </li>
                            <li className="nav-item transition duration-500 after:bg-gray-500 after:h-1 after:w-0 after:block hover:after:w-full">
                                <a href="#about">About</a>
                            </li>
                            <li className="nav-item transition duration-500 after:bg-gray-500 after:h-1 after:w-0 after:block hover:after:w-full">
                                <a href="#testimonials">Testimonials</a>
                            </li>
                            <li className="nav-item transition duration-500 after:bg-gray-500 after:h-1 after:w-0 after:block hover:after:w-full">
                                <a href="#team">Team</a>
                            </li>
                            <li className="nav-item transition duration-500 after:bg-gray-500 after:h-1 after:w-0 after:block hover:after:w-full">
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
