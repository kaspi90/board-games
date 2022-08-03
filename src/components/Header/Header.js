import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="navbar-logo">Board Games</h1>
      </Link>
      <div className="navbar-links">
        <Link to="/boardgames">Board Game Search</Link>
        <Link to="/Contact">Contact</Link>
        <button className="navbar-login-btn">Login</button>
      </div>
    </nav>
  );
}
export default Header;
