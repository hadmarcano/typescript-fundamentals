(()=>{

  // Alias Type
  type UserId = string | number | boolean;
  let userId: UserId;
  userId = 'Hector Díaz';

  // Literal Types
  type Sizes =  'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize='M';
  shirtSize='L';
  shirtSize='XL';
  // shirtSize= 'adadawdaw';

  function greeting(user: UserId , sizes: Sizes){

    if(typeof user === 'string'){
      console.log(`User: ${user.toLowerCase()}`);
    }

    if(typeof sizes === 'string'){
      console.log(`Size ${sizes.toLowerCase()}`);
    }
  }

  greeting(userId, shirtSize);


})()
