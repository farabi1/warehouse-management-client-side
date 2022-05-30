import React from 'react';

const AchievementSection = () => {
    return (
        <>
            <h1 className='text-center text-4xl text-orange-900 font-semibold my-8'>AchievementSection</h1>
            <div className='grid grid-cols-2 gap-5 my-10 mx-auto bg-gray-100 py-12 shadow-md'>
                <div className='flex justify-center text-center text-2xl text-orange-900'>

                    <img className="object-cover w-96" src="https://img.freepik.com/free-vector/teamwork-team-success-concept_74855-6673.jpg?t=st=1652004876~exp=1652005476~hmac=3fc520a08face369d53036e2934bd4780c8179e546f2fbb8459288d23a62a5e7&w=1060" alt="Achievement" />
                </div>
                <div className='text-center text-2xl text-emerald-600'>
                    <div className=" bg-neutral-100 px-4 py-5 border rounded-md">
                        <h1>-Customer Satisfaction</h1>
                        <h1>-Vast Community</h1>
                        <h1>-Yearly Progress Report</h1>
                        <h1>-Career Option</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AchievementSection;