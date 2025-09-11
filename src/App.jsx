import { Button } from "@/components/ui/button";
import Navbar from "./utils/Navbar";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div className=" font-inter">
      <Navbar />
      <div className="w-full ">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
