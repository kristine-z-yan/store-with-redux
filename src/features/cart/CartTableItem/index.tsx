import React from "react";
import { Card } from "../../../shared/components/Card";
import { CartProduct } from "../CartSlice";
import styles from './styles.module.css';

export const CartTableItem:React.FC<{product: CartProduct}> = ({product}) => {
    const incrementCount= () => {
        //increment qty
    }

    const decrementCount = () => {
        // decriment qty
    }
    return (
        <tr className={styles.tableRow}>
            <td>{product.title}</td>
            <td>${product.price}</td>
            <td>
                <button onClick={incrementCount}>+</button>
                <span>{product.qty}</span>
                <button onClick={decrementCount}>-</button>
            </td>
            <td>{product.qty * product.price}</td>
            <td>X</td>
        </tr>
    )
}
