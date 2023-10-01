import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/lumi-h.svg';
import CircleIcon from '../../assets/icons/circle.svg';
function HeaderSmall(props) {
    return (
        <header>
            <div className="flex items-center stack-horizontal stack-m w-full my-8 sm:my-10 mb-0 sm:mb-0">
                <Link className='block flex-1 pb-4' to="/">
                    <img src={Logo} alt="logo" className="h-10 md:h-12" />
                </Link>

                <div className="flex items-center justify-center">
                    <div className="content">
                        <p className="text-copy font-demi text-xxs sm:text-xs whitespace-no-wrap">
                            Need some help?
                        </p>
                        <a href="tel:1300005864" className="font-bold text-sm sm:text-base whitespace-no-wrap text-base-blue">1300 005 864</a>
                    </div>
                    <img className='w-10 sm:w-12 h-auto' src={CircleIcon} alt="img" />
                </div>
            </div>
        </header>
    );
}

export default HeaderSmall;