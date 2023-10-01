import React from 'react';
import CheckboxIcon from '../assets/icons/checkbox.svg';
import { Link } from 'react-router-dom';
function FinancialCard({ card_list }) {
    return (
        <div className='flex justify-center gap-[30px]'>


            {/* item */}

            {
                card_list.map((v, i) => {
                    return (
                        <div key={v.id} className="card relative p-[60px_30px_30px] rounded-[20px] shadow-card bg-lu-white  w-[387px] min-h-[550px]">
                            {v.top_name && (
                                <div className="card_header">
                                    <div className="pause-button text-base">
                                        <span className="block p-[13px_24px] ">
                                            {v.top_name}
                                        </span>
                                    </div>
                                </div>
                            )}


                            <div className="card_body">
                                <h3 className="text-purple mb-5 text-[28px] font-bold">
                                    {v.name}
                                </h3>

                                <p className="mt-0 subtitle-p text-[#5e6784] font-bold leading-[28px]">{v.description}</p>

                                <ul className='my-7'>

                                    {
                                        v.list && (
                                            v.list.map((j, index2) => {
                                                return (
                                                    <li key={j.id} className='flex items-start mb-5'>
                                                        <img src={CheckboxIcon} className='mr-3' alt="" />
                                                        <p className='text-base text-lu-dark'>
                                                            {j}
                                                        </p>
                                                    </li>
                                                )
                                            })
                                        )
                                    }
                                </ul>
                            </div>

                            <div className="card_footer absolute w-full bottom-[30px] left-0 px-[30px]">
                                <Link to={v.link} className="bg-lu-primary-2 hover:bg-lu-primary relative hover:-top-1 text-lu-white outline-none focus:outline-none leading-sm flex justify-center items-center relative bg-base-pink text-white focus-yellow active:shadow-button-active  active:bg-pink-600  px-10 py-4 text-xl w-full rounded-full">
                                    <span className>Learn More</span>
                                </Link>
                            </div>

                        </div>

                    )
                })
            }

        </div>
    );
}

export default FinancialCard;