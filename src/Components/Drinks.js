import '../CSS/Drinks.css';
import { Component, React } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Link } from 'react-router-dom';


class Drinks extends Component {
    constructor(props) {
        super(props);
        this.bgColorActive = "green",
            this.bgColorDeActive = "",
            this.state = {
                menuObj: [],
                cost: "0 zł"
            }
        window.scrollTo(0, 0);
    }

    calculateCost() {
        return this.state.menuObj.map((v, index) => this.state.menuObj[index].active ? (v.numberOf * v.price) : 0).reduce((a, b) => a + b, 0)
    }

    toggleClickedMenuItem(index, price) {
        let isState = (this.state.menuObj[index] === undefined);
        price = +price.match(/[0-9]+[.][0-9]+/g)[0];

        if (isState) {
            this.state.menuObj[index] = {
                active: true,
                bgColor: this.bgColorActive,
                price: price,
                numberOf: 1
            }
        }

        if (!isState) {
            this.state.menuObj[index]["active"] = !this.state.menuObj[index].active
            this.state.menuObj[index]["price"] = price
            this.state.menuObj[index]["numberOf"] = !this.state.menuObj[index].active ? 1 : this.state.menuObj[index].numberOf
            this.state.menuObj[index]["bgColor"] = !this.state.menuObj[index].active ? this.bgColorDeActive : this.bgColorActive
        }

        this.state.cost = this.calculateCost()
        this.setState({
            menuObj: this.state.menuObj,
            cost: this.state.cost.toFixed(2) + " zł"
        });
    }

    addItem(index) {
        let isState = (this.state.menuObj[index] === undefined);

        if (isState) {
            this.state.menuObj[index] = {
                numberOf: 1,
            }
        }
        if (!isState) {
            this.state.menuObj[index]["numberOf"] = this.state.menuObj[index].numberOf + 1;
        }

        this.state.cost = this.calculateCost()

        this.setState({
            menuObj: this.state.menuObj,
            cost: this.state.cost.toFixed(2) + " zł"
        });
    }

    minusItem(index) {
        let isState = (this.state.menuObj[index] === undefined);

        if (isState) {
            this.state.menuObj[index] = {
                numberOf: 1,
            }
        }
        if (!isState) {
            this.state.menuObj[index]["numberOf"] = this.state.menuObj[index].numberOf > 1 ? this.state.menuObj[index].numberOf - 1 : 1;
        }

        this.state.cost = this.calculateCost()

        this.setState({
            menuObj: this.state.menuObj,
            cost: this.state.cost.toFixed(2) + " zł"
        });
    }

    render() {

        let arrDefCoffee = [
            { id: 0, name: "Espresso", price: "12.20 zł", desc: "Espresso is made with an espresso machine where hot water is pressurized through tightly packed coffee grounds to create a concentrated coffee. One espresso shot is one ounce and is enjoyed in a small cup called a demitasse cup." },
            { id: 1, name: "Dopio", price: "9.80 zł", desc: "Doppio is two shots of espresso. It’s Italian for double. " },
            { id: 2, name: "Lungo", price: "15.78 zł", desc: "Lungo means long in Italian. It is espresso that’s made with a longer pull time and is less concentrated than an espresso. " },
            { id: 3, name: "Ristretto", price: "6.78 zł", desc: "The opposite of lungo, ristretto is an espresso with a shorter pull time, has less water and is more concentrated than espresso and the most concentrated coffee drink on this list. " },
            { id: 4, name: "Espresso con Panna", price: "15.78 zł", desc: "Espresso con panna is espresso with cream in Italian. The drink is just what its name suggests, a shot of espresso topped with whipped cream. " },
            { id: 5, name: "Americano", price: "7.78 zł", desc: "An Americano is hot water added to one shot of espresso. Apparently during World War II, American GIs in Italy preferred their espresso diluted so they added hot water, which is why it’s called an Americano (American in Italian.)" },
            { id: 6, name: "Espresso Macchiato", price: "5.78 zł", desc: "An espresso macchiato is a shot of espresso with a splash of milk. Macchiato means stained in Italian so it’s like adding a bit of milk to stain the espresso." },
            { id: 7, name: "Flat White", price: "7.78 zł", desc: "Flat white is an espresso with steamed milk. It’s a much debated drink from Australia. Was it actually invented in New Zealand and not Australia? One thing that’s for sure is that the drink has gained popularity worldwide due to cafes like Bluestone Lane." },
            { id: 8, name: "Latte", price: "12.78 zł", desc: "A latte consists of one shot of espresso, steamed milk and a layer of foam milk on top." },
            { id: 9, name: "Cappuccino", price: "15.99 zł", desc: "A cappuccino is one shot of espresso with steamed milk and milk foam. It’s similar to a latte, but has less steamed milk and more milk foam. Cappuccinos are sometimes served with a sprinkle of cinnamon on top." },
            { id: 10, name: "Mocha", price: "5.78 zł", desc: "What makes a mocha different from all of these other drinks is chocolate. Chocolate syrup is added to a shot of espresso, steamed milk and oftentimes topped with whipped cream." },
            { id: 11, name: "Affogato", price: "11.70 zł", desc: "Affogato means drowned in Italian. This is a scoop of vanilla ice cream drowned in a shot of espresso." },
            { id: 12, name: "Breve", price: "6.78 zł", desc: "Breve is a shot of espresso with steamed half and half. The difference between a latte and breve is the half and half in a breve instead of milk found in a latte." },
            { id: 13, name: "Cortado", price: "8.78 zł", desc: "From Spain, a cortado is equal parts espresso and milk (not steamed.)" },
            { id: 14, name: "Redeye", price: "3.78 zł", desc: "When you can’t decide between brewed coffee and espresso, the redeye is the solution. It’s a cup of coffee with a shot of espresso. And when you need extra shots of caffeine, two shots of espresso is a blackeye and three shots is a green eye coffee." },
            { id: 15, name: "Café au Lait", price: "6.78 zł", desc: "Cafe au lait is French for coffee with milk. It’s like a latte – except with brewed coffee instead of espresso. (Starbucks calls this a Caffe Misto.)" },
            { id: 16, name: "Instant Coffee", price: "5.78 zł", desc: "You don’t need any special equipment to make instant coffee. Just dissolve the instant coffee granules into water and you have a cup of coffee." },
            { id: 17, name: "Frappuccino", price: "1.78 zł", desc: "A Frappuccino is Starbucks’ line of blended coffee, milk and ice beverages. There are various flavors and a ‘secret menu’ where customers can order flavors not on the menu and customize it into variations like different candy flavors and even a tie dye Frappuccino." },
            { id: 18, name: "Cold Brew", price: "5.78 zł", desc: "Cold brew coffee requires steeping freshly ground coffee in room temperature water for at least 12 hours. The coffee is never heated. Instead, time is required to brew the coffee." },
            { id: 19, name: "Nitro Cold Brew Coffee", price: "2.69 zł", desc: "Nitro coffee is cold brew coffee infused with nitrogen to create a drink similar to a stout beer with its layer of crema." },
            { id: 20, name: "Iced Coffee", price: "5.80 zł", desc: "Iced coffee is just coffee served with added ice. Add ice to hot coffee or already chilled coffee and you have iced coffee." },
        ]
        return (
            <article>
                <section className="ss">
                    <div className="ss2">
                        <h2 style={{ textAlign: "center" }}>~ MENU ~</h2>
                        <p style={{ textAlign: "center" }}>Select drinks!</p>
                        <h3 className="menuOrder"> <span>Price:</span> <span style={{ fontSize: "30px" }}>{this.state.cost}</span></h3>
                        <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1 }}>
                            <Masonry columnsCount={1}>
                                {arrDefCoffee.map(v => (
                                    <section  data-aos="fade-up" key={v.id}>
                                        <div className="m-i"
                                            style={{ backgroundColor: (this.state.menuObj[v.id]) == undefined ? "" : this.state.menuObj[v.id].bgColor }}
                                            onClick={(e) => this.toggleClickedMenuItem(v.id, v.price)}
                                        >
                                            <div>{v.name}</div>
                                            <div style={{ fontSize: "14px" }}>{v.price}</div>
                                        </div>

                                        <div  className="descCoffe"
                                            style={{ display: this.state.menuObj[v.id] == undefined ? "none" : this.state.menuObj[v.id].active ? "flex" : "none" }}
                                            data-aos="fade-up"
                                       >
                                            {v.desc}
                                        </div>

                                        <div className="menuBtn"
                                            style={{ display: this.state.menuObj[v.id] == undefined ? "none" : this.state.menuObj[v.id].active ? "flex" : "none" }}
                                        >

                                            <div className="nr">
                                                {this.state.menuObj[v.id] == undefined ? 1 : this.state.menuObj[v.id].numberOf}
                                            </div>

                                            <div
                                                style={{ cursor: "pointer" }}
                                                onClick={(e) => this.minusItem(v.id)}
                                            >
                                                <FontAwesomeIcon style={{ color: "orange" }} icon={faMinusCircle} size="2x" />
                                            </div>

                                            <div
                                                style={{ cursor: "pointer" }}
                                                onClick={(e) => this.addItem(v.id)}
                                            >
                                                <FontAwesomeIcon style={{ color: "orange" }} icon={faPlusCircle} size="2x" />
                                            </div>
                                        </div>
                                    </section>

                                ))}

                            </Masonry>
                        </ResponsiveMasonry>

                        <div style={{ marginTop: "50px" }}>
                            {this.state.menuObj.map((v, index) => (
                                <div class="menuOrder">
                                    <div>
                                        {v.active ? arrDefCoffee[index].name : ""}
                                    </div>
                                    <div>
                                        {v.active ? (this.state.menuObj[index].numberOf + " x " + arrDefCoffee[index].price) : ""}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h3 className="menuOrder"> <span>Price:</span> <span style={{ fontSize: "30px" }}>{this.state.cost}</span></h3>

                    </div>
                </section>

                <section className="ss">
                    <div className="ss2">
                        <h2>Visit Us!</h2>
                        <Link to={"/contact"} ><div className='btn wave'>Find where!</div></Link>
                    </div>
                </section>
            </article>
        )
    }
}

export default Drinks;

