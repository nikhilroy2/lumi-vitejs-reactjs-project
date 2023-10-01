import React from 'react';

import StepOneImg from '../../assets/images/all/stepone.svg';
import StepTwoImg from '../../assets/images/all/steptwo.svg';
import StepThreeImg from '../../assets/images/all/stepthree.svg';

function HomeHowSteps(props) {
    return (
        <section className='bg-white'>
            <div className="container_wrapper container_padding z-10 relative">
                <h2 className="text-center text-[64px] font-bold text-lu-dark-2 ">
                    Here's how it works:
                </h2>

            </div>


            <div className="content_wrapper relative mt-[90px] h-[1700px] w-full">
                <div className="how_bg bg-[#f8f9fb] absolute top-[-175px]  skew-y-[30deg] w-full h-[1000px]"></div>


                <div className="steps_wrapper absolute top-[-2.5%] w-full mx-auto left-[12.5%]">
                    {/* step 1 */}
                    <div className="step_1 step_helper pb-[50px] absolute">
                        <img src={StepOneImg} className='w-[310px]' alt="" />
                    </div>


                    {/* step 2 */}
                    <div className="step_2 step_helper pb-[50px] absolute top-[212px] left-[400px]">
                        <img src={StepTwoImg} className='w-[310px]' alt="" />
                    </div>

                     {/* step 3 */}
                     <div className="step_3 pb-[50px] absolute top-[415px] left-[800px]">
                        <img src={StepThreeImg} className='w-[310px]' alt="" />
                    </div>

                </div>

            </div>

        </section>
    );
}

export default HomeHowSteps;