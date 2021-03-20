import '../CSS/Home.css';
import { Component, React } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


class Home extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
    }

    render() {

        let arrCoffee = [
            "Caffeine blocks an inhibitory neurotransmitter in your brain, which causes a stimulant effect. This improves energy levels, mood and various aspects of brain function."
            ,"Several studies show that caffeine can increase fat burning and boost your metabolic rate."
            ,"Caffeine can increase adrenaline levels and release fatty acids from your fat tissues. It also leads to significant improvements in physical performance."
            ,"Several observational studies show that coffee drinkers have a much lower risk of type 2 diabetes, a serious condition that affects millions of people worldwide."
            ,"Coffee drinkers have a much lower risk of getting Alzheimer’s disease, which is a leading cause of dementia worldwide."
            ,"Coffee drinkers have up to a 60% lower risk of getting Parkinson’s disease, the second most common neurodegenerative disorder."
            ,"Coffee appears to lower your risk of developing depression and may dramatically reduce suicide risk."
            ,"Coffee may cause mild increases in blood pressure, which usually diminish over time. Coffee drinkers do not have an increased risk of heart disease and have a slightly lower risk of stroke."
            ,"Several studies show that coffee drinkers live longer and have a lower risk of premature death."
            ,"Coffee is rich in powerful antioxidants, and many people get more antioxidants from coffee than from fruits and veggies combined."
        ];

        let arrDefCoffee = [
            "A magic potion that allows human muscles to move, especially on Monday mornings."
            ,"A dark, magical substance that turns \"leave me alone\" into \"good morning, honey\"."
            ,"Nectar of the Gods."
            ,"COFFEE - Community of Faith for Economic Empowerment"
        ]
        return (
            <article>
                <section className="ss">
                    <h1 data-aos="fade-up">Life is too short for bad coffee...</h1>
                    <h2 data-aos="fade-up">...but even a bad cup of coffee is better than no coffee at all.</h2>
                </section>

                <section className="ss">
                    <img className="ss-img" src={`${process.env.PUBLIC_URL}/assets/images/h1.jpg`} alt="img about" />
                    <div className="ss2">
                        <h2>What is coffee?!</h2>
                        <ResponsiveMasonry columnsCountBreakPoints={{300: 1, 500: 2}}>
                            <Masonry columnsCount={2}>
                                {arrDefCoffee.map((v,i)=> (<div data-aos="fade-up" className="adv-m-c" key={i.toString()}>{v} </div>))} 
                            </Masonry>  
                        </ResponsiveMasonry>                         
                        <p>We have also boring, formal definition of Coffee <br /><br /> <i><b style={{ color: "orange" }} >A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub.</b></i></p>
                    </div>
                </section>

                <section className="ss">
                    <div className="ss2">
                        <h2>Advantages of Coffee</h2>
                        <ResponsiveMasonry columnsCountBreakPoints={{300: 1, 500: 2}}>
                            <Masonry columnsCount={1}>
                                {arrCoffee.map((v,i)=> ( 
                                    <div data-aos="fade-up" className="adv-m-c" key={i.toString()}>
                                        <FontAwesomeIcon style={{color: "orange"}} icon={faCheck} size="2x" /> <br /><br />
                                        {v}
                                    </div>
                                ))} 
                            </Masonry>   
                        </ResponsiveMasonry> 
                        <a href="https://www.healthline.com/nutrition/top-13-evidence-based-health-benefits-of-coffee#TOC_TITLE_HDR_14" target="_blank" style={{color: "white"}}>www.healthline.com</a>
            
                    </div>
                </section>

                <section className="ss">
                    <div className="ss2">
                        <h2>Do you know what coffee smells like?</h2>
                        <a href="https://youtu.be/5R3WdBE1-JM" target="_blank" style={{color: "white"}}>The smell of coffee - 6 Minute English (BBC Learning English) </a>
                        <audio controls>
                            <source src={`${process.env.PUBLIC_URL}/assets/audio/bbc.mp3`} type="audio/mp3" />
                        </audio>
                    </div>
                </section>

                <section className="ss">
                    <div className="ss2">
                        <h2>What Coffee we offer?</h2>
                        <Link to={"/drinks"} ><div className='btn wave'>Check out for yourself!</div></Link>
                    </div>
                </section>


            </article>
        )
    }
}

export default Home;

