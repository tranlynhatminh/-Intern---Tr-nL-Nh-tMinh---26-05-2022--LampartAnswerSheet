import Slider from "react-slick/lib/slider"
import slide1 from "../../images/slide1.png"
import slide2 from "../../images/slide2.png"
// import arrowNext from "../../images/arrowLeft.png"

import "./SliderBanner.css"

const SliderBanner =() => {

    const settings ={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div className="slider-area">
            <Slider {...settings}>                
                <div className="banner">
                    <img  src={slide1} />
                    <div className="discription-banner">
                        <h1>Sample Service</h1>
                        <p>maecenas tincidunt, augue et rutrum condimentum, libero lectus mattis orci, ut commodo</p>
                    </div>
                </div>
                <div className="banner">
                    <img src={slide2} />
                    <div className="discription-banner">
                        <h1>Sample Service</h1>
                        <p>maecenas tincidunt, augue et rutrum condimentum, libero lectus mattis orci, ut commodo</p>
                    </div>
                </div>
            </Slider>
        </div>
    )
}
export default SliderBanner