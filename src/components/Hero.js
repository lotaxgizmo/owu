import React, { useState } from 'react';
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

    const textToCopy = '0xc0B89De4966CF0fd9464cfE8f6F3D76AE8A44528';
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(textToCopy);
        setIsCopied(true);

        // Reset the "Copied" state after a short delay
        setTimeout(() => {
            setIsCopied(false);
        }, 1500);
    };

    return (
        <div className='hidden lg:flex flex-col justify-center align-middle self-center items-center relative'>
            <img src={Rocketr} alt="" className='absolute w-[828px] right-[-343px] bottom-[-302px] z-20 vibrate-2' />
            <img src={Rocketl} alt="" className='absolute w-[556px] left-[-219px] bottom-[-400px] z-20 vibrate-22' />

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
                        <a className='mx-2' href="https://www.dextools.io/app/en/ether/pair-explorer/0x5ed49048f265982f0c8b48e2a81e880634c6cffe" target="_blank" rel="noopener noreferrer">
                            <img src={Dexbtn} alt="" />
                        </a>
                        <a className='mx-2 BUY' href="https://app.uniswap.org/swap?&chain=mainnet&use=v2&outputCurrency=0xc0b89de4966cf0fd9464cfe8f6f3d76ae8a44528" target="_blank" rel="noopener noreferrer">
                            <img src={Menubtn} alt="" />
                        </a>

                    </div>
                </div>


                <button className='text-white text-lg block z-10 mt-2 ' onClick={handleCopyClick}>
                    <p className='text-2xl hover:text-3xl transition-all'>
                        CA: 0xc0B89De4966CF0fd9464cfE8f6F3D76AE8A44528
                    </p>
                    {isCopied ? 'Copied!' : 'Copy to Clipboard'}
                </button>

                <p className='text-6xl text-black flex z-10 mt-5'>
                    UNLEASH THE
                </p>
                <img src={Owuhero} alt="" className='  z-10 -mt-24 mb-40' />

                <a href="https://app.uniswap.org/swap?&chain=mainnet&use=v2&outputCurrency=0xc0b89de4966cf0fd9464cfe8f6f3d76ae8a44528" target="_blank" rel="noopener noreferrer" className=' z-30'>
                    <img src={Apemain} alt="" className='  z-10  shadow-2xl ' />
                </a>
            </div>

        </div>
    )

}

export default Hero;