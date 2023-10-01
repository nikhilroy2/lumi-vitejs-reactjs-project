import React from 'react';
import BatonLineIcon from '../../assets/icons/baton.svg';
import HandImg from '../../assets/images/all/highfive.svg';
function HomeWhyUse(props) {
    return (
        <section className='pt-[250px] pb-[200px] bg-white'>
            <div className="container_wrapper container_padding">

                <div className="flex">
                    <div className="why-us-left w-[45%] relative flex flex-row-reverse pr-[100px] ">

                        <h2 className="text-[96px] leading-[96px] font-bold text-lu-dark-2">
                            Why <br /> Lumi?
                        </h2>
                        <img src={BatonLineIcon} className='absolute h-[776px] z-10 top-[200px] right-[115px]' alt="" />
                    </div>

                    <div className="why-us-right w-[55%] pl-5">
                        <h3 className="text-[28px] font-bold text-purple w-[475px] py-[100px]">
                            We know that running a small business isn't an easy feat.
                        </h3>

                        <ul>
                            <li>
                                <p className='mb-[35px] text-[20px] leading-[30px] text-lu-dark'>You see, we're a small business ourselves and understand the daily challenges facing those who dare to dream big.</p>
                            </li>

                            <li>
                                <p className='mb-[35px] text-[20px] leading-[30px] text-lu-dark'>
                                    Gone are the days of lengthy applications and endlessly jumping through hoops to secure the finance your SME needs.
                                    We'll provide you with an accurate, fair and honest lending solution that's tailored to your small business.
                                </p>
                            </li>

                            <li>
                                <p className='mb-[35px] text-base font-bold leading-[30px] text-lu-dark'>
                                    High-five to that.
                                </p>
                            </li>
                        </ul>


                        <div className="img_wrapper">
                            <img src={HandImg} alt="img" className='w-[200px]' />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HomeWhyUse;