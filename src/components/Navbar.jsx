import React from 'react'
import among from "../assets/among.gif"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div>
                <div className='max-w-screen-2xl  flex flex-wrap items-center justify-between border-b-2'>
                    <div className='flex justify-center items-center'>
                        <img className='w-32 h-32' src={among} alt="among us GIF" />
                    </div>
                    <div className='flex justify-end items-center mr-4'>
                        <ul className='flex justify-end items-center list-none gap-4 '>
                            <li className='flex hover:text-blue-500 hover:underline-offset-3 drop-shadow-xl font-mono font-normal text-xl hover:underline  hover:cursor-pointer rounded-md p-4 justify-center items-center '><Link to={'/'}>Home</Link></li>
                            <li className='flex hover:text-blue-500 hover:underline-offset-3 drop-shadow-xl font-mono font-normal text-xl hover:underline  hover:cursor-pointer rounded-md p-4 justify-center items-center '><Link to={'/generateLink'}>Generate Image Url</Link></li>
                            <li className='flex hover:text-blue-500 hover:underline-offset-3 drop-shadow-xl font-mono font-normal text-xl hover:underline  hover:cursor-pointer rounded-md p-4 justify-center items-center '><Link to={'/about'}>About</Link></li>
                            <li className='flex hover:text-blue-500 hover:underline-offset-3 drop-shadow-xl font-mono font-normal text-xl hover:underline  hover:cursor-pointer rounded-md p-4 justify-center items-center '><Link to={'/contact'}>Contact</Link></li>
                            <li className='flex hover:text-red-600 hover:underline-offset-3 drop-shadow-xl font-mono font-normal text-xl hover:underline hover:cursor-pointer rounded-md p-4 justify-center items-center '><Link to={'/ik'}>I don't like it</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
