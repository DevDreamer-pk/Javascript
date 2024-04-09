// Create your curried function here with the name pizzaPricing.
function pizzaPricing(size) {
    return function (toppings) {
        return function (quantity) {
            let toppingCost = 0;
            if(quantity==0 ){
              quantity = 0;
              toppingCost = 0;
            } else {
                toppingCost = toppings.length * 1.50;
            }
            let price;

            if (size === "Small") {
                price = quantity * 8.00 + toppingCost;
            } else if (size === "Medium") {
                price = quantity * 10.00 + toppingCost;
            } else if (size === "Large") {
                price = quantity * 12.00 + toppingCost;
            }

            return price.toFixed(2);
        };
    };
}

const pricing = pizzaPricing("Large");
const array = pricing(["bacon", "cheese"]);
const final = array(1);
console.log(final);
