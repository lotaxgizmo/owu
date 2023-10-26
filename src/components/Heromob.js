import React from 'react'

import Dexbtn from '../assets/Dexbtn.svg'
import Menubtn from '../assets/Menubtn.svg'
import Telegrambtn from '../assets/Telegrambtn.svg'
import Twitterbtn from '../assets/Twitterbtn.svg'
import Moons from '../assets/moons.svg'
import Owuhero from '../assets/Owuhero.svg'
import Owugirl from '../assets/Owugirl.svg'
import Apemain from '../assets/Apemain.svg'

function Heromob() {
    return (
        <div className='block lg:hidden   w-screen mb-20'>

            <div className='mainbg w-screenc mx-4 h-[5d00px] border-2 rounded-3xl border-white mt-6
            mx-20s overflow-clip  bg-blue-900 relative flex flex-col items-center
            '>
                <img src={Owugirl} alt="" className=' absolute  bottom-0 rotate-slowlyx z-[2] animate-bouncex w-60' />
                <div className="absolute flex justify-center items-center top-[-350px] lefte-[-330px]  z-0">
                    <img src={Moons} alt="" className='max-w-[3000px] absdolute-center top-0 rotate-slowly2 z-0' />
                </div>
                <div className="top w-full border-b-2 border-white z-10 p-2  flex flex-row justify-center items-center  text-white relative">

                    <p className='text-xl'>
                        OWU.EXE
                    </p>

                    {/* <div className="buttons flex justify-around">

                        <a className='mx-2' href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={Telegrambtn} alt="" />
                        </a>
                        <a className='mx-2' href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={Telegrambtn} alt="" />
                        </a>
                        <a className='mx-2' href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={Telegrambtn} alt="" />
                        </a>
                        <a className='mx-2' href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={Telegrambtn} alt="" />
                        </a>

                    </div> */}
                </div>

                <p className='text-4xl text-white flex z-10 mt-5'>
                    UNLEASH THE
                </p>
                <img src={Owuhero} alt="" className='  z-10   mb-20 w-80' />

                <a href="http://" target="_blank" rel="noopener noreferrer" className=' z-10'>
                    <img src={Apemain} alt="" className='  z-10  shadow-2xl w-52' />
                </a>
            </div>

        </div>
    )
}

export default Heromob