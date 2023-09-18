import React from 'react'
import logo from './imges/logo.png'


export default function Navbar() {
  return (
    <div>
    <nav  className="navbar navbar-expand-lg navbar-light bg-light">
    <div  className="container">
      <a  className="navbar-brand" href="#">
      <img src={logo}/></a>
      <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span  className="navbar-toggler-icon"></span>
      </button>
      <div  className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul  className="navbar-nav m-auto mb-2 mb-lg-0">
          <li  className="nav-item">
            <a  className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li  className="nav-item">
            <a  className="nav-link" href="#">Mega Mena</a>
          </li>
          <li  className="nav-item">
          <a  className="nav-link" href="#">Pages</a>
        </li>
        <li  className="nav-item">
        <a  className="nav-link" href="#">Shops</a>
      </li>
      <li  className="nav-item">
      <a  className="nav-link" href="#">News</a>
    </li>

         
        </ul>
        <form  className="d-flex">
        <i className="fa-solid fa-user"></i>
        <a className="login" >Login</a>
        <a className="get-started" >get started</a>


        </form>
      </div>
    </div>
  </nav>
    </div>
  )
}
