import '../CSS/Contact.css';
import { Component, React } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



class Contact extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
    }

    render() {

        let contactInfo = [
            { name: "Hours Available", desc: "9:00 a.m. - 3:00 p.m., Monday - Friday"},
            { name: "Address", desc: "Wrocław Sky Tower, Gwieździsta 205/234, 59-400"},
            { name: "Phone", desc: "+48 678 890 000"},
            { name: "Email", desc: "naj23@live.com"},
            { name: "Github", desc: "github.com/najwer23/coffee4u"},
            { name: "FAX", desc: "+44-208-1234567"},
        ]


        return (

            <article>
                <section className="ss">
                    <h1>You will find us here!</h1>
                </section>

                <section className="ss">
                    <div className="ss2">
                        <h2>Contact address</h2>
                        <ResponsiveMasonry columnsCountBreakPoints={{300: 1, 500: 2}}>
                            <Masonry columnsCount={2}>
                                {contactInfo.map(v=> (
                                    <div data-aos="fade-up" className="adv-m-c"> <span style={{color: "orange"}}>{v.name}</span> <br /><br /> {v.desc} </div>
                                ))}
                               
                            </Masonry>  
                        </ResponsiveMasonry>    
                    </div>
                </section>

                <section className="ss">
                    <div className="ss2">
                        <h2>On the Map</h2>

                        <MapContainer center={[51.093981, 17.019925]} zoom={16} maxZoom={18} minZoom={10} scrollWheelZoom={false}>
                            <TileLayer
                                attribution=''
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[51.093981, 17.019925]}>
                                <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>

                    </div>
                </section>

            </article>
        )
    }
}

export default Contact;

