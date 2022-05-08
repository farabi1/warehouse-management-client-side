import React from 'react';
import AchievementSection from '../../Components/AchievementSection/AchievementSection';
import FeaturesSection from '../../Components/FeaturesSection/FeaturesSection';
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HeroSection from '../../Components/HeroSection/HeroSection';
import InventorySection from '../../Components/InventorySection/InventorySection';


const Home = () => {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <h1 className='text-center text-2xl text-red-500'>This is home</h1>
      <InventorySection></InventorySection>
      <AchievementSection></AchievementSection>
      <FeaturesSection></FeaturesSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;
