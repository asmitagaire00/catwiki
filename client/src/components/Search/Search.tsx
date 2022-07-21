import React from "react";

const Search = () => {
  return (
    <div className="bg-white flex flex-wrap border rounded-[42px] p-2 md:w-64">
      <input
        type="Search"
        placeholder="Search"
        className="text-xs text-[#291507] ml-2  md:text-lg"
      />
      <button className="">🔍</button>
    </div>
  );
};

export default Search;
