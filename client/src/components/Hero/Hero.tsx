import HeroBottomCard from "../HeroBottomCard/HeroBottomCard";
import HeroTopCard from "../HeroTopCard/HeroTopCard";

const Hero = () => {
  return (
    <div className="flex flex-col ">
      <HeroTopCard />
      <HeroBottomCard />
    </div>
  );
};

export default Hero;
