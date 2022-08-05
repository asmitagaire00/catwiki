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
    catService.postCatItem(
      catBreedItem.id,
      catBreedItem.name,
      catBreedItem.image.url,
      catBreedItem.description
    );
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
