import React from 'react';
import { Link } from 'react-router-dom';
import { Products } from './routes/pages/ProductsPage';
import styles from './styles.module.css';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/my-cart`}>
                  My Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.content}>
          <h1>Shop your favorite items</h1>
          <Products />
      </div>
    </div>
  );
}

export default App;
