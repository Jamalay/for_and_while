let arr = []
for (let i = 0; i < 10; i++){
    arr.push(i);
}

let accumulatorOdd = '';
for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 1){
        accumulatorOdd += arr[i];
    }
}
console.log(accumulatorOdd);