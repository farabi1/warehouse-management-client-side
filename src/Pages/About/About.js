import React from 'react';
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'


const About = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex justify-center my-20 w-4/5 mx-auto ">
        <div className=" grid grid-cols-2 bg-base-100 shadow-lg bg-slate-100 py-10 px-5 rounded-md">
          <div className="">
            <figure><img className=' object-contain h-80 w-96 ' src="https://i.ibb.co/KmvQbMS/Formal-pic.jpg" alt="Farabi Rashid" /></figure>
          </div>
          <div >
            <h2 className=' my-5 text-2xl font-bold' >
              Name : Mamunur Rashid Farabi

            </h2>
            <p className=' my-5 text-xl font-medium'>
              Introduction : As i introduce myself Always a learner, is very keen  to add value at any project i work on whether commercial or private. Pro-active researcher for developing a web application.</p>
            <div className="card-actions justify-start">
              <div className="py-3 text-xl font-bold">SkillSet :-</div>
              <div className="py-3 text-xl font-semibold">1.HTML</div>
              <div className="py-3 text-xl font-semibold">2.CSS</div>
              <div className="py-3 text-xl font-semibold">3.JavaScript</div>
              <div className="py-3 text-xl font-semibold">4.React js</div>
              <div className="py-3 text-xl font-semibold">5.Node js</div>
              <div className="py-3 text-xl font-semibold">6.Express js</div>
              <div className="py-3 text-xl font-semibold">7.MongoDB</div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;