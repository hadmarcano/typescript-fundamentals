(()=>{
    let productTitle: string  = 'My amazing product';

    // productTitle = 123;
    // productTitle = null;
    // productTitle = ()=>{}

    productTitle = 'My amazing product changed';
    console.log('productTitle: ',productTitle);

    const productDescription = "bla bla bla bla";
    console.log('productDescription: ', productDescription);

    const summary = `
    productTitle: ${productTitle}
    productDescription: ${productDescription}
    `;

    console.log(summary);

})()
