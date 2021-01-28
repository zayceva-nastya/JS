function getMin(arr) {
    let min = arr[0];
    for (let elem of arr) {
        if (elem < arr[0]) {
            min = elem;
        }
    }
    return min;
}

function getMax(arr) {
    let max = arr[0];
    for (let elem of arr) {
        if (elem > arr[0]) {
            max = elem;
        }
    }
    return max;
}

function getSum(arr) {
    let sum = 0;
    for (let elem of arr) {
        sum += elem;
    }
    return sum;
}
function summa(a, b) {
    return a + b;
}
function mult(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
function def(a, b) {
    return a - b;
}