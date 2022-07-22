import HomePage from "../../pages/HomePage/HomePage";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="overflow-y-hidden">
      <div className="flex flex-col flex-wrap mt-[2rem] mx-5 md:mx-[4rem] h-full ">
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </div>
  );
};

export default App;
