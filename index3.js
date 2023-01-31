
  //const response= await fetch('https://dummyjson.com/products')
  async function fetchText() {
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.text();
    console.log(data);
  }