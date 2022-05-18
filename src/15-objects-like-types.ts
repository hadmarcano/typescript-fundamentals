(()=>{
  type Sizes =  'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  let products : Product[] = [];

  const addProduct = (data:Product)  => {
    products.push(data);

    console.log(products);
}

  addProduct({
    title:'Pro1',
    createdAt: new Date(1993,1,1),
    stock:12
  })



})()
