const productList = [
    { id: "p1", name: "Apples", category: "Fruits", price: 2.5, inStock: true },
    { id: "p2", name: "Oranges", category: "Fruits", price: 1.99, inStock: false },
    { id: "p3", name: "Blueberries", category: "Fruits", price: 4.99, inStock: true },
    { id: "p4", name: "Carrots", category: "Vegetables", price: 1.0, inStock: true },
    { id: "p5", name: "Tomatoes", category: "Vegetables", price: 1.5, inStock: true }
  ];
  
  const searchProductName = "carrots";
  
  function searchAndBuyProduct(productList, searchProductName) {
    // Implement your function here.
    const searchProduct = productList.find(product => product.name.toLowerCase() === searchProductName.toLowerCase());
  
    if (searchProduct !== undefined) {
      if (searchProduct.inStock) {
        searchProduct.inStock = false;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  
  let result = searchAndBuyProduct(productList, searchProductName);
  console.log(result);
  