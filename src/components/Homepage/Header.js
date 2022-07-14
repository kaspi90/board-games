import "./Header.css";

function Header() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Board Games</h1>
      <div className="navbar-links">
        <a href="">Board Games</a>
        <a href="">About</a>
        <button className="navbar-login-btn">Login</button>
      </div>
    </nav>
  );
}
export default Header;
