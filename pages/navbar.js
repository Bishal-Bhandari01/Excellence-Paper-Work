import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-dark">
      <div className="container-lg container-sm-fluid">
        <Link href={"/"}>
          <a className="navbar-brand text-light">
            <strong>EPW</strong>
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 d-flex justify-content-end">
            <li className="nav-item">
              <Link href={"/"}>
                <a className="nav-link text-light active" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/#aboutus"}>
                <a className="nav-link text-light">About us</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/#contactus"}>
                <a className="nav-link text-light">Contact us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
