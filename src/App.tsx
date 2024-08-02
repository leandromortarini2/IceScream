import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Home } from "./view/Home/Home";

function App() {
  return (
    <div className="bg-Background">
    <NavBar />
    <Home/>
      <div className="flex justify-center items-center bg-yellow-200 w-full min-h-screen">
        <h1 className="font-bold text-6xl">IceScream</h1>
      </div>
    </div>
  );
}

export default App;
