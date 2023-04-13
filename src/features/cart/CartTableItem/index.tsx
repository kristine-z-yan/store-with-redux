import React from "react";
import { useAppDispatch } from "../../../hooks";
import { cartActions, CartProduct } from "../CartSlice";
import styles from './styles.module.css';

export const CartTableItem:React.FC<{product: CartProduct}> = ({product}) => {
    const dispatch = useAppDispatch();

    return (
        <tr className={styles.tableRow}>
            <td>{product.title}</td>
            <td>$ {product.price}</td>
            <td>
                <button onClick={() => dispatch(cartActions.decrementQty(product.id))}>-</button>
                <span>{product.qty}</span>
                <button onClick={() => dispatch(cartActions.incrementQty(product.id))}>+</button>
            </td>
            <td>$ {product.qty * product.price}</td>
        </tr>
    )
}
