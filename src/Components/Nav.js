import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import '../CSS/Nav.css';

function Nav() {
    const objHashLinks = {
        '/': <FontAwesomeIcon icon={faHome} size="lg"/>,
        '#about': "Hello!",
        '#education': 'Education',
        '#skills': 'Skills',
        '#projects': 'Projects'
    }
    return (
        <div>
            <nav>
                <ul>
                    {Object.keys(objHashLinks).map((v,i)=>(
                        <li key={i}><a href={v}>{objHashLinks[v]}</a></li>
                    ))}
                    <li>najwer23@live.com</li>
                </ul>
            </nav>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6F4E37" fill-opacity="1" d="M0,32L80,32C160,32,320,32,480,48C640,64,800,96,960,106.7C1120,117,1280,107,1360,101.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        </div>
    )
}

export default Nav;


