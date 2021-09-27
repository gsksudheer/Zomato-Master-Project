import React from "react";
import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";

export const NextArrows = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="PrevArrow" {...props} style={{}} />
    );
export const PrevArrows = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} alt="PrevArrow" {...props} />
    );
/* 
export const NextArrows = (props) => {
    return (
        <div className={props.className}
        style={{...props.style, backgroundColor: "gray", boxShadow: "0 2px 2px 2px black"}}
        onClick={props.onClick}
        />
    );
};

export const PrevArrows = (props) => {
    return (
        <div className={props.className}
        style={{...props.style, backgroundColor: "gray",}}
        onClick={props.onClick}
        />
    );
}; */