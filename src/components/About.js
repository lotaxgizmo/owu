import React from 'react'
import babymoon from '../assets/babymoon.svg'
import Apenow222 from '../assets/Apenow222.svg'
import Dextools from '../assets/Dextools.svg'

function About() {
    return (
        <div className='flex flex-col items-center text-center text-white bg-white/20 backdrop-blur-sm '>
            <img src={babymoon} alt="" className='w-40 lg:w-auto rotate-slowly2' />
            <h2 className='text-5xl mt-5 mb-5 lg:text-9xl'>
                The Formula
            </h2>
            <p className='text-lg flex mb-10 px-4 lg:px-20 lg:text-4xl'>
                OwU. An abbreviation that suggests a supercharged highway originating from your buy button starting line, destined to climb only upwards towards wherever you want a token to take you.
                <br />
                <br />
                Yes, OwU is an acronym for Only Way Up. “But…”, you might say, “Is that even possible?!”
            </p>

            <div className="btn flex flex-col lg:flex-row ">
                <a href="https://app.uniswap.org/swap?&chain=mainnet&use=v2&outputCurrency=0xc0b89de4966cf0fd9464cfe8f6f3d76ae8a44528" target="_blank" rel="noopener noreferrer">
                    <img src={Apenow222} alt="" className='lg:px-10' />

                </a>
                <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x5ed49048f265982f0c8b48e2a81e880634c6cffe" target="_blank" rel="noopener noreferrer">
                    <img src={Dextools} alt="" className='lg:px-10' />

                </a>
            </div>
        </div>
    )
}

export default About