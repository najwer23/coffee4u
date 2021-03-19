import '../CSS/Home.css';
import { Component, React } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let arrCoffee = [
            "Caffeine blocks an inhibitory neurotransmitter in your brain, which causes a stimulant effect. This improves energy levels, mood and various aspects of brain function."
            ,"Several studies show that caffeine can increase fat burning and boost your metabolic rate."
            ,"Caffeine can increase adrenaline levels and release fatty acids from your fat tissues. It also leads to significant improvements in physical performance."
            ,"Coffee contains several important nutrients, including riboflavin, pantothenic acid, manganese, potassium, magnesium and niacin."
            ,"Several observational studies show that coffee drinkers have a much lower risk of type 2 diabetes, a serious condition that affects millions of people worldwide."
            ,"Coffee drinkers have a much lower risk of getting Alzheimer’s disease, which is a leading cause of dementia worldwide."
            ,"Coffee drinkers have up to a 60% lower risk of getting Parkinson’s disease, the second most common neurodegenerative disorder."
            ,"Coffee drinkers have a much lower risk of cirrhosis, which can be caused by several diseases that affect the liver."
            ,"Coffee appears to lower your risk of developing depression and may dramatically reduce suicide risk."
            ,"Liver and colorectal cancer are the third and fourth leading causes of cancer death worldwide. Coffee drinkers have a lower risk of both.",
            ,"Coffee may cause mild increases in blood pressure, which usually diminish over time. Coffee drinkers do not have an increased risk of heart disease and have a slightly lower risk of stroke."
            ,"Several studies show that coffee drinkers live longer and have a lower risk of premature death."
            ,"Coffee is rich in powerful antioxidants, and many people get more antioxidants from coffee than from fruits and veggies combined."
        ];
        return (
            <article>
                <section className="ss">
                    <h1>Life is too short for bad coffee...</h1>
                    <h2>...but even a bad cup of coffee is better than no coffee at all.</h2>
                </section>

                <section className="ss">
                    <img className="ss-img" src={`${process.env.PUBLIC_URL}/assets/images/h1.jpg`} alt="img about" />
                    <div className="ss2">
                        <h2>What is coffee?!</h2>
                        <ol>
                            <li>Coffee [noun] - a magic potion that allows human muscles to move, especially on Monday mornings.</li>
                            <li>Coffee [noun] - a dark, magical substance that turns "leave me alone" into "good morning, honey".</li>
                            <li>Coffee [noun] - nectar of the Gods.</li>
                            <li>Coffee - Community of Faith for Economic Empowerment</li>
                        </ol>
                        <p>We have also boring, formal definition of Coffee <br /><br /> <i><b style={{ color: "orange" }} >A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub.</b></i></p>
                    </div>
                </section>

                <section className="ss">
                    <div className="ss2">
                        <h2>Advantages of Coffee</h2>
                        <Masonry columnsCount={2}>
                            {arrCoffee.map((v,i)=> ( 
                                <div className="adv-m-c" key={i.toString()}>
                                    <FontAwesomeIcon style={{color: "orange"}} icon={faCheck} size="2x" /> <br /><br />
                                    {v}
                                </div>
                            ))} 
                        </Masonry>                
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

