import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Home } from "./view/Home/Home";
import { Products } from "./view/Products/Products";

function App() {
  return (
    <>
      <header></header>
      <NavBar />
      <Home />

      <Products />
    </>
  );
}

export default App;
