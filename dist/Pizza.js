"use strict";
let pizzaId = 1;
let cashInRegister = 100;
const orderQueue = [];
const menu = [
    { id: 1, name: 'Margherita', price: 8 },
    { id: 2, name: 'Pepperoni', price: 10 },
    { id: 3, name: 'Hawaiian', price: 10 },
    { id: 4, name: 'Veggies', price: 9 },
];
function addNewPizza(pizza) {
    const newPizza = Object.assign({ id: menu.length === 0 ? 0 : menu[menu.length - 1].id + 1 }, pizza);
    menu.push(newPizza);
    return newPizza;
}
function placeOrder(pizza) {
    const nextOrderId = orderQueue.length === 0 ? 0 : orderQueue[orderQueue.length - 1].id + 1;
    // Find the ordered Pizza
    const selectedPizza = menu.find((pizzaObject) => pizzaObject.name === pizza);
    if (!selectedPizza) {
        console.error(`${pizza} does not exist in the menu`);
        return;
    }
    // Add income to Register Cash
    cashInRegister += selectedPizza.price;
    //Add the order details to orderQueue
    const newOrder = {
        id: nextOrderId,
        pizza: selectedPizza,
        status: 'ordered',
    };
    orderQueue.push(newOrder);
    // Return the Order Queue data
    return newOrder;
}
function completeOrder(id) {
    const order = orderQueue.find((item) => item.id === id);
    if (!order) {
        console.error(`${id} was not found in the orderQueuue`);
        return;
    }
    order.status = 'completed';
    return order;
}
function getPizzaDetail(identifier) {
    const pizzaDetail = menu.find((pizza) => typeof identifier === 'string'
        ? pizza.name === identifier
        : pizza.id == identifier);
    return pizzaDetail;
}
addNewPizza({ name: 'Meatballs', price: 11 });
addNewPizza({ name: 'Tuna Garlic Ranch', price: 15 });
addNewPizza({ name: 'Triple Cheese', price: 12 });
placeOrder('Meatballs');
completeOrder(0);
console.log(menu);
console.log('Cash in Register:', cashInRegister);
console.log('Pizza Ordered:', orderQueue);
console.log('Debug done!');
//# sourceMappingURL=Pizza.js.map