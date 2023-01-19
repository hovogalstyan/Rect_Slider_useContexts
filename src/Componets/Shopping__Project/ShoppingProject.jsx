import React, {createContext, Provider, useCallback, useState} from 'react';
import styles from './style.module.css';
import Slider from "../Slider/Slider";
import images from  '../../SliderData'
import BottomContent from "../BottomContent/BottomContent";
export const ImagesListContext = createContext()
const ShoppingProject = () => {
    const [indexContent, setIndexImgContent] = useState()
    console.log(indexContent)
    return (
        <div className={styles.Slider__Project}>
        <ImagesListContext.Provider value={{
          images,
          setIndexImgContent,
          indexContent
        }}>
           <Slider/>
           <BottomContent/>
        </ImagesListContext.Provider>
        </div>
    );
};

export default ShoppingProject;