import { CircleCheck } from 'lucide-react';
import React from 'react';

const Features = ({feature}) => {
    return (
        <div className='mb-4'>
            <p className='flex gap-3'> <CircleCheck className='cursor-pointer'></CircleCheck> {feature}</p>
        </div>
    );
};

export default Features; 