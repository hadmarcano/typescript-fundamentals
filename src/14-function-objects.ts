(()=>{
  type Sizes =  'S' | 'M' | 'L' | 'XL';

  let products : (number | string | boolean | object | undefined | null )[] = [];


const login = (data: {email: string, password: number})=>{
  console.log(data.email, data.password);
}

login({email:'hadmarcano@gmail.com', password:12345});

const addProduct = (data:{
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
})  => {
  products.push(data);

  console.log(products);
}

addProduct({
  title:'Pro1',
  createdAt: new Date(1993,1,1),
  stock:12
})



})()
