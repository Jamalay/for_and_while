const arr = ['aqwee',  'qwearr', 'qwdffff', 'asadsd', 'mmgin', 'asdd', 'aaadfghhjjkkjhv'];

let accumulator = []

for (let i = 0; i < arr.length; i++){
    if (arr[i][0] === 'a'){
        accumulator.push(arr[i]);
    }
}

console.log(accumulator)