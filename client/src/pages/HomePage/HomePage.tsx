import Hero from "../../components/Hero/Hero";
import HomePageBottom from "../../components/HomePageBottom/HomePageBottom";

const HomePage = () => {
  return (
    <div className="flex flex-col flex-wrap mb-5 md:mb-10">
      <Hero />
      <HomePageBottom />
    </div>
  );
};

export default HomePage;
