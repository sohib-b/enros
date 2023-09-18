import React from "react";
import Logo from "./logo.png";

function MyNavbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={Logo} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                PIZZA
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                      


                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                HAMBUREGO
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">FASTER</a>
                        </li>


                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACT</a>
                        </li>
 
                       
                      
                    </ul>
                    <form  className="d-flex">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <i class="fa-solid fa-bars"></i>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </form>
                </div>
            </div>
        </nav>



    )
}

export default MyNavbar;