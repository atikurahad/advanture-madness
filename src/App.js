import { Route, Routes } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import Footer from "./Footer";
import Home from "./Home";
import Navigation from "./Navbar";
import Services from "./Services";
function App() {
  return (
    <>
    <Navigation />
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
