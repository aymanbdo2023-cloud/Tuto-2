function createMultiplier(mul) {
    return function(num) {
        return num * mul;
    };
}

// usage example 
const double = createMultiplier(2);
console.log(double(5));