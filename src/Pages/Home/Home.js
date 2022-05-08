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
      <p>This is Home</p>
      <p>This is Home</p>
      <p>This is Home</p>
      <p>This is Home</p>
      <InventorySection></InventorySection>
      <AchievementSection></AchievementSection>
      <FeaturesSection></FeaturesSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;
