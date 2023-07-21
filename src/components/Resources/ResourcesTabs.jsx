import React from 'react'
import { categoryOptions } from '../../constants/createForm'
import useIsMobile from '../../customHooks/useIsMobile';

const ResourcesTabs = ({ value, setSearchText, updateList }) => {

    const isMobile = useIsMobile();
    const handleTabClick = (catValue) => {
        setSearchText(catValue);
        updateList(catValue);
    };

    return (
        <div className='flex items-center w-full overflow-scroll resource-card-container'>
            {
                categoryOptions.map((cat, index) => (
                    <span className={`${isMobile ? 'text-sm px-8' : 'text-xl px-20'} bg-dark ${value === cat.value ? 'text-green2': 'text-white'} font-bold  py-2 cursor-pointer hover:text-green1`}
                        onClick={() => handleTabClick(cat.value)} >{cat.label.split(' ')[0]}</span>
                ))
            }
        </div>
    )
}

export default ResourcesTabs