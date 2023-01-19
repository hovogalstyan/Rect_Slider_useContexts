import React, {createContext, useContext, useState, Provider, useEffect} from 'react';
import styles from './style.module.css';
import SlidNext from "./SlidNext/SlidNext";
import SlidPrev from "./SlidPrev/SlidPrev";
import {ImagesListContext} from "../Shopping__Project/ShoppingProject";
import SlidImg from "./SlidImages/SlidImg";
import SlidDotSize from "./SlidDotSize/SlidDotSize";

export const ImagesArrContext = createContext();
const Slider = () => {
    const imagesListContext  = useContext(ImagesListContext)
    const [imgList, setImgList] = useState(1)
    useEffect(()=>{
        imagesListContext.setIndexImgContent(imgList)
    },[imgList])
    return (
        <div className={styles.Slider}>
            <ImagesArrContext.Provider value={{
                imgList,
                setImgList,
                imagesListContext
            }}>
             <SlidNext/>
             <SlidImg/>
             <SlidDotSize/>
            <SlidPrev/>
            </ImagesArrContext.Provider>
        </div>
    );
};

export default Slider;