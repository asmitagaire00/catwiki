import Hero from "../../components/Hero/Hero";
import HomePageBottom from "../../components/HomePageBottom/HomePageBottom";
interface homePageProps {
  setShowSearchedItems: Function;
  setShowProfile: Function;
  setCatItem: Function;
  catItem: any;
}

const HomePage = ({
  setShowSearchedItems,
  setShowProfile,
  setCatItem,
  catItem,
}: homePageProps) => {
  return (
    <div className="flex flex-col flex-wrap mb-5 md:mb-10 ">
      <Hero
        setShowSearchedItems={setShowSearchedItems}
        setShowProfile={setShowProfile}
        setCatItem={setCatItem}
        catItem={catItem}
      />
      <HomePageBottom />
    </div>
  );
};

export default HomePage;
