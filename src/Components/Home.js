import '../CSS/Home.css';
import { Component, useEffect, React } from "react"
import Masonry from './Masonry';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    makeMasonryGridArr() {
        let masonryGrid;
        let masonryGridArr = new Array();
        const masonryGridParams = [
            {
                grid: "#m-ad-p",
                items: ".ad-c",
                content: ".ad-cc"
            }
        ];

        for (let i = 0; i < masonryGridParams.length; i++) {
            masonryGrid = new Masonry(masonryGridParams[i])
            masonryGrid.resizeAllGridItems();
            masonryGridArr.push(masonryGrid);
        }

        return masonryGridArr
    }

    componentDidMount() {
        let masonryGridArr=this.makeMasonryGridArr()
        window.addEventListener("resize", function () {
            masonryGridArr.forEach(function (elem) {
                elem.resizeAllGridItems();
            });
        });
    }

    render() {
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
                        <h2>Advantages of coffee</h2>
                        <div id="m-ad-p" className="ad-p">
                            <div className="ad-c">
                                <div className="ad-cc">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                </div>
                            </div>
                            <div className="ad-c">
                                <div className="ad-cc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 

                                </div>
                            </div>
                            <div className="ad-c">
                                <div className="ad-cc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 

                                </div>
                            </div>
                            <div className="ad-c">
                                <div className="ad-cc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 

                                </div>
                            </div>
                        </div>
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

