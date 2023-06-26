let arr = []
for (let i = 0; i < 10; i++){
    arr.push(i);
}

let accumulatorEven = '';

for (let i = 0; i < 4; i++){
    accumulatorEven += arr[i];
}

console.log(accumulatorEven);