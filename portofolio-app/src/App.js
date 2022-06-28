import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetails from "./pages/MovieDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<AboutUs />} />
      </Routes>
      <Routes>
        <Route path="/work" element={<OurWork />} />
      </Routes>
      <Routes>
        <Route path="/work/:id" element={<MovieDetails />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
