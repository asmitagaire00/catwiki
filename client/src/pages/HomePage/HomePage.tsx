import Hero from "../../components/Hero/Hero";
import HomePageBottom from "../../components/HomePageBottom/HomePageBottom";
import Navbar from "../../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <div className="border-2 border-pink-500 ">
      <Navbar />
      <Hero />
      <HomePageBottom />
    </div>
  );
};

export default HomePage;
