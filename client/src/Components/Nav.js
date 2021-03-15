import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMugHot } from '@fortawesome/free-solid-svg-icons'
import '../CSS/Nav.css';

function Nav() {
    const objHashLinks = {
        '/': <FontAwesomeIcon icon={faHome} size="lg"/>,
        '/menu': 'Menu',
        '/contact': 'Contact',
        '/gallery': 'Gallery'
    }
    return (
        <section>
            <div className="menu">
                <div className="menu-box">
                    <div className="menu-title"> <FontAwesomeIcon icon={faMugHot} size="lg"/> Coffee2U </div>
                    <ul className="menu-list">
                        {Object.keys(objHashLinks).map((v,i)=>(
                            <li key={i}><a href={v}>{objHashLinks[v]}</a></li>
                        ))}  
                    </ul>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#6F4E37" fillOpacity="1" d="M0,32L80,32C160,32,320,32,480,48C640,64,800,96,960,106.7C1120,117,1280,107,1360,101.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        </section>
    )
}

export default Nav;


