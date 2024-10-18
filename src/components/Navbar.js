import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={styles.navbar}>
      <div className="container-fluid" style={styles.container}>
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
              <Link className="nav-link" to="/" style={styles.link}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/datatypes" style={styles.link}>
                Data Types
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" style={styles.link}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup" style={styles.link}>
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/usersdatatable"
                style={styles.link}
              >
                Users Data
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/posts" style={styles.link}>
                Posts Data
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    padding: "15px 0", // Adds top and bottom padding
    fontFamily: '"Arial", sans-serif', // Applies Arial font
    background: "linear-gradient(90deg, #ffc107, #000)", // Gradient from warning yellow to black
  },
  container: {
    padding: "0 20px", // Adds horizontal padding to the container
  },
  link: {
    fontSize: "18px", // Custom font size
    color: "#fff", // White color for the text
    padding: "8px 15px", // Padding around the link
    textDecoration: "none", // Removes underline
  },
};
