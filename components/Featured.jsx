import { useState } from "react";
import styles from "../styles/Featured.module.scss";
import Image from "next/image";

const Featured = () => {
    const [index, setIndex] = useState(0)
    const images = [
        "/img/featured1.jpg",
        "/img/featured2.jpg",
        "/img/featured3.jpg",
    ];

    const handleArrow = (direction) => {
        if (direction === 'left') setIndex(index !== 0 ? index-1 : images.length - 1)
        
        if (direction === 'right') setIndex(index !== images.length - 1 ? index+1 : 0)
        
    }    
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("left")}>
                <Image src="/img/arrowl.png" alt="left arrow" layout="fill" objectFit="contain" />
            </div>            
            
            <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>                
                {images.map((img, idx) => (                    
                    <div className={styles.imgContainer}>
                        <Image src={img} key={idx} alt="featured" layout="fill" objectFit="cover" />
                    </div>
                ))}
            </div>
            <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("right")}>
                <Image src="/img/arrowr.png" alt="left arrow" layout="fill" objectFit="contain" />
            </div>
        </div>
    )
}

export default Featured