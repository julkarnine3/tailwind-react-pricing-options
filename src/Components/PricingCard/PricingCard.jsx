import React from 'react';
import Features from './Features';

const PricingCard = ({ pricing }) => {
    const { name, price, description, features } = pricing;
    return (
        <div className='bg-amber-500 rounded-2xl p-5 flex flex-col'>
            {/* Card header */}
                <div>
                <h2 className='text-3xl font-semibold'>{name}</h2>
                <h3 className='text-xl'>price:<span className='font-semibold'> ${price} /month</span></h3>
                </div>
                {/* Card body */}
                <div className='bg-amber-300 p-3 rounded-xl mt-5 flex-1'>
                    <p>{description}</p>
                    <div className='mt-5'>
                        {
                            features.map((feature, index) => <Features key={index} feature={feature}></Features>)
                        }
                    </div>

                </div>
                <button className='bg-blue-800 rounded-lg text-white font-bold px-5 py-3 cursor-pointer mt-5 hover:text-amber-600 hover:bg-gray-300 duration-700'>Add to Cart</button>
           

        </div>
    );
};

export default PricingCard;