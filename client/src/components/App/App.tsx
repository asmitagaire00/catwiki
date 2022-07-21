import HomePage from "../../pages/HomePage/HomePage";
import Footer from "../Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className=" border-4 border-indigo-500 h-screen overflow-y-hidden">
      <div className="border-4 flex flex-col flex-wrap justify-between  mt-[2rem] mx-3 md:mx-[3rem] h-[97%]  ">
        <HomePage />
        <Footer />
      </div>
    </div>
  );
};

export default App;
