import { BiSolidLogInCircle } from 'react-icons/bi';
import './Navbar.css';
import { FaHome } from "react-icons/fa";
import { FcAbout } from 'react-icons/fc';
import { TiSocialFacebookCircular } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  const Prime = () =>{
    // alert ("Hello Chris");
    navigate ("/Service");
  };
  
  return (
    <div>
      <nav className="navbar-section-div">
      <div>
        <img src="./images/logo-white.png" alt="logo image"/>
      </div>
      <div>
        <ul className="navlinks-div">
          <li> <a href=""> <FaHome className="home-icon"/> Home</a></li>
          <li> <a href=""> <FcAbout/> About</a></li>
          <li> <a href="">Services</a></li>
          <li> <a href="">Contact <TiSocialFacebookCircular style={{color:"yellow", fontSize:"2rem"}} /> </a> </li>
          <li> <button>202-555-0188</button> </li>
          <p> <a href="/login"> <BiSolidLogInCircle /> </a></p>
        </ul>
        <p className="PrimeServ" onClick={Prime}>Service</p>
        <div className="scroll-bar-icon">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
