import React, {useCallback,useContext} from 'react';
import { FiArrowRight } from "react-icons/fi";
import styles from './style.module.css';
import {ImagesArrContext} from "../Slider";
const SlidPrev = () => {
    const ImagesListPrev = useContext(ImagesArrContext);
    const imagesLength = ImagesListPrev.imagesListContext.images;
    const prevIndex = useCallback(()=>{
        if(ImagesListPrev.imgList !== imagesLength.length){
            ImagesListPrev.setImgList(ImagesListPrev.imgList + 1)
        }else if(ImagesListPrev.imgList === imagesLength.length){
            ImagesListPrev.setImgList(1)
        }
    },[ImagesListPrev.imgList])
    return (
        <div className={styles.Prev} onClick={prevIndex}>
           <FiArrowRight/>
        </div>
    );
};

export default SlidPrev;