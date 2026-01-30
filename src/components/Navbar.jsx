import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="brand">
        LordBrad.dev
      </Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
