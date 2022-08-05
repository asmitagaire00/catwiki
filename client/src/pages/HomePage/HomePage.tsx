import Hero from "../../components/Hero/Hero";
import HomePageBottom from "../../components/HomePageBottom/HomePageBottom";
interface homePageProps {
  setShowSearchedItems: Function;
  setShowProfile: Function;
  setCatItem: Function;
  catItem: any;
  setCatBreedList: Function;
  catBreedList: { name: string }[];
}

const HomePage = ({
  setShowSearchedItems,
  setShowProfile,
  setCatItem,
  catItem,
  setCatBreedList,
  catBreedList,
}: homePageProps) => {
  return (
    <div className="flex flex-col flex-wrap mb-5 md:mb-10 ">
      <Hero
        setShowSearchedItems={setShowSearchedItems}
        setShowProfile={setShowProfile}
        setCatItem={setCatItem}
        catItem={catItem}
        setCatBreedList={setCatBreedList}
        catBreedList={catBreedList}
      />
      <HomePageBottom />
    </div>
  );
};

export default HomePage;
