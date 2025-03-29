function orderSalesByTotal(sales) {
    // Create a new array with added total property
    return sales
        .map(sale => ({  // Create a new array to avoid modifying original input
            ...sale,
            Total: sale.amount * sale.quantity
        }))
        .sort((a, b) => b.Total - a.Total); // Sort by total in descending order
}


const salesData = [
    { amount: 10000, quantity: 10 },
    { amount: 5000, quantity: 25 },
    { amount: 15000, quantity: 5 }
];

const orderedSales = orderSalesByTotal(salesData);

console.log(orderedSales);
// Original array remains unchanged
console.log(salesData);

