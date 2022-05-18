(()=>{
  let dynamicValues: any;
   dynamicValues = 100;
   dynamicValues = "hola";
   dynamicValues = null;
   dynamicValues = {};

   // Forzando el cambio de tipo de dato de una variable (cast)

   dynamicValues = "Hola";
   const response = (dynamicValues as string).toLowerCase();
   console.log(response);

   dynamicValues = 123;
   const response2 = (<number>dynamicValues).toFixed()
   console.log(response2);

})()
