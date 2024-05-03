import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrapper/Navbar";

const NvaBar = () => {
  // const { openSideBar } = useGlobalContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">
          Story<span className="logoIn">Spark</span>
        </span>

        <div className="nav-links">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default NvaBar;
