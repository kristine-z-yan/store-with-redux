import { Card } from "../../components/Card";
import styles from './styles.module.css';

export type Product = {
    title: string,
    price: number,
    description: string,
    id: number
}

export const ProductItem = (props: Product) => {
    const { title, price, description } = props;
    return (
        <Card>
            <div className={styles.header}>
                <h3>{title}</h3>
                <div className={styles.price}>${price.toFixed(2)}</div>
            </div>
            <p>{description}</p>
            <div className={styles.actions}>
                <button>Add to Cart</button>
            </div>
        </Card>
    )
}
