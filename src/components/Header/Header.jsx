import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="container header__inner">
          <img src={logo} alt="Kasa Logo" className="header_logo" />
          <nav>
            <ul className="header_nav">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? "navlink active" : "navlink"
                  }
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  end
                  className={({ isActive }) =>
                    isActive ? "navlink active" : "navlink"
                  }
                >
                  A Propos
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
