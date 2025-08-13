/**
 *
 * @param {string} url
 * @return {Promise<Array>} of products
 */
async function getProducts(url, minPrice, maxPrice) {
  try {
    // problem: we are not sured if for each request the response will be different, or the same, since the API doesn't support any other parameters than minPrice, maxPrice
    // let's just say that everytime we run the request it always return the different results, and it doesn't show the products, which were already shown before

    // if the minPrice or maxPrice has any unvalid characters (forexample like a space -> "100 000"), encodeURLComponent will make unvalid characters valid
    const correctURL = `${url}?minPrice=${encodeURIComponent(
      minPrice
    )}&maxPrice=${encodeURIComponent(maxPrice)}`;
    const response = await fetch(correctURL);
    const data = await response.json();
    const totalProducts = data.total;
    const requestCount = data.count;

    const productCheck = {};
    const productsResultArr = [];

    // because the maximum numbers of products of each request is 1000, so if there are more products then the maximum number we need more requests
    if (requestCount === 0) return [];
    const totalRequests = Math.ceil(totalProducts / requestCount); // cannot devide a number by zero
    let attempts = 1;
    while (attempts <= totalRequests) {
      const response = await fetch(correctURL);
      const data = await response.json();
      for (const product of data.products) {
        // we've mentioned about every time the request gives a different result, but to make sure, we do the checking to prevent duplicated in the result array.
        // checking if the product is already added to the result array- checking with object is more optimal (O(1)) thn checking with array
        if (productCheck[product.id] === undefined) {
          productCheck[product.id] = true;
          productsResultArr.push(product);
        }
      }
      attempts++;
    }

    return productsResultArr;
  } catch (e) {
    console.log(e);
  }
}

// example
const url = "https://api.ecommerce.com/products";
const minPrice = 1000;
const maxPrice = 2000;
// the fuction is asynchronous
const products = getProducts(url, minPrice, maxPrice)
  .then((products) => console.log(products))
  .catch((err) => console.log(err));
