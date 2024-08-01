import "./App.css";
import { Home } from "./view/Home/Home";

function App() {
  return (
    <>
    <Home/>
      <div className="w-full min-h-screen bg-yellow-200 flex justify-center items-center">
        <h1 className="text-6xl font-bold">IceScream</h1>
      </div>
    </>
  );
}

export default App;
