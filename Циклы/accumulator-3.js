const names_of_programming_languages = ['C++', 'C#', 'C', 'Python', 'Java', 'JavaScript', 'php', 'Shell', 'TypeScript', 'R'];

let accumulator = []

for (let i = 0; i < names_of_programming_languages.length; i++){
    if(names_of_programming_languages[i].length > 3){
        accumulator.push(names_of_programming_languages[i]);
    }
}

console.log(accumulator)