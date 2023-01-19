import React from 'react';
import './style.css'
const SlidImgItem = ({elem,sliderIndex,index}) => {
    return (
        <figure className={sliderIndex === index + 1 ? 'slider active-anim': 'slider'}>
            <img src={process.env.PUBLIC_URL + `Imgs/img${index + 1}.jpg`} alt="logo"/>
        </figure>
    );
};

export default SlidImgItem;