import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import '../CSS/Footer.css';

function Footer() {  
    return (
        <div className='foot'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#24272b" fillOpacity="1" d="M0,256L80,245.3C160,235,320,213,480,213.3C640,213,800,235,960,218.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <div className='foot-contact'>
                <div className='foot-name'> 
                    <FontAwesomeIcon icon={faCopyright}  size="1x" /> Mariusz Najwer <br /> 2021
                 </div>
            </div>
        </div>
    )
}

export default Footer;


