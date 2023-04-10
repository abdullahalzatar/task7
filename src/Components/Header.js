import '../Style/Header.css';
import perosn from "../Assets/person.svg";
import cart from "../Assets/icons8-shopping-cart-24.png";

function Header() {
  return (
    <div className="header">
      <div className="main">
        <div className="logo">
        <a href="#logo">TASTY</a>
        </div>
        <div className="menu">
        <a href="#See&Do">Home</a>
        <a href="#PlanYourTrip">Recipe</a>
        <a href="#TravelEssentials">Menu</a>
        <a href="#SaudiCalendar">Diet Schedule
        </a>
        <a href="#SaudiCalendar">About Us</a>
        </div>
        <div className="auth">
        
        <a href="#search">Login</a>
        <a href="#SaudiCalendar"><hr></hr></a>
        <a href="#perosn">Register</a>
        <a href="#perosn"><img src={perosn}></img></a>
        <a href="#perosn"><img src={cart}></img></a>
        </div>
      </div>
      <div className="squ">
            <div className="box">
                <div>
                    <h1>TASTY</h1>
                </div>
                <div>
                    <p>For A Healthy & Lively Life, <br/>Tasty Is The Best Online WebSite For It</p>
                </div>
            </div>
        </div>
      
      </div>
  );
}

export default Header;
