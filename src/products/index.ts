import { products, addProduct, calcStock } from "./product.services";



addProduct({
  title:'Pro1',
  createdAt: new Date(1993,1,1),
  stock:12
})

console.log(products);

const total = calcStock();

console.log(total);

