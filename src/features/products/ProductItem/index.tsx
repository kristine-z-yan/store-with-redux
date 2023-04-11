import React from "react";
import { useAppDispatch } from "../../../hooks";
import { Card } from "../../../shared/components/Card";
import styles from './styles.module.css';

export type Product = {
    title: string,
    price: number,
    description: string,
    id: number
}

export const ProductItem = (props: Product) => {
    const { title, price, description, id } = props;
    const dispatch = useAppDispatch();

    const handleAddToCart = () => {
        // dispatch(addToCart({...props}))
    }

    return (
        <Card>
            <div className={styles.header}>
                <h3>{title}</h3>
                <div className={styles.price}>${price.toFixed(2)}</div>
            </div>
            <p>{description}</p>
            <div className={styles.actions}>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </Card>
    )
}
