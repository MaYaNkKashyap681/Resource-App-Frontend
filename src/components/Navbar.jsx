import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navigationLinksList } from '../constants/navigation'
import useIsMobile from '../customHooks/useIsMobile'
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {

    const isMobile = useIsMobile();
    const [toggle, setToggle] = useState(true);
    return (
        <nav className='bg-white sticky top-0 z-[999]'>
            <div className=' flex items-center container mx-auto justify-between py-6 ' >
                <div>
                    <Link to="/">
                        <span className='font-bold font-nunito text-3xl text-dark'>
                            EduExchange
                        </span>
                    </Link>
                </div>

                <div onClick={() => setToggle((prev) => !prev)}>
                    {

                        toggle ? <GrClose /> : <GiHamburgerMenu />

                    }
                </div>

                {
                    isMobile ? <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex sm:hidden gap-4 flex-col items-start justify-end">
                            {
                                navigationLinksList.map(({ name, path }, index) => (
                                    <Link to={`${path}`} key={index}>
                                        <span className='text-xl text-green1 font-normal hover:text-dark'>{name}</span>
                                    </Link>
                                ))
                            }
                            <Link to="/create">
                                <span className='text-white bg-green1 px-8 py-2 rounded-md font-semibold hover:bg-green2'>Create</span>
                            </Link>
                        </ul>
                    </div> : <div className={`flex gap-8 items-center`}>
                        {
                            navigationLinksList.map(({ name, path }, index) => (
                                <Link to={`${path}`} key={index}>
                                    <span className='text-xl text-green1 font-normal hover:text-dark'>{name}</span>
                                </Link>
                            ))
                        }

                        <Link to="/create">
                            <span className='text-white bg-green1 px-8 py-2 rounded-md font-semibold hover:bg-green2'>Create</span>
                        </Link>
                    </div>
                }

            </div>
            <div className='bg-dark h-10 w-full  flex justify-center items-center'>
                <p className={`${isMobile ? 'text-[10px]' : 'text-xl'} text-green2 font-poppins flex justify-center`}>* Get latest resources here for free of cost, in any Category and Domain</p>
            </div>
        </nav>
    )
}

export default Navbar