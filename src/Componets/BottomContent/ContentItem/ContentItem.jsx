
import styles from './style.module.css';
const ContentItem = ({elem,index,SizeIndex}) => {
    return (
        <div className={SizeIndex === index + 1 ? `${styles.ContentItem} ${styles.active}` :styles.ContentItem}>
            <figure>
                <img src={process.env.PUBLIC_URL + `Imgs/img${index + 1}.jpg`} alt=""/>
                <figcaption>
                 <p>{elem.text}</p>
                    <button>Order</button>
                </figcaption>
            </figure>
        </div>
    );
};

export default ContentItem;