(()=>{
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice',productPrice);

  let customerAge: number = 28;
  // customerAge = customerAge + '1'; // 281
  customerAge = customerAge + 1; // 29
  console.log('customerAge',customerAge);

  let productInStock: number;
  productInStock = 18;
  console.log('productInStock',productInStock);

  if(productInStock > 10){
    console.log('my stock is OK');
  }

  let discount = parseInt('125');

  console.log(discount);

  if(discount <= 200){
    console.log("apply");
  }else{
    console.log("not apply");
  }

  // Numero Hexadecimal
  let hex = 0xfff;
  console.log('hex', hex);

  // Numero Binario
  let bin = 0b010110;
  console.log('bin',bin);

})()
