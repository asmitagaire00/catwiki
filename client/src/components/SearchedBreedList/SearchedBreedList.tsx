import React from "react";

interface searchedBreedListProps {
  searchShow: boolean;
  breedInfo: any;
  searchFieldValue: string;
}

const SearchBreedList = ({
  searchShow,
  breedInfo,
  searchFieldValue,
}: searchedBreedListProps) => {
  return (
    <div className=" bg-white ">
      <div
        className={`${
          searchFieldValue ? "bg-white text-currentColor p-3 " : ""
        } `}
      >
        {searchFieldValue && <div className="bg-white ">{breedInfo.name}</div>}
      </div>
    </div>
  );
};

export default SearchBreedList;
