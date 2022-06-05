import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Navigation from "./Navigation";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </>
  );
}

export default App;
