import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamesSearch from "./components/GamesSearch/GamesSearch";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        {/* REVIEW: Good use of using the header inside the router but not in the routes */}
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route exact path="/boardgames" element={<GamesSearch />} />
          {/* REVIEW: nice use of route params */}
          <Route path="/boardgames/:id" element={<GamesSearch />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
