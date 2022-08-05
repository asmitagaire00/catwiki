import { useEffect, useState } from "react";
import HomePage from "../../pages/HomePage/HomePage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import TopBreedList from "../TopBreedList/TopBreedList";
import "./App.css";

const App = () => {
  const [showSearchedItems, setShowSearchedItems] = useState<boolean>(false);
  const [catBreedList, setCatBreedList] = useState<
    { name: string; id: string }[]
  >([]);

  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [catItem, setCatItem] = useState([]);

  useEffect(() => {
    console.log("to check", showProfile);
  }, [showProfile]);

  return (
    <div className="overflow-y-hidden">
      <div className="flex flex-col flex-wrap mt-[2rem] mx-5 md:mx-[4rem] h-full">
        <Navbar />
        {showSearchedItems ? (
          <TopBreedList
            catItem={catItem}
            showProfile={showProfile}
            catBreedList={catBreedList}
            setCatItem={setCatItem}
            setShowProfile={setShowProfile}
            setShowSearchedItems={setShowSearchedItems}
          />
        ) : showProfile ? (
          <ProfilePage setShowProfile={setShowProfile} catItem={catItem} />
        ) : (
          <HomePage
            setShowSearchedItems={setShowSearchedItems}
            setShowProfile={setShowProfile}
            setCatItem={setCatItem}
            catItem={catItem}
            setCatBreedList={setCatBreedList}
            catBreedList={catBreedList}
          />
        )}
        <Footer />
      </div>
    </div>
  );
};

export default App;
