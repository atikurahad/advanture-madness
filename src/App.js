import { Route, Routes } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import Footer from "./Footer";
import Home from "./Home";
import Services from "./Services";
import Navigation from "./Navigation";
function App() {
  return (
    <>
   {/* <Navigation /> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
