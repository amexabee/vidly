import { Link, NavLink, Outlet } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <header className="mb-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Vidly
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-link" aria-current="page" to="movies">
                  Movies
                </NavLink>
                <NavLink className="nav-link" to="customers">
                  Customers
                </NavLink>
                <NavLink className="nav-link" to="rentals">
                  Rentals
                </NavLink>
                <NavLink className="nav-link" to="login">
                  Login
                </NavLink>
                <NavLink className="nav-link" to="register">
                  Register
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
