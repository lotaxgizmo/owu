import React from 'react'
import Rm1 from '../assets/Rm1.svg'
import Rm2 from '../assets/Rm2.svg'
import Rm3 from '../assets/Rm3.svg'

function Roadmap() {
    return (
        <div className='text-white flex flex-col'>
            <h2 className='text-5xl mt-5  lg:text-[200px] text-center'>
                OWU
            </h2>
            <h2 className='text-5xl mb-5 lg:text-9xl text-center'>
                STAR MAP
            </h2>

            <div className="rm flex flex-col">
                <img src={Rm1} alt="" className='py-5 w-96 lg:w-[1000px]' />
                <img src={Rm2} alt="" className='py-5 w-96 lg:w-[1000px]' />
                <img src={Rm3} alt="" className='py-5 w-96 lg:w-[1000px]' />
            </div>
        </div>
    )
}

export default Roadmap