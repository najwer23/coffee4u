import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faRegistered} from '@fortawesome/free-solid-svg-icons'
import '../CSS/Footer.css';

function Footer() { 
    
    const objSocialLinks = {
        'https://github.com/najwer23': <FontAwesomeIcon icon={faGithub}  size="2x" />,
        'https://twitter.com/najwer23': <FontAwesomeIcon icon={faTwitter}  size="2x" />,
        'mailto:najwer23@live.com': <FontAwesomeIcon icon={faAt} size="2x" />,
        'https://www.linkedin.com/in/najwer23/': <FontAwesomeIcon icon={faLinkedinIn} size="2x" />,
    }

    return (
        <footer className='foot'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#24272b" fillOpacity="1" d="M0,256L80,245.3C160,235,320,213,480,213.3C640,213,800,235,960,218.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <div className='foot-box'>
                <div className='foot-item flex-columns'>
                    <div className='flex-columns-item'>How do You feel when there is no coffee?! <br /> <i>Despresso</i></div>
                    <div className='flex-columns-item foot-social'>
                        {Object.keys(objSocialLinks).map((v,i)=>(
                            <a key={i} href={v} rel="noreferrer" target="_blank">
                                <div className='foot-social-item'>
                                    {objSocialLinks[v]}
                                </div>
                            </a>
                        ))}                    
                    </div>
                </div>
                <div className='foot-item'>
                    <FontAwesomeIcon icon={faCopyright}  size="1x" /> Mariusz Najwer 2021
                </div>
                <div className='foot-item'>
                    <FontAwesomeIcon icon={faRegistered}  size="1x" /> coffee4u
                </div>
            </div>
        </footer>
    )
}

export default Footer;


