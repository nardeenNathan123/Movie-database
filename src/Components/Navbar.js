import { Link } from "react-router-dom";


function Navbar(){

    return(
        <> 
        <nav className="navbar navbar-expand-lg navbar-dark bg-black ">
        <div className="container-fluid">
          <div className="container">
        
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
            <ul className="navbar-nav mr-auto">
             
              <li className="nav-item">
                <Link className="nav-link " to="/movielist" style={{color:'white'}}>
                  Home movie
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mr-auto">
             
              <li className="nav-item">
                <Link className="nav-link " to="/Favorites" style={{color:'white'}}>
                  favorate
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item fa fa-sign-in me-1">
                <Link className="nav-link btn btn-outline-success" to="/SignUp" style={{color:'white'}}>
                  Registration
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-outline-success" to="/Login" style={{color:'white'}}>
                  Login
                </Link>
              </li>
              
            </ul>
          </div>

          </div>
        </div>
      </nav>
        
        </>
    )
}

export default Navbar;