let arr = [];
for (let i = -3; i < 6; i++){
    arr.push(i);
}

let accumulator = 0

let i = 0;

while (i < arr.length){
    if (arr[i] > 0){
        accumulator += arr[i]
    }
    i++;
}
console.log(accumulator)