import React from 'react';
import { Link } from 'react-router-dom';
import { CartTable } from '../../../features/cart/CartTable';
import styles from './styles.module.css';

export const CartPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Link to={'/'}>Go to products</Link>
                <h1>Your Cart</h1>
                <div>
                    <CartTable />
                    {/* <OrderSummary /> */}
                </div>
            </div>
        </div>
    )
} 