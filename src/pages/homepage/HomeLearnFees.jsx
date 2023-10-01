import React from 'react';
import { Link } from 'react-router-dom';
import ParallaxImg from '../../assets/images/all/logo-parallax.svg'
function HomeLearnFees(props) {
    return (
        <section>
            <div className="container_wrapper container_padding">
                <div className="flex justify-between">
                    <div className="w-1/2">
                        <img className='w-full' src={ParallaxImg} alt="" />
                    </div>
                    <div className="w-1/2 pl-[100px] pt-[150px]">
                        <h2 className="text-[45px] font-bold text-lu-dark-2 ">
                            At Lumi, we don't believe in surprises.
                        </h2>

                        <p className="mt-8 text-lu-dark">(at least, not when it comes to finance).</p>

                        <div className="content_footer mt-[60px]">
                            <p className='surprises-subtitle-p'>
                                Instead, we provide simple access to structured finance. Offering both loans and lines of credit, Lumi can help give your venture the financial boost it needs.
                            </p>

                            <p className='surprises-subtitle-p'>
                                No guesswork, no hassles, no reading between the lines. Just totally transparent loans to help you get ahead.
                            </p>

                            <div className="mt-[30px]">
                                <Link className="button-border font-bold"
                                    to="/fee-guide">Learn more about our Fees</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeLearnFees;