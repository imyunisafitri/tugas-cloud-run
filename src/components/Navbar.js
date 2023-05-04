import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <header>
        <nav>
          <h2>Haikkyu-fandom</h2>
          <div className="menu-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="blog">Blog</NavLink>
            <NavLink to="service">Teams</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
