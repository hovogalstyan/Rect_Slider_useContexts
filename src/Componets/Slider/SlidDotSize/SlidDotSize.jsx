import React, {useCallback, useContext} from 'react';
import {ImagesArrContext} from "../Slider";
import './style.css'
const SlidDotSize = () => {
    const imgSizeLengthContext = useContext(ImagesArrContext);
     const sizeSldClick = useCallback((index)=>{
         imgSizeLengthContext.setImgList(index + 1)
         console.log(imgSizeLengthContext.imgList)
     },[])
    return (
        <div className={'Dot'}>
            {
             imgSizeLengthContext.imagesListContext.images.map((item,i)=>{
                  return <div key={i}
                               onClick={()=> sizeSldClick(i)}
                               className={imgSizeLengthContext.imgList === i + 1 ? 'dot active': 'dot'}
                  >

                  </div>
             })
            }
        </div>
    );
};

export default SlidDotSize;