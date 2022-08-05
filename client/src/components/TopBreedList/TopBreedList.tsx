import { useEffect, useState } from "react";
import catService from "../../services/CatService";
import ShowTopBreedList from "../ShowTopBreedList/ShowTopBreedList";

interface breedListProps {
  catItem: any;
  showProfile: boolean;
}

const TopBreedList = ({ catItem, showProfile }: breedListProps) => {
  const [topSearchedItems, setTopSearchedItems] = useState<{ id: string }[]>(
    []
  );
  useEffect(() => {
    const mostSearched = catService.getMostSearch();
    mostSearched.then((mostSearchedInfo) => {
      setTopSearchedItems(mostSearchedInfo.data);
    });
  }, []);

  if (showProfile) {
  }

  return (
    <div className="pl-12 pr-12 ">
      <div>
        <h2 className="text-4xl my-10">Top 10 most searched breeds</h2>
      </div>
      {topSearchedItems.map((mostSearchedItem, index) => {
        return (
          <ShowTopBreedList mostSearchedItem={mostSearchedItem} key={index} />
        );
      })}
    </div>
  );
};

export default TopBreedList;
