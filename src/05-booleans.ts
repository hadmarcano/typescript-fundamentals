(()=>{
  let isEnable: boolean = true;
  // isEnable = "hahshas" => X
  // isEnable = 1234 => X
  isEnable= false;

  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log(isNew);


  const random = Math.random();
  isNew = random >= 0.5 ? true : false;
  console.log('isNew',isNew);


})()
