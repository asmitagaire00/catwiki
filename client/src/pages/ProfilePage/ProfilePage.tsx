import CatItem from "../../components/CatItem/CatItem";

interface profileProps {
  setShowProfile: Function;
  catItem: any;
}

const ProfilePage = ({ setShowProfile, catItem }: profileProps) => {
  return (
    <div>
      <CatItem setShowProfile={setShowProfile} catItem={catItem} />
    </div>
  );
};

export default ProfilePage;
