function product(a, b) {
    return function (c, d) {
        return function (e, f) {
            return a * c * e + b * d * f;
        };
    };
}

console.log(product(1, 2)(1, 1)(2, 3));
console.log(product(1, 2)(1, 1)(2, 3), 8);
console.log(product(10, 2)(5, 0)(2, 3), 100);
console.log(product(1, 2)(2, 3)(3, 4), 30);
console.log(product(1, 2)(0, 3)(3, 0), 0);
