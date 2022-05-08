import React from 'react';

const FeaturesSection = () => {
    return (
        <>
            <h1 className='text-center text-2xl font-bold text-orange-900'>Features Section</h1>
            <div className='grid grid-cols-2 gap-5 my-10 mx-auto bg-gray-100 py-12 shadow-md'>
                <div className='flex justify-center text-center text-2xl text-orange-900'>
                    <div className=" bg-neutral-100 px-4 py-5 border rounded-md">
                        <h1>-Fast Delivery</h1>
                        <h1>-Reliable Source</h1>
                        <h1>-Secure Payment</h1>
                        <h1>-Replace Geruntee</h1>
                    </div>

                </div>
                <div className='text-center'>
                    <div className='flex justify-center text-center text-2xl text-orange-900'>

                        <img className="object-cover h-44 w-96" src=" https://img.freepik.com/free-vector/features-overview-concept-illustration_114360-1500.jpg?t=st=1652029599~exp=1652030199~hmac=64d499711b51137d30c5e58ecd23d2d59838a77811af195f1401e8a3c43c3e75&w=740" alt="Achievement" />
                    </div>
                   
                </div>
            </div>
        </>
    );
};

export default FeaturesSection;