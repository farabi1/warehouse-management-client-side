import React from 'react';
import AchievementSection from '../../Components/AchievementSection/AchievementSection';
import FeaturesSection from '../../Components/FeaturesSection/FeaturesSection';
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import InventorySection from '../../Components/InventorySection/InventorySection';
import HeroSection from '../../Components/HeroSection/HeroSection';


const Home = () => {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <InventorySection></InventorySection>
      <AchievementSection></AchievementSection>
      <FeaturesSection></FeaturesSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;
