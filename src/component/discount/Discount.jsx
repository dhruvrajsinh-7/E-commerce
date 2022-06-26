import React from "react";
import DCard from "./DCard";
const Discount = () => {
    return (
        <>
            <section className="Discount background newArrivals">
                <div className="container">
                    <div className="heading d_flex">
                        <div className="heading-left row  f_flex">
                        <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
                            <h2>Big Discount</h2>
                        </div>
                        <div className="heading-right row ">
                            <span>View all</span>
                            <i className="fa-solid fa-caret-right"></i>
                        </div>
                    </div>
                    <DCard/>
                </div>
            </section>
        </>
    );
};
export default Discount;
