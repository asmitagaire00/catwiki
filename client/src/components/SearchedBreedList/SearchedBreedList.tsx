interface searchedBreedListProps {
  searchShow: boolean;
  catBreedItem: any;
  searchFieldValue: string;
  setShowProfile: Function;
  setCatItem: Function;
}

const SearchBreedList = ({
  searchShow,
  catBreedItem,
  searchFieldValue,
  setShowProfile,
  setCatItem,
}: searchedBreedListProps) => {
  const handleCatBreedItem = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShowProfile(true);
    setCatItem(catBreedItem);
  };
  return (
    <div className=" bg-white ">
      <div
        className={`${searchFieldValue ? "bg-white text-currentColor " : ""} `}
      >
        {searchFieldValue && (
          <div
            onClick={handleCatBreedItem}
            className="bg-white cursor-pointer  border-b-2 p-3"
          >
            {catBreedItem.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBreedList;
