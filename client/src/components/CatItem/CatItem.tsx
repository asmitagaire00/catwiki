import CatItemImages from "../CatItemImages/CatItemImages";
import RatingContainer from "../RatingContainer/RatingContainer";

interface catItemProps {
  setShowProfile: Function;
  catItem: any;
}
const CatItem = ({ setShowProfile, catItem }: catItemProps) => {
  const handleCatItemProfile = () => {
    setShowProfile(false);
    console.log(catItem);
  };

  return (
    <div className=" md:pl-12 md:pr-12">
      <div
        onClick={handleCatItemProfile}
        className=" color-black flex justify-end mb-3 cursor-pointer  md:mr-12"
      >
        <span className="bg-cancelColor w-6 h-6 pb-1 pl-1 ">✖</span>
      </div>
      <div className="flex flex-col md:justify-between md:flex-row  mt-3 md:pl-12 md:pr-12 ">
        <div className="md:mr-11">
          <img
            className="md:w-1/2  object-cover rounded-3xl mt-5"
            src={catItem.image.url}
            alt="profile-pic"
          />
          {/* <div className="h-24 md:h-36 w-[8px] bg-profileBackgroundColor rounded-l-xl"></div> */}
        </div>
        <div className="text-black pl-4 pr-4 mt-6 md:pl-0 md:pr-0  ">
          <div className="	mb-4">
            <h3 className="text-2xl font-semibold	mb-4">{catItem.name}</h3>
            <p className="text-lg	font-normal">{catItem.description}</p>
          </div>
          <div>
            <p className="text-base	mb-4">
              <span className="text-base font-bold mr-2">Temperament:</span>
              {catItem.temperament}
            </p>
            <p className="mb-4">
              <span className="text-base font-bold mr-2">Origin:</span>
              {catItem.origin}
            </p>
            <p className="mb-4">
              <span className="text-base font-bold mr-2">Life-Span:</span>
              {catItem.life_span}
            </p>
            <div className="flex flex-wrap mb-4 ">
              <p className="text-base font-bold  mb-2">Adaptability:</p>
              <RatingContainer value={catItem.adaptability} />
            </div>
            <div className="flex flex-wrap mb-4 ">
              <p className="text-base font-bold  mb-2">Affection_level:</p>
              <RatingContainer value={catItem.affection_level} />
            </div>
            <div className="flex flex-wrap mb-4 ">
              <p className="text-base font-bold  mb-2">Child_Friendly:</p>
              <RatingContainer value={catItem.child_friendly} />
            </div>
            <div className="flex flex-wrap mb-4 ">
              <p className="text-base font-bold  mb-2">Grooming:</p>
              <RatingContainer value={catItem.grooming} />
            </div>
            <div className="flex flex-wrap mb-4 ">
              <p className="text-base font-bold  mb-2">Intelligence:</p>
              <RatingContainer value={catItem.intelligence} />
            </div>
            <div className="flex flex-wrap mb-4 ">
              <p className="text-base font-bold  mb-2">Health_Issues:</p>
              <RatingContainer value={catItem.health_issues} />
            </div>
            <div className="flex flex-wrap mb-4 ">
              <p className="text-base font-bold  mb-2">Social_Needs:</p>
              <RatingContainer value={catItem.social_needs} />
            </div>
            <div className="flex flex-wrap mb-4 ">
              <p className="text-base font-bold  mb-2">Stranger_Friendly:</p>
              <RatingContainer value={catItem.stranger_friendly} />
            </div>
          </div>
        </div>
      </div>
      <CatItemImages catItem={catItem} />
    </div>
  );
};

export default CatItem;
