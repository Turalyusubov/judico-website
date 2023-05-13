import React from 'react'
import Person4 from '../assets/person4.jpeg'
import Person5 from '../assets/person5.jpeg'
import Person6 from '../assets/person6.jpeg'
import Person7 from '../assets/person7.jpeg'
import { Fade, Slide } from 'react-reveal'

export default function Team() {
    const team = [
        {
            id: 1,
            duty: 'LAYER & CEO',
            name: 'Ashley Fletcher',
            img: Person4
        },
        {
            id: 2,
            duty: 'CEO',
            name: 'Rodney Stratton',
            img: Person5
        },
        {
            id: 3,
            duty: 'LAYER CIVIL LAW',
            name: 'Avie Beaton',
            img: Person6
        },
        {
            id: 4,
            duty: 'CO FOUNDER & CEO',
            name: 'Ben Jonson',
            img: Person7
        }
    ]

    return (
        <div id='team' className='flex flex-col justify-center bg-neutral-50 w-full px-6 sm:px-12 lg:px-32 py-20 flex flex-col items-center'>
            <div className="sm:w-4/6 md:w-3/5 xl:w-2/5 text-center mb-20">
                <Fade left>
                    <h2 className='font-bold mb-4 text-gray-700 text-4xl font-martel'>Meet Our Attorneys</h2>
                    <p className='text-gray-400 text-sm'>Problems trying to resolve the conflict between the two major realms
                        of Classical physics: Newtonian mechanics  </p>
                </Fade>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-14">
                <Slide left className='w-full'>
                    {team.map(member => (
                        <div key={member.id} className="flex flex-col p-10 items-center bg-white shadow">
                            <img className='rounded-full w-32' src={member.img} alt="" />
                            <span className='py-2 text-sm font-bold text-yellow-500'>{member.duty}</span>
                            <h5 className='pb-1 font-martel text-gray-700 font-bold'>{member.name}</h5>
                            <p className='w-5/6 text-center text-stone-400 text-sm'>the quick fox jumps over the lazy dog</p>
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    )
}
