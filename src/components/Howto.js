import React from 'react'
import Buyowu from '../assets/Buyowu.svg'
import Createowu from '../assets/Createowu.svg'
import Getowu from '../assets/Getowu.svg'
import Goowu from '../assets/Goowu.svg'
import Swapowu from '../assets/Swapowu.svg'
import Apeblack from '../assets/Apeblack.svg'

function Howto() {
    return (
        <div className='flex flex-col items-center text-center text-white bg-white backdrop-blur-sm w-11/12 rounded-xl p-12 relative overflow-clip mb-20'>
            <img src={Buyowu} alt="" className='mb-10' />
            <div className="steps flex flex-col lg:flex-row flex-wrap justify-around mb-20">
                <img src={Createowu} alt="" className='w-96' />
                <img src={Getowu} alt="" className='w-96' />
                <img src={Goowu} alt="" className='w-96' />
                <img src={Swapowu} alt="" className='w-96' />

            </div>
            <p className='text-lg flex mb-10 px-4 lg:px-20 lg:text-4xl text-white text-stroke'>
                The exact formula will be outlined in the coming weeks, and will ensure a smooth ride towards a one-way highway of gains and Ethereum printing.
            </p>
            <div className="btn flex flex-col lg:flex-row ">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={Apeblack} alt="" className='lg:px-10' />

                </a>

            </div>
        </div>
    )
}

export default Howto