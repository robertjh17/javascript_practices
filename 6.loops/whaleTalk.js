let input = 'a whale of a deal!';
let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for(let o = 0; o < input.length; o++){
    for(let i = 0; i < vowels.length; i++){
        if(vowels[i] === input[o]){
            if(input[o] === 'e'){
                resultArray.push(input[o]);
            } if(input[o] === 'u'){
                resultArray.push(input[o]);
            }
            resultArray.push(input[o]);
        }
    }
}
console.log(resultArray.join('').toUpperCase());