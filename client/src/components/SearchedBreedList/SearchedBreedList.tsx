import React, { useState } from "react";

interface searchedBreedListProps {
  searchShow: boolean;
  catBreedItem: any;
  searchFieldValue: string;
}

const SearchBreedList = ({
  searchShow,
  catBreedItem,
  searchFieldValue,
}: searchedBreedListProps) => {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const handleCatBreedItem = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShowProfile(true);
  };
  return (
    <div className=" bg-white ">
      <div
        className={`${
          searchFieldValue ? "bg-white text-currentColor p-3 " : ""
        } `}
      >
        {searchFieldValue && (
          <div onClick={handleCatBreedItem} className="bg-white ">
            {catBreedItem.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBreedList;
