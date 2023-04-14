export interface ICart {
  id: number;
  userId: number;
  date: string;
  products: Product[];
}

type Product = {
  productId: number;
  quantity: number;
};
