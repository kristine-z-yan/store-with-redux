import React from 'react';
import { Link } from 'react-router-dom';
import { CartTable } from '../../../features/cart/CartTable';
import { useAppSelector } from '../../../hooks';
import styles from './styles.module.css';

export const CartPage = () => {
    const cart = useAppSelector(state => state.cart)

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Link to={'/'}>Go to products</Link>
                <h1>Your Cart</h1>
                <div className={styles.cartSection}>
                    <CartTable products={cart.products}/>
                    <div className={styles.summary}>
                        <h2>Order Summary</h2>
                        <div>
                            <p>Subtotal <span>$500</span></p>
                            <p>Shipping <span>Free</span></p>
                        </div>
                        <p>Total $500</p>
                        <div>
                            <button>Checkout</button>
                        </div>
                    </div>
                    {/* <OrderSummary /> */}
                </div>
            </div>
        </div>
    )
} 