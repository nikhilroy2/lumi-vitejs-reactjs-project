import React from 'react';
import { Link } from 'react-router-dom';
function FooterEnd(props) {
    return (
        <div className='pt-[150px]'>
            <ul className="flex justify-center mb-[50px] items-center">
                <li>
                    <a href="https://www.lumi.com.au/privacy_policy.pdf" className='text-lu-secondary font-bold hover:underline'>
                        Privacy Policy
                    </a>
                </li>
                <li>
                    <span style={{
                        borderRadius: "50%",
                        backgroundColor: "#818E9A",
                        width: "5px",
                        height: "5px",
                        display: "block",
                        marginRight: "1em",
                        marginLeft: "1em"
                    }}>

                </span>
            </li>
            <li>
                <Link to="/sitemap" className='text-lu-secondary font-bold hover:underline'>
                    Sitemap
                </Link>
            </li>
        </ul>
        </div >
    );
}

export default FooterEnd;