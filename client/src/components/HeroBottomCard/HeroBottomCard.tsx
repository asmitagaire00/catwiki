import { useEffect, useState } from "react";
import catService from "../../services/CatService";

interface heroBottomCardProps {
  setShowSearchedItems: Function;
}

const HeroBottomCard = ({ setShowSearchedItems }: heroBottomCardProps) => {
  const [showHeroBottomList, setShowHeroBottomList] = useState<
    {
      name: string;
      url: string;
    }[]
  >([]);
  const handleMostSearchedItems = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setShowSearchedItems(true);
  };

  useEffect(() => {
    const mostSearchedHeroBottom = catService.getMostSearch();
    mostSearchedHeroBottom.then((mostSearchedInfo) => {
      setShowHeroBottomList(mostSearchedInfo.data.slice(0, 5));
    });
  });

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
        {showHeroBottomList.map((showMostSearchedList, index) => {
          return (
            <div className="mr-1 md:mr-0 mb-4 md:flex-1" key={index}>
              <img
                src={showMostSearchedList.url}
                alt=""
                className="w-[134px] h-32 object-cover border rounded-xl "
              />
              <p className="text-lg font-semibold font-montserrat pt-1">
                {showMostSearchedList.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroBottomCard;
