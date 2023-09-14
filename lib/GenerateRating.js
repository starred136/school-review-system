import React, { useEffect, useState } from "react";

const GenerateRating =( rating )=> {
  
    switch (rating) {
        case 1:
            return (
                <span className="rating">
                    <i className="icon_star" />
                    <i className="icon_star empty" />
                    <i className="icon_star empty" />
                    <i className="icon_star empty" />
                    <i className="icon_star empty" />
                    <em>1.00/5.00</em>
                </span>
            );
        case 2:
            return (
                <span className="rating">
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star empty" />
                    <i className="icon_star empty" />
                    <i className="icon_star empty" />
                    <em>2.00/5.00</em>
                </span>
            );
        case 3:
            return (
                <span className="rating">
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star empty" />
                    <i className="icon_star empty" />
                    <em>3.00/5.00</em>
                </span>
            );
        case 4:
            return (
                <span className="rating">
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star empty" />
                    <em>4.00/5.00</em>
                </span>
            );
        case 5:
            return (
                <span className="rating">
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <em>5.00/5.00</em>
                </span>
            );
        default:
            return null;
    }
    // return (
    //     <div>
    //         {GenerateRating(rating)}
    //     </div>
    // )
                     
    };
export default GenerateRating;