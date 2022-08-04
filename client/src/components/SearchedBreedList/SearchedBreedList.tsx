import catService from "../../services/CatService";

interface searchedBreedListProps {
  searchShow: boolean;
  catBreedItem: any;
  searchFieldValue: string;
  setShowProfile: Function;
  setCatItem: Function;
  setLocalStorageValue: Function;
  localStorageValue: any;
}

const SearchBreedList = ({
  searchShow,
  catBreedItem,
  searchFieldValue,
  setShowProfile,
  setCatItem,
  setLocalStorageValue,
  localStorageValue,
}: searchedBreedListProps) => {
  const handleCatBreedItem = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShowProfile(true);
    setCatItem(catBreedItem);
    setLocalStorageValue([...localStorageValue, { id: catBreedItem.id }]);
    catService.postCatItem(catBreedItem.id);
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
