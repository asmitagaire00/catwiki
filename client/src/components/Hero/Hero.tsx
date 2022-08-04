import HeroBottomCard from "../HeroBottomCard/HeroBottomCard";
import HeroTopCard from "../HeroTopCard/HeroTopCard";

interface heroProps {
  setShowSearchedItems: Function;
  setShowProfile: Function;
  setCatItem: Function;
  catItem: any;
}

const Hero = ({
  setShowSearchedItems,
  setShowProfile,
  setCatItem,
  catItem,
}: heroProps) => {
  return (
    <div className="flex flex-col ">
      <HeroTopCard
        setShowProfile={setShowProfile}
        setCatItem={setCatItem}
        catItem={catItem}
      />
      <HeroBottomCard setShowSearchedItems={setShowSearchedItems} />
    </div>
  );
};

export default Hero;
