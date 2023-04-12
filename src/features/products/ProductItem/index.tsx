import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { Card } from "../../../shared/components/Card";
import { cartActions, CartProduct } from "../../cart/CartSlice";
import styles from './styles.module.css';

export type Product = {
    title: string,
    price: number,
    description: string,
    id: number
}

export const ProductItem = (props: Product) => {
    const { title, price, description } = props;
    const dispatch = useAppDispatch();
    const cart = useAppSelector(state => state.cart)

    const handleAddToCart = () => {
        dispatch(cartActions.addToCart(props))
    }

    return (
        <Card>
            <div className={styles.header}>
                <h3>{title}</h3>
                <div className={styles.price}>${price.toFixed(2)}</div>
            </div>
            <p>{description}</p>
            <div className={styles.actions}>
                <button type="button" onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </Card>
    )
}
