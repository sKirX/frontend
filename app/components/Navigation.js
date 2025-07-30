'use client';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">Navbar</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" href="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/service">Service</Link>
            </li>
          </ul>

          {/* ปุ่ม Login อยู่ด้านขวาของ navbar */}
          <div className="d-flex">
            <Link href="/Login" className="btn btn-outline-primary">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
