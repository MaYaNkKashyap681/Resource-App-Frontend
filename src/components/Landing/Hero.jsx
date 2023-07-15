import React from 'react'
import { featuresList } from '../../constants/heroList'
import notebook from '../../assets/notebook3d.png'

const Hero = () => {
    return (
        <div className='py-8 flex mt-8'>
            <div className='font-poppins w-[60%]'>
                <p className='text-5xl  text-dark'>Welcome to StudyShare</p>
                <p className='text-2xl font-light'>Share and Discover Study Materials Online</p>
                <div>
                    <p className='mt-4 text-xl font-semibold text-green1'>Elevate your learning experience with StudyShare, the ultimate platform for students and educators to connect, collaborate, and share study materials. Unlock a world of knowledge at your fingertips</p>
                    <ul className='mt-4'>
                        {
                            featuresList.map((feature, index) => (
                                <li key={index} className="text-lg text-brownish font-poppins"> - {feature}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='w-[40%] flex items-center justify-center relative z-[-10]'>
                <div className="h-[18rem] w-[18rem] absolute rounded-full bottom-[6rem] top-32 left-[-20px] bg-green1 blur-[120px] opacity-40 z-[-10]"></div>
                <img src={notebook} alt="notebook"/>
            </div>

        </div>
    )
}

export default Hero