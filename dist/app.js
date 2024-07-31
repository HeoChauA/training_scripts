"use strict";
//Bai 6.1
const obj1 = {};
Object.defineProperty(obj1, `fixedValue`, {
    value: `Thien`,
    enumerable: true,
    configurable: true,
});
console.log(obj1.fixedValue);
//Bai 6.2
const obj2 = {};
Object.defineProperty(obj2, `hiddenValue`, {
    value: `news`,
    writable: true,
    configurable: true,
});
console.log(obj2.hiddenValue);
//Bai 6.3
const obj3 = {};
Object.defineProperty(obj3, `permanentValue`, {
    value: `3.14`,
    writable: true,
    enumerable: true,
});
console.log(obj3.permanentValue);
//Bai 6.4
const temperature = {
    _celsius: 0,
    get celsius() {
        return this._celsius;
    },
    set celsius(value) {
        this._celsius = value;
    },
    get fahrenheit() {
        return (this.celsius * 9 / 5) + 32;
    },
    set fahrenheit(value) {
        this._celsius = (value - 32) * 5 / 9;
    },
};
temperature.celsius = 32;
console.log(temperature.fahrenheit);
temperature.fahrenheit = 42;
console.log(temperature.celsius);
//Bai 6.5
const item = {
    _price: 0,
    get price() {
        return this._price;
    },
    set price(value) {
        console.log(`_price duoc thay doi gia tri tu ${this._price} toi ${value}`);
        this._price = value;
    }
};
item.price = 1000;
