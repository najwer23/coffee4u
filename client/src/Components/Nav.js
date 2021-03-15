import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMugHot } from '@fortawesome/free-solid-svg-icons'
import '../CSS/Nav.css';

const objMenuLinks = {
    '/': 'Home',
    '/menu': 'Drinks',
    '/contact': 'Contact',
    '/gallery': 'Gallery'
}
  
window.onload = function () {
    const hamburgerBtn = document.querySelector('.hamburger-button');
    const menuMobile = document.querySelector('.menu-mobile');

    function menuMobileClick() {
        hamburgerBtn.classList.toggle('hamburger-active');
        hamburgerBtn.setAttribute('aria-expanded', hamburgerBtn.classList.contains('hamburger-active'));
        menuMobile.classList.toggle('menu-mobile-active');
        document.body.classList.toggle('scroll');
        
        // TODO later
        // all links on website should has class link
        let arrayLinks = document.getElementsByClassName('link');
        for (let i = 0; i < arrayLinks.length; i++) {
            arrayLinks[i].classList.toggle('hideLink');
        }     
    }

    function menuMobileHide() {
        if (window.innerWidth > 1000) {
            document.body.classList.remove("scroll");
            hamburgerBtn.classList.remove("hamburger-active");
            menuMobile.classList.remove('menu-mobile-active');
            hamburgerBtn.setAttribute('aria-expanded', hamburgerBtn.classList.contains('hamburger-active'));
        }
    }

    window.addEventListener("resize", menuMobileHide);
    hamburgerBtn.addEventListener('click', menuMobileClick);
}

function MobileMenu() {
    return (
        <div class="menu-mobile">
            <ul class="menuLinks">
                {Object.keys(objMenuLinks).map((v,i)=>(
                    <li key={i}><a href={v}>{objMenuLinks[v]}</a></li>
                ))}  
            </ul>
        </div>
    )
}

function Hamburger() {
    return (
        <div class="hamburger">
            <button class="hamburger-button" aria-expanded="false">
                <span class="screen-read-only">Otwórz / Zamknij Menu</span>
                <span class="hamburger-box">
                    <span class="hamburger-box-line"></span>
                </span>
            </button>
        </div>
    )
}

function Nav() {
    return (
        <section>           
            <MobileMenu />
            <div className="menu">
                <div className="menu-box">
                    <Hamburger />
                    <div className="menu-title"> <FontAwesomeIcon icon={faMugHot} size="lg"/> Coffee2U </div>
                    <ul className="menu-list">
                        {Object.keys(objMenuLinks).map((v,i)=>(
                            <li key={i}><a href={v}>{objMenuLinks[v]}</a></li>
                        ))}  
                    </ul>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#6F4E37" fillOpacity="1" d="M0,32L80,32C160,32,320,32,480,48C640,64,800,96,960,106.7C1120,117,1280,107,1360,101.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        </section>
    )
}

export default Nav;


