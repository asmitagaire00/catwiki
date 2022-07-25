import { useState } from "react";
import HomePage from "../../pages/HomePage/HomePage";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import TopBreedList from "../TopBreedList/TopBreedList";
import "./App.css";

const App = () => {
  const [showSearchedItems, setShowSearchedItems] = useState<boolean>(false);

  return (
    <div className="overflow-y-hidden">
      <div className="flex flex-col flex-wrap mt-[2rem] mx-5 md:mx-[4rem] h-full">
        <Navbar />
        {showSearchedItems ? (
          <TopBreedList />
        ) : (
          <HomePage setShowSearchedItems={setShowSearchedItems} />
        )}
        <Footer />
      </div>
    </div>
  );
};

export default App;
