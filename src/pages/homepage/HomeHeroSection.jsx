import React, { useState } from 'react';
import CashIcon from '../../assets/icons/cash-icon.svg';
import HeroLeftImg from '../../assets/images/hero/hero-left.svg';
import HeroRightImg from '../../assets/images/hero/hero-right.svg';
function HomeHeroSection(props) {
    const [inputValue, setInputValue] = useState('$0');

    const handleInputChange = (e) => {
        let value = e.target.value;
        if (String(value).length == 3) {
            value = value.replace('0', '')
        }
        // Remove all leading zeros and non-digit characters
        const numericValue = value.replace(/^0+|[^\d]/g, '');

        // Format the numeric value with commas
        const formattedValue = numericValue === '' ? '$0' : `$${numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

        setInputValue(formattedValue);
    };

    return (
        <section className='pt-[200px] relative mb-[245px]'>
            <div className="container_wrapper container_padding">
                <div className="flex items-center justify-between relative  z-10">
                    <div className="content_box pr-[3em]">
                        <div className="hero_title">
                            <span className="text-lu-primary-2 font-bold uppercase tracking-[6.4px]">Level up with Lumi </span>

                            <h1 className='my-[0.5em] text-[3em] text-lu-dark-2 font-bold leading-[133%]'>
                                <span>Transparent</span>
                                <br />
                                <span>fuss-free</span>
                                <br />
                                business funding
                            </h1>
                        </div>
                    </div>

                    <div className="content_box">
                        <div className="rounded-[20px] bg-white flex flex-col justify-around p-[2em] min-w-[400px] min-h-[17em] shadow-card">
                            <div className="labels">
                                <h2 className='title text-lu-dark-3 text-[2.2em] leading-[1.5] font-bold'>Let's get started</h2>
                                <h3 className="subtitle text-lu-dark font-bold text-[16px] leading-[1.5]">How much are you looking to borrow?</h3>
                            </div>

                            <form action="" className="mt-[24px]">
                                <div className="input-wrapper relative">
                                    <input value={inputValue}
                                        onChange={handleInputChange} type="text" className='bg-lu-white-3 p-[0.75rem_1rem] text-lu-dark placeholder:text-lu-dark placeholder:font-[500] placeholder:pl-0 input_border block w-full h-[4rem] text-[1.5rem] !outline-0' autoComplete='on' placeholder='$0' inputMode='decimal' />

                                    <span className='absolute right-[1.5em] top-[1.5em] z-10'>
                                        <img src={CashIcon} alt="" />
                                    </span>
                                </div>


                                <button className="text-[1.1em] p-[0.9em_2em] mt-[24px] capitalize hover:top-[-3px] relative duration-500 w-full rounded-[35px] bg-lu-primary-2 text-lu-white hover:bg-lu-primary hover:shadow-btn">
                                    see your options
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="hero_images w-[100vw] h-[100vh] absolute z-[-1] left-0 top-0">
                    <div className="left_box absolute left-0 w-[41vw] top-[60%]  ">
                        <img src={HeroLeftImg} alt="" />
                    </div>
                    <div className="right_box absolute right-0 w-[42vw] top-[40%]">
                        <img src={HeroRightImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeHeroSection;