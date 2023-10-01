import React from 'react';
import CardInfoHow from '../../components/CardInfoHow';
import TickIcon from '../../assets/icons/pink-tick.svg'

function HomeCardSection(props) {
    const card_object = [
        {
            id: 1,
            icon: TickIcon,
            name: <>  5-minute <br /> online application </>,
            description: 'Low doc and unsecured up to $300,000',

        },
        {
            id: 2,
            icon: TickIcon,
            name: <> Get funds on the  <br /> same day </>,
            description: `Without harming your credit score`,
        },
        {
            id: 3,
            icon: TickIcon,
            name: <> Get an answer <br /> in 2 hours </>,
            description: `When you provide all relevant information`,
        },
    ]
    return (
        <section className='pb-[123px] relative z-10'>
            <div className="container_wrapper container_padding">
                <h2 className='mb-[128px] text-center text-[54px]  text-lu-dark-2 font-bold leading-[133%]'>
                    This is how we do it at Lumi
                </h2>
                <CardInfoHow cardObject={card_object}></CardInfoHow>
            </div>
        </section>
    );
}

export default HomeCardSection;