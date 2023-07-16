import React from 'react'
import { categoryOptions } from '../../constants/createForm'

const ResourcesTabs = ({ value, setSearchText, updateList }) => {
    const handleTabClick = (catValue) => {
        setSearchText(catValue);
        updateList(catValue);
    };

    return (
        <div className='flex items-center w-full overflow-scroll resource-card-container'>
            {
                categoryOptions.map((cat, index) => (
                    <span className={`text-xl bg-dark ${value === cat.value ? 'text-green2': 'text-white'} font-bold px-20 py-2 cursor-pointer hover:text-green1`}
                        onClick={() => handleTabClick(cat.value)} >{cat.label.split(' ')[0]}</span>
                ))
            }
        </div>
    )
}

export default ResourcesTabs