import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="navbar-logo">Hottest Board Games</h1>
      </Link>
      <div className="navbar-links">
        <Link to="/boardgames">Board Games</Link>
        <a href="">About</a>
        <button className="navbar-login-btn">Login</button>
      </div>
    </nav>
  );
}
export default Header;
