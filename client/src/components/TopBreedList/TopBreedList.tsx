import { useEffect, useState } from "react";

interface breedListProps {
  // catBreedInfo: <string[]>;
}

const TopBreedList = ({}: breedListProps) => {
  const [topSearchedItems, setTopSearchedItems] = useState<string | null>("");

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("storageKey")!);
    console.log("items", items);

    if (items) {
      console.log("items", items);
      setTopSearchedItems(items);
    }
  }, []);
  console.log("items");

  return (
    <div className=" border border-sky-800">
      <h2 className="text-4xl">Top 10 most searched breeds</h2>
      <p>{topSearchedItems}</p>
      <div className=""></div>
    </div>
  );
};

export default TopBreedList;
