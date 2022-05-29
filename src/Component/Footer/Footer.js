import "./Footer.css"

const Footer = () => {
    const year = new Date().getFullYear()
    console.log(year);
    return(
        <div className="footer-section">
            <div className=" container footer-area">
                <p>Coppyright  ©  {year} Sampel Services CO.,Ltd. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer