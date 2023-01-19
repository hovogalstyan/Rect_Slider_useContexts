import React, {useCallback, useContext} from 'react';
import styles from './style.module.css'
import { FiArrowLeft } from "react-icons/fi";
import {ImagesArrContext} from "../Slider";
const SlidNext = () =>{
    const ImagesListNext = useContext(ImagesArrContext);
    const imagesLength = ImagesListNext.imagesListContext.images;
    const nextIndex = useCallback(()=>{
        if(ImagesListNext.imgList !== 1){
            ImagesListNext.setImgList(ImagesListNext.imgList - 1)
        }else if(ImagesListNext.imgList === imagesLength.length){
            ImagesListNext.setImgList(1)
        }
    },[ImagesListNext.imgList])
    return (
        <div className={styles.Next} onClick={nextIndex}>
            <FiArrowLeft/>
        </div>
    );
};

export default SlidNext;