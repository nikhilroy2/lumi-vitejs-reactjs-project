import React from 'react';
import LumiIcon from '../../assets/icons/lumi-icon.svg';
function FooterTop(props) {
    const social_list = [
        {
            id: 1,
            name: 'Facebook',
            link: 'https://www.facebook.com/LumiFinance/',
            icon: <IconFacebook></IconFacebook>
        },
        {
            id: 2,
            name: 'Twitter',
            link: 'https://twitter.com/lumifinance',
            icon: <IconTwitter></IconTwitter>
        },
        {
            id: 3,
            name: 'Linkedin',
            link: 'https://www.linkedin.com/company/lumi-finance/',
            icon: <IconBxlLinkedin></IconBxlLinkedin>
        },
    ]
    return (
        <div>
            <div className="container_wrapper container_padding">
                <div className="flex items-center justify-between flex-col md:flex-row gap-[25px]">
                    <div className="content_box flex items-center">
                        <img src={LumiIcon} alt="icon" />
                        <p className="text-lu-secondary pl-[15px] text-[24px] font-bold">1300 005 864</p>
                    </div>
                    <div className="content_box text-lu-dark">
                        <span>A proud member of </span>
                        <b>FinTech Australia</b>

                    </div>
                    <div className="content_box">
                        <ul className="flex items-center gap-[10px]">
                            {
                                social_list.map(v => {
                                    return (
                                        <li key={v.id} >
                                            <a href={v.link} className='block text-lu-primary-2 p-[10px]'>
                                                {v.icon}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterTop;



function IconFacebook(props) {
    return (
        <svg fill="none" className='text-[25px]' viewBox="0 0 24 24" height="1em" width="1em" {...props}>
            <path
                fill="currentColor"
                d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z"
            />
        </svg>
    );
}


function IconTwitter(props) {
    return (
        <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            className='text-[25px]'
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
        </svg>
    );
}


function IconBxlLinkedin(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className='text-[25px]'
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M7.170999999999999 5.009 A2.188 2.188 0 0 1 4.983 7.197000000000001 A2.188 2.188 0 0 1 2.7949999999999995 5.009 A2.188 2.188 0 0 1 7.170999999999999 5.009 z" />
            <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
        </svg>
    );
}