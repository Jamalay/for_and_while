let arr = [];
for (let i = 1; i < 11; i++){
    arr.push(i)
}

for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
        console.log(arr[i]);
    }
}

let i = 0;

while (i < arr.length){
    if (arr[i] % 2 === 1){
        console.log(arr[i]);
    }
    i++;
}