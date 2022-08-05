import { useEffect, useState } from "react";
import catService from "../../services/CatService";
import ShowTopBreedList from "../ShowTopBreedList/ShowTopBreedList";

interface breedListProps {
  catItem: any;
  showProfile: boolean;
  catBreedList: { id: string }[];
  setCatItem: Function;
  setShowProfile: Function;
  setShowSearchedItems: Function;
}

const TopBreedList = ({
  catItem,
  showProfile,
  catBreedList,
  setCatItem,
  setShowProfile,
  setShowSearchedItems,
}: breedListProps) => {
  const [topSearchedItems, setTopSearchedItems] = useState<{ id: string }[]>(
    []
  );
  useEffect(() => {
    const mostSearched = catService.getMostSearch();
    mostSearched.then((mostSearchedInfo) => {
      setTopSearchedItems(mostSearchedInfo.data);
    });
  }, []);

  const toShowCatItem = (toShowId: any) => {
    console.log("first", toShowId);
    const filteredCatId = catBreedList.filter(
      (catBreed) => catBreed.id === toShowId
    );
    setCatItem(filteredCatId);
    setShowProfile(true);
    console.log("lets check", showProfile);
  };
  const handleCancelMostSearched = () => {
    setShowSearchedItems(false);
    setShowProfile(false);
  };

  return (
    <div className="pl-12 pr-12 ">
      <div
        onClick={handleCancelMostSearched}
        className=" color-black flex justify-end mb-3 cursor-pointer  md:mr-12"
      >
        <span className="bg-cancelColor w-6 h-6 pb-1 pl-1 ">✖</span>
      </div>

      <div>
        <h2 className="text-4xl my-10">Top 10 most searched breeds</h2>
      </div>
      {topSearchedItems.map((mostSearchedItem, index) => {
        return (
          <ShowTopBreedList
            mostSearchedItem={mostSearchedItem}
            key={index}
            toShowCatItem={toShowCatItem}
            setShowProfile={setShowProfile}
            setShowSearchedItems={setShowSearchedItems}
          />
        );
      })}
    </div>
  );
};

export default TopBreedList;
