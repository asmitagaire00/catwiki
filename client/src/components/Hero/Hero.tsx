import HeroBottomCard from "../HeroBottomCard/HeroBottomCard";
import HeroTopCard from "../HeroTopCard/HeroTopCard";

interface heroProps {
  setShowSearchedItems: Function;
}

const Hero = ({ setShowSearchedItems }: heroProps) => {
  return (
    <div className="flex flex-col ">
      <HeroTopCard />
      <HeroBottomCard setShowSearchedItems={setShowSearchedItems} />
    </div>
  );
};

export default Hero;
