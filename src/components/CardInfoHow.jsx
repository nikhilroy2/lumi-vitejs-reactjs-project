import React from 'react';
function CardInfoHow({ cardObject }) {
    return (
        <div className="flex justify-center gap-[20px]">
            {
                cardObject.map((v, i) => {
                    return (

                        <div key={v.id} className="card  pb-[56px] rounded-[20px] shadow-card bg-lu-white flex-grow">
                            <div className="card_header text-center">
                                <img className='inline-block mt-[-24px]' src={v.icon} alt="img" />
                            </div>
                            <div className="card_body  ">
                                <h3 className='max-w-[250px] text-[28px] m-[45px_auto_0px_auto] text-center font-[600] leading-[36px] text-lu-dark'>
                                   {v.name}
                                </h3>

                                <p className='font-[400] lu-dark text-[20px] max-w-[230px] text-center text-lu-dark leadning-[32px] m-[20px_auto_0px_auto]'>
                                    {v.description}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default CardInfoHow;