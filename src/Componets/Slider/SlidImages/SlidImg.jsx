import React, {useContext} from 'react';
import styles from './style.module.css';
import {ImagesArrContext} from "../Slider";
import SlidImgItem from "../SlidImgItem/SlidImgItem";
import Icon from "../../Icon/Icon";
const SlidImg = () => {
    const SliderListContextAll = useContext(ImagesArrContext)
    const sliderIndex = SliderListContextAll.imgList
    const listImg =SliderListContextAll.imagesListContext.images
    return (
        <div className={styles.SlidImg}>
            <Icon/>
            {
                listImg.map((item,i)=>{
                    return <SlidImgItem key={i}  elem={item} sliderIndex={sliderIndex} index={i}/>
                })
            }
        </div>
    );
};

export default SlidImg;