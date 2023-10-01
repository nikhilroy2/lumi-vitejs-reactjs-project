import React from 'react';
import FinancialCard from '../../components/FinancialCard';
function HomeFinancial(props) {
    const financial_info_list = [
        {
            id: 1,
            top_name: 'Payment Holiday',
            name: 'Small business loans',
            description: `Secured or unsecured loans for up to $500,000 with flexible terms, and no hidden fees.`,
            list: [
                `Application outcomes within 2 business hours`,
                `Repayment periods of up to 3 years`,
                `Funds available on the next business day`
            ],
            link: '/small-business-loans'
        },
        {
            id: 2,
            top_name: '',
            name: 'Business line of credit',
            description: `Flexible revolving line of credit up to a limit of $500k that can be drawn down at any time during the availability period.`,
            list: [
                `Draw down from $2,000 to $500,000`,
                `No collateral needed to secure the loan`,
                `No early repayment fees`
            ],
            link: '/business-line-of-credit'
        },
        {
            id: 3,
            top_name: 'Rate Reduction',
            name: 'Lumi Lux',
            description: `Given the uncertainty about interest rates, the Lumi Lux™ rate-reducing secured business loan gives you some certainty for funding over $200k.`,
            list: [
                `Loan interest decreases 25 basis points (0.25%) every 6 months`,
                `Get a maximum of 2% (APR) drop`,
                `Loan from 200K and loan terms up to 4 years`
            ],
            link: '/lumi-lux'
        },
    ]
    return (
        <React.Fragment>
            <section>
                <div className="container_wrapper container_padding mt-[200px] mb-[100px]">
                    <div className="content_title md:mb-[90px] mb-5">
                        <h2 className="text-center text-[64px] font-bold text-lu-dark-2 ">
                            Tailored Financial Solutions
                        </h2>
                    </div>
                    <div className="content_body">
                        <FinancialCard card_list={financial_info_list}></FinancialCard>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default HomeFinancial;