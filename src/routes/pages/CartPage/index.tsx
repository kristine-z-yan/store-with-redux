import React from "react";
import { Link } from "react-router-dom";
import { CartTable } from "../../../features/cart/CartTable";
import { useAppSelector } from "../../../hooks";
import styles from "./styles.module.css";

export const CartPage = () => {
  const cart = useAppSelector((state) => state.cart);

  const subtotal = cart.products
    .reduce((accumulator, item) => accumulator + item.qty * item.price, 0)
    .toFixed(2);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link to={"/"}>Go to products</Link>
        <h1>Your Cart</h1>
        <div className={styles.cartSection}>
          <CartTable products={cart.products} />
          <div className={styles.summary}>
            <h2>Order Summary</h2>
            <ul className={styles.summaryDetails}>
              <li>
                <span>Subtotal</span>
                <span>$ {subtotal}</span>
              </li>
              <li>
                <span>Shipping</span>
                <span>Free</span>
              </li>
            </ul>
            <div className={styles.total}>
              <p>Total</p>
              <p>$ {subtotal}</p>
            </div>
            <div>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
