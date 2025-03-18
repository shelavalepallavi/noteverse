import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  let location = useLocation();
  let navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')

  }

  useEffect(() => {
    
  }, [location]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-sm ">
        <div className="container-fluid">
          <Link className="navbar-brand fw-semibold fs-3" to="/" style={{ color: "#3D0182" }}>NoteVerse</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
              </li>
            </ul>
            {!localStorage.getItem('token') ? <form className="d-flex" role="search">
              <Link className="btn  mx-1 fw-bold" to="/login" role='button' style={{ backgroundColor: "#3D0182", color: "white", border: "none" }}>Log in</Link>
              <Link className="btn  mx-1 fw-bold" to="/signup" role='button' style={{ backgroundColor: "#3D0182", color: "white", border: "none" }}>Signup</Link>
            </form> : <button onClick={handleLogout} className='btn fw-bold' style={{ backgroundColor: "#3D0182", color: "white", border: "none" }}>Logout</button>}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
