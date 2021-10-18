// Create input variable
const input = 'a whale of a deal!';
// Create vowels variable
const vowels = ['a', 'e', 'i', 'o', 'u'];
// Create result array
let resultArray = [];
// Loop to convert input to whale talk
for (let i = 0;  i < input.length; i++) {
  //console.log(i);
  for (let j = 0; j < vowels.length; j++){
    //console.log(j);
    if (input[i] === vowels[j]){
      resultArray.push(input[i]);
    }
    }
  if (input[i] === 'e'){
    resultArray.push(input[i]); 
  }
  if (input[i] === 'u'){
    resultArray.push(input[i]); 
  }
}

console.log(resultArray.join('').toUpperCase());
