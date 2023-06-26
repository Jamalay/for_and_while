let arr = [];
for (let i = 1; i < 11; i++){
    arr.push(i);
}

let accumulator = 0;

for (let i = 0; i < arr.length; i++){
    accumulator += arr[i];
    console.log(accumulator)
}

console.log(accumulator);