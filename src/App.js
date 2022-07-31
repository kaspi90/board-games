import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamesSearch from "./components/GamesSearch/GamesSearch";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route exact path="/boardgames" element={<GamesSearch />} />
          <Route path="/boardgames/:id" element={<GamesSearch />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
