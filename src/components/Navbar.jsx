import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <header className="main-navbar">
      <div className="container navbar-wrapper">
        {/* Logo */}
        <NavLink to="/" className="brand-logo">
         <img src='/logo1.png' alt='PaperKhojo' />
                 </NavLink>

        {/* Navigation Links */}
        <nav>
          <ul className="navbar-nav-custom">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/colleges">
                Colleges
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/courses">
                Courses
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/pyq">
                PYQ
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/updates">
                Updates
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutus">
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contactus">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;