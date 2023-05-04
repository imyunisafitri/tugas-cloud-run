import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Haikkyu-fandom</h1>
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

export default RootLayout;
