import React from 'react'
import Circles from '../assets/Circles.svg'
import Dexbtn from '../assets/Dexbtn.svg'
import Menubtn from '../assets/Menubtn.svg'
import Telegrambtn from '../assets/Telegrambtn.svg'
import Twitterbtn from '../assets/Twitterbtn.svg'
import Moons from '../assets/moons.svg'
import Owuhero from '../assets/Owuhero.svg'
import Owugirl from '../assets/Owugirl.svg'
import Apemain from '../assets/Apemain.svg'
import Rocketr from '../assets/Rocketr.png'
import Rocketl from '../assets/Rocketl.png'

function Hero() {
    return (
        <div className='hidden lg:flex flex-col justify-center align-middle self-center items-center relative'>
            <img src={Rocketr} alt="" className='absolute w-[828px] right-[-343px] bottom-[-302px] z-20' />
            <img src={Rocketl} alt="" className='absolute w-[556px] left-[-219px] bottom-[-400px] z-20' />

            <div className='mainbg w-[1250px] h-[5d00px] border-2 rounded-3xl border-white my-6
            mx-20s overflow-clip  dbg-blue-900 relative flex flex-col items-center
            '>
                <img src={Owugirl} alt="" className=' absolute  bottom-0 rotate-slowlyx z-[2] animate-bouncex' />
                <div className="absolute flex justify-center items-center top-[-300px] left-[-330px]  z-0">
                    <img src={Moons} alt="" className='max-w-[3000px] absdolute-center top-0 rotate-slowly z-0' />
                </div>
                <div className="top w-full border-b-2 border-white z-10 p-4  flex flex-row justify-between items-center  text-white relative">
                    <img src={Circles} alt="" />
                    <p className='text-3xl flex'>
                        OWU.EXE
                    </p>

                    <div className="buttons flex justify-around">

                        <a className='mx-2' href="https://t.me/owueth" target="_blank" rel="noopener noreferrer">
                            <img src={Telegrambtn} alt="" />
                        </a>
                        <a className='mx-2' href=" https://twitter.com/OwU_eth" target="_blank" rel="noopener noreferrer">
                            <img src={Twitterbtn} alt="" />
                        </a>
                        <a className='mx-2' href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={Dexbtn} alt="" />
                        </a>
                        <a className='mx-2' href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={Menubtn} alt="" />
                        </a>

                    </div>
                </div>

                <p className='text-6xl text-black flex z-10 mt-20'>
                    UNLEASH THE
                </p>
                <img src={Owuhero} alt="" className='  z-10 -mt-24 mb-40' />

                <a href="http://" target="_blank" rel="noopener noreferrer" className=' z-30'>
                    <img src={Apemain} alt="" className='  z-10  shadow-2xl ' />
                </a>
            </div>

        </div>
    )
}

export default Hero