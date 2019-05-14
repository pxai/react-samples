function* invoice (items) {
	let total = 0;
	for (item of items) {
		let cost = yield item.id;
		console.log (cost, item);
		total = total + cost * item.qty;
	}
	yield total;
}

const prices = {1: 42.0, 5: 66.6}
const purchase = [{id: 1, qty: 3}, {id: 5, qty: 2}];
const invoiceIterator = invoice (purchase);

invoiceIterator.next (); // Starts running.
invoiceIterator.next (prices[1]); // { value: 1, done: false }
invoiceIterator.next (prices[5]); // { value: 5, done: false }
invoiceIterator.next (); // { value: 259.2, done: false }