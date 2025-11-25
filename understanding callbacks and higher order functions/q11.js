function processProducts(products) {
  // Step 1: Use map() to extract product names
  const productNames = products.map(product => product.name);

  // Step 2: Use forEach() to log messages based on price
  products.forEach(product => {
    const message = product.price > 50 
      ? "is above $50" 
      : "is below $50";
    
    console.log(`${product.name} ${message}`);
  });

  return productNames;
}
