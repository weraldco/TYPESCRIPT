type Pizza = {
	id: number;
	name: string;
	price: number;
};

type Order = {
	id: number;
	pizza: Pizza;
	status: 'ordered' | 'completed';
};

let pizzaId = 1;
let cashInRegister = 100;
const orderQueue: Order[] = [];

const menu: Pizza[] = [
	{ id: 1, name: 'Margherita', price: 8 },
	{ id: 2, name: 'Pepperoni', price: 10 },
	{ id: 3, name: 'Hawaiian', price: 10 },
	{ id: 4, name: 'Veggies', price: 9 },
];

function addToArray<Type>(array: Type[], item: Type): Type[] | undefined {
	array.push(item);
	return array;
}

addToArray(menu, {
	id: menu.length === 0 ? 0 : menu[menu.length - 1].id + 1,
	name: 'Chicken Bacon Ranch',
	price: 12,
});

addToArray<Order>(orderQueue, {
	id: orderQueue.length === 0 ? 0 : orderQueue[orderQueue.length - 1].id + 1,
	pizza: menu[2],
	status: 'completed',
});

function addNewPizza(pizza: Omit<Pizza, 'id'>): Pizza {
	const newPizza: Pizza = {
		id: menu.length === 0 ? 0 : menu[menu.length - 1].id + 1,
		...pizza,
	};
	menu.push(newPizza);
	return newPizza;
}

function placeOrder(pizza: string): Order | undefined {
	const nextOrderId =
		orderQueue.length === 0 ? 0 : orderQueue[orderQueue.length - 1].id + 1;
	// Find the ordered Pizza
	const selectedPizza = menu.find((pizzaObject) => pizzaObject.name === pizza);
	if (!selectedPizza) {
		console.error(`${pizza} does not exist in the menu`);
		return;
	}
	// Add income to Register Cash
	cashInRegister += selectedPizza.price;

	//Add the order details to orderQueue
	const newOrder: Order = {
		id: nextOrderId,
		pizza: selectedPizza,
		status: 'ordered',
	};
	orderQueue.push(newOrder);

	// Return the Order Queue data
	return newOrder;
}

function completeOrder(id: number): Order | undefined {
	const order = orderQueue.find((item) => item.id === id);
	if (!order) {
		console.error(`${id} was not found in the orderQueuue`);
		return;
	}
	order.status = 'completed';
	return order;
}

function getPizzaDetail(identifier: string | number): Pizza | undefined {
	const pizzaDetail = menu.find((pizza) =>
		typeof identifier === 'string'
			? pizza.name === identifier
			: pizza.id == identifier
	);
	return pizzaDetail;
}

// addNewPizza({ name: 'Meatballs', price: 11 });
// addNewPizza({ name: 'Tuna Garlic Ranch', price: 15 });
// addNewPizza({ name: 'Triple Cheese', price: 12 });
// placeOrder('Meatballs');
// completeOrder(0);

console.log(menu);

console.log('Cash in Register:', cashInRegister);

console.log('Pizza Ordered:', orderQueue);

console.log('Debug done!');
