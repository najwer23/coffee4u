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

    toggleClickedMenuItem(i,price) {
        let isState = (this.state.menuObj[i] === undefined); 

        this.state.menuObj[i] = {
            active: isState ? true : !this.state.menuObj[i].active, 
            bgColor: isState ? this.bgColorActive : this.state.menuObj[i].active ? this.bgColorDeActive : this.bgColorActive ,
            price: +price.match(/[0-9]+[.][0-9]+/g)[0]
        }

        this.state.cost = this.state.menuObj.map((v,i) => this.state.menuObj[i].active ? v.price : 0).reduce((a,b)=>a+b,0)

        this.setState({
            menuObj: this.state.menuObj,
            cost: this.state.cost.toFixed(2) + " zł"
        }); 
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
                                {arrDefCoffee.map((v,i)=> (
                                <>
                                <div className="m-i" 
                                    style={{backgroundColor: (this.state.menuObj[v.id]) == undefined ? "" : this.state.menuObj[v.id].bgColor}} 
                                    onClick={(e) => this.toggleClickedMenuItem(v.id,v.price)}
                                    key={v.id}
                                >
                                <div>{v.name}</div>
                                <div>{v.price}</div>
                                    
                                </div>
                                                                    
                                <div className="menuBtn">
                                    <div className="nr">
                                        1
                                    </div>
                                    <div>
                                        <FontAwesomeIcon style={{color: "orange"}} icon={faPlusCircle} size="2x" />
                                    </div>
                                    <div>
                                        <FontAwesomeIcon style={{color: "orange"}} icon={faMinusCircle} size="2x" />
                                    </div>
                                </div>
                                </>

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

