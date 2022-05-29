import logo from "../../images/logo.png"
import "./Header.css"

const Header = () => {
    const listItem =[
        {text:"HOME",
         link: "/#"
        },{text:"ABOUT",
         link:"/#"
        },{text:"SERVICES",
         link:"/#"
        },{text:"PORTFOLIO",
         link:"/#"   
        },{text:"CONTACTS",
         link:"/#"
        }]
    let items=listItem.map((item,i) => 
        <li className="menu-item" key={i}><a href={item.link}>{item.text}</a></li>
    )
    return(
        <div className=" header-area">
            <div className=" container header-section">
                <img className="header-logo" src={logo} alt="logo"/>
                <ul className="global-menu">
                    {items}
                </ul>
            </div>
        </div>
    )
}
export default Header