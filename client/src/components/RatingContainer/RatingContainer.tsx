interface ratingContainerProps {
  value: number;
}

const RatingContainer = ({ value }: ratingContainerProps) => {
  return (
    <div className="flex items-center  md:ml-10" id="rectangleWrapper">
      {[...Array(5)].map((item, index) => {
        const givenValue = index + 1;
        return (
          <div
            className={`w-10 h-1.5 rounded-lg mr-2 ${
              value >= givenValue ? "bg-black" : "bg-ratingBackgroundColor"
            }`}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};

export default RatingContainer;
