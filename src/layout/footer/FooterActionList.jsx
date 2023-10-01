import React from 'react';
import { FooterMenuList } from '../../data/FooterMenuList';
import { Link } from 'react-router-dom';
import FooterSponsorImg from '../../assets/images/footer/footer-sponsor.png'
import AfiaImg from '../../assets/images/footer/afia-lumi.png'
function FooterActionList(props) {

    return (
        <div>
            <div className="container_wrapper container_padding">

                <div className="flex flex-col md:flex-row gap-10">
                    {
                        FooterMenuList.map((v, i) => {
                            return (
                                <ul key={v.id} className={`${i === 0 ? 'flex-grow-1' : 'flex-grow-2'} `}>
                                    <li className='text-[24px] text-lu-secondary leading-[24px] py-5'>
                                        <strong>
                                            {v.name}
                                        </strong>
                                    </li>
                                    {
                                        v.name && (
                                            <li>
                                                <ul>
                                                    {
                                                        v.list.map((j, index2) => {
                                                            return (
                                                                <li key={j.id}>
                                                                    <Link to={j.link} className='block py-2 text-lu-dark'>
                                                                        {j.name}
                                                                    </Link>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </li>
                                        )
                                    }
                                </ul>
                            )
                        })
                    }

                    <ul>
                        <li className='mt-[30px]'>
                            <img src={FooterSponsorImg} className='max-w-[250px]' alt="" />
                        </li>
                        <li className='mt-[30px]'>
                            <a href="https://www.afia.asn.au/AFIA-Online-Small-Business-Lenders-Code-of-Lending-Practice">
                                <img src={AfiaImg} alt="" />
                            </a>
                            <p className="mt-[20px] text-lu-dark text-center">
                                AFIA Online Small Business <br /> Lenders Code Of Lending Practice
                            </p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default FooterActionList;