import HeroBottomCard from "../HeroBottomCard/HeroBottomCard";
import HeroTopCard from "../HeroTopCard/HeroTopCard";

interface heroProps {
  setShowSearchedItems: Function;
  setShowProfile: Function;
  setCatItem: Function;
  catItem: any;
  setCatBreedList: Function;
  catBreedList: { name: string }[];
}

const Hero = ({
  setShowSearchedItems,
  setShowProfile,
  setCatItem,
  catItem,
  setCatBreedList,
  catBreedList,
}: heroProps) => {
  return (
    <div className="flex flex-col ">
      <HeroTopCard
        setShowProfile={setShowProfile}
        setCatItem={setCatItem}
        catItem={catItem}
        setCatBreedList={setCatBreedList}
        catBreedList={catBreedList}
      />
      <HeroBottomCard setShowSearchedItems={setShowSearchedItems} />
    </div>
  );
};

export default Hero;
