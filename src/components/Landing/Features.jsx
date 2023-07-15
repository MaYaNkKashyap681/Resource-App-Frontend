import React from 'react'
import { featureList } from '../../constants/featuresList';

const FeatureContent = ({ title, description, icon }) => {
    return (
        <div className='bg-white border-[2px] border-green2 rounded-2xl shadow-lg flex flex-col items-center text-center p-8 py-12 justify-between cursor-pointer'>
            <img src={icon} alt={`${title}`} className="w-[4rem] h-[4rem]" />
            <h4 className='text-dark font-semibold text-2xl'>{title}</h4>
            <p className='text-green2 font-medium text-sm'>{description}</p>
        </div>
    );
}

const Features = () => {
    return (
        <div className='mt-20'>
           <h2 className='font-bold text-4xl text-dark font-poppins text-center'>Features we Offer</h2>
            <div className='grid grid-rows-1 grid-cols-3 gap-8 mt-6'>
                {
                    featureList.map((feature, index) => (
                        <FeatureContent key={index} {...feature} />
                    ))
                }
            </div>
        </div>
    )
}

export default Features