import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyCards from '../DaisyCards/DaisyCards';

const PricingOptions = ({pricingPromise}) => {
    const PricingData = use(pricingPromise);
    // console.log(PricingData);
    return (
        <div>
           <h2 className='text-5xl text-center mt-4'>Get Our membership</h2>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 md:mt-8'>
            {/* {
                PricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}> </PricingCard>)
            } */}
            {/* Daisy card pricing sections */}
            {
                PricingData.map(pricing => <DaisyCards key={pricing.id} pricing={pricing}></DaisyCards>)
            }
           </div>
        </div>
    );
};

export default PricingOptions;