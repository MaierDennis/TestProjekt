
let meals = ['CheeseBurger', 'ChickenBurger', 'HamBurger', 'TofuBurger'];
let priceForMeal = ['5.90', '4.50', '3.90', '23.99'];
let amount = [1, 1, 1, 1];
let shoppingBasket = [];
let prices = [];
let newAmount = [];


function addMeal() {
    document.getElementById('meals').innerHTML = '';

    for (let i = 0; i < meals.length; i++) {
        const meal = meals[i];
        const priceMeal = priceForMeal[i];
        const amounts = amount[i];

        document.getElementById('meals').innerHTML += `
        <div  class="meals">
                    <div class="meal-container">

                        <div class="MealDiv">
                            <div class="FoodDish">${meal}</div>
                            <div class="FoodDescription">Beschreibung</div>
                            <br>
                            <div class="FoodAdds">Auswahlmöglichkeiten</div>
                            <br>
                            <div class="FoodPrice">${priceMeal}</div>
                        </div>
                        <div class="ButtonDiv">
                            <div class="AddButton" onclick="addToBasket('${meal}', ${priceMeal}, ${amounts})">+</div>
                        </div>
                    </div>
                </div>
                `;

    }

}

function addToBasket(food, price, amount) {

    let index = shoppingBasket.indexOf(food);
    if (index == -1) {
        shoppingBasket.push(food);
        prices.push(price);
        newAmount.push(amount);
    }
    else {
        newAmount[index]++;
    }

    render();
}


function render() {
    document.getElementById('basket').innerHTML = '';
    let basket = document.getElementById('basket');
    for (let i = 0; i < shoppingBasket.length; i++) {
        const food = shoppingBasket[i];
        const price = prices[i];
        const amount = newAmount[i];

        const firstPrice = price * amount;
        const endPrice = firstPrice.toFixed(2);

        basket.innerHTML += `
        
        <div class="test">
                <div>${amount} x</div>
                <div>${food}</div>
                <div class="test1">
                    <div class="littleBox" onclick="removeFromBasket(${i})">-</div>
                    <div class="littleBox" onclick="addToBasket('${food}', ${price}, ${amount})">+</div>
                    <div class="basketIconPencil"><img src="img/pencil.png"></div>
                </div>
                
                <div>${endPrice}€</div>
                <div class="basketIconBasket"><img src="img/delete.png"></div>
            </div>
        `

    }
    sum();
}

function removeFromBasket(i) {

    if (newAmount[i] < 2) {
        shoppingBasket.splice(i, 1);
        prices.splice(i, 1);
        newAmount.splice(i, 1);
    }
    else {
        newAmount[i]--;
    }
    render();
    

}

function sum() {
    let subtotal = 0;
    let newSubtotal = 0;
    let total = 0;
    for (i = 0; i < prices.length; i++) {
        subtotal += prices[i] * newAmount[i];
        newSubtotal = subtotal.toFixed(2);


        if (newSubtotal >= 50) {
            document.getElementById('delivery').innerHTML = `0,00€`;

            total = newSubtotal;
        }
        else {
            total = subtotal + 3;
            
        }
        newTotal = total.toFixed(2);

        document.getElementById('subtotal').innerHTML = `${newSubtotal} €`;
        document.getElementById('totalPrice').innerHTML = `${newTotal}€`;

    }

    




}

