import React from 'react';
import LovingImg from '../../assets/images/all/lovinglumi.svg';
import TickIcon from '../../assets/icons/tick.svg'
function HomeInfoReason(props) {
    const reason_info_list = [
        {
            id: 1,
            name: 'Application outcomes within 2 hours'
        },
        {
            id: 2,
            name: 'Loans from $5,000 - $500,000'
        },
        {
            id: 3,
            name: 'Repayment periods of 3 - 36 months'
        },
        {
            id: 4,
            name: 'No hidden fees or charges'
        },
        {
            id: 5,
            name: 'No collateral needed for loans up to $300,000'
        },
        {
            id: 6,
            name: 'Funds received within the same business day'
        },
        {
            id: 7,
            name: "We're a trusted direct lender"
        },
        {
            id: 8,
            name: "No early repayment fees"
        },
    ]
    return (
        <section>
            <div className="container_wrapper container_padding mt-[250px] mb-[150px]">
                <div className="flex justify-between relative">
                    <div className="w-1/2">
                        <h3 className="text-[36px] font-bold text-lu-dark-2 mb-[75px]">
                            A few other reasons why you'll love Lumi...
                        </h3>

                        <ul className="content_list flex flex-wrap justify-between">
                            {
                                reason_info_list.map(value => {
                                    return (
                                        <li key={value.id} className="w-[260px] flex gap-4 py-[30px] items-start">
                                            <img src={TickIcon} alt="icon" />
                                            <span className="text-[1.1em] text-lu-dark font-bold">
                                                {value.name}
                                            </span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="w-1/2 ">
                        <div className="absolute top-[-300px] left-[50%] w-[45vw]">
                            <img src={LovingImg} alt="img" className='w-[45vw]' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeInfoReason;