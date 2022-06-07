import { Route, Routes } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import Home from "./Home";
// import Navigation from "./Navigation";

function App() {
  return (
    <>
      {/* <Navigation /> */}

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
