import React from "react"
import { CartProduct } from "../CartSlice";
import { CartTableItem } from "../CartTableItem";
import styles from './styles.module.css';


export const CartTable:React.FC<{products: CartProduct[]}> = ({products}) => {
    const productList = products.length && products.map( product => {
        return <CartTableItem product={product} />
    })
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
               {productList || <td>
                Your cart is empty
                </td>}
            </tbody>
        </table>
    )
}