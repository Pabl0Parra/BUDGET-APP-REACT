import { NavLink } from "react-router-dom";

const NavBar = () => (
  <div>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/Estimate">Estimate</NavLink>
      </li>
      <li>
        <NavLink to="/ajksdfkjhasdk">404 error</NavLink>
      </li>
    </ul>
  </div>
);

export default NavBar;
