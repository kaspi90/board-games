import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boardgames from "./components/Games/Games";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
