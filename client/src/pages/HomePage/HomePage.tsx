import Hero from "../../components/Hero/Hero";
import HomePageBottom from "../../components/HomePageBottom/HomePageBottom";
interface homePageProps {
  setShowSearchedItems: Function;
}

const HomePage = ({ setShowSearchedItems }: homePageProps) => {
  return (
    <div className="flex flex-col flex-wrap mb-5 md:mb-10 ">
      <Hero setShowSearchedItems={setShowSearchedItems} />
      <HomePageBottom />
    </div>
  );
};

export default HomePage;
