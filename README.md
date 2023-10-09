# Function javascript

A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.




## functionDeclaration

```javascript
  function rectArea (a, b) {
    return a / b;
  }
  
  console.log(rectArea (30, 6));
```
```javascript
  function* generator(a) {
    yield a;
    yield a + 20;
    yield a - 5;
  }
  
  const gen = generator(20);
  
  console.log(gen.next().value);
 
  console.log(gen.next().value);

  console.log(gen.next().value);
```

  
## function constructor

```javascript
  const sum = new Function('a', 'b', 'return b + a');

  console.log(sum(2, 6));

```


## function expression

```javascript
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
```

## function arrow
```javascript
  const names = ['fahim', 'roni', 'tanjil', 'rakin'];

  console.log(names.map((name) => name.length));
```
```javascript
  let square = num => num * num;

 let squareResult = square(9);
 console.log(squareResult);

```

## function parametter

```javascript
  function multiplay(a, b=1 ){
  return a * b
}
console.log(multiplay(5,4));

```
```javascript
  let numbers = [2,5,];

let squareNumbers = numbers.map(function(number){
    return number * number;
});

console.log(squareNumbers);
```
