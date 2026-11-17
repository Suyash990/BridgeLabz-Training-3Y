function applyOperation(numbers, operation) {
    let result = [];

    for (let num of numbers) {
        result.push(operation(num));
    }

    return result;
}

function double(num) {
    return num * 2;
}

function square(num) {
    return num * num;
}

let numbers = [1, 2, 3, 4];

console.log("Doubled:", applyOperation(numbers, double));
console.log("Squared:", applyOperation(numbers, square));