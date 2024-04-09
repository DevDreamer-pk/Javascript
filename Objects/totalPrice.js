//complete the calculatePrice function
//Do not alter the starter code
const goods = {
    apple: { price: 150, quantity: 2 },
    banana: { price: 75, quantity: 3 },
    orange: { price: 125, quantity: 1 }
    }; 

    function calculatePrice(goods){
        //Implement your function here
        
        if(Object.keys(goods).length === 0){
            console.log("Goods object is empty. Total price: 0");
            return 0;
        }
        
        let applePrice = goods.apple.price * goods.apple.quantity;
        let bananaPrice = goods.banana.price * goods.banana.quantity;
        let orangePrice = goods.orange.price * goods.orange.quantity;
        
        let totalPrice = applePrice + bananaPrice + orangePrice ;
        return totalPrice;
    }
    console.log(calculatePrice(goods));
    //output : 650
