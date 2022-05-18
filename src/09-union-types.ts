(()=>{

  let userId: number | string;
  userId = 123.34;
  userId = "HOla";

  greeting(userId);

  function greeting (myText: number | string){
    if(typeof myText === 'string'){
      console.log(`String = ${myText.toLowerCase()}`);
    }else{
      console.log(`Number = ${myText.toFixed(1)}`);
    }
  }

  greeting('adasda');

  greeting(12.345);


})()
