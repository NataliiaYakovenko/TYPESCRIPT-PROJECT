const products = [
    { title: "Product 1", price: 10 },
    { title: "Product 2", price: 20 },
    { title: "Product 3", price: 30 },
];
function calculateTotalPrice(...products) {
    if (products.length === 0) {
        console.log("List products is empty");
        return 0;
    }
    for (let product of products) {
        if (product.price < 0) {
            console.log("Proce has not be 0");
            return 0;
        }
    }
    const totalPrice = products.reduce((accum, currentValue) => {
        return accum + currentValue.price;
    }, 0);
    return totalPrice;
}
const total = calculateTotalPrice(...products);
console.log("Total price:", total);
