import styles from "../../styles/Product.module.scss";
import Image from "next/image";
import { useState } from "react";

const Product = () => {
    const [size, setSize] = useState(0);
    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: "CAMPAGNOLA",
        price: [19.9, 23.9, 27.9],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} alt={pizza.name} layout="fill" objectFit="contain" />   
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.name}</h1>
                <span className={styles.price}>${pizza.price[size]}</span>
                <p className={styles.desc}>{pizza.desc}</p>

                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={()=>setSize(0)}>
                        <Image src="/img/size.png" layout="fill" alt="size of pizza" />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={()=>setSize(1)}>
                        <Image src="/img/size.png" layout="fill" alt="size of pizza" />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={()=>setSize(2)}>
                        <Image src="/img/size.png" layout="fill" alt="size of pizza" />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                
                <h3 className={styles.choose}>Choose additional ingredients</h3>
                <div className={styles.ingredients}>
                    <div className={styles.option}>
                        <input type="checkbox" id="double" name="double" className={styles.checkbox} />
                        <label htmlFor="double" aria-label="choose double ingredient">Double Ingredients</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" id="chesse" name="chesse" className={styles.checkbox} />
                        <label htmlFor="chesse" aria-label="choose chesse ingredient">Extra Cheese</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" id="spicy" name="spicy" className={styles.checkbox} />
                        <label htmlFor="spicy" aria-label="choose spicy ingredient">Spicy Sauce</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" id="garlic" name="garlic" className={styles.checkbox} />
                        <label htmlFor="garlic" aria-label="choose garlic ingredient">Garlic Sauce</label>
                    </div>
                </div>

                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity} />
                    <button className={styles.button}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product