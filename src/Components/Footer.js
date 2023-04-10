
import '../Style/Footer.css';
import Android from "../Assets/Store-Android-Badges.png";
import Apple from "../Assets/Store-Apple-Badges.png";
import Twitter from "../Assets/Twitter.png";
import Youtube from "../Assets/Youtube.png";
import Menu from "../Assets/Menu-Button.png";
import Money from "../Assets/Money-Icon.png";
import Instagram from "../Assets/Instagram.png";
import Facebook from "../Assets/Facebook.png";
import Button from "../Assets/Go-To-Top-Button.png";
import Language from "../Assets/Earth-Language.png";



function Footer() {
  return (
    <footer class="footer">

    <div class="footer-main">
        <div class="footer-main__icons">
            <div class="footer-main__icons--top">
                <div class="footer-main__icons--top--firstitem">
                   <h2>TASTY</h2>
                </div>
                <hr class="footer-main__icons-hr">
                </hr>
                <div class="footer-main__icons--top--item">
                    <p>Preferences</p>
                    <div class="footer-main__icons--top--contact">
                        <img src={Language} width="20px"></img>
                        <select class="header-main__top__select">
                            <option value="1" class="header-main__top__select--first">English</option>
                            <option value="2" class="header-main__top__select--sec">Arabic</option>
                        </select>

                        <img src={Money}></img>
                        <select>
                            <option value="1">USD</option>
                            <option value="2">JOD</option>

                        </select>
                    </div>

                </div>
                <hr class="footer-main__icons-hr">
                </hr>
                <div class="footer-main__icons--top--item">
                    <p>Call Center</p>
                    Local Call Center: Click here<br></br>
                    International Call Center: Click here

                </div>
                <hr class="footer-main__icons-hr">
                </hr>
                <div class="footer-main__icons--top--item">
                    <p>Download our mobile app</p>
                    <div className="footer-main__icons--top--item--Badges">
                        <img src={Android}></img>
                        <img src={Apple}></img>
                    </div>


                </div>
            </div>
            <div class="footer-main__icons--bot">
                <nav class="footer-main__icons--bot--navbar">
                    <div class="footer-main__icons--bot--navbar__firstdiv">
                        <a href="#Contactus">Contact us</a>
                        <a href="#StartChat">Privacy Policy</a>
                        <a href="#Cookies">Cookies</a>
                        <a href="#TermsandConditions">Terms & Conditions</a>
                    </div>
                    <a href="#Lang">
                        <div class="footer-main__icons--bot--navbar__secdiv">
                            <div class="footer-main__icons--bot--navbar__secdiv--main">
                                <div>Connect with us</div>
                                <div class="footer-main__socialmedia">
                                    <div><img src={Instagram}></img></div>
                                    <div><img src={Facebook}></img></div>
                                    <div><img src={Youtube}></img></div>
                                    <div><img src={Twitter}></img></div>
                                </div>
                                <div>
                                    <hr class="footer-main__icons--bot--hr">
                                    </hr>
                                </div>
                            </div>
                            <div class="footer-main__socialmedia">
                                <p class="footer-main__backbox">Back to Top</p>
                                <p class="footer-main__mobbackbox">&copy;Copy rights</p><img
                                    src={Button}></img>
                            </div>
                        </div>
                    </a>

                </nav>
            </div>

        </div>
    </div>
</footer>
  );
}

export default Footer;
