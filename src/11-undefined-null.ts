(

  // null and undefined

  ()=>{

    // let myNumber: number = undefined;
    // let mystring: string = null;

    let myNull: null  = null;
    let myUndefined : undefined = undefined;

    let myNumber: number | null = null;
    myNumber = 12;

    let myString: string | undefined = undefined;
    myString = 'asas';

    // function hi(name: string | null){
    //   let hello = 'hola ';
    //   if(name){
    //     hello += name;
    //   } else {
    //     hello += 'nobody';
    //   }

    //   console.log(hello);
    // }

    function hi(name: string | null){
      let hello = 'hola ';
      hello += name?.toLowerCase() || 'nobody';

      console.log(hello);
    }


    hi(null);

;  }
)()
