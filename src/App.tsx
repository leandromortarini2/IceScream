import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Home } from "./view/Home/Home";
import { Products } from "./view/Products/Products";
import Contact from "./view/Contacts/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Products />
            </>
          }
        ></Route>
        <Route path="/contacto" element={<Contact />}></Route>
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;
