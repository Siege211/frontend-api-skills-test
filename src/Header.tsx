import * as React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/recipes" className="link">
            Recipes
          </Link>
        </li>
      </ul>
    </nav>
    </>
  );
}
export default Header;