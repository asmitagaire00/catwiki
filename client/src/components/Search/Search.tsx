import React, { useRef, useState } from "react";

const Search = () => {
  const catBreed = useRef<HTMLInputElement | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleSeachDiv = () => {
    setOpenModal(true);
  };

  const handleCatBreedSearch = () => {
    fetch(`http://localhost:3001/api/post/${catBreed.current?.value}`)
      .then((response) => response.json())
      .then((catBreedInfo) => console.log("cat breed info", catBreedInfo))
      .catch((error) => console.log("error occurred", error));
  };

  return (
    <div className="bg-white flex flex-wrap md:justify-between border rounded-[42px] p-2 md:w-full">
      <input
        type="Search"
        placeholder="Search"
        onClick={handleSeachDiv}
        ref={catBreed}
        className="text-xs text-[#291507] ml-2 p-2 md:text-lg md:p-2 "
      />
      <button onClick={handleCatBreedSearch} className=" md:mr-7">
        🔍
      </button>
    </div>
  );
};

export default Search;
