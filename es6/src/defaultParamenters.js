
function log (msg, prefix = 'JsLogger') {
    console.log(`${prefix}> ${msg}`)
}

log('Hello');                       //JsLogger> Hello
log('Hello to you', 'MyPrefix');    // MyPrefix> Hello to you


function sample (name='Candyman', repeat = 3) {
    let result = '';

    for (let i = 0;i < repeat; i++) {
        result += name;
    }

    return result;
}

console.log(sample('John',5));    // JohnJohnJohnJohnJohn
console.log(sample(undefined, 3));


function paint ([r='ff', g='ff', b='ff']) {
    return `color: #${r}${g}${b}`;
}

console.log(paint(['03','FF','CC']));      // color: #03FFCC
console.log(paint(['CC',undefined,'CC'])); // color: #CCffCC
console.log(paint([]));                    // color: #ffffff
console.log(paint(['DE','AD']));           // color: #DEADff




