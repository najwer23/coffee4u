import '../CSS/Home.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react"

function InitAOS () {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);    
}

function Home() {
    InitAOS()

    return (
        <article>
        <section className="ss">
            <h1 data-aos="fade-right">Life is too short for bad coffee...</h1>
            <h2 data-aos="fade-left">...but even a bad cup of coffee is better than no coffee at all.</h2>
        </section>

        <section className="ss">
            <img className="ss-img" src={`${process.env.PUBLIC_URL}/assets/images/h1.jpg`} alt="img about"/>
            <div className="ss2">
                <h2>What is coffee?!</h2>
                <p> 
                    <ol>
                        <li>Coffee [noun] - a magic potion that allows human muscles to move, especially on Monday mornings.</li>
                        <li>Coffee [noun] - a dark, magical substance that turns "leave me alone" into "good morning, honey".</li>
                        <li>Coffee [noun] - nectar of the Gods.</li>
                        <li>Coffee - Community of Faith for Economic Empowerment</li>
                    </ol>
                </p>
                <p>We have also boring, formal definition of Coffee <br /><br /> <i><b style={{color: "orange"}} >A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub.</b></i></p>
            </div>
        </section>
        </article>

    )
}

export default Home;

