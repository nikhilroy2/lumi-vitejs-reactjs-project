import React, { useState } from 'react';
import CheckboxIcon from '../../assets/icons/checkbox.svg';
import { useNavigate } from 'react-router-dom';
function ApplyLoanQualify(props) {

    // ..........Revenue
    const [isRevenue, setIsRevenue] = useState(true)
    const revenueHandle = (e) => {
        setIsRevenue(e.target.checked)
    }


    // ..........Period
    const [isPeriod, setIsPeriod] = useState(true)

    const periodHandle = (e) => {
        setIsPeriod(e.target.checked)
    }




    // ........... Abn
    const [isAbn, setIsAbn] = useState(true)

    const abnHandle = (e) => {
        setIsAbn(e.target.checked)
    }


    const navigate = useNavigate();
    const handleContinue = ()=> {
        // if success
        setTimeout(()=> {
            navigate('/apply/signup')
        }, 1000)
    }
    return (
        <React.Fragment>
            <div className="container_wrapper container_padding pt-8">
                <div className="max-w-[490px] mx-auto">

                    <div className="content_header text-center">
                        <h2 className="font-bold text-base-blue text-mobile-heading-two mobile-leading-heading-two sm:text-heading-two sm:leading-heading-two leading-8 md:text-2xl select-auto">
                            Let's get started
                        </h2>
                        <p className="text-base text-copy text-base md:text-xl mt-2 md:mt-5 font-display select-auto">Before you start your application, tick the boxes below to see if you qualify!</p>

                    </div>

                    <div className="content_body max-w-[490px] bg-white shadow-card rounded-3xl sm:p-10 p-8 md:w-[490px] min-h-[410px] mt-8">

                        <ul>
                            <li className='flex items-center py-6 select-none justify-between'>
                                <label className="text-base-navy select-none cursor-pointer leading-6 md:text-xl md:leading-7" htmlFor="revenue">
                                    I have a minimum of<span className="text-purple-700 font-demi"> $5,000 </span>monthly revenue
                                </label>

                                <label htmlFor="revenue" className='cursor-pointer ml-4'>
                                    <input id="revenue" onInput={revenueHandle} className='hidden' type="checkbox" name="revenue" defaultChecked />

                                    {/* checkbox */}
                                    <div className="w-[48px] pointer-events-none h-[48px] relative rounded-full flex justify-center items-center border-0 bg-pink-100 hover:bg-pink-200 cursor-pointer border-gray-500">
                                        <img src={CheckboxIcon} className={`pointer-events-none ${isRevenue ? '' : 'hidden'}`} alt="" />
                                    </div>
                                </label>

                            </li>

                            <li>
                                <hr className="shadow-lg box-content border-base-purple bg-base-purple h-px" style={{ borderColor: 'rgb(238, 240, 245)', background: 'rgb(238, 240, 245)' }} />
                            </li>


                            <li className='flex items-center py-6 select-none justify-between'>
                                <label className="text-base-navy select-none cursor-pointer leading-6 md:text-xl md:leading-7" htmlFor="period">
                                    My business is at least<span className="text-purple-700 font-demi"> 6 months old </span>
                                </label>

                                <label htmlFor="period" className='cursor-pointer ml-4'>
                                    <input id="period" onInput={periodHandle} className='hidden' type="checkbox" name="period" defaultChecked />

                                    {/* checkbox */}
                                    <div className="w-[48px] pointer-events-none h-[48px] relative rounded-full flex justify-center items-center border-0 bg-pink-100 hover:bg-pink-200 cursor-pointer border-gray-500">
                                        <img src={CheckboxIcon} className={`pointer-events-none ${isPeriod ? '' : 'hidden'}`} alt="" />
                                    </div>
                                </label>

                            </li>

                            <li>
                                <hr className="shadow-lg box-content border-base-purple bg-base-purple h-px" style={{ borderColor: 'rgb(238, 240, 245)', background: 'rgb(238, 240, 245)' }} />
                            </li>


                            <li className='flex items-center py-6 select-none justify-between'>
                                <label className="text-base-navy select-none cursor-pointer leading-6 md:text-xl md:leading-7" htmlFor="abn">
                                    I have an<span className="text-purple-700 font-demi"> active ABN/ACN </span>
                                </label>

                                <label htmlFor="abn" className='cursor-pointer ml-4'>
                                    <input id="abn" onInput={abnHandle} className='hidden' type="checkbox" name="abn" defaultChecked />

                                    {/* checkbox */}
                                    <div className="w-[48px] pointer-events-none h-[48px] relative rounded-full flex justify-center items-center border-0 bg-pink-100 hover:bg-pink-200 cursor-pointer border-gray-500">
                                        <img src={CheckboxIcon} className={`pointer-events-none ${isAbn ? '' : 'hidden'}`} alt="" />
                                    </div>
                                </label>

                            </li>

                            <li>
                                <button onClick={handleContinue} className="bg-lu-primary-2 hover:bg-lu-primary text-lu-white outline-none focus:outline-none leading-sm flex justify-center items-center relative bg-base-pink text-white focus-yellow active:shadow-button-active active:bg-pink-600  px-10 py-4 text-xl w-full rounded-full">
                                    <span className>Continue</span>
                                </button>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>

        </React.Fragment>
    );
}

export default ApplyLoanQualify;