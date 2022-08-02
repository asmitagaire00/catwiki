import CatItem from "../../components/CatItem/CatItem";

interface profileProps {
  setShowProfile: Function;
  catItem: any;
}

const ProfilePage = ({ setShowProfile, catItem }: profileProps) => {
  return (
    <div className="mb-5 md:mb-10 ">
      <CatItem setShowProfile={setShowProfile} catItem={catItem} />
    </div>
  );
};

export default ProfilePage;
