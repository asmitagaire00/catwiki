import HeroBottomCard from "../HeroBottomCard/HeroBottomCard";
import HeroTopCard from "../HeroTopCard/HeroTopCard";

interface heroProps {
  setShowSearchedItems: Function;
  setShowProfile: Function;
  setCatItem: Function;
}

const Hero = ({
  setShowSearchedItems,
  setShowProfile,
  setCatItem,
}: heroProps) => {
  return (
    <div className="flex flex-col ">
      <HeroTopCard setShowProfile={setShowProfile} setCatItem={setCatItem} />
      <HeroBottomCard setShowSearchedItems={setShowSearchedItems} />
    </div>
  );
};

export default Hero;
