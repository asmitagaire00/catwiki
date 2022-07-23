import Search from "../Search/Search";

const HeroTopCard = () => {
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
        <Search />
      </div>
    </div>
  );
};

export default HeroTopCard;
