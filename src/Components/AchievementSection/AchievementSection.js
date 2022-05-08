import React from 'react';

const AchievementSection = () => {
    return (
        <div className='grid grid-cols-2 gap-5 my-10 mx-auto bg-gray-100 py-12 shadow-md'>
            <div className='flex justify-center text-center text-2xl text-orange-900'>

                <img class="object-cover w-96" src="https://img.freepik.com/free-vector/teamwork-team-success-concept_74855-6673.jpg?t=st=1652004876~exp=1652005476~hmac=3fc520a08face369d53036e2934bd4780c8179e546f2fbb8459288d23a62a5e7&w=1060" alt="Achievement" />
            </div>
            <div className='text-center text-2xl text-emerald-600'>AchievementSection</div>
        </div>
    );
};

export default AchievementSection;