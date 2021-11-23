import * as React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    <nav>
      {/* <Link to="/">
        Home
      </Link> */}
      <Link to="/recipes">
        Recipes
      </Link>
      <Link to="/specials">
        Specials
      </Link>
    </nav>
    </>
  );
}
export default Header;