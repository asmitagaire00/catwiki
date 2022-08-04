import { useEffect, useState } from "react";
import ShowTopBreedList from "../ShowTopBreedList/ShowTopBreedList";

interface breedListProps {
  catItem: any;
}

const TopBreedList = ({ catItem }: breedListProps) => {
  const [topSearchedItems, setTopSearchedItems] = useState<{ id: string }[]>(
    []
  );
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("most-searched")!);

    console.log("items", items);

    if (items) {
      console.log("items", items);
      setTopSearchedItems(items);
    }
  }, []);

  return (
    <div className=" border border-sky-800">
      <div>
        <h2 className="text-4xl">Top 10 most searched breeds</h2>
      </div>
      <p className="border border-pink-700">
        {topSearchedItems.map((item) => {
          return <div>{item.id}</div>;
        })}
      </p>
      {topSearchedItems.map((item) => {
        return <ShowTopBreedList />;
      })}
      <div className=""></div>
    </div>
  );
};

export default TopBreedList;
