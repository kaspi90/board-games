import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boardgames from "./components/Homepage/Boardgame/Games";
import Header from "./components/Homepage/Header";
import Footer from "./components/Homepage/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/boardgames" element={<Boardgames />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
