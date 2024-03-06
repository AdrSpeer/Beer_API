import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import AllBeers from "./pages/AllBeers/AllBeers";
import Detail from "./pages/Detail/Detail";
import Random from "./pages/Random/Random";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allbeers" element={<AllBeers />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/random" element={<Random />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
