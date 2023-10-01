import React from 'react';
import { SiteMapList } from '../../data/SiteMapList';
import { Link } from 'react-router-dom';
function Sitemap(props) {
    return (
        <section className='py-[60px]'>
            <div className="container_wrapper padding_wrapper">
                <ul>
                    {
                        SiteMapList.map((v, i) => {
                            return (
                                <li key={v.id} className='py-2'>
                                    <Link to={v.link} className="text-lu-primary text-[16px] font-[500] leading-[24px] ">
                                        {v.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    );
}

export default Sitemap;