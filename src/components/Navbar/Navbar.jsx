import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__news-explorer-button">NewsExplorer</div>
      <div className="navbar__options">
        <button className="navbar__home-button">Home</button>
        <button className="navbar__signin-button">Sign in</button>
      </div>
    </div>
  );
}
export default Navbar;
