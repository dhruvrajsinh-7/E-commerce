import React from "react";
import Ddata from "./Ddata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const DCard = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay:true,
        margin:200,
        // appendDots:(dots) =>
        // {
        //     return <ul style={{margin:"0px"}}>{dots}</ul>
        // },
      }
    return (
        <>
                  <Slider {...settings}>

                {Ddata.map((val, index) => {
                    return (
                        <>
                        <div className='product' key={index}>
                            <div className="box">
                            <div className='img'>
                                <img src={val.cover} alt='' width='100%'/>
                            </div>
                            <h4>{val.name}</h4>
                            <span>${val.price}</span>
                        </div>
                        </div>
                        </>
                    )
                })}
            </Slider>
        </>
    )
}
export default DCard