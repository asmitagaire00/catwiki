import { useState } from "react";
import DialogCustom from "../DialogCustom/DialogCustom";
import Search from "../Search/Search";

interface heroTopCardProps {
  setShowProfile: Function;
  setCatItem: Function;
  catItem: any;
  setCatBreedList: Function;
  catBreedList: { name: string }[];
}

const HeroTopCard = ({
  setShowProfile,
  setCatItem,
  catItem,
  setCatBreedList,
  catBreedList,
}: heroTopCardProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [searchFieldValue, setSearchFieldValue] = useState<string>("");

  return (
    <div className="relative">
      <img
        src="assets/HeroImagelg.png"
        alt="hero"
        className="w-full object-contain border rounded-t-[42px]"
      />
      <div className="text-white absolute top-6 left-5  md:top-[3rem] md:left-[3rem] lg:top-[5rem] lg:left-[5rem] max-w-xs">
        <p className="font-mysteryQuest text-sm md:text-[30px] lg:text-[40px] mb-1.5 md:mb-4 lg:mb-6">
          Catwiki<span className="hidden md:inline-block">🐈</span>
        </p>
        <p className="text-[10px] md:text-xl lg:text-2xl mb-2.5 md:mb-4 lg:mb-6">
          Get to know more about your cat breeds
        </p>
        <Search
          setOpenModal={setOpenModal}
          openModal={openModal}
          setSearchFieldValue={setSearchFieldValue}
          searchFieldValue={searchFieldValue}
          setShowProfile={setShowProfile}
          setCatItem={setCatItem}
          catItem={catItem}
          setCatBreedList={setCatBreedList}
          catBreedList={catBreedList}
        />
      </div>
      <DialogCustom
        openModal={openModal}
        setOpenModal={setOpenModal}
        setSearchFieldValue={setSearchFieldValue}
        searchFieldValue={searchFieldValue}
      >
        <Search
          setOpenModal={setOpenModal}
          openModal={openModal}
          setSearchFieldValue={setSearchFieldValue}
          searchFieldValue={searchFieldValue}
          setShowProfile={setShowProfile}
          setCatItem={setCatItem}
          catItem={catItem}
          setCatBreedList={setCatBreedList}
          catBreedList={catBreedList}
        />
      </DialogCustom>
    </div>
  );
};

export default HeroTopCard;
