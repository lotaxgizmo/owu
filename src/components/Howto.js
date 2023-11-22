import React from 'react'
import Buyowu from '../assets/Buyowu.png'
import Createowu from '../assets/Createowu.svg'
import Getowu from '../assets/Getowu.svg'
import Goowu from '../assets/Goowu.svg'
import Swapowu from '../assets/Swapowu.svg'
import Apenow222 from '../assets/Apenow222.svg'

function Howto() {
    return (
        <div className='flex flex-col items-center text-center text-white bg-black/50 backdrop-blur-sm w-11/12 rounded-xl p-12 relative overflow-clip mb-20'>
            <img src={Buyowu} alt="" className='mb-10' />
            <div className="steps flex flex-col lg:flex-row flex-wrap justify-around mb-20">
                <img src={Createowu} alt="" className='w-96' />
                <img src={Getowu} alt="" className='w-96' />
                <img src={Goowu} alt="" className='w-96' />
                <img src={Swapowu} alt="" className='w-96' />

            </div>
            <p className='text-lg flex mb-10 px-4 lg:px-20 lg:text-4xl text-white texst-stroke'>
                The exact formula will be outlined in the coming weeks, and will ensure a smooth ride towards a one-way highway of gains and Ethereum printing.
            </p>
            <div className="btn flex flex-col lg:flex-row ">
                <a href="https://app.uniswap.org/swap?&chain=mainnet&use=v2&outputCurrency=0xc0b89de4966cf0fd9464cfe8f6f3d76ae8a44528" target="_blank" rel="noopener noreferrer">
                    <img src={Apenow222} alt="" className='lg:px-10' />

                </a>

            </div>
        </div>
    )
}

export default Howto