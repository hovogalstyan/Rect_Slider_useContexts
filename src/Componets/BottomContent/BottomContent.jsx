import React, {useContext} from 'react';
import styles from './style.module.css';
import {ImagesListContext} from "../Shopping__Project/ShoppingProject";
import ContentItem from "./ContentItem/ContentItem";
const BottomContent = () => {
    const ImagesContextList  = useContext(ImagesListContext)
    return (
        <div className={styles.BottomContent}>
            {
                ImagesContextList.images.map((item,index)=>{
                    return <ContentItem key={item.id} index={index} elem={item} SizeIndex={ImagesContextList.indexContent}/>
                })
            }
        </div>
    );
};

export default BottomContent;