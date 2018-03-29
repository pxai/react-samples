class Device {
    constructor () {
        console.log('Device was created')
    }

    doStuff () {
        console.log('Doing some stuff')
    }


}


class Car {
    constructor (model, plate) {
        this.model = model;
        this.plate = plate;
    }

    run () {
        console.log("BRRRROMMM")
    }

    identify () {
        return `${this.model} plate: ${this.plate}`;
    }
}


//doThis = () => (console.log('I do some'))
//doOtherStuff = (a) => console.log('Just showin it: ', a);

//doMoreStuff = (a,b) => a+b

/*doMultipleStuff = (a, b = 0) => {
    console.log('Passed values: ', a, b)
    a + b
}*/