interface heroBottomCardProps {
  setShowSearchedItems: Function;
}

const HeroBottomCard = ({ setShowSearchedItems }: heroBottomCardProps) => {
  const handleMostSearchedItems = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    setShowSearchedItems(true);

    console.log("clicked");
  };
  return (
    <div className="bg-[#E3E1DC] pl-4 pr-4 pt-4 md:pl-12 md:pr-12 w-full border rounded-b-[42px]">
      <p className="text-xs md:text-lg pb-0.5 ">Most Searched breeds</p>
      <div className="bg-[#4D270C] w-10 h-[3px] mb-3"></div>
      <div className="mb-5 md:mb-10 flex  justify-between">
        <p className="text-lg font-bold md:text-[30px] lg:text-[40px] text-currentColor">
          66+ breeds for you to discover
        </p>
        <div onClick={handleMostSearchedItems} className="flex cursor-pointer">
          <p className="hidden md:text-lg md:text-readMoreColor md:inline-block  md:mr-2 ">
            See More
          </p>
          <div className="hidden md:inline-block mt-[4px]">→</div>
        </div>
      </div>
      <div className="flex flex-wrap ">
        <div className=" mr-3 mb-4 md:flex-1">
          <img
            src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="md:w-full  w-[134px] h-32 object-cover border rounded-xl "
          />
          <p className="text-xs pt-1">catty</p>
        </div>

        <div className=" md:mr-6 mb-4 md:flex-1">
          <img
            src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="md:w-full  w-[134px] h-32 object-cover border rounded-xl "
          />
          <p className="text-xs pt-1">catty</p>
        </div>

        <div className=" mr-3 mb-4 md:flex-1">
          <img
            src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="md:w-full  w-[134px] h-32 object-cover border rounded-xl "
          />
          <p className="text-xs pt-1">catty</p>
        </div>

        <div className="  mb-4 md:flex-1">
          <img
            src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="md:w-full  w-[134px] h-32 object-cover border rounded-xl "
          />
          <p className="text-xs pt-1">catty</p>
        </div>
      </div>
      <div>
        <a href="/profile"></a>
      </div>
    </div>
  );
};

export default HeroBottomCard;
