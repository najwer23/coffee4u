import '../CSS/Drinks.css';
import { Component, React } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle,faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


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
        return this.state.menuObj.map((v,index) => this.state.menuObj[index].active ? (v.numberOf * v.price) : 0).reduce((a,b)=>a+b,0)
    }

    toggleClickedMenuItem(index,price) {
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

        console.log(this.state)
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
        
        console.log("add")
        console.log(index)
        console.log(this.state)
    }

    render() {

        let arrDefCoffee = [
            { id:0, name: "Espresso", price: "25.20 zł" },
            { id:1, name: "Dopio", price: "35.80 zł" },
            { id:2, name: "Lungo", price: "15.78 zł" },
            { id:3, name: "Ristretto", price: "65.78 zł" },
            { id:4, name: "Espresso con Panna", price: "115.78 zł" },
            { id:5, name: "Americano", price: "7.78 zł" },
            { id:6, name: "Espresso Macchiato", price: "5.78 zł" },
            { id:7, name: "Flat White", price: "7.78 zł" },
            { id:8, name: "Latte", price: "12.78 zł" },
            { id:9, name: "Cappuccino", price: "15.99 zł" },
            { id:10, name: "Mocha", price: "5.78 zł" },
            { id:11, name: "Affogato", price: "11.70 zł" },
            { id:12, name: "Breve", price: "36.78 zł" },
            { id:13, name: "Cortado", price: "8.78 zł" },
            { id:14, name: "Redeye", price: "3.78 zł" },
            { id:15, name: "Café au Lait", price: "6.78 zł" },
            { id:16, name: "Instant Coffee", price: "75.78 zł" },
            { id:17, name: "Frappuccino", price: "11.78 zł" },
            { id:18, name: "Cold Brew", price: "25.78 zł" },
            { id:19, name: "Nitro Cold Brew Coffee", price: "42.69 zł" },
            { id:20, name: "Iced Coffee", price: "5.80 zł" },
        ]
        return (
            <article>
                <section className="ss">
                    <div className="ss2">
                        <h2>Menu</h2>
                        <p>(Check price by select drink!)</p>
                        <h3>Price: {this.state.cost}</h3>
                        <ResponsiveMasonry columnsCountBreakPoints={{300: 1}}>
                            <Masonry columnsCount={1}>
                                {arrDefCoffee.map((v,index)=> (
                                <section key={v.id}>
                                <div className="m-i" 
                                    style={{backgroundColor: (this.state.menuObj[v.id]) == undefined ? "" : this.state.menuObj[v.id].bgColor}} 
                                    onClick={(e) => this.toggleClickedMenuItem(v.id,v.price)}
                                >
                                <div>{v.name}</div>
                                <div>{v.price}</div>     
                                </div>
                                                                    
                                <div className="menuBtn"
                                    //  style={{display: "none"}}
                                    >
                                    <div className="nr">
                                        {this.state.menuObj[v.id] == undefined ? 0 : this.state.menuObj[v.id].numberOf}
                                    </div>
                                    
                                    <div
                                        style={{cursor: "pointer"}}
                                        onClick={(e) => this.addItem(v.id)}
                                    >
                                        <FontAwesomeIcon style={{color: "orange"}} icon={faPlusCircle} size="2x" />
                                    </div>
                                        
                                    <div
                                       style={{cursor: "pointer"}}
                                    >
                                        <FontAwesomeIcon style={{color: "orange"}} icon={faMinusCircle} size="2x" />
                                    </div>
                                </div>
                                </section>

                                ))} 
                                
                            </Masonry>  
                        </ResponsiveMasonry> 
                        <h3>Price: {this.state.cost}</h3>                        
                    </div>
                </section>
            </article>
        )
    }
}

export default Drinks;

