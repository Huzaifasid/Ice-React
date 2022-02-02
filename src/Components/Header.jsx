
import React from "react";
import "../Components/header.css"
import Logo from "../images/logo.png"

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg myNav navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="javascript:void(0)"> <img src={Logo} width={100}/> </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav myNavs  mx-auto col-8 justify-content-around  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="javascript:void(0)">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">Contact</a>
              </li>

          
            </ul>
           
          </div>
        </div>
      </nav>
    </>
  )

}
export default Header