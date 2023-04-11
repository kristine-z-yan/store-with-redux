import React from "react";
import { Card } from "../../../shared/components/Card";
import styles from './styles.module.css';

export const CartItem = () => {
    return (
        <Card>
            <div className={styles.header}>
                <h3></h3>
                <div className={styles.price}></div>
            </div>
            <div className={styles.actions}>
                
            </div>
        </Card>
    )
}
