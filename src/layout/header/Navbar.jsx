import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/lumi-h.svg';
import NavIcon from '../../assets/icons/nav-icon.svg';
import { NavbarList } from '../../data/NavbarList';
function Navbar(props) {
    const [navToggle, setNavToggle] = useState(false);
    return (
        <nav className='pt-[20px] relative z-[100]'>
            <div className="container_wrapper container_padding">
                <div className="flex items-center justify-between">
                    <Link to="/" className='text-lu-secondary font-medium text-[18px]'>
                        <img src={Logo} alt="logo" className='h-[55px]' />
                    </Link>

                    {/* navlist */}
                    <ul className={`
                        fixed  w-[320px] bg-lu-secondary h-[100vh]  top-0   overflow-auto xl:overflow-visible  duration-200 ${navToggle ? 'left-0' : '-left-[350px]'}
                        xl:h-[auto] xl:bg-[transparent]   xl:w-[auto] xl:static xl:flex items-center gap-[20px]
                    `}>

                        {
                            NavbarList.map((v, i) => {
                                return (
                                    <li key={v.id} className='xl:h-[80px] leading-[80px] mr-[7px] relative group px-[15px] xl:px-0'>
                                        <Link to={v.link} className='text-lu-white xl:text-lu-secondary xl:font-[500] text-[18px] hover:text-lu-primary-2 font-bold xl:hover:text-lu-dark'>
                                            {v.name}
                                        </Link>

                                        {
                                            v?.list && (
                                                <ul className="dropdown_list nav_arrow  xl:hidden group-hover:block box-shadow-dropdown static xl:absolute xl:top-[70px] xl:bg-lu-white xl:shadow-dropdown">
                                                    {
                                                        v?.list.map((j) => {
                                                            return (
                                                                <li key={j.id} className='xl:hover:bg-lu-primary-2'>
                                                                    <Link to={j.link} className='block text-[18px] leading-[50px] xl:leading-[80px] px-[25px] xl:px-[50px] whitespace-nowrap text-lu-white xl:text-lu-dark hover:text-lu-primary-2 xl:hover:text-lu-white  durartion-200'>
                                                                        {j.name}
                                                                    </Link>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            )
                                        }
                                    </li>
                                )
                            })
                        }
                        <li className="text-center">
                            <Link to="/apply/loan-qualify" className='bg-lu-primary-2 duration-200 leading-[30px] hover:bg-lu-primary text-lu-white rounded-[30px] text-[16px] inline-block xl:block px-[60px] py-[13px] my-5 xl:my-0 xl:px-[30px] xl:py-[7px]'>
                                Apply Now
                            </Link>
                        </li>
                        <li className="hidden xl:block">
                            <Link to="/hub/login" className='button-border'>
                                Customer Login
                            </Link>
                        </li>
                    </ul>

                    <ul className='flex xl:hidden items-center gap-[20px]'>
                        <li className='mr-[7px]'>
                            <Link className='rounded-[35px] text-[smaller] bg-lu-primary-2 hover:bg-lu-primary hover:shadow-lg text-lu-white px-[10px] duration-200 hover:-mt-1 py-[10px] block'>
                                Get Started
                            </Link>
                        </li>
                        <li className=' mr-[7px]'>
                            <button className='mt-[6px]' onClick={() => setNavToggle(!navToggle)}>
                                <img src={NavIcon} alt="" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;