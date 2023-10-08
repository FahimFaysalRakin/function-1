//declaration
function rectArea (a, b) {
    return a / b;
  }
  
  console.log(rectArea (30, 6));
  //
  function* generator(a) {
    yield a;
    yield a + 20;
    yield a - 5;
  }
  
  const gen = generator(20);
  
  console.log(gen.next().value);
 
  console.log(gen.next().value);

  console.log(gen.next().value);

  //constructor
  const sum = new Function('a', 'b', 'return b + a');

  console.log(sum(2, 6));

  // expression
  let count = function(num1, num2){
    return num1 * num2

  };
  let add = function(num1, num2){
    return num1 + num2
  }

  let result1 =  add(5, 4);
  console.log(result1); 
  let result =  count(5, 4);
  console.log(result);
  
//arrow
const names = ['fahim', 'roni', 'tanjil', 'rakin'];

  console.log(names.map((name) => name.length));
  


  let square = num => num * num;

 let squareResult = square(9);
 console.log(squareResult);

//parametars
function multiplay(a, b=1 ){
  return a * b
}
console.log(multiplay(5,4));

 
  
let numbers = [2,5,];

let squareNumbers = numbers.map(function(number){
    return number * number;
});

console.log(squareNumbers);





