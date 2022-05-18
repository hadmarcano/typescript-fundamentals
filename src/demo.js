//@ts-check

(()=>{
  const myCart = [];
  const products = [];
  const limit = 2;

  async function getProducts(){
    const rta = await fetch('http://api.escuelajs.co/api/v1/products'{
      method:'GET'
    });

    const data = rta.json();
    products.concat(data);


  }
})()
