import {NavLink} from "react-router-dom";
import {Button} from "../ui/button";

const Navbar = () => {
  return (
    <header className="h-16">
      <nav className="app-container w-full h-full flex justify-between items-center">
        <span className="text-3xl">iRepair</span>
        <ul className="space-x-5">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <Button>
            <NavLink to="/login">Login</NavLink>
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;