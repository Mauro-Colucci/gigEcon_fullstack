import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <span>fiverr</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          <span>Become a Seller</span>
          <button>Join</button>
        </div>
      </div>
      <hr />
      <div className="menu">
        <span>tesxt</span>
        <span>tesxt</span>
        <span>tesxt</span>
      </div>
    </nav>
  );
};
export default Navbar;