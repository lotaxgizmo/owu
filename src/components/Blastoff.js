import React from 'react'
import Animegirl from '../assets/blast/Animegirl.svg'
import Blast from '../assets/blast/Blast.svg'
import Off from '../assets/blast/Off.svg'
import Owu from '../assets/blast/Owu.svg'
import time from '../assets/blast/time.svg'
import To from '../assets/blast/To.svg'
import rocket from '../assets/blast/rocket.png'

function Blastoff() {
    return (
        <div className='flex flex-col items-center text-center text-white bg-black/50 backdrop-blur-sm w-11/12 rounded-xl p-12 relative overflow-clip mb-20'>
            <div className="top flex flex-col lg:flex-row">
                <div className="div1 flex flex-col">
                    <img src={Animegirl} alt="" className='p-2 w-auto' />
                    <img src={time} alt="" className='p-2 w-auto' />
                </div>
                <div className="div2 flex flex-col">
                    <img src={Blast} alt="" className='p-2 w-[313px]' />
                </div>
                <div className="div3 flex flex-col">
                    <img src={Off} alt="" className='p-2' />
                    <img src={To} alt="" className='p-2' />
                </div>
            </div>
            <div className="flex items-end self-end">
                <img src={rocket} alt="" className='p-2 max-w-[1027px] w-[424px] lg:w-[927px] absolute lg:left-[-292px] left-[-103px] lg:bottom-[-98px] bottom-0' />
                <img src={Owu} alt="" className='p-2 w-[454px] lg:mb-0 mb-36' />
            </div>

        </div>

    )
}

export default Blastoff