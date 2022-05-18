(()=>{
  let prices = [1,2,3,4,5,6,323];

  // prices.push('asda');
  // prices.push(true);
  // prices.push({});

  let products = ["hola",true];
  products.push(false);

  let mixed : (number | string | boolean | object )[] = ["hola", true];

  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1,2,3,4,5,6];
  // let numbers = ["adasd","dawdaw"]; // X
  numbers.map(item => item * 2);

})()
