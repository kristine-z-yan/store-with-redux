import React from 'react';
import { productsApi } from '../../../services/ProductService';
import { ProductItem } from '../../../features/products/ProductItem';
import styles from './styles.module.css';

export const Products = () => {
     const {data: products, error, isLoading} = productsApi.useFetchAllProductsQuery(5)

     return (
        <section className={styles.products}>
          {isLoading && <h1>Loading...</h1>}
          {error && <h1>Something went wrong :/</h1>}
          {products && products.map( product => <ProductItem
               title={product.title}
               price={product.price}
               description={product.description}
               id={product.id}     
               key={product.id}
                />)}
        </section>
    )
} 