interface showTopBreedListProps {
  mostSearchedItem: any;
  toShowCatItem: Function;
  setShowProfile: Function;
  setShowSearchedItems: Function;
}
const ShowTopBreedList = ({
  mostSearchedItem,
  toShowCatItem,
  setShowProfile,
  setShowSearchedItems,
}: showTopBreedListProps) => {
  const {
    catItem: catId,
    name: catName,
    description: catDesc,
    url: catImageUrl,
  } = mostSearchedItem;
  const handleMostSearchedItem = () => {
    toShowCatItem(catId);
    setShowProfile(true);
  };

  return (
    <div>
      <div className="flex mb-10  mr-12" onClick={handleMostSearchedItem}>
        <div className="flex-2">
          <div className="w-72 h-72 cursor-pointer overflow-hidden flex  ">
            <img
              src={catImageUrl}
              alt="item"
              className="w-4/5 h-4/5 object-cover rounded-3xl"
            />
          </div>
        </div>
        <div className=" cursor-pointer  flex-3">
          <h3 className="text-2xl font-semibold	mb-4">{catName}</h3>
          <p className="text-lg	font-normal">{catDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowTopBreedList;
