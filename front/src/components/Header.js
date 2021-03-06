import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalUserContext } from "../context/provider/GobalUserProvider";

function Header () {
  const { isLogined } = useContext(GlobalUserContext);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
        <Link className="navbar-brand color-white" to="/">
          RedToolsImg
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {isLogined && (
              <>
             <div className="dropdown">
              <button
                className="btn btn-outline-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Notes
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link className="dropdown-item" to="/add">
                    Create Notes
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/notes">
                    My notes
                  </Link>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-outline-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Image
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link className="dropdown-item" to="/upload">
                    upload image
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/images">
                    My image
                  </Link>
                </li>
              </ul>
            </div>

              </>
            )}
          </ul>
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {isLogined && (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
              )}
            </ul>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Login
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {isLogined
                  ? (
                  <li>
                    <a
                      className="dropdown-item"
                      href="/auth/signup"
                      onClick={(e) => handleLogout(e)}
                    >
                      Logout
                    </a>
                  </li>
                    )
                  : (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/auth/signin">
                        Singin
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/auth/signup">
                        Signup
                      </Link>
                    </li>
                  </>
                    )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
