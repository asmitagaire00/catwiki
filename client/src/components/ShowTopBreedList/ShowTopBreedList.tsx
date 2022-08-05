interface showTopBreedListProps {
  mostSearchedItem: any;
}
const ShowTopBreedList = ({ mostSearchedItem }: showTopBreedListProps) => {
  return (
    <div>
      <div className="flex mb-10  mr-12">
        <div className="flex-2">
          <div className="w-72 h-72 cursor-pointer overflow-hidden flex  ">
            <img
              src={mostSearchedItem.url}
              alt="item"
              className="w-4/5 h-4/5 object-cover rounded-3xl"
            />
          </div>
        </div>
        <div className=" cursor-pointer  flex-3">
          <h3 className="text-2xl font-semibold	mb-4">
            {mostSearchedItem.name}
          </h3>
          <p className="text-lg	font-normal">{mostSearchedItem.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowTopBreedList;
