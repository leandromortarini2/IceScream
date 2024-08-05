import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Home } from "./view/Home/Home";
import { Products } from "./view/Products/Products";

function App() {
  return (
    <div className="">
      <NavBar />
      <Home />
      <Products />
    </div>
  );
}

export default App;
