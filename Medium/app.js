var sharePizza = cutPizzaSlices(8);
function cutPizzaSlices(y) {
    return function sharePizza(x) {
         return `Each person gets ${y / x} slices of pizza.`;
     }
};
console.log(sharePizza(3));
console.log(sharePizza(2));

//tried using the toFixed(2) method but it did not work on both lines 2 & 3



