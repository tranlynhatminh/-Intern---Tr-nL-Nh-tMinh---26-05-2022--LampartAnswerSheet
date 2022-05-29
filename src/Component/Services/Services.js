import "./Services.css"
import icon1 from "../../images/icon1.png"
import icon2 from "../../images/icon2.png"
import icon3 from "../../images/icon3.png"
import icon4 from "../../images/icon4.png"

const Services = () => {
    const serviceitems = [,{
        icon: "../../images/icon2.png",
        text:""
    },{
        icon: "../../images/icon3.png",
        serviceName: "",
        text:""
    },{
        icon: "../../images/icon4.png",
        serviceName: "HABITASSE",
        text:""
    },]
    return (
        <div className="general">
            <ul className="container service-area">
                <li className="service-section">
                    <div className="service-box">
                        <div className="service-content">
                            <img src={icon1} alt="icon"/>
                            <h2>SUSPENDISSE</h2>
                            <p>Quisque id tells quis risus vehicula vehicula ut turpis. In eros nulla, placerat vitar at, vehicula ut nunc</p>
                        </div>
                    </div>
                    <div className="service-button">
                        <button className="btn btn-primary">read more</button>
                    </div>
                </li>
                <li className="service-section">
                    <div className="service-box">
                        <div className="service-content">
                            <img src={icon2} alt="icon"/>
                            <h2>MAECENAS</h2>
                            <p>Ut eleidend sed neque rhoncus consequat. Maecenas tincidunt, augua et rutrum condimenrum, libero lectus mathtis orci, ut commondo.</p>
                        </div>
                    </div>
                    <div className="service-button">
                        <button className="btn">read more</button>
                    </div>
                </li>
                <li className="service-section">
                    <div className="service-box">
                        <div className="service-content">
                            <img src={icon3} alt="icon"/>
                            <h2>ALIQUAM</h2>
                            <p>Ut eleidend sed neque rhoncus consequat. Maecenas tincidunt, augua et rutrum condimenrum, libero lectus mathtis orci, ut commondo.</p>
                        </div>
                    </div>
                    <div className="service-button">
                        <button className="btn">read more</button>
                    </div>
                </li>
                <li className="service-section">
                    <div className="service-box">
                        <div className="service-content">
                            <img src={icon4} alt="icon"/>
                            <h2>HABITASSE</h2>
                            <p>Astehocula ultricies. Integer venenatis mattis nisl, vitae pulvinar dui tempor non.</p>
                        </div>
                    </div>
                    <div className="service-button">
                        <button className="btn">read more</button>
                    </div>
                </li>
                </ul>
        </div>
    )
}

export default Services