import styles from "../styles/Featured.module.scss";
import Image from "next/image";

const Featured = () => {
    const images = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png",
    ];
    return (
        <div className={styles.container}>
            <Image src="/img/arrowl.png" alt="left arrow" layout="fill" />
            <div className={styles.wrapper}>
                <div className={styles.imgContainer}>
                    {images.map((img, idx) => (
                        <Image src="/img/featured.png" key={idx} alt="featured" layout="fill" />
                    ))}
                </div>

            </div>

            <Image src="/img/arrowr.png" alt="left arrow" layout="fill" />
        </div>
    )
}

export default Featured