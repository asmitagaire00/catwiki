import React, { useEffect, useState } from "react";
import SearchBreedList from "../SearchedBreedList/SearchedBreedList";

import catService from "../../services/CatService";

interface searchProps {
  setOpenModal: Function;
  openModal: boolean;
  setSearchFieldValue: Function;
  searchFieldValue: string;
  setShowProfile: Function;
  setCatItem: Function;
  catItem: any;
  setCatBreedList: Function;
  catBreedList: { name: string }[];
}

const Search = ({
  setOpenModal,
  openModal,
  setSearchFieldValue,
  searchFieldValue,
  setShowProfile,
  setCatItem,
  catItem,
  setCatBreedList,
  catBreedList,
}: searchProps) => {
  const [searchShow, setSearchShow] = useState<boolean>(false);

  let filteredCatBreedList = catBreedList;

  const handleSeach = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    setOpenModal(true);
    setSearchShow(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFieldValue(e.target.value);
  };

  useEffect(() => {
    const allCatBreeds = catService.getAllCatBreeds();
    allCatBreeds.then((catBreedsDetails) => {
      setCatBreedList(catBreedsDetails.data);
    });
  });

  const handleCatBreedSearch = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  if (searchShow) {
    filteredCatBreedList = catBreedList.filter((catBreedItem) => {
      return catBreedItem.name.toLowerCase().includes(searchFieldValue);
    });
  }

  return (
    <div>
      <div
        className={`bg-white cursor-pointer ${
          openModal ? "flex justify-between flex-wrap " : "flex flex-wrap"
        } md:justify-between rounded-[42px] md:w-full`}
      >
        <input
          placeholder="Search"
          onChange={handleInputChange}
          onClick={handleSeach}
          value={searchFieldValue}
          className={`${
            openModal
              ? "relative w-full text-lg ml-0 border border-slate-600 focus:outline-none  focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
              : "text-s"
          }  text-[#291507] p-2 md:text-lg md:p-2 rounded-[42px] pl-4 md:pl-5`}
        />

        <button
          onClick={handleCatBreedSearch}
          className={`flex items-center absolute ${
            openModal ? "right-8 p-2.5 " : "right-2 p-2"
          }   cursor-pointer`}
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6  text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`${
          searchFieldValue
            ? "bg-white border rounded-3xl mt-3 p-3 h-[200px] overflow-y-auto"
            : ""
        }`}
      >
        {filteredCatBreedList.map((catBreedItem, index) => {
          return (
            <SearchBreedList
              catBreedItem={catBreedItem}
              key={index}
              searchShow={searchShow}
              searchFieldValue={searchFieldValue}
              setShowProfile={setShowProfile}
              setCatItem={setCatItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Search;
