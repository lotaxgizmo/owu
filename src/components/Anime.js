import React from 'react'
import babymoon from '../assets/babymoon.svg'
import Apenow222 from '../assets/Apenow222.svg'
import Dextools from '../assets/Dextools.svg'


function Anime() {
    return (
        <div className='flex flex-col items-center text-center text-white bg-white/20 backdrop-blur-sm pb-20 mb-20'>
            <h2 className='text-5xl mt-5 mb-5 lg:text-9xl'>
                Anime Extrava
                ganza
            </h2>
            <p className='text-lg flex mb-10 px-4 lg:px-20 lg:text-4xl text-white text-strokes'>
                As long as you buckle in for the ride and stick to the course plotted by the dev team, you’ll always be on the winning track forward.
                <br />
                <br />
                “How?” is another question you might have. The answer is the carefully crafted formula, formed by the team behind OwU, after analyzing the current market and its conditions.
            </p>

            <div className="btn flex flex-col lg:flex-row ">
                <a href="https://app.uniswap.org/swap?&chain=mainnet&use=v2&outputCurrency=0xc0b89de4966cf0fd9464cfe8f6f3d76ae8a44528" target="_blank" rel="noopener noreferrer">
                    <img src={Apenow222} alt="" className='lg:px-10' />

                </a>

            </div>
        </div>
    )
}

export default Anime