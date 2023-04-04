import { useAppSelector } from '../../app/hooks';
import { ProductItem } from '../../features/ProductItem';
import styles from './styles.module.css';

export const Products = () => {
    const count = useAppSelector((state) => state.products.allProducts)

    return (
        <section className={styles.products}>
            <ProductItem 
                title='Test'
                price={6}
                description='This is a first product - amazing!'
           />
           <ProductItem 
                title='Test'
                price={6}
                description='This is a first product - amazing!'
           />
           <ProductItem 
                title='Test'
                price={6}
                description='This is a first product - amazing!'
           />
           <ProductItem 
                title='Test'
                price={6}
                description='This is a first product - amazing!'
           />
        </section>
    )
} 