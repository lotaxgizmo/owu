import React from 'react'
import logo from '../assets/logo.png'
import Hamburger from '../assets/Hamburger.svg'
import { useState } from 'react'


function HamburgerHeader() {


    const [isMax, setIsMax] = useState(false); // Initialize isMax state as false

    const toggleHeight = () => {
        setIsMax((prevIsMax) => !prevIsMax); // Toggle the state value between true and false
    };

    const minHeight = 'h-16 items-center justify-center ';
    const maxHeight = 'h-96 items-top justify-start bg-black';

    const showmenu = 'flex';
    const hidemenu = 'hidden';

    return (
        <>
            <div className=' header flex lg:hidden mt-4 justify-center burger flex-col items-center align-middle px-20   mb-10 fixed top-5 z-50'>



                <div className={`fixed top-5 nav w-80 border-black border    bg-white  ${isMax ? maxHeight : minHeight} 
                rounded-2xl flex flex-col align-middle p-4  z-30`}>

                    <div className='w-full h-14 justify-between flex align-middle items-center text-black'>

                        <a href="http://pepefork.com" >
                            <img src={logo} alt="" className='w-14 rounded-full' />
                        </a>
                        <div className='mr-5'>
                            <ul>MENU</ul>
                        </div>
                        <div onClick={toggleHeight} >
                            <img src={Hamburger} alt="" className='w-10 self-startd' />
                        </div>

                    </div>


                    <div className={`flex-col w-full text-4xl text-left text-black justify-between mt-5 ${isMax ? showmenu : hidemenu}`}>
                        <a className='border-b-[1px] pt-[5px] border-black' href="https://t.me/owueth"
                            target="_blank" rel="noopener noreferrer"><ul>TELEGRAM</ul></a>
                        <a className='border-b-[1px] pt-[5px] border-black' href="https://twitter.com/OwU_eth"
                            target="_blank" rel="noopener noreferrer"><ul>TWITTER</ul></a>
                        <a className='border-b-[1px] pt-[5px] border-black' href="/#"
                            target="_blank" rel="noopener noreferrer"><ul>DEXTOOLS</ul></a>
                        <a className='border-b-[1px] pt-[5px] border-black' href="/#"
                            target="_blank" rel="noopener noreferrer"><ul>BUY OWU</ul></a>


                    </div>
                </div>


            </div>
        </>
    )
}

export default HamburgerHeader