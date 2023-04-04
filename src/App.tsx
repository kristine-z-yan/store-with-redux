import { Card } from './components/Card';
import { ProductItem } from './features/ProductItem';
import { Products } from './pages/Products/Products';
import styles from './styles.module.css';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button>
          My Cart
        </button>
      </div>
      <div className={styles.content}>
          <h1>Shop your favorite items</h1>
          <Products />
      </div>
    </div>
  );
}

export default App;
