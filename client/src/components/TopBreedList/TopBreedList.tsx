interface breedListProps {
  // catBreedInfo: <string[]>;
}

const TopBreedList = ({}: breedListProps) => {
  return (
    <div className=" border border-sky-800">
      <h2 className="text-4xl">Top 10 most searched breeds</h2>
      <div className=""></div>
    </div>
  );
};

export default TopBreedList;
