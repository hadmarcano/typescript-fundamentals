import {Product} from "./product.model";

export let products : Product[] = [];

export const addProduct = (data:Product)  => {
  products.push(data);

  console.log(products);
}

export const calcStock = (): number => {
  let total = 0;

  products.forEach((item)=>{
    total += item.stock;

  });

  return total;

}
